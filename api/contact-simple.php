<?php
/**
 * Contact Form API Endpoint - Alternative Version
 * Uses PHP's native mail() function instead of PHPMailer
 * Use this if PHPMailer is not available on your hosting
 */

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../utils/simple-mailer.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

try {
    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (!$data) {
        throw new Exception('Invalid JSON data');
    }
    
    // Validate required fields
    $required = ['firstName', 'lastName', 'email', 'service', 'message'];
    $errors = [];
    
    foreach ($required as $field) {
        if (empty($data[$field])) {
            $errors[$field] = ucfirst($field) . ' is required';
        }
    }
    
    // Validate email format
    if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $errors
        ]);
        exit();
    }
    
    // Sanitize inputs
    $sanitizedData = [
        'firstName' => htmlspecialchars(trim($data['firstName']), ENT_QUOTES, 'UTF-8'),
        'lastName' => htmlspecialchars(trim($data['lastName']), ENT_QUOTES, 'UTF-8'),
        'email' => filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL),
        'phone' => htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8'),
        'company' => htmlspecialchars(trim($data['company'] ?? ''), ENT_QUOTES, 'UTF-8'),
        'service' => htmlspecialchars(trim($data['service']), ENT_QUOTES, 'UTF-8'),
        'message' => htmlspecialchars(trim($data['message']), ENT_QUOTES, 'UTF-8'),
        'budget' => htmlspecialchars(trim($data['budget'] ?? ''), ENT_QUOTES, 'UTF-8'),
        'timeline' => htmlspecialchars(trim($data['timeline'] ?? ''), ENT_QUOTES, 'UTF-8'),
    ];
    
    // Save to database
    $db = Database::getInstance();
    $conn = $db->getConnection();
    
    $stmt = $conn->prepare("
        INSERT INTO contacts 
        (first_name, last_name, email, phone, company, service, message, budget, timeline, created_at) 
        VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    ");
    
    $stmt->execute([
        $sanitizedData['firstName'],
        $sanitizedData['lastName'],
        $sanitizedData['email'],
        $sanitizedData['phone'],
        $sanitizedData['company'],
        $sanitizedData['service'],
        $sanitizedData['message'],
        $sanitizedData['budget'],
        $sanitizedData['timeline']
    ]);
    
    $contactId = $conn->lastInsertId();
    
    // Send email using simple mailer
    try {
        $mailer = new SimpleMailer();
        $mailer->sendContactEmail($sanitizedData);
    } catch (Exception $e) {
        // Log email error but don't fail the request
        error_log("Email sending failed: " . $e->getMessage());
        
        // Still return success since data was saved
        echo json_encode([
            'success' => true,
            'message' => 'Your request has been received. We will contact you soon.',
            'id' => $contactId,
            'emailSent' => false
        ]);
        exit();
    }
    
    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your request! We will contact you within 24 hours.',
        'id' => $contactId,
        'emailSent' => true
    ]);
    
} catch (PDOException $e) {
    error_log("Database error in contact-simple.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to save your request. Please try again.'
    ]);
    
} catch (Exception $e) {
    error_log("Error in contact-simple.php: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
