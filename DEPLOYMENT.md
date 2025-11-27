# CodeHunts - Deployment Guide for Hostinger PHP Hosting

## 🚀 Complete Implementation Summary

This project has been upgraded from a static React website to a full-stack application with:

- ✅ PHP backend API for CRUD operations
- ✅ MySQL database integration
- ✅ Email functionality for contact forms
- ✅ Secured admin panel at `/admin`
- ✅ Dynamic portfolio and team management

## 📋 Prerequisites

1. Hostinger PHP hosting account
2. MySQL database access
3. Node.js installed locally (for building)
4. Git (optional, for deployment)

## 🛠️ Setup Instructions

### Step 1: Build the React Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates an optimized build in the `dist/` folder.

### Step 2: Database Setup

1. **Create MySQL Database** via Hostinger cPanel:
   - Go to MySQL Databases
   - Create a new database (e.g., `u123456789_codehunts`)
   - Create a database user and note credentials
   - Assign user to database with all privileges

2. **Import Database Schema**:
   - Go to phpMyAdmin
   - Select your database
   - Import `database/schema.sql`
   - This will create tables and seed initial data

### Step 3: Configure Environment Variables

1. **Create `.env` file** in the root directory (for local development):

   ```bash
   cp .env.example .env
   ```

2. **Update `.env` with your Hostinger details**:

   ```env
   VITE_API_URL=https://yourdomain.com
   VITE_CONTACT_EMAIL=contact@yourdomain.com

   DB_HOST=localhost
   DB_NAME=u123456789_codehunts
   DB_USER=u123456789_user
   DB_PASS=your_secure_password

   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   SMTP_USERNAME=contact@yourdomain.com
   SMTP_PASSWORD=your_email_password
   ```

3. **Update PHP config** - Edit `public/api/config.php` with your database credentials:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'u123456789_codehunts');
   define('DB_USER', 'u123456789_user');
   define('DB_PASS', 'your_secure_password');
   ```

### Step 4: Upload Files to Hostinger

#### Option A: File Manager

1. Login to Hostinger cPanel
2. Go to File Manager
3. Navigate to `public_html/`
4. Upload all files from `dist/` folder to `public_html/`
5. Upload `public/api/` folder to `public_html/api/`
6. Upload `public/.htaccess` to `public_html/.htaccess`
7. Create uploads folder: `public_html/uploads/` with subdirectories:
   - `public_html/uploads/projects/`
   - `public_html/uploads/team/`
8. Set folder permissions to 755 for uploads folder

#### Option B: FTP

```bash
# Connect via FTP client (FileZilla, etc.)
# Upload dist/* to public_html/
# Upload public/api/ to public_html/api/
# Upload public/.htaccess to public_html/.htaccess
```

### Step 5: Folder Structure on Server

```
public_html/
├── index.html
├── assets/
├── team/
├── .htaccess
├── api/
│   ├── config.php
│   ├── db.php
│   ├── auth.php
│   ├── projects.php
│   ├── team.php
│   ├── contact.php
│   ├── upload.php
│   └── services/
│       └── EmailService.php
└── uploads/
    ├── projects/
    └── team/
```

### Step 6: Test the Application

1. **Visit your website**: `https://yourdomain.com`
2. **Test portfolio page**: Should load projects from database
3. **Test team page**: Should load team members from database
4. **Test contact forms**:
   - `/contact-us` - Simple contact form
   - `/lets-talk` - Advanced demo request form
5. **Test admin panel**: `https://yourdomain.com/admin/login`

## 🔐 Admin Panel Access

### Default Credentials (⚠️ CHANGE IMMEDIATELY!)

```
URL: https://yourdomain.com/admin/login
Email: admin@codehuntspk.com
Password: admin123
```

### Admin Panel Features

- **Dashboard**: Overview of projects, team members, and stats
- **Projects Management**: Add, edit, delete portfolio projects
- **Team Management**: Add, edit, delete team members
- **File Upload**: Image upload for projects and team photos
- **Session-based Authentication**: Secure PHP sessions

### Changing Admin Password

1. Login to admin panel
2. Go to phpMyAdmin
3. Select `admin_users` table
4. Run this SQL to create a new password:

```sql
UPDATE admin_users
SET password_hash = '$2y$10$YOUR_NEW_HASH_HERE'
WHERE email = 'admin@codehuntspk.com';
```

To generate a hash, use this PHP snippet:

```php
<?php echo password_hash('YourNewPassword', PASSWORD_DEFAULT); ?>
```

## 📧 Email Configuration

### Using Hostinger SMTP

1. Create email account in cPanel (e.g., `contact@yourdomain.com`)
2. Update `public/api/config.php`:
   ```php
   define('SMTP_HOST', 'smtp.hostinger.com');
   define('SMTP_PORT', 587);
   define('SMTP_USERNAME', 'contact@yourdomain.com');
   define('SMTP_PASSWORD', 'your_email_password');
   ```

### Email Testing

Send a test email via contact form. Check:

- Email arrives at admin inbox
- Form submission saved in database (`contact_submissions` table)

## 🔧 API Endpoints

All API endpoints are located at `/api/`:

- `POST /api/auth.php?action=login` - Admin login
- `POST /api/auth.php?action=logout` - Admin logout
- `GET /api/auth.php?action=check` - Check auth status
- `GET /api/projects.php` - Get all projects
- `GET /api/projects.php?id=1` - Get single project
- `POST /api/projects.php` - Create project (auth required)
- `PUT /api/projects.php?id=1` - Update project (auth required)
- `DELETE /api/projects.php?id=1` - Delete project (auth required)
- `GET /api/team.php` - Get all team members
- `GET /api/team.php?id=1` - Get single member
- `POST /api/team.php` - Create member (auth required)
- `PUT /api/team.php?id=1` - Update member (auth required)
- `DELETE /api/team.php?id=1` - Delete member (auth required)
- `POST /api/contact.php` - Submit contact form
- `POST /api/upload.php` - Upload image (auth required)

## 🐛 Troubleshooting

### 404 Errors on Routes

- Check `.htaccess` is in `public_html/`
- Ensure mod_rewrite is enabled (contact Hostinger support)

### API Errors

- Check `public/api/config.php` has correct database credentials
- Verify database connection in phpMyAdmin
- Check PHP error logs in cPanel

### Email Not Sending

- Verify SMTP credentials in `config.php`
- Check email account exists in cPanel
- Test with simple PHP mail script
- Consider using PHPMailer library (instructions in EmailService.php)

### Upload Errors

- Check `uploads/` folder exists with correct permissions (755)
- Verify PHP upload limits in cPanel (php.ini)
- Check `upload_max_filesize` and `post_max_size`

### Database Connection Errors

- Verify DB credentials match cPanel settings
- Check database user has all privileges
- Ensure database exists

## 📊 Database Tables

### `admin_users`

- Stores admin login credentials
- Password is hashed using bcrypt
- Default admin created by schema.sql

### `projects`

- All portfolio projects
- `tags` and `features` stored as JSON
- Seeded with 6 sample projects

### `team_members`

- Team member information
- Social media links
- Display order for sorting
- Soft delete with `is_active` flag

### `contact_submissions`

- All contact form submissions
- Stores IP address and user agent
- Status tracking (new, read, replied, archived)

## 🔒 Security Recommendations

1. **Change default admin password immediately**
2. **Use strong database passwords**
3. **Enable HTTPS** (Let's Encrypt via cPanel)
4. **Set secure PHP session settings**
5. **Limit file upload sizes**
6. **Validate all user inputs**
7. **Keep PHP version updated**
8. **Regular database backups**

## 🚦 Production Checklist

- [ ] Build React app (`npm run build`)
- [ ] Upload files to `public_html/`
- [ ] Create MySQL database
- [ ] Import `database/schema.sql`
- [ ] Update `public/api/config.php` with credentials
- [ ] Set up email account
- [ ] Create `uploads/` folders with correct permissions
- [ ] Upload `.htaccess` file
- [ ] Test all routes
- [ ] Test contact forms
- [ ] Test admin login
- [ ] Change default admin password
- [ ] Test project CRUD operations
- [ ] Test team CRUD operations
- [ ] Test image uploads
- [ ] Enable HTTPS/SSL
- [ ] Test on mobile devices

## 📱 API Testing with cURL

```bash
# Test API connection
curl https://yourdomain.com/api/projects.php

# Test contact form
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'

# Test admin login
curl -X POST https://yourdomain.com/api/auth.php?action=login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@codehuntspk.com","password":"admin123"}'
```

## 🆘 Support

If you encounter issues:

1. Check Hostinger error logs in cPanel
2. Review PHP error logs
3. Check browser console for frontend errors
4. Verify all environment variables are set
5. Contact Hostinger support for hosting-specific issues

## 📝 Notes

- All API responses return JSON format
- Authentication uses PHP sessions
- Images are stored in `/uploads/` folder
- Project uses Vite for building
- React Router handles client-side routing
- `.htaccess` redirects all routes to `index.html`

---

**Built with ❤️ by CodeHunts Team**
