<?php
/**
 * Contact Form API
 * Handles contact form submissions and sends emails
 */

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/services/EmailService.php';

class ContactAPI {
    private $db;
    private $emailService;

    public function __construct() {
        $this->db = getDB();
        $this->emailService = new EmailService();
    }

    public function handleRequest() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            return ['success' => false, 'error' => 'Method not allowed'];
        }

        return $this->submitContactForm();
    }

    private function submitContactForm() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        // Validate required fields
        $requiredFields = ['email', 'message'];
        foreach ($requiredFields as $field) {
            if (!isset($data[$field]) || empty(trim($data[$field]))) {
                http_response_code(400);
                return ['success' => false, 'error' => ucfirst($field) . ' is required'];
            }
        }

        // Validate email format
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            return ['success' => false, 'error' => 'Invalid email address'];
        }

        try {
            // Save to database (optional - for record keeping)
            $this->saveContactSubmission($data);
            
            // Send email to admin
            $emailSent = $this->emailService->sendContactFormEmail($data);
            
            if (!$emailSent) {
                // Email failed but we saved the data
                return [
                    'success' => true,
                    'message' => 'Your message has been received. We will get back to you soon.',
                    'warning' => 'Email notification failed, but your message was saved.'
                ];
            }
            
            return [
                'success' => true,
                'message' => 'Thank you for contacting us! We will get back to you soon.'
            ];
        } catch (Exception $e) {
            error_log("Contact form error: " . $e->getMessage());
            http_response_code(500);
            return ['success' => false, 'error' => 'Failed to submit contact form'];
        }
    }

    private function saveContactSubmission($data) {
        $sql = "INSERT INTO contact_submissions (
            first_name, last_name, email, phone, company, service,
            message, budget, timeline, ip_address, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        $params = [
            $data['firstName'] ?? $data['name'] ?? null,
            $data['lastName'] ?? null,
            $data['email'],
            $data['phone'] ?? null,
            $data['company'] ?? null,
            $data['service'] ?? $data['subject'] ?? null,
            $data['message'],
            $data['budget'] ?? null,
            $data['timeline'] ?? null,
            $_SERVER['REMOTE_ADDR'] ?? null,
            $_SERVER['HTTP_USER_AGENT'] ?? null
        ];
        
        $this->db->query($sql, $params);
    }
}

// Handle request
$api = new ContactAPI();
echo json_encode($api->handleRequest());
