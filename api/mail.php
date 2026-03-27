<?php
/**
 * Simple Email Handler
 * Uses PHP's native mail() function - no external dependencies
 */

// Set response headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load environment variables
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $envLines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($envLines as $line) {
        if (strpos(trim($line), '#') === 0) continue; // Skip comments
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Detect form type based on fields
$isDemoForm = isset($input['firstName']) || isset($input['service']);

// Extract and validate common fields
$email = isset($input['email']) ? trim($input['email']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

// Handle name field (could be 'name' or 'firstName' + 'lastName')
$name = '';
if (isset($input['name'])) {
    $name = trim($input['name']);
} elseif (isset($input['firstName']) || isset($input['lastName'])) {
    $firstName = isset($input['firstName']) ? trim($input['firstName']) : '';
    $lastName = isset($input['lastName']) ? trim($input['lastName']) : '';
    $name = trim($firstName . ' ' . $lastName);
}

// For demo form, subject is auto-generated
$subject = '';
if ($isDemoForm) {
    $service = isset($input['service']) ? trim($input['service']) : 'General';
    $subject = 'Demo Request: ' . ucfirst($service);
} else {
    $subject = isset($input['subject']) ? trim($input['subject']) : '';
}

$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
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
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Build detailed email body based on form type
$emailBody = "";
if ($isDemoForm) {
    // Demo Request Form
    $phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone']), ENT_QUOTES, 'UTF-8') : 'Not provided';
    $company = isset($input['company']) ? htmlspecialchars(trim($input['company']), ENT_QUOTES, 'UTF-8') : 'Not provided';
    $service = isset($input['service']) ? htmlspecialchars(trim($input['service']), ENT_QUOTES, 'UTF-8') : 'Not specified';
    $budget = isset($input['budget']) ? htmlspecialchars(trim($input['budget']), ENT_QUOTES, 'UTF-8') : 'Not specified';
    $timeline = isset($input['timeline']) ? htmlspecialchars(trim($input['timeline']), ENT_QUOTES, 'UTF-8') : 'Not specified';
    
    $emailBody = "New Demo Request Submission\r\n\r\n";
    $emailBody .= "Name: {$name}\r\n";
    $emailBody .= "Email: {$email}\r\n";
    $emailBody .= "Phone: {$phone}\r\n";
    $emailBody .= "Company: {$company}\r\n";
    $emailBody .= "Service Interested In: {$service}\r\n";
    $emailBody .= "Budget: {$budget}\r\n";
    $emailBody .= "Timeline: {$timeline}\r\n\r\n";
    $emailBody .= "Project Details:\r\n{$message}";
} else {
    // Standard Contact Form
    $emailBody = "New Contact Form Submission\r\n\r\n";
    $emailBody .= "Name: {$name}\r\n";
    $emailBody .= "Email: {$email}\r\n";
    $emailBody .= "Subject: {$subject}\r\n\r\n";
    $emailBody .= "Message:\r\n{$message}";
}

// Email configuration
$to = isset($_ENV['ADMIN_EMAIL']) ? $_ENV['ADMIN_EMAIL'] : 'your-email@example.com';
$from = $email;
$replyTo = $email;

// Build email headers
$headers = "From: {$name} <{$from}>\r\n";
$headers .= "Reply-To: {$replyTo}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $emailBody, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email. Please try again later.'
    ]);
}
