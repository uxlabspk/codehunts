<?php
/**
 * Simple Email Utility without PHPMailer
 * Use this as a fallback if PHPMailer is not available
 * Works with Hostinger's native mail() function
 */

class SimpleMailer {
    private $fromEmail;
    private $fromName;
    
    public function __construct() {
        $this->fromEmail = getenv('SMTP_FROM_EMAIL') ?: 'noreply@example.com';
        $this->fromName = getenv('SMTP_FROM_NAME') ?: 'CodeHunts';
    }
    
    /**
     * Send contact form email using mail() function
     */
    public function sendContactEmail($data) {
        try {
            $adminEmail = ADMIN_EMAIL;
            
            // Prepare headers
            $headers = $this->getHeaders($data['email'], $data['firstName'] . ' ' . $data['lastName']);
            
            // Subject
            $subject = 'New Demo Request from ' . $data['firstName'] . ' ' . $data['lastName'];
            
            // Message
            $message = $this->getContactEmailHTML($data);
            
            // Send to admin
            $adminResult = mail($adminEmail, $subject, $message, $headers);
            
            if (!$adminResult) {
                throw new Exception("Failed to send email to admin");
            }
            
            // Send confirmation to customer
            $this->sendConfirmationEmail($data);
            
            return true;
            
        } catch (Exception $e) {
            error_log("Simple mailer error: " . $e->getMessage());
            throw $e;
        }
    }
    
    /**
     * Send confirmation email to customer
     */
    private function sendConfirmationEmail($data) {
        try {
            $headers = $this->getHeaders($this->fromEmail, $this->fromName);
            $subject = 'Thank You for Contacting ' . APP_NAME;
            $message = $this->getConfirmationEmailHTML($data);
            
            mail($data['email'], $subject, $message, $headers);
            
        } catch (Exception $e) {
            error_log("Confirmation email error: " . $e->getMessage());
        }
    }
    
    /**
     * Get email headers
     */
    private function getHeaders($replyToEmail, $replyToName) {
        $headers = [];
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/html; charset=utf-8";
        $headers[] = "From: {$this->fromName} <{$this->fromEmail}>";
        $headers[] = "Reply-To: {$replyToName} <{$replyToEmail}>";
        $headers[] = "X-Mailer: PHP/" . phpversion();
        
        return implode("\r\n", $headers);
    }
    
    /**
     * Get HTML template for contact email
     */
    private function getContactEmailHTML($data) {
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
     * Get HTML template for confirmation email
     */
    private function getConfirmationEmailHTML($data) {
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
                    <a href='" . APP_URL . "' class='button' style='color: white;'>Visit Our Website</a>
                    <p>Best regards,<br>The " . APP_NAME . " Team</p>
                </div>
            </div>
        </body>
        </html>
        ";
    }
}
