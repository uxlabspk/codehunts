# 📋 Deployment Checklist

Use this checklist to ensure successful deployment to Hostinger.

## ✅ Pre-Deployment (Local)

- [ ] Run deployment helper: `./deploy-api.sh`
- [ ] Verify all API files exist
- [ ] `.env.example` present (will create `.env` on server)
- [ ] PHPMailer ready (will install on server)
- [ ] Build frontend: `npm run build`
- [ ] Test frontend build: `npm run preview`

## ✅ Hostinger Setup

### Database

- [ ] Login to Hostinger hPanel
- [ ] Navigate to **MySQL Databases**
- [ ] Create new database
  - Database name: `u_________codehunts`
  - Username: `u_________dbuser`
  - Password: (strong password)
- [ ] Note credentials (you'll need them for `.env`)
- [ ] Open **phpMyAdmin**
- [ ] Select your database
- [ ] Import `api/database/schema.sql`
- [ ] Verify tables created:
  - [ ] `contacts`
  - [ ] `projects`
  - [ ] `team_members`
  - [ ] `admin_users`
- [ ] Check sample data loaded (3 projects, 3 team members)

### Email Account

- [ ] In hPanel, navigate to **Emails**
- [ ] Click **Create Email Account**
- [ ] Email: `contact@yourdomain.com`
- [ ] Password: (strong password)
- [ ] Note password (you'll need it for `.env`)
- [ ] Verify email created successfully

### File Upload

- [ ] Connect via **File Manager** or **FTP**
- [ ] Navigate to `public_html/`
- [ ] Upload `dist/` contents to `public_html/`
  - [ ] `index.html`
  - [ ] `assets/` folder
  - [ ] All other frontend files
- [ ] Upload `api/` folder to `public_html/api/`
  - [ ] Keep folder structure intact
  - [ ] All PHP files
  - [ ] All subfolders (config, utils, database)
  - [ ] `.htaccess` file
  - [ ] `.env.example` file

## ✅ Configuration

### Environment Variables

- [ ] Navigate to `public_html/api/`
- [ ] Copy `.env.example` to `.env`
- [ ] Edit `.env` file:
  - [ ] `DB_HOST=localhost`
  - [ ] `DB_NAME=` (your database name)
  - [ ] `DB_USER=` (your database user)
  - [ ] `DB_PASS=` (your database password)
  - [ ] `SMTP_HOST=smtp.hostinger.com`
  - [ ] `SMTP_PORT=587`
  - [ ] `SMTP_USERNAME=` (your email)
  - [ ] `SMTP_PASSWORD=` (your email password)
  - [ ] `SMTP_FROM_EMAIL=` (your email)
  - [ ] `ADMIN_EMAIL=` (where to receive contacts)
  - [ ] `APP_URL=` (your domain with https://)
  - [ ] `ALLOWED_ORIGINS=` (your domain)
  - [ ] `API_SECRET_KEY=` (generate strong random key)
- [ ] Save `.env` file
- [ ] Set permissions: `chmod 600 .env`

### PHPMailer Installation

**Option A - SSH (if available):**

- [ ] Connect via SSH
- [ ] `cd public_html/api`
- [ ] `composer install`
- [ ] Verify `vendor/` folder created

**Option B - Manual (no SSH):**

- [ ] Download PHPMailer from https://github.com/PHPMailer/PHPMailer/releases
- [ ] Extract zip file
- [ ] Upload contents to `public_html/api/vendor/phpmailer/phpmailer/`
- [ ] Verify structure:
  - `public_html/api/vendor/phpmailer/phpmailer/src/PHPMailer.php`
  - `public_html/api/vendor/phpmailer/phpmailer/src/SMTP.php`
  - `public_html/api/vendor/phpmailer/phpmailer/src/Exception.php`

### File Permissions

- [ ] Set folder permissions:
  - `public_html/api/` → 755
  - `public_html/api/logs/` → 755 (create if doesn't exist)
- [ ] Set file permissions:
  - All `.php` files → 644
  - `.env` file → 600
  - `.htaccess` file → 644

### Create Logs Directory

- [ ] Create folder: `public_html/api/logs/`
- [ ] Set permissions: 755
- [ ] Create placeholder: `touch logs/.gitkeep`

## ✅ Testing

### Basic Connectivity

- [ ] Visit: `https://yourdomain.com`
  - [ ] Homepage loads
  - [ ] No console errors
  - [ ] Images loading
  - [ ] Navigation works

### API Endpoints

- [ ] Visit: `https://yourdomain.com/api/projects.php`
  - [ ] Returns JSON: `{"success":true,"projects":[...]}`
  - [ ] HTTP status: 200
  - [ ] No PHP errors
- [ ] Visit: `https://yourdomain.com/api/team.php`
  - [ ] Returns JSON: `{"success":true,"members":[...]}`
  - [ ] HTTP status: 200

### Security

- [ ] Try: `https://yourdomain.com/api/.env`
  - [ ] Should return 403 Forbidden or 404 Not Found
- [ ] Check: Browser console for CORS errors
  - [ ] Should be none
- [ ] Verify: HTTPS working (not HTTP)
  - [ ] Green padlock icon in browser

### Contact Form

- [ ] Submit test form from website:
  - [ ] First Name: Test
  - [ ] Last Name: User
  - [ ] Email: your-test-email@gmail.com
  - [ ] Service: Web Development
  - [ ] Message: This is a test submission
- [ ] Check: Form submission succeeds
  - [ ] Success message appears
  - [ ] No error messages
- [ ] Check: Admin email inbox
  - [ ] Received notification email
  - [ ] Email formatted correctly
  - [ ] All form data present
- [ ] Check: Customer email inbox
  - [ ] Received confirmation email
  - [ ] Email formatted correctly
  - [ ] Professional appearance
- [ ] Check: Database
  - [ ] Login to phpMyAdmin
  - [ ] Select your database
  - [ ] Browse `contacts` table
  - [ ] Verify test submission saved

### Email Delivery

If emails not received:

- [ ] Check `api/logs/error.log` for errors
- [ ] Verify SMTP credentials in `.env`
- [ ] Try alternative port: Change `SMTP_PORT=465` and `SMTP_SECURE=ssl`
- [ ] Refer to `api/EMAIL-TROUBLESHOOTING.md`
- [ ] Consider using `contact-simple.php` (native mail)

### Error Checking

- [ ] Check: `public_html/api/logs/error.log`
  - [ ] No critical errors
  - [ ] Only informational logs if any
- [ ] Check: Hostinger error logs (if accessible)
  - [ ] No PHP errors
  - [ ] No MySQL errors

## ✅ Post-Deployment

### Frontend Integration

- [ ] Verify API URL in frontend config
  - `src/config/env.ts` or `.env`
  - Should point to: `https://yourdomain.com/api`
- [ ] Test all forms
  - [ ] Contact form
  - [ ] Any other forms
- [ ] Test navigation
  - [ ] All pages load
  - [ ] Portfolio loads projects
  - [ ] Team page loads members

### Performance

- [ ] Test page load speed
  - [ ] Homepage < 3 seconds
  - [ ] API response < 1 second
- [ ] Test mobile responsiveness
  - [ ] All pages responsive
  - [ ] Forms work on mobile
- [ ] Check browser console
  - [ ] No JavaScript errors
  - [ ] No 404 errors

### SEO & Analytics

- [ ] Update meta tags with production URL
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics (if configured)
- [ ] Test social media sharing
  - [ ] Correct preview images
  - [ ] Correct titles/descriptions

### Security Hardening

- [ ] Force HTTPS redirect
  - Add to `.htaccess` if not already
- [ ] Review file permissions
  - [ ] No 777 permissions
  - [ ] `.env` is 600
- [ ] Update default admin password
  - [ ] Login to database
  - [ ] Change admin password
  - [ ] Delete if not using admin panel
- [ ] Backup `.env` file securely
  - [ ] Store credentials in password manager
  - [ ] Keep backup in secure location

### Monitoring Setup

- [ ] Set up error monitoring
  - [ ] Check logs daily for first week
  - [ ] Set up log rotation if needed
- [ ] Monitor email delivery
  - [ ] Test weekly
  - [ ] Check spam folder
- [ ] Database backups
  - [ ] Enable automatic backups in hPanel
  - [ ] Test restore procedure
  - [ ] Schedule weekly manual backups

### Documentation

- [ ] Document credentials securely
  - [ ] Database credentials
  - [ ] Email credentials
  - [ ] API keys
  - [ ] FTP/SSH credentials
- [ ] Note any customizations made
- [ ] Create maintenance schedule
  - [ ] Weekly: Check logs, test forms
  - [ ] Monthly: Update dependencies
  - [ ] Quarterly: Security review

## ✅ Final Verification

- [ ] All pages accessible
- [ ] All forms working
- [ ] Emails delivering
- [ ] Database saving data
- [ ] No console errors
- [ ] HTTPS working
- [ ] Mobile responsive
- [ ] Fast loading

## 🎉 Launch Checklist

- [ ] Everything tested thoroughly
- [ ] Backups configured
- [ ] Monitoring in place
- [ ] Credentials documented
- [ ] Team notified
- [ ] Launch announcement ready
- [ ] **GO LIVE!** 🚀

---

## 🆘 If Something Goes Wrong

### Email Not Working

→ Read `api/EMAIL-TROUBLESHOOTING.md`

### Database Not Connecting

→ Verify credentials in `api/.env`
→ Check database exists in phpMyAdmin
→ Check user has permissions

### 500 Internal Server Error

→ Check `api/logs/error.log`
→ Verify file permissions (755 folders, 644 files)
→ Check `.htaccess` syntax

### CORS Errors

→ Add domain to `ALLOWED_ORIGINS` in `api/.env`
→ Verify `.htaccess` uploaded
→ Check browser console for specific error

### Form Not Submitting

→ Check browser console for errors
→ Verify API URL is correct
→ Test API endpoint directly with curl
→ Check `api/logs/error.log`

### Need More Help?

→ Review `BACKEND-SETUP.md`
→ Check `api/README.md`
→ Run `./test-api.sh` for diagnostics
→ Contact Hostinger support

---

## 📞 Support Resources

- **Documentation:** See all `.md` files in project root
- **Email Issues:** `api/EMAIL-TROUBLESHOOTING.md`
- **Quick Start:** `QUICK-START.md`
- **Architecture:** `ARCHITECTURE.md`
- **Hostinger Support:** Open ticket in hPanel

---

**Good luck with your deployment! 🎊**

Print this checklist and check off items as you complete them.
