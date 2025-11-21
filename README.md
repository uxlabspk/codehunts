# CodeHunts - Professional Web Platform

A modern, high-performance website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript 5.8, and Vite 7
- **Type-Safe**: Full TypeScript coverage with strict typing
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Accessible**: ARIA-compliant components following WCAG guidelines
- **Form Validation**: Robust client-side validation with helpful error messages
- **Code Quality**: ESLint, Prettier, and automated formatting

## 📋 Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

## 🛠️ Installation

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

See `.env.example` for all available variables:

- `VITE_APP_NAME`: Application name
- `VITE_API_URL`: API endpoint URL
- `VITE_CONTACT_EMAIL`: Contact email address

## 📦 Key Dependencies

- **React 19**: UI library
- **React Router 7**: Client-side routing
- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **TypeScript 5.8**: Type safety

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

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
