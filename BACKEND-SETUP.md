# CodeHunts Backend - Complete Solution

✅ **Complete PHP backend created for Hostinger hosting**

## 📁 What's Been Created

### API Endpoints

- **`api/contact.php`** - Contact form with PHPMailer SMTP
- **`api/contact-simple.php`** - Contact form with native PHP mail()
- **`api/projects.php`** - Projects CRUD operations
- **`api/team.php`** - Team members CRUD operations

### Configuration Files

- **`api/config/config.php`** - Application configuration & CORS
- **`api/config/database.php`** - MySQL database connection
- **`api/.env.example`** - Environment variables template
- **`api/.htaccess`** - Apache configuration & security

### Utilities

- **`api/utils/mailer.php`** - PHPMailer with SMTP (recommended)
- **`api/utils/simple-mailer.php`** - Native PHP mail() (fallback)

### Database

- **`api/database/schema.sql`** - Complete database schema with tables:
  - `contacts` - Contact form submissions
  - `projects` - Portfolio projects
  - `team_members` - Team member profiles
  - `admin_users` - Admin authentication

### Documentation

- **`api/README.md`** - Complete setup and usage guide
- **`api/EMAIL-TROUBLESHOOTING.md`** - Email troubleshooting guide
- **`deploy-api.sh`** - Deployment helper script

### Dependencies

- **`api/composer.json`** - PHPMailer dependency configuration

## 🚀 Quick Start

### 1. Run Deployment Helper

```bash
cd /run/media/muhammad/Repository/codehunts
./deploy-api.sh
```

### 2. Upload to Hostinger

Upload the `api` folder to: `public_html/api/`

### 3. Configure Database

1. Create MySQL database in hPanel
2. Import `api/database/schema.sql` via phpMyAdmin
3. Update database credentials in `api/.env`

### 4. Configure Email (Choose One Solution)

#### Solution A: Hostinger SMTP (Recommended)

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=contact@yourdomain.com
SMTP_PASSWORD=your_email_password
```

#### Solution B: Native PHP mail()

```bash
# Use simple mailer instead
mv api/contact.php api/contact-phpmailer.php
mv api/contact-simple.php api/contact.php
```

#### Solution C: External SMTP (SendGrid/Gmail)

See EMAIL-TROUBLESHOOTING.md for configuration

### 5. Install PHPMailer

```bash
cd api
composer install
```

Or download manually from: https://github.com/PHPMailer/PHPMailer/releases

### 6. Test the API

```bash
# Test projects endpoint
curl https://yourdomain.com/api/projects.php

# Test contact form
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@test.com","service":"Web Development","message":"Test"}'
```

## 🔧 Email Not Working on Hostinger?

### Most Common Fix:

1. Create email account in hPanel: `contact@yourdomain.com`
2. Use Hostinger SMTP settings in `.env`
3. Use port 587 with TLS (or try 465 with SSL)

### If Still Not Working:

1. Read `api/EMAIL-TROUBLESHOOTING.md` - comprehensive guide
2. Try native PHP mail(): Use `contact-simple.php`
3. Use external service: SendGrid (100 free emails/day)
4. Use client-side: EmailJS (no backend needed)

**All solutions documented in EMAIL-TROUBLESHOOTING.md**

## 📊 API Features

### Contact Form (Public)

- ✅ Email validation
- ✅ Spam protection
- ✅ Database storage
- ✅ Admin notification email
- ✅ Customer confirmation email
- ✅ Error logging

### Projects API

- ✅ GET all projects (public)
- ✅ GET single project (public)
- ✅ Filter by category (public)
- ✅ Create project (protected)
- ✅ Update project (protected)
- ✅ Delete project (protected)
- ✅ JSON support for technologies & images

### Team API

- ✅ GET all team members (public)
- ✅ GET single member (public)
- ✅ Filter by role/status (public)
- ✅ Create member (protected)
- ✅ Update member (protected)
- ✅ Delete member (protected)
- ✅ JSON support for skills & social links

## 🔐 Security Features

- ✅ API key authentication for write operations
- ✅ Prepared statements (SQL injection protection)
- ✅ XSS protection (htmlspecialchars)
- ✅ CORS configuration
- ✅ Input validation
- ✅ Password hashing for admin users
- ✅ Environment variables for secrets
- ✅ Error logging (no sensitive data exposed)

## 🗄️ Database Schema

```sql
-- Contacts table
id, first_name, last_name, email, phone, company,
service, message, budget, timeline, status, created_at

-- Projects table
id, title, description, category, client, duration,
team_size, technologies (JSON), images (JSON),
demo_url, github_url, status, created_at

-- Team Members table
id, name, role, email, phone, bio, avatar,
skills (JSON), social_links (JSON),
display_order, status, created_at
```

## 🎯 Frontend Integration

Update your frontend to use the API:

```typescript
// In src/config/env.ts or .env
VITE_API_URL=https://yourdomain.com/api

// Contact form already configured at:
// src/components/form/DemoRequestForm.tsx
// Just update the URL in config
```

The form is already set up to use `${config.app.url}/api/contact.php`

## 📝 Environment Variables

Copy `api/.env.example` to `api/.env` and configure:

```env
# Database
DB_HOST=localhost
DB_NAME=your_database
DB_USER=your_user
DB_PASS=your_password

# Email (Hostinger)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USERNAME=contact@yourdomain.com
SMTP_PASSWORD=your_email_password

# Admin
ADMIN_EMAIL=admin@yourdomain.com

# App
APP_URL=https://yourdomain.com
ALLOWED_ORIGINS=https://yourdomain.com

# Security
API_SECRET_KEY=generate_strong_random_key
```

## 🧪 Testing

```bash
# Test database connection
php -f api/config/database.php

# Test email sending
php -f api/test-phpmailer.php

# Test SMTP connection
php -f api/test-smtp.php

# Test via curl
curl https://yourdomain.com/api/projects.php
```

## 📚 Documentation

- **api/README.md** - Complete setup guide
- **api/EMAIL-TROUBLESHOOTING.md** - Fix email issues
- **api/database/schema.sql** - Database structure
- **deploy-api.sh** - Deployment checklist

## 🆘 Support

### Email Issues?

→ Read `api/EMAIL-TROUBLESHOOTING.md` (covers all scenarios)

### Database Issues?

→ Check credentials in `.env`
→ Verify database exists in phpMyAdmin
→ Check error logs: `api/logs/error.log`

### CORS Issues?

→ Add your domain to `ALLOWED_ORIGINS` in `.env`
→ Verify `.htaccess` is being read

### General Issues?

→ Check `api/logs/error.log`
→ Enable display_errors temporarily
→ Test each endpoint individually

## ✨ Next Steps

1. ✅ Upload files to Hostinger
2. ✅ Create database and import schema
3. ✅ Configure `.env` file
4. ✅ Set up email (follow EMAIL-TROUBLESHOOTING.md)
5. ✅ Test all endpoints
6. ✅ Update frontend API URL
7. ✅ Deploy frontend
8. ✅ Test complete flow

## 🎉 You're All Set!

Your PHP backend is ready for production on Hostinger!

**Remember:**

- Keep `.env` secure (never commit to Git)
- Use strong API keys
- Monitor error logs
- Backup database regularly
- Test email delivery after deployment

**For email issues:** The EMAIL-TROUBLESHOOTING.md file contains every possible solution for Hostinger email problems!
