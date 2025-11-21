# Contributing to CodeHunts

Thank you for considering contributing to CodeHunts! This document outlines the process and guidelines for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- A clear, descriptive title
- Detailed description of the proposed feature
- Explanation of why this enhancement would be useful
- Possible implementation approach

### Pull Requests

1. **Fork the repository** and create your branch from `master`
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Run validation**: `npm run validate`
5. **Update documentation** if needed
6. **Write clear commit messages** following conventional commits
7. **Submit a pull request**

#### Pull Request Guidelines

- Fill in the PR template
- Link related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Keep PRs focused on a single feature/fix
- Update the README if needed

## Development Process

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/codehunts.git
cd codehunts

# Add upstream remote
git remote add upstream https://github.com/uxlabspk/codehunts.git

# Install dependencies
npm install

# Create a branch
git checkout -b feature/your-feature-name
```

### Coding Standards

#### TypeScript

- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type
- Use strict mode
- Document complex functions with JSDoc

#### React

- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use proper prop typing
- Implement error boundaries for critical sections

#### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Ensure accessibility (ARIA attributes)
- Test responsive design

#### Code Organization

- Place reusable logic in custom hooks
- Keep components in appropriate directories
- Export types from dedicated type files
- Use barrel exports where appropriate

### Testing

```bash
# Run type check
npm run type-check

# Run linter
npm run lint

# Run all checks
npm run validate
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or tooling changes

**Example:**

```
feat(auth): add user authentication flow

- Implement login/logout functionality
- Add JWT token management
- Create protected route wrapper

Closes #123
```

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Changes are tested locally
- [ ] Commit messages follow convention

## Project Structure

Familiarize yourself with the project structure:

```
src/
├── components/     # React components
├── hooks/         # Custom hooks
├── lib/           # Utility functions
├── types/         # TypeScript types
├── constants/     # App constants
├── config/        # Configuration
└── services/      # API services
```

## Getting Help

- Check existing documentation
- Search through issues
- Ask questions in discussions
- Reach out to maintainers

## Recognition

Contributors will be recognized in:

- Release notes
- Contributors list
- Project README

Thank you for contributing to CodeHunts! 🚀
