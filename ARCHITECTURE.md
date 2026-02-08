# CodeHunts Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React)                         │
│                    https://yourdomain.com                        │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Contact Form │  │  Projects    │  │     Team     │          │
│  │ DemoRequest  │  │  Portfolio   │  │   Members    │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                  │                  │                   │
└─────────┼──────────────────┼──────────────────┼──────────────────┘
          │                  │                  │
          │ POST             │ GET              │ GET
          │ /api/contact.php │ /api/projects    │ /api/team.php
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API LAYER (PHP)                             │
│                   public_html/api/                               │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    contact.php                            │  │
│  │  • Validates form data                                    │  │
│  │  • Saves to database                                      │  │
│  │  • Sends emails (admin + customer)                        │  │
│  └──────────────────────┬───────────────────────────────────┘  │
│                          │                                       │
│  ┌──────────────────────┴───────────────────────────────────┐  │
│  │              projects.php & team.php                      │  │
│  │  • GET: List/view records (public)                        │  │
│  │  • POST/PUT/DELETE: Manage records (API key required)     │  │
│  └──────────────────────┬───────────────────────────────────┘  │
│                          │                                       │
│  ┌──────────────────────┴───────────────────────────────────┐  │
│  │              config/config.php                            │  │
│  │  • Loads .env variables                                   │  │
│  │  • Sets CORS headers                                      │  │
│  │  • Error handling                                         │  │
│  └──────────────────────┬───────────────────────────────────┘  │
│                          │                                       │
└──────────────────────────┼───────────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
┌─────────────────┐ ┌──────────────┐ ┌─────────────────┐
│    DATABASE     │ │   EMAIL      │ │   FILE SYSTEM   │
│   (MySQL)       │ │   SMTP       │ │   (Logs)        │
│                 │ │              │ │                 │
│ ┌─────────────┐ │ │ Hostinger    │ │ api/logs/       │
│ │  contacts   │ │ │ SMTP Server  │ │ error.log       │
│ │  projects   │ │ │ port 587/465 │ │                 │
│ │ team_members│ │ │              │ │                 │
│ │ admin_users │ │ │ OR           │ │                 │
│ └─────────────┘ │ │              │ │                 │
│                 │ │ SendGrid     │ │                 │
│ Schema:         │ │ Gmail        │ │                 │
│ schema.sql      │ │ Mailgun      │ │                 │
└─────────────────┘ └──────────────┘ └─────────────────┘
```

## Data Flow - Contact Form Submission

```
User fills form
      │
      ▼
Frontend validates
      │
      ▼
POST /api/contact.php
      │
      ├──► Validate input
      │    (required fields, email format)
      │
      ├──► Sanitize data
      │    (XSS protection)
      │
      ├──► Save to database
      │    INSERT INTO contacts
      │    ├──► Success: Get ID
      │    └──► Failure: Log error, return error
      │
      ├──► Send email (PHPMailer/SMTP)
      │    ├──► Admin notification
      │    │    (with form details)
      │    │
      │    └──► Customer confirmation
      │         (thank you message)
      │
      └──► Return response
           {
             "success": true,
             "message": "Thank you...",
             "id": 123,
             "emailSent": true
           }
```

## Email Flow Options

```
┌────────────────────────────────────────────────────────────┐
│                    EMAIL SOLUTIONS                          │
└────────────────────────────────────────────────────────────┘

Option 1: PHPMailer + Hostinger SMTP (RECOMMENDED)
┌─────────────┐    SMTP     ┌──────────────┐    Delivers   ┌──────┐
│ contact.php │─────────────▶│ smtp.        │──────────────▶│Inbox │
│ (mailer.php)│  Port 587   │ hostinger.   │               └──────┘
└─────────────┘             │ com          │
                             └──────────────┘

Option 2: Native PHP mail()
┌─────────────┐   mail()    ┌──────────────┐    Delivers   ┌──────┐
│ contact-    │─────────────▶│ Hostinger    │──────────────▶│Inbox │
│ simple.php  │             │ Mail Server  │               └──────┘
└─────────────┘             └──────────────┘

Option 3: External SMTP (SendGrid/Gmail)
┌─────────────┐    SMTP     ┌──────────────┐    Delivers   ┌──────┐
│ contact.php │─────────────▶│ SendGrid/    │──────────────▶│Inbox │
│ (mailer.php)│  Port 587   │ Gmail SMTP   │               └──────┘
└─────────────┘             └──────────────┘

Option 4: Client-side (EmailJS)
┌─────────────┐   HTTPS     ┌──────────────┐    Delivers   ┌──────┐
│ React Form  │─────────────▶│ EmailJS      │──────────────▶│Inbox │
│ (browser)   │             │ API          │               └──────┘
└─────────────┘             └──────────────┘
```

## Security Layers

```
┌─────────────────────────────────────────────────────────────┐
│                      SECURITY LAYERS                         │
└─────────────────────────────────────────────────────────────┘

1. Apache (.htaccess)
   ├─ Hide .env files
   ├─ Prevent directory listing
   ├─ Set security headers
   └─ Configure CORS

2. PHP (config.php)
   ├─ Load environment variables
   ├─ Set error logging
   ├─ Validate CORS origin
   └─ Set content-type headers

3. Application Layer
   ├─ Input validation
   ├─ Sanitize user input (htmlspecialchars)
   ├─ Prepared statements (SQL injection protection)
   └─ API key authentication (write operations)

4. Database Layer
   ├─ User permissions
   ├─ Prepared statements
   └─ Data validation

5. Email Layer
   ├─ SMTP authentication
   ├─ SPF/DKIM records
   └─ Rate limiting
```

## Deployment Flow

```
LOCAL DEVELOPMENT
┌─────────────────┐
│ Your Computer   │
│                 │
│ ├─ api/         │
│ ├─ src/         │
│ ├─ .env.example │
│ └─ *.md docs    │
└────────┬────────┘
         │
         │ Upload via FTP/File Manager
         │
         ▼
HOSTINGER SERVER
┌──────────────────────────────────────┐
│ public_html/                         │
│                                      │
│ ├─ api/                              │
│ │  ├─ .env (configure)               │
│ │  ├─ vendor/ (composer install)     │
│ │  ├─ logs/ (create)                 │
│ │  └─ *.php                          │
│ │                                    │
│ ├─ assets/                           │
│ ├─ index.html                        │
│ └─ (other frontend files)            │
│                                      │
│ MySQL Database (hPanel)              │
│ ├─ Import schema.sql                 │
│ ├─ Get credentials                   │
│ └─ Update .env                       │
│                                      │
│ Email Account (hPanel)               │
│ ├─ Create contact@domain.com         │
│ ├─ Get password                      │
│ └─ Update .env                       │
└──────────────────────────────────────┘
```

## API Authentication Flow

```
PUBLIC ENDPOINTS (No auth required)
┌──────────────┐
│ GET requests │
├──────────────┤
│ /projects    │──▶ Returns all published projects
│ /team        │──▶ Returns all active team members
│ /projects?id │──▶ Returns single project
│ /team?id     │──▶ Returns single team member
└──────────────┘

PROTECTED ENDPOINTS (API key required)
┌──────────────────┐
│ Write operations │
├──────────────────┤
│ POST /projects   │──┐
│ PUT /projects    │  │  Requires header:
│ DELETE /projects │  │  X-API-Key: your_secret_key
│ POST /team       │  │
│ PUT /team        │  │  Validates against:
│ DELETE /team     │──┘  API_SECRET_KEY in .env
└──────────────────┘
```

## Error Handling Flow

```
┌────────────────┐
│ Request        │
└───────┬────────┘
        │
        ▼
┌────────────────┐
│ Validation     │
│ ├─ Pass ───────┼──▶ Continue
│ └─ Fail ───────┼──▶ Return 400 + error details
└────────────────┘
        │
        ▼
┌────────────────┐
│ Processing     │
│ ├─ Success ────┼──▶ Return 200 + data
│ ├─ DB Error ───┼──▶ Log + Return 500
│ ├─ Auth Error ─┼──▶ Return 401
│ └─ Not Found ──┼──▶ Return 404
└────────────────┘
        │
        ▼
┌────────────────┐
│ Logging        │
│ ├─ Error log   │──▶ api/logs/error.log
│ └─ Access log  │──▶ Server logs
└────────────────┘
```

## File Dependencies

```
contact.php
  ├─ config/config.php
  │    ├─ .env (loads variables)
  │    └─ CORS setup
  ├─ config/database.php
  │    └─ PDO connection
  └─ utils/mailer.php
       └─ vendor/phpmailer/phpmailer/
            ├─ PHPMailer.php
            ├─ SMTP.php
            └─ Exception.php

projects.php / team.php
  ├─ config/config.php
  │    ├─ .env
  │    └─ CORS
  └─ config/database.php
       └─ PDO connection
```

## Testing Flow

```
┌─────────────────────────────────────────────────────────┐
│                  TESTING WORKFLOW                        │
└─────────────────────────────────────────────────────────┘

1. Local Testing
   └─ Run: ./deploy-api.sh
      ├─ Checks .env exists
      ├─ Checks PHPMailer installed
      └─ Shows deployment checklist

2. Upload to Hostinger
   └─ Via FTP/File Manager

3. Configure
   ├─ Create database (import schema.sql)
   ├─ Create email account
   └─ Edit .env file

4. Test Endpoints
   └─ Run: ./test-api.sh
      ├─ Tests projects endpoint
      ├─ Tests team endpoint
      ├─ Tests contact form
      ├─ Checks CORS headers
      ├─ Verifies .env protection
      └─ Confirms database connection

5. Manual Testing
   ├─ Submit contact form from frontend
   ├─ Check admin email received
   ├─ Check customer confirmation sent
   └─ Verify data saved in database

6. Production Monitoring
   ├─ Monitor api/logs/error.log
   ├─ Check email delivery rates
   └─ Monitor database growth
```

---

## Quick Reference: File Locations

| File                 | Purpose                   | Location                      |
| -------------------- | ------------------------- | ----------------------------- |
| Contact form handler | Process form, send emails | `api/contact.php`             |
| Simple mail handler  | Native PHP mail()         | `api/contact-simple.php`      |
| Projects CRUD        | Manage projects           | `api/projects.php`            |
| Team CRUD            | Manage team members       | `api/team.php`                |
| App config           | CORS, env, errors         | `api/config/config.php`       |
| Database connection  | PDO singleton             | `api/config/database.php`     |
| PHPMailer utility    | SMTP email sending        | `api/utils/mailer.php`        |
| Simple mailer        | Native mail()             | `api/utils/simple-mailer.php` |
| Database schema      | SQL tables                | `api/database/schema.sql`     |
| Environment config   | Credentials               | `api/.env`                    |
| Apache config        | Security, CORS            | `api/.htaccess`               |
| Dependencies         | PHPMailer                 | `api/composer.json`           |

---

This architecture supports:
✅ Multiple email solutions (SMTP, native, external)
✅ Secure CRUD operations with API key auth
✅ CORS-enabled for frontend integration
✅ Error logging and debugging
✅ Scalable database design
✅ Easy deployment to Hostinger
