<?php
/**
 * Email Utility using PHPMailer with SMTP
 * Works with Hostinger SMTP settings
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once __DIR__ . '/../vendor/phpmailer/phpmailer/src/Exception.php';
require_once __DIR__ . '/../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/../vendor/phpmailer/phpmailer/src/SMTP.php';

class Mailer {
    private $mail;
    
    public function __construct() {
        $this->mail = new PHPMailer(true);
        $this->configure();
    }
    
    /**
     * Configure SMTP settings
     */
    private function configure() {
        try {
            // Server settings
            $this->mail->isSMTP();
            $this->mail->Host = getenv('SMTP_HOST') ?: 'smtp.hostinger.com';
            $this->mail->SMTPAuth = true;
            $this->mail->Username = getenv('SMTP_USERNAME');
            $this->mail->Password = getenv('SMTP_PASSWORD');
            $this->mail->SMTPSecure = getenv('SMTP_SECURE') ?: PHPMailer::ENCRYPTION_STARTTLS;
            $this->mail->Port = (int)(getenv('SMTP_PORT') ?: 587);
            
            // Encoding and charset
            $this->mail->CharSet = 'UTF-8';
            $this->mail->Encoding = 'base64';
            
            // Sender info
            $fromEmail = getenv('SMTP_FROM_EMAIL');
            $fromName = getenv('SMTP_FROM_NAME') ?: 'CodeHunts';
            $this->mail->setFrom($fromEmail, $fromName);
            
            // Debug mode (only in development)
            if (getenv('APP_ENV') === 'development') {
                $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;
            } else {
                $this->mail->SMTPDebug = SMTP::DEBUG_OFF;
            }
            
        } catch (Exception $e) {
            error_log("Mailer configuration error: " . $e->getMessage());
            throw new Exception("Email configuration failed");
        }
    }
    
    /**
     * Send contact form email
     */
    public function sendContactEmail($data) {
        try {
            // Clear previous addresses
            $this->mail->clearAddresses();
            $this->mail->clearReplyTos();
            
            // Recipient
            $this->mail->addAddress(ADMIN_EMAIL);
            
            // Reply to the person who submitted the form
            $this->mail->addReplyTo($data['email'], $data['firstName'] . ' ' . $data['lastName']);
            
            // Content
            $this->mail->isHTML(true);
            $this->mail->Subject = 'New Demo Request from ' . $data['firstName'] . ' ' . $data['lastName'];
            
            // HTML body
            $this->mail->Body = $this->getContactEmailTemplate($data);
            
            // Plain text alternative
            $this->mail->AltBody = $this->getContactEmailPlainText($data);
            
            // Send email
            $result = $this->mail->send();
            
            // Send confirmation email to customer
            $this->sendConfirmationEmail($data);
            
            return $result;
            
        } catch (Exception $e) {
            error_log("Email sending error: " . $this->mail->ErrorInfo);
            throw new Exception("Failed to send email: " . $this->mail->ErrorInfo);
        }
    }
    
    /**
     * Send confirmation email to customer
     */
    private function sendConfirmationEmail($data) {
        try {
            $this->mail->clearAddresses();
            $this->mail->addAddress($data['email'], $data['firstName'] . ' ' . $data['lastName']);
            
            $this->mail->Subject = 'Thank You for Contacting ' . APP_NAME;
            $this->mail->Body = $this->getConfirmationEmailTemplate($data);
            $this->mail->AltBody = $this->getConfirmationEmailPlainText($data);
            
            $this->mail->send();
            
        } catch (Exception $e) {
            // Log but don't throw - confirmation email failure shouldn't block main email
            error_log("Confirmation email error: " . $this->mail->ErrorInfo);
        }
    }
    
    /**
     * Get HTML template for contact email
     */
    private function getContactEmailTemplate($data) {
        return "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
                .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>New Demo Request</h1>
                    <p>You have received a new demo request from your website</p>
                </div>
                <div class='content'>
                    <div class='field'>
                        <div class='label'>Name:</div>
                        <div class='value'>{$data['firstName']} {$data['lastName']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Email:</div>
                        <div class='value'>{$data['email']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Phone:</div>
                        <div class='value'>{$data['phone']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Company:</div>
                        <div class='value'>{$data['company']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Service Interested In:</div>
                        <div class='value'>{$data['service']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Budget:</div>
                        <div class='value'>{$data['budget']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Timeline:</div>
                        <div class='value'>{$data['timeline']}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Project Details:</div>
                        <div class='value'>" . nl2br(htmlspecialchars($data['message'])) . "</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Submitted At:</div>
                        <div class='value'>" . date('F j, Y, g:i a') . "</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        ";
    }
    
    /**
     * Get plain text for contact email
     */
    private function getContactEmailPlainText($data) {
        return "
New Demo Request

Name: {$data['firstName']} {$data['lastName']}
Email: {$data['email']}
Phone: {$data['phone']}
Company: {$data['company']}
Service: {$data['service']}
Budget: {$data['budget']}
Timeline: {$data['timeline']}

Project Details:
{$data['message']}

Submitted At: " . date('F j, Y, g:i a') . "
        ";
    }
    
    /**
     * Get HTML template for confirmation email
     */
    private function getConfirmationEmailTemplate($data) {
        return "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Thank You for Your Interest!</h1>
                </div>
                <div class='content'>
                    <p>Dear {$data['firstName']},</p>
                    <p>Thank you for requesting a demo with " . APP_NAME . ". We have received your request and our team will review it shortly.</p>
                    <p>We'll get back to you within 24 hours to schedule your personalized demo.</p>
                    <p><strong>What's Next?</strong></p>
                    <ul>
                        <li>Our team will review your requirements</li>
                        <li>We'll prepare a customized demo based on your needs</li>
                        <li>You'll receive a call or email to schedule the demo</li>
                    </ul>
                    <p>If you have any immediate questions, feel free to reply to this email.</p>
                    <a href='" . APP_URL . "' class='button'>Visit Our Website</a>
                    <p>Best regards,<br>The " . APP_NAME . " Team</p>
                </div>
            </div>
        </body>
        </html>
        ";
    }
    
    /**
     * Get plain text for confirmation email
     */
    private function getConfirmationEmailPlainText($data) {
        return "
Dear {$data['firstName']},

Thank you for requesting a demo with " . APP_NAME . ". We have received your request and our team will review it shortly.

We'll get back to you within 24 hours to schedule your personalized demo.

What's Next?
- Our team will review your requirements
- We'll prepare a customized demo based on your needs
- You'll receive a call or email to schedule the demo

If you have any immediate questions, feel free to reply to this email.

Visit our website: " . APP_URL . "

Best regards,
The " . APP_NAME . " Team
        ";
    }
}
