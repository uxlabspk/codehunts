#!/bin/bash

# Test script for CodeHunts API
# Run this after deployment to verify everything works

echo "======================================"
echo "CodeHunts API Test Suite"
echo "======================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
read -p "Enter your domain (e.g., yourdomain.com): " DOMAIN
API_URL="https://$DOMAIN/api"

echo ""
echo "Testing API at: $API_URL"
echo ""

# Test 1: Projects endpoint
echo "Test 1: GET Projects..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL/projects.php")
if [ "$RESPONSE" = "200" ]; then
    echo -e "${GREEN}✓ Projects endpoint working (HTTP $RESPONSE)${NC}"
else
    echo -e "${RED}✗ Projects endpoint failed (HTTP $RESPONSE)${NC}"
fi
echo ""

# Test 2: Team endpoint
echo "Test 2: GET Team Members..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL/team.php")
if [ "$RESPONSE" = "200" ]; then
    echo -e "${GREEN}✓ Team endpoint working (HTTP $RESPONSE)${NC}"
else
    echo -e "${RED}✗ Team endpoint failed (HTTP $RESPONSE)${NC}"
fi
echo ""

# Test 3: Contact form
echo "Test 3: POST Contact Form..."
RESPONSE=$(curl -s -X POST "$API_URL/contact.php" \
    -H "Content-Type: application/json" \
    -d '{
        "firstName": "Test",
        "lastName": "User",
        "email": "test@example.com",
        "phone": "+1234567890",
        "company": "Test Company",
        "service": "Web Development",
        "message": "This is a test message from the test script",
        "budget": "$10k-$25k",
        "timeline": "2-3 months"
    }')

if echo "$RESPONSE" | grep -q '"success":true'; then
    echo -e "${GREEN}✓ Contact form working${NC}"
    echo "Response: $RESPONSE"
else
    echo -e "${RED}✗ Contact form failed${NC}"
    echo "Response: $RESPONSE"
fi
echo ""

# Test 4: CORS headers
echo "Test 4: Checking CORS headers..."
CORS_HEADER=$(curl -s -I "$API_URL/projects.php" | grep -i "access-control")
if [ ! -z "$CORS_HEADER" ]; then
    echo -e "${GREEN}✓ CORS headers present${NC}"
    echo "$CORS_HEADER"
else
    echo -e "${YELLOW}⚠ CORS headers not found${NC}"
    echo "This might be normal depending on your configuration"
fi
echo ""

# Test 5: .htaccess security
echo "Test 5: Checking security..."
ENV_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL/.env")
if [ "$ENV_RESPONSE" = "403" ] || [ "$ENV_RESPONSE" = "404" ]; then
    echo -e "${GREEN}✓ .env file protected (HTTP $ENV_RESPONSE)${NC}"
else
    echo -e "${RED}✗ WARNING: .env file might be accessible! (HTTP $ENV_RESPONSE)${NC}"
fi
echo ""

# Test 6: Database connection
echo "Test 6: Checking database connectivity..."
PROJECTS_DATA=$(curl -s "$API_URL/projects.php")
if echo "$PROJECTS_DATA" | grep -q '"projects":\['; then
    PROJECT_COUNT=$(echo "$PROJECTS_DATA" | grep -o '"total":[0-9]*' | grep -o '[0-9]*')
    echo -e "${GREEN}✓ Database connected ($PROJECT_COUNT projects found)${NC}"
else
    echo -e "${RED}✗ Database might not be connected${NC}"
    echo "Response: $PROJECTS_DATA"
fi
echo ""

echo "======================================"
echo "Test Summary"
echo "======================================"
echo ""
echo "API URL: $API_URL"
echo ""
echo "Next steps:"
echo "1. Check error logs if any tests failed"
echo "2. Verify .env configuration"
echo "3. Test email delivery manually"
echo "4. Update frontend API URL"
echo ""
echo "For email testing, check your admin email inbox"
echo "for the test contact form submission."
echo ""
