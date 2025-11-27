#!/bin/bash

# CodeHunts Deployment Helper Script
# This script helps prepare your project for Hostinger deployment

echo "================================"
echo "CodeHunts Deployment Helper"
echo "================================"
echo ""

# Step 1: Install dependencies
echo "📦 Step 1: Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo ""

# Step 2: Build project
echo "🔨 Step 2: Building project..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed"
    exit 1
fi
echo ""

# Step 3: Create deployment package
echo "📦 Step 3: Creating deployment package..."
mkdir -p deployment
cp -r dist/* deployment/
cp -r public/api deployment/
cp public/.htaccess deployment/
mkdir -p deployment/uploads/projects
mkdir -p deployment/uploads/team

echo "✅ Deployment package created in ./deployment folder"
echo ""

# Step 4: Show checklist
echo "📋 Deployment Checklist:"
echo "------------------------"
echo "Before uploading to Hostinger:"
echo ""
echo "1. [ ] Create MySQL database in cPanel"
echo "2. [ ] Note database credentials (name, user, password)"
echo "3. [ ] Create email account (e.g., contact@yourdomain.com)"
echo "4. [ ] Note email SMTP password"
echo ""
echo "Files to upload:"
echo "- Upload all files from ./deployment/ to public_html/"
echo "- Ensure .htaccess is uploaded"
echo "- Create uploads/ folder with subdirectories"
echo ""
echo "After upload:"
echo "5. [ ] Edit public_html/api/config.php with your credentials"
echo "6. [ ] Import database/schema.sql via phpMyAdmin"
echo "7. [ ] Test website at https://yourdomain.com"
echo "8. [ ] Test admin login at https://yourdomain.com/admin"
echo "9. [ ] Change default admin password!"
echo ""
echo "================================"
echo "🚀 Ready for deployment!"
echo "================================"
