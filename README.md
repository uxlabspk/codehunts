# CodeHunts - Professional Web Platform

A modern, high-performance full-stack website with React frontend and PHP backend, optimized for Hostinger hosting.

## 🚀 Features

### Frontend

- **Modern Stack**: Built with React 19, TypeScript 5.8, and Vite 7
- **Type-Safe**: Full TypeScript coverage with strict typing
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Accessible**: ARIA-compliant components following WCAG guidelines
- **Form Validation**: Robust client-side validation with helpful error messages
- **Code Quality**: ESLint, Prettier, and automated formatting

### Backend (NEW!)

- **PHP API**: RESTful API for contact forms, projects, and team management
- **Email System**: PHPMailer with SMTP support + native PHP mail() fallback
- **Database**: MySQL with secure PDO connections
- **Security**: API key authentication, SQL injection protection, XSS prevention
- **Hostinger Optimized**: Ready for Hostinger PHP shared hosting
- **Multiple Email Solutions**: Works with Hostinger SMTP, SendGrid, Gmail, or native mail()

## 📋 Prerequisites

### Frontend

- Node.js 18+
- npm 9+ or yarn 1.22+

### Backend

- PHP 7.4+ (included with Hostinger)
- MySQL/MariaDB (included with Hostinger)
- Composer (optional, for PHPMailer)
- Hostinger hosting account

## 🛠️ Installation

### Frontend Setup

1. Clone the repository:

```bash
git clone https://github.com/uxlabspk/codehunts.git
cd codehunts
```

2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Update `.env` with your configuration

### Backend Setup

See **[QUICK-START.md](QUICK-START.md)** for the fastest setup or **[BACKEND-SETUP.md](BACKEND-SETUP.md)** for complete guide.

**Quick version:**

1. Upload `api/` folder to Hostinger: `public_html/api/`
2. Create MySQL database and import `api/database/schema.sql`
3. Create email account in hPanel: `contact@yourdomain.com`
4. Copy and configure: `cp api/.env.example api/.env`
5. Install PHPMailer: `cd api && composer install`
6. Test: Visit `https://yourdomain.com/api/projects.php`

**Email not working?** See **[api/EMAIL-TROUBLESHOOTING.md](api/EMAIL-TROUBLESHOOTING.md)** for solutions.

## 💻 Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🧪 Code Quality

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

### Formatting

```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

### Validate All

Run all checks at once:

```bash
npm run validate
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # React components
│   ├── common/     # Shared components
│   ├── form/       # Form components
│   ├── landing/    # Landing page sections
│   ├── portfolio/  # Portfolio components
│   ├── services/   # Service-related components
│   └── ui/         # Base UI components
├── config/         # Configuration files
├── constants/      # App constants and enums
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
├── services/       # API and external services
└── types/          # TypeScript type definitions
```

## 🎨 Component Guidelines

### Creating New Components

1. Use TypeScript and define prop interfaces
2. Export components as named exports
3. Include proper TypeScript types
4. Add JSDoc comments for complex components

Example:

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

/**
 * Reusable button component
 */
export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  // Component logic
}
```

### Styling

- Use Tailwind CSS utility classes
- Extract repeated patterns to component variants
- Use `cn()` utility for conditional classes

## 🔧 Configuration Files

- **vite.config.ts**: Vite configuration
- **tsconfig.json**: TypeScript configuration
- **eslint.config.js**: ESLint rules
- **.prettierrc**: Prettier formatting rules

## 🌐 Environment Variables

### Frontend (.env)

See `.env.example` for all available variables:

- `VITE_APP_NAME`: Application name
- `VITE_APP_URL`: Your domain URL
- `VITE_CONTACT_EMAIL`: Contact email address
- `VITE_CONTACT_PHONE`: Contact phone number

### Backend (api/.env)

See `api/.env.example` for all available variables:

**Database:**

- `DB_HOST`: Database host (usually `localhost`)
- `DB_NAME`: Database name
- `DB_USER`: Database username
- `DB_PASS`: Database password

**Email (Hostinger SMTP):**

- `SMTP_HOST`: `smtp.hostinger.com`
- `SMTP_PORT`: `587` (or `465` for SSL)
- `SMTP_USERNAME`: Your email (e.g., `contact@yourdomain.com`)
- `SMTP_PASSWORD`: Email password
- `SMTP_FROM_EMAIL`: From email address
- `ADMIN_EMAIL`: Where contact forms are sent

**Security:**

- `API_SECRET_KEY`: Generate strong key for protected endpoints
- `ALLOWED_ORIGINS`: Comma-separated allowed domains for CORS

## 📚 Documentation

- **[QUICK-START.md](QUICK-START.md)** - ⚡ Fast setup guide (5 minutes)
- **[BACKEND-SETUP.md](BACKEND-SETUP.md)** - 📖 Complete backend guide
- **[api/README.md](api/README.md)** - 🔧 API documentation
- **[api/EMAIL-TROUBLESHOOTING.md](api/EMAIL-TROUBLESHOOTING.md)** - 📧 Fix email issues
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - 🏗️ System architecture
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - 🚀 Deployment guide

## 🔌 API Endpoints

| Endpoint                 | Method          | Auth | Description         |
| ------------------------ | --------------- | ---- | ------------------- |
| `/api/contact.php`       | POST            | No   | Submit contact form |
| `/api/projects.php`      | GET             | No   | Get all projects    |
| `/api/projects.php?id=1` | GET             | No   | Get single project  |
| `/api/projects.php`      | POST/PUT/DELETE | Yes  | Manage projects     |
| `/api/team.php`          | GET             | No   | Get team members    |
| `/api/team.php?id=1`     | GET             | No   | Get single member   |
| `/api/team.php`          | POST/PUT/DELETE | Yes  | Manage team         |

Protected endpoints require `X-API-Key` header.

## 🧪 Testing

### Frontend Tests

```bash
npm run validate    # Run all checks
npm run type-check  # TypeScript
npm run lint        # ESLint
npm run format      # Prettier
```

### Backend Tests

```bash
./test-api.sh       # Test all API endpoints
php api/test-phpmailer.php   # Test email sending
```

## 📦 Key Dependencies

### Frontend

- **React 19**: UI library
- **React Router 7**: Client-side routing
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TypeScript 5.8**: Type safety

### Backend

- **PHP 7.4+**: Server-side language
- **PHPMailer 6.8**: Email sending with SMTP
- **MySQL/MariaDB**: Database
- **PDO**: Secure database connections

## 🚀 Deployment

### Frontend Deployment (Hostinger)

```bash
npm run build
# Upload dist/ contents to public_html/
```

### Backend Deployment

```bash
./deploy-api.sh    # Run deployment helper
# Follow the instructions
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run validation: `npm run validate`
4. Commit changes: `git commit -m "feat: your feature"`
5. Push to branch: `git push origin feature/your-feature`
6. Create a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build process or auxiliary tool changes

## 📝 License

Copyright © 2024 CodeHunts. All rights reserved.

## 📧 Contact

- Email: contact@codehuntspk.com
- Website: https://codehunts.com
- Location: I-10/2 Islamabad, Pakistan

## 🙏 Acknowledgments

Built with modern web technologies and best practices.

---

## 📁 Project Structure

```
codehunts/
├── api/                          # Backend PHP API
│   ├── config/                   # Configuration files
│   ├── database/                 # Database schema
│   ├── utils/                    # Utilities (mailer)
│   ├── contact.php              # Contact form endpoint
│   ├── projects.php             # Projects CRUD
│   ├── team.php                 # Team CRUD
│   ├── .env.example             # Environment template
│   └── README.md                # API documentation
├── src/                         # Frontend source
│   ├── components/              # React components
│   ├── pages/                   # Page components
│   ├── config/                  # Frontend config
│   ├── lib/                     # Utilities
│   └── types/                   # TypeScript types
├── public/                      # Static assets
├── QUICK-START.md              # ⚡ Fast setup guide
├── BACKEND-SETUP.md            # 📖 Complete backend guide
├── ARCHITECTURE.md             # 🏗️ System architecture
└── README.md                   # This file
```

---

**Need help?**

- 📧 Email issues? → [api/EMAIL-TROUBLESHOOTING.md](api/EMAIL-TROUBLESHOOTING.md)
- ⚡ Quick setup? → [QUICK-START.md](QUICK-START.md)
- 📖 Full guide? → [BACKEND-SETUP.md](BACKEND-SETUP.md)
