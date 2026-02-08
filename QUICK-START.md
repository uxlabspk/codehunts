# 🚀 QUICK REFERENCE - Hostinger Email Fix

## 🔥 Most Common Solution (Works 90% of the time)

### Step 1: Create Email in hPanel

1. Login to Hostinger hPanel
2. Go to **Emails** → **Email Accounts**
3. Click **Create Email Account**
4. Email: `contact@yourdomain.com`
5. Set strong password
6. Click Create

### Step 2: Configure .env

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=tls
SMTP_USERNAME=contact@yourdomain.com
SMTP_PASSWORD=your_email_password_here
SMTP_FROM_EMAIL=contact@yourdomain.com
SMTP_FROM_NAME=CodeHunts
ADMIN_EMAIL=admin@yourdomain.com
```

### Step 3: Install PHPMailer

```bash
cd api
composer install
```

**Or manually:** Download from https://github.com/PHPMailer/PHPMailer/releases
Upload to: `api/vendor/phpmailer/phpmailer/`

### Step 4: Test

```bash
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@test.com","service":"Web Development","message":"Test"}'
```

---

## 🆘 If Still Not Working

### Try Port 465 with SSL

```env
SMTP_PORT=465
SMTP_SECURE=ssl
```

### Try Native PHP mail()

```bash
mv api/contact.php api/contact-phpmailer.php
mv api/contact-simple.php api/contact.php
```

### Use SendGrid (Free 100/day)

1. Sign up: https://sendgrid.com
2. Get API key
3. Configure:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=your_sendgrid_api_key
```

---

## 📁 File Structure

```
api/
├── contact.php              ← Contact form (PHPMailer)
├── contact-simple.php       ← Contact form (native mail)
├── projects.php             ← Projects CRUD
├── team.php                 ← Team CRUD
├── .env                     ← YOUR CONFIG (create from .env.example)
├── .env.example             ← Template
├── composer.json            ← Dependencies
├── README.md                ← Full setup guide
├── EMAIL-TROUBLESHOOTING.md ← Email help
├── config/
│   ├── config.php           ← App config
│   └── database.php         ← DB connection
├── database/
│   └── schema.sql           ← Import this to phpMyAdmin
└── utils/
    ├── mailer.php           ← PHPMailer
    └── simple-mailer.php    ← Native mail
```

---

## 🧪 Quick Tests

### Test Database

```bash
curl https://yourdomain.com/api/projects.php
# Should return: {"success":true,"projects":[]...}
```

### Test Contact Form

```bash
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"firstName":"John","lastName":"Doe","email":"john@test.com","service":"Web Development","message":"Test message"}'
# Should return: {"success":true,"message":"Thank you..."}
```

### Check Logs

```bash
tail -f api/logs/error.log
```

---

## ⚡ Commands

### Deploy Helper

```bash
./deploy-api.sh
```

### Test Suite

```bash
./test-api.sh
```

### Install Dependencies

```bash
cd api && composer install
```

---

## 🔐 Security Checklist

✅ Copy `.env.example` to `.env`  
✅ Edit `.env` with real credentials  
✅ Never commit `.env` to Git  
✅ Generate strong API_SECRET_KEY  
✅ Use HTTPS in production  
✅ Set file permissions: `chmod 600 api/.env`

---

## 📊 API Endpoints

| Endpoint                 | Method | Auth | Description         |
| ------------------------ | ------ | ---- | ------------------- |
| `/api/contact.php`       | POST   | No   | Submit contact form |
| `/api/projects.php`      | GET    | No   | Get all projects    |
| `/api/projects.php?id=1` | GET    | No   | Get one project     |
| `/api/projects.php`      | POST   | Yes  | Create project      |
| `/api/projects.php`      | PUT    | Yes  | Update project      |
| `/api/projects.php?id=1` | DELETE | Yes  | Delete project      |
| `/api/team.php`          | GET    | No   | Get team members    |
| `/api/team.php?id=1`     | GET    | No   | Get one member      |
| `/api/team.php`          | POST   | Yes  | Create member       |
| `/api/team.php`          | PUT    | Yes  | Update member       |
| `/api/team.php?id=1`     | DELETE | Yes  | Delete member       |

---

## 🎯 Common Errors & Fixes

| Error                        | Fix                                      |
| ---------------------------- | ---------------------------------------- |
| "SMTP connect() failed"      | Wrong host/port. Try 465 with SSL        |
| "Could not authenticate"     | Wrong username/password. Check .env      |
| "Database connection failed" | Wrong DB credentials in .env             |
| "Method not allowed"         | Wrong HTTP method (use POST for contact) |
| Emails going to spam         | Add SPF record, use domain email         |
| "Mail() disabled"            | Use PHPMailer with SMTP                  |

---

## 📞 Need More Help?

- **Full Setup:** Read `api/README.md`
- **Email Issues:** Read `api/EMAIL-TROUBLESHOOTING.md`
- **Backend Guide:** Read `BACKEND-SETUP.md`
- **Test API:** Run `./test-api.sh`

---

## ✨ Quick Start (5 minutes)

```bash
# 1. Upload api/ folder to Hostinger
# Upload to: public_html/api/

# 2. Create database in hPanel
# Import: api/database/schema.sql

# 3. Create .env from example
cp api/.env.example api/.env
nano api/.env  # Edit with your credentials

# 4. Create email account in hPanel
# Email: contact@yourdomain.com

# 5. Install PHPMailer
cd api && composer install

# 6. Test
curl https://yourdomain.com/api/projects.php
```

**Done! Your backend is live! 🎉**

---

## 💡 Pro Tips

1. **Email not working?** Use `contact-simple.php` instead of PHPMailer
2. **High volume?** Use SendGrid (free 100/day)
3. **Want client-side?** Use EmailJS (no backend needed)
4. **Testing locally?** Use port 1025 with MailHog
5. **Production?** Enable HTTPS, add SPF/DKIM records

---

**Remember:** The `EMAIL-TROUBLESHOOTING.md` file has EVERY possible solution for Hostinger email problems!
