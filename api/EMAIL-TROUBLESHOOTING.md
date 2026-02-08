# Email Troubleshooting Guide for Hostinger

This guide helps you fix email sending issues on Hostinger hosting.

## Common Email Problems on Hostinger

### Problem 1: Emails Not Sending

#### Solution A: Use Hostinger's SMTP (Recommended)

1. **Create Email Account in hPanel:**
   - Log in to Hostinger hPanel
   - Go to "Emails" section
   - Click "Create Email Account"
   - Create: `contact@yourdomain.com` (or noreply@yourdomain.com)
   - Set a strong password

2. **Configure .env with Hostinger SMTP:**

   ```env
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   SMTP_SECURE=tls
   SMTP_USERNAME=contact@yourdomain.com
   SMTP_PASSWORD=your_email_password
   SMTP_FROM_EMAIL=contact@yourdomain.com
   SMTP_FROM_NAME=CodeHunts
   ```

3. **Alternative Port (if 587 doesn't work):**
   ```env
   SMTP_PORT=465
   SMTP_SECURE=ssl
   ```

#### Solution B: Use Native PHP mail() Function

If PHPMailer/SMTP doesn't work:

1. **Rename contact endpoint:**

   ```bash
   mv api/contact.php api/contact-phpmailer.php
   mv api/contact-simple.php api/contact.php
   ```

2. **Configure .env for native mail:**

   ```env
   SMTP_FROM_EMAIL=noreply@yourdomain.com
   SMTP_FROM_NAME=CodeHunts
   ```

3. **Important:** The "from" email MUST be from your domain (e.g., noreply@yourdomain.com)

#### Solution C: Use External SMTP Service

**Gmail:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password  # NOT your regular password!
```

To get Gmail App Password:

1. Go to Google Account settings
2. Enable 2-factor authentication
3. Go to Security > App passwords
4. Generate app password for "Mail"
5. Use this password in .env

**SendGrid (Free tier: 100 emails/day):**

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

**Mailgun:**

```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=postmaster@yourdomain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
```

### Problem 2: "Could not authenticate" Error

**Causes & Solutions:**

1. **Wrong credentials:**
   - Double-check email and password in .env
   - No spaces before/after values
   - Remove quotes if you added them

2. **Email account doesn't exist:**
   - Create email account in hPanel first
   - Wait 5-10 minutes for propagation

3. **Using domain email on shared hosting:**
   - Use full email address as username: `contact@yourdomain.com`
   - NOT just `contact`

### Problem 3: Emails Going to Spam

**Solutions:**

1. **Add SPF Record:**
   - Go to hPanel > DNS Zone Editor
   - Add TXT record:
     ```
     Name: @ (or your domain)
     Value: v=spf1 a mx include:titan.email ~all
     ```

2. **Add DKIM:**
   - Hostinger usually auto-configures this
   - Check in hPanel > Emails > DKIM

3. **Use proper "From" address:**
   - Must match your domain (contact@yourdomain.com)
   - Never use gmail.com or other external domains as "From"

4. **Avoid spam trigger words:**
   - Don't use: FREE, URGENT, ACT NOW, etc.
   - Use professional language

### Problem 4: Connection Timeout

**Solutions:**

1. **Check firewall isn't blocking SMTP:**
   - Hostinger: Contact support to verify
   - Usually ports 587 and 465 are open

2. **Try alternative port:**

   ```env
   # If 587 times out, try 465
   SMTP_PORT=465
   SMTP_SECURE=ssl
   ```

3. **Increase timeout in mailer.php:**
   ```php
   $this->mail->Timeout = 60; // Add after line 25
   ```

### Problem 5: "Mail() function disabled"

Some shared hosting disables mail() function.

**Solution:**

- Must use SMTP (PHPMailer)
- Follow Solution A above
- Contact Hostinger support if SMTP also blocked

## Testing Email Configuration

### Test 1: Simple PHP Mail Test

Create `test-email.php` in api folder:

```php
<?php
$to = 'your-email@example.com';
$subject = 'Test Email from Hostinger';
$message = 'This is a test email to verify PHP mail works.';
$headers = 'From: noreply@yourdomain.com' . "\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Failed to send email.";
}
?>
```

Visit: `https://yourdomain.com/api/test-email.php`

### Test 2: SMTP Connection Test

Create `test-smtp.php`:

```php
<?php
require_once __DIR__ . '/config/config.php';

echo "Testing SMTP connection...\n";
echo "Host: " . getenv('SMTP_HOST') . "\n";
echo "Port: " . getenv('SMTP_PORT') . "\n";
echo "Username: " . getenv('SMTP_USERNAME') . "\n";

$connection = @fsockopen(
    getenv('SMTP_HOST'),
    (int)getenv('SMTP_PORT'),
    $errno,
    $errstr,
    30
);

if ($connection) {
    echo "✓ SMTP connection successful!\n";
    fclose($connection);
} else {
    echo "✗ SMTP connection failed: $errstr ($errno)\n";
}
?>
```

Run: `php api/test-smtp.php`

### Test 3: Full PHPMailer Test

Create `test-phpmailer.php`:

```php
<?php
require_once __DIR__ . '/config/config.php';
require_once __DIR__ . '/utils/mailer.php';

try {
    $mailer = new Mailer();

    $testData = [
        'firstName' => 'Test',
        'lastName' => 'User',
        'email' => 'your-email@example.com', // Change this!
        'phone' => '+1234567890',
        'company' => 'Test Company',
        'service' => 'Web Development',
        'message' => 'This is a test message',
        'budget' => '$10k-$25k',
        'timeline' => '2-3 months'
    ];

    $mailer->sendContactEmail($testData);
    echo "Email sent successfully!";

} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

Visit: `https://yourdomain.com/api/test-phpmailer.php`

## Checking Error Logs

### Enable Error Logging

Add to api/config/config.php:

```php
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/../logs/error.log');
```

### View Logs

```bash
# Via SSH
tail -f api/logs/error.log

# Via File Manager
# Download and open api/logs/error.log
```

### Common Error Messages

1. **"SMTP connect() failed"**
   - Wrong SMTP host/port
   - Firewall blocking connection
   - Solution: Try alternative port (465 or 587)

2. **"SMTP Error: Could not authenticate"**
   - Wrong username/password
   - Email account doesn't exist
   - Solution: Recreate email account, verify credentials

3. **"SMTP Error: Data not accepted"**
   - Content triggered spam filter
   - Missing required headers
   - Solution: Check SPF/DKIM records

## Hostinger-Specific Settings

### Recommended Configuration for Hostinger

```env
# Works on most Hostinger plans
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=contact@yourdomain.com
SMTP_PASSWORD=your_email_password
```

### Hostinger Email Limits

- Free plans: Limited emails per hour
- Shared hosting: ~100-300 emails per hour
- Business plans: ~500+ emails per hour

If you exceed limits:

- Emails will be queued or rejected
- Consider using SendGrid/Mailgun for high volume

### Hostinger Support Contact

If nothing works:

1. Open ticket in hPanel
2. Ask: "Why can't I send emails via SMTP?"
3. Request they check:
   - SMTP ports 587/465 are open
   - mail() function is enabled
   - No restrictions on email account

## Quick Fix Checklist

✅ Email account created in hPanel  
✅ Correct SMTP host: smtp.hostinger.com  
✅ Tried both ports: 587 (tls) and 465 (ssl)  
✅ Username is FULL email: contact@yourdomain.com  
✅ Password is correct (no spaces)  
✅ .env file exists and is readable  
✅ PHPMailer is installed (check vendor/ folder)  
✅ From email matches your domain  
✅ Checked error logs  
✅ Tested with test-phpmailer.php  
✅ SPF record configured

## Still Not Working?

### Last Resort Options

1. **Use contact form services:**
   - Formspree.io
   - EmailJS
   - SendGrid Web API

2. **Use webhook services:**
   - Zapier
   - Make.com (Integromat)
   - IFTTT

3. **Client-side solutions:**
   - EmailJS (sends from browser)
   - Formspree (handles form backend)

### Example: EmailJS Integration

In your React form (src/components/form/DemoRequestForm.tsx):

```typescript
import emailjs from "@emailjs/browser";

// Instead of fetch to PHP
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", sanitizedData, "YOUR_PUBLIC_KEY").then(
  (result) => {
    setIsSuccess(true);
  },
  (error) => {
    setErrors({ submit: "Failed to send message" });
  }
);
```

This completely bypasses PHP/SMTP and uses EmailJS servers.

## Summary

**For Hostinger hosting, the most reliable solutions are:**

1. ✅ **Use Hostinger SMTP with port 587/tls** (contact.php)
2. ✅ **Use PHP mail() function** (contact-simple.php)
3. ✅ **Use external SMTP like SendGrid** (contact.php with SendGrid config)
4. ✅ **Use EmailJS or Formspree** (client-side solution)

Choose based on your hosting plan and requirements!
