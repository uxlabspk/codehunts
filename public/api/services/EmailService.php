<?php
/**
 * Email Service
 * Handles email sending using PHPMailer
 * 
 * Note: You need to install PHPMailer
 * Download from: https://github.com/PHPMailer/PHPMailer
 * Or use Composer: composer require phpmailer/phpmailer
 */

// For now, using PHP mail() function
// Replace with PHPMailer for production use

class EmailService {
    private $fromEmail;
    private $fromName;
    private $adminEmail;

    public function __construct() {
        $this->fromEmail = SMTP_FROM_EMAIL;
        $this->fromName = SMTP_FROM_NAME;
        $this->adminEmail = ADMIN_EMAIL;
    }

    /**
     * Send contact form email to admin
     */
    public function sendContactFormEmail($data) {
        $to = $this->adminEmail;
        $subject = 'New Contact Form Submission - CodeHunts';
        
        // Build email body
        $body = $this->buildContactEmailBody($data);
        
        // Headers
        $headers = [
            'From: ' . $this->fromName . ' <' . $this->fromEmail . '>',
            'Reply-To: ' . $data['email'],
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8'
        ];

        try {
            // Using PHP mail() function
            // For production, replace with PHPMailer SMTP
            $sent = mail($to, $subject, $body, implode("\r\n", $headers));
            
            if ($sent) {
                error_log("Contact email sent successfully to " . $to);
            } else {
                error_log("Failed to send contact email to " . $to);
            }
            
            return $sent;
        } catch (Exception $e) {
            error_log("Email sending error: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Build HTML email body for contact form
     */
    private function buildContactEmailBody($data) {
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
                .content { background: #f9f9f9; padding: 20px; }
                .field { margin-bottom: 15px; }
                .field-label { font-weight: bold; color: #666; }
                .field-value { margin-top: 5px; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Contact Form Submission</h2>
                </div>
                <div class="content">';

        // Add fields dynamically
        $fields = [
            'firstName' => 'First Name',
            'lastName' => 'Last Name',
            'name' => 'Name',
            'email' => 'Email',
            'phone' => 'Phone',
            'company' => 'Company',
            'service' => 'Service',
            'subject' => 'Subject',
            'budget' => 'Budget',
            'timeline' => 'Timeline',
            'message' => 'Message'
        ];

        foreach ($fields as $key => $label) {
            if (isset($data[$key]) && !empty($data[$key])) {
                $value = htmlspecialchars($data[$key]);
                $html .= '
                    <div class="field">
                        <div class="field-label">' . $label . ':</div>
                        <div class="field-value">' . nl2br($value) . '</div>
                    </div>';
            }
        }

        $html .= '
                </div>
                <div class="footer">
                    <p>This email was sent from the CodeHunts contact form</p>
                    <p>Received at: ' . date('Y-m-d H:i:s') . '</p>
                </div>
            </div>
        </body>
        </html>';

        return $html;
    }

    /**
     * For production use with PHPMailer
     * Uncomment and configure when PHPMailer is installed
     */
    /*
    private function sendWithPHPMailer($to, $subject, $body, $replyTo = null) {
        require_once __DIR__ . '/../../vendor/autoload.php';
        
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = SMTP_HOST;
            $mail->SMTPAuth = true;
            $mail->Username = SMTP_USERNAME;
            $mail->Password = SMTP_PASSWORD;
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = SMTP_PORT;

            // Recipients
            $mail->setFrom($this->fromEmail, $this->fromName);
            $mail->addAddress($to);
            if ($replyTo) {
                $mail->addReplyTo($replyTo);
            }

            // Content
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;

            $mail->send();
            return true;
        } catch (Exception $e) {
            error_log("PHPMailer Error: {$mail->ErrorInfo}");
            return false;
        }
    }
    */
}
