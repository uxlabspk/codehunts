# CodeHunts API

Backend API for CodeHunts website built with PHP for Hostinger hosting.

## Features

- ✅ Contact form submission with email notifications
- ✅ Projects CRUD operations
- ✅ Team members CRUD operations
- ✅ PHPMailer integration for reliable email delivery
- ✅ MySQL database with prepared statements
- ✅ CORS support for frontend integration
- ✅ API key authentication for protected endpoints
- ✅ Error logging and handling

## Requirements

- PHP 7.4 or higher
- MySQL/MariaDB database
- Composer (for PHPMailer installation)
- Hostinger hosting account with SMTP access

## Installation

### 1. Upload Files to Hostinger

Upload the entire `api` folder to your Hostinger public_html directory:

```
public_html/
├── api/
│   ├── config/
│   ├── database/
│   ├── utils/
│   ├── .env.example
│   ├── .htaccess
│   ├── composer.json
│   ├── contact.php
│   ├── projects.php
│   └── team.php
├── index.html
└── (other frontend files)
```

### 2. Install PHPMailer via Composer

If your Hostinger account has SSH access:

```bash
cd public_html/api
composer install
```

If you don't have SSH access, download PHPMailer manually:

1. Download PHPMailer from https://github.com/PHPMailer/PHPMailer/releases
2. Extract and upload to `api/vendor/phpmailer/phpmailer/`

### 3. Create Database

1. Log in to Hostinger's hPanel
2. Go to MySQL Databases
3. Create a new database (e.g., `u123456789_codehunts`)
4. Create a database user and password
5. Import the schema:
   - Go to phpMyAdmin
   - Select your database
   - Go to "Import" tab
   - Upload `database/schema.sql`

### 4. Configure Environment

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your actual credentials:

```env
# Database Configuration
DB_HOST=localhost
DB_NAME=u123456789_codehunts
DB_USER=u123456789_dbuser
DB_PASS=your_database_password

# SMTP Email Configuration (Hostinger)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=contact@yourdomain.com
SMTP_PASSWORD=your_email_password
SMTP_FROM_EMAIL=contact@yourdomain.com
SMTP_FROM_NAME=CodeHunts

# Admin Email
ADMIN_EMAIL=admin@yourdomain.com

# App Configuration
APP_URL=https://yourdomain.com
APP_NAME=CodeHunts
APP_ENV=production

# CORS Settings
ALLOWED_ORIGINS=https://yourdomain.com

# Security - Generate a strong random key
API_SECRET_KEY=generate_a_strong_random_key_here
```

### 5. Configure Hostinger Email

To fix email sending issues on Hostinger:

#### Option A: Use Hostinger's SMTP (Recommended)

1. Create an email account in hPanel (e.g., contact@yourdomain.com)
2. Use these SMTP settings in `.env`:
   - Host: `smtp.hostinger.com`
   - Port: `587`
   - Security: `tls`
   - Username: Your full email address
   - Password: Email account password

#### Option B: Use External SMTP (Gmail, SendGrid, etc.)

For Gmail:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
```

**Note:** For Gmail, you need to create an App Password in your Google Account settings.

### 6. Set File Permissions

Set proper permissions via File Manager or SSH:

```bash
chmod 755 api/
chmod 644 api/*.php
chmod 600 api/.env
chmod 755 api/logs/
```

Create logs directory:

```bash
mkdir api/logs
chmod 755 api/logs
```

### 7. Test the API

Test contact form:

```bash
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "service": "Web Development",
    "message": "Test message"
  }'
```

Test projects (requires API key):

```bash
curl https://yourdomain.com/api/projects.php
```

## API Endpoints

### Contact Form

**POST** `/api/contact.php`

Submit a contact form request.

Request:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Company Inc",
  "service": "Web Development",
  "message": "Project details...",
  "budget": "$10k-$25k",
  "timeline": "2-3 months"
}
```

Response:

```json
{
  "success": true,
  "message": "Thank you for your request!",
  "id": 123,
  "emailSent": true
}
```

### Projects

**GET** `/api/projects.php` - Get all projects
**GET** `/api/projects.php?id=1` - Get single project
**GET** `/api/projects.php?category=web-development` - Filter by category
**POST** `/api/projects.php` - Create project (requires API key)
**PUT** `/api/projects.php` - Update project (requires API key)
**DELETE** `/api/projects.php?id=1` - Delete project (requires API key)

### Team Members

**GET** `/api/team.php` - Get all team members
**GET** `/api/team.php?id=1` - Get single member
**GET** `/api/team.php?role=Developer` - Filter by role
**POST** `/api/team.php` - Create member (requires API key)
**PUT** `/api/team.php` - Update member (requires API key)
**DELETE** `/api/team.php?id=1` - Delete member (requires API key)

## Authentication

Protected endpoints (POST, PUT, DELETE) require an API key:

```bash
curl -X POST https://yourdomain.com/api/projects.php \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_secret_key" \
  -d '{ ... }'
```

## Troubleshooting

### Email Not Sending

1. **Check SMTP credentials** - Verify they're correct in `.env`
2. **Check email account exists** - Create it in hPanel if needed
3. **Check error logs**:
   ```bash
   tail -f api/logs/error.log
   ```
4. **Test SMTP connection** - Use a tool like SMTP tester
5. **Check Hostinger limits** - Some plans have email sending limits
6. **Try port 465** with SSL instead of 587 with TLS:
   ```env
   SMTP_PORT=465
   SMTP_SECURE=ssl
   ```

### Database Connection Failed

1. Verify database credentials in `.env`
2. Check if database exists in phpMyAdmin
3. Ensure database user has proper permissions
4. Check MySQL service is running

### CORS Issues

1. Add your frontend URL to `ALLOWED_ORIGINS` in `.env`
2. Check `.htaccess` is being read
3. Verify mod_headers is enabled in Apache

### API Returns 500 Error

1. Check error logs: `api/logs/error.log`
2. Enable display_errors temporarily:
   ```php
   ini_set('display_errors', 1);
   ```
3. Check file permissions
4. Verify all required PHP extensions are installed

## Security Best Practices

1. ✅ Never commit `.env` file to Git
2. ✅ Use strong API keys (generate with: `openssl rand -base64 32`)
3. ✅ Keep PHPMailer updated
4. ✅ Use HTTPS only in production
5. ✅ Regularly backup database
6. ✅ Monitor error logs
7. ✅ Limit API rate if needed

## File Structure

```
api/
├── config/
│   ├── config.php       # App configuration & CORS
│   └── database.php     # Database connection
├── database/
│   └── schema.sql       # Database schema
├── utils/
│   └── mailer.php       # PHPMailer utility
├── logs/                # Error logs
├── vendor/              # Composer dependencies (PHPMailer)
├── .env                 # Environment variables (DO NOT COMMIT)
├── .env.example         # Environment template
├── .htaccess            # Apache configuration
├── composer.json        # PHP dependencies
├── contact.php          # Contact form endpoint
├── projects.php         # Projects CRUD endpoint
└── team.php             # Team members CRUD endpoint
```

## Support

For issues related to:

- **Hostinger**: Contact Hostinger support
- **API bugs**: Check error logs and verify configuration
- **Email issues**: Test SMTP settings with external tools

## License

Proprietary - CodeHunts
