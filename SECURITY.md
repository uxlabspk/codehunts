# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability within CodeHunts, please send an email to security@codehuntspk.com. All security vulnerabilities will be promptly addressed.

Please do not publicly disclose the issue until it has been addressed by our team.

## Disclosure Process

1. Report is received and assigned to a primary handler
2. Problem is confirmed and affected versions are determined
3. Code is audited to find similar problems
4. Fixes are prepared for all supported versions
5. Fixes are released and security advisory is published

## Security Update Policy

- Security updates are released as soon as possible
- Users are notified via email and GitHub Security Advisories
- CVE identifiers are requested for critical vulnerabilities

## Best Practices

When deploying CodeHunts:

1. **Environment Variables**: Never commit `.env` files
2. **Dependencies**: Keep dependencies updated
3. **HTTPS**: Always use HTTPS in production
4. **API Keys**: Rotate API keys regularly
5. **Access Control**: Implement proper authentication/authorization
6. **Input Validation**: Validate and sanitize all user inputs
7. **Error Handling**: Don't expose sensitive information in errors

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Security Checklist

- [ ] All dependencies are up to date
- [ ] No hardcoded secrets in code
- [ ] Input validation implemented
- [ ] CSRF protection enabled
- [ ] XSS prevention measures in place
- [ ] SQL injection prevention (if applicable)
- [ ] Rate limiting implemented
- [ ] Logging and monitoring configured

Thank you for helping keep CodeHunts secure!
