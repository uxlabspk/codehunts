#!/bin/bash

# Hostinger Deployment Script for CodeHunts API
# This script helps deploy the API to Hostinger

echo "======================================"
echo "CodeHunts API Deployment Helper"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env file exists
if [ ! -f "api/.env" ]; then
    echo -e "${YELLOW}Warning: api/.env file not found!${NC}"
    echo "Creating from .env.example..."
    cp api/.env.example api/.env
    echo -e "${GREEN}Created api/.env - Please edit it with your credentials${NC}"
    echo ""
fi

# Check if vendor directory exists
if [ ! -d "api/vendor" ]; then
    echo -e "${YELLOW}PHPMailer not installed!${NC}"
    echo "Installing via Composer..."
    
    if command -v composer &> /dev/null; then
        cd api && composer install && cd ..
        echo -e "${GREEN}PHPMailer installed successfully${NC}"
    else
        echo -e "${RED}Composer not found!${NC}"
        echo "Please install Composer or manually download PHPMailer"
        echo "Manual installation:"
        echo "1. Download from: https://github.com/PHPMailer/PHPMailer/releases"
        echo "2. Extract to: api/vendor/phpmailer/phpmailer/"
    fi
    echo ""
fi

# Create logs directory if it doesn't exist
if [ ! -d "api/logs" ]; then
    mkdir -p api/logs
    chmod 755 api/logs
    echo -e "${GREEN}Created logs directory${NC}"
    echo ""
fi

echo "======================================"
echo "Pre-deployment Checklist:"
echo "======================================"
echo ""

# Check .env configuration
echo "✓ Checking configuration..."
if grep -q "your_database_password" api/.env 2>/dev/null; then
    echo -e "${RED}✗ .env still contains default values${NC}"
    echo "  Please edit api/.env with your actual credentials"
else
    echo -e "${GREEN}✓ .env appears to be configured${NC}"
fi

# Check if files are ready
required_files=(
    "api/contact.php"
    "api/projects.php"
    "api/team.php"
    "api/config/config.php"
    "api/config/database.php"
    "api/utils/mailer.php"
    "api/.htaccess"
)

all_files_exist=true
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${RED}✗ Missing: $file${NC}"
        all_files_exist=false
    fi
done

if [ "$all_files_exist" = true ]; then
    echo -e "${GREEN}✓ All required files present${NC}"
fi

echo ""
echo "======================================"
echo "Deployment Steps:"
echo "======================================"
echo ""
echo "1. Upload Files:"
echo "   - Upload the 'api' folder to your Hostinger public_html"
echo "   - Path: public_html/api/"
echo ""
echo "2. Configure Database:"
echo "   - Create MySQL database in hPanel"
echo "   - Import api/database/schema.sql via phpMyAdmin"
echo "   - Update DB credentials in api/.env"
echo ""
echo "3. Configure Email:"
echo "   - Create email account in hPanel (e.g., contact@yourdomain.com)"
echo "   - Update SMTP settings in api/.env:"
echo "     SMTP_HOST=smtp.hostinger.com"
echo "     SMTP_PORT=587"
echo "     SMTP_USERNAME=contact@yourdomain.com"
echo "     SMTP_PASSWORD=your_email_password"
echo ""
echo "4. Install PHPMailer (if not using Composer):"
echo "   - Download: https://github.com/PHPMailer/PHPMailer/releases"
echo "   - Upload to: api/vendor/phpmailer/phpmailer/"
echo ""
echo "5. Set Permissions:"
echo "   chmod 755 api/"
echo "   chmod 644 api/*.php"
echo "   chmod 600 api/.env"
echo "   chmod 755 api/logs/"
echo ""
echo "6. Test the API:"
echo "   Visit: https://yourdomain.com/api/projects.php"
echo "   Should return: {\"success\":true,\"projects\":[...]}"
echo ""
echo "======================================"
echo "Common Issues & Solutions:"
echo "======================================"
echo ""
echo "Email not sending:"
echo "  - Verify SMTP credentials in .env"
echo "  - Check email account exists in hPanel"
echo "  - Try port 465 with SSL instead of 587 with TLS"
echo "  - Check error logs: api/logs/error.log"
echo ""
echo "Database connection failed:"
echo "  - Verify database exists in phpMyAdmin"
echo "  - Check DB credentials in .env"
echo "  - Ensure user has proper permissions"
echo ""
echo "CORS errors:"
echo "  - Add your domain to ALLOWED_ORIGINS in .env"
echo "  - Check .htaccess is being read"
echo ""
echo "======================================"
echo "Testing Commands:"
echo "======================================"
echo ""
echo "Test contact form:"
echo "curl -X POST https://yourdomain.com/api/contact.php \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"firstName\":\"Test\",\"lastName\":\"User\",\"email\":\"test@test.com\",\"service\":\"Web Development\",\"message\":\"Test\"}'"
echo ""
echo "Test projects:"
echo "curl https://yourdomain.com/api/projects.php"
echo ""
echo "Test team:"
echo "curl https://yourdomain.com/api/team.php"
echo ""
echo "======================================"
echo "Ready to deploy? Follow the steps above!"
echo "======================================"
