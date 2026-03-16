# Agent Guidelines for This Project

This is a Next.js 16 project using the App Router. Use these guidelines when working in this codebase.

## Project Overview

- **Framework**: Next.js 16+ with App Router
- **Package Manager**: pnpm
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Auth**: NextAuth.js v5
- **Database**: PostgreSQL

## Available Commands

```bash
# Development
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build
pnpm start        # Start production server

# Type checking (run before committing)
pnpm tsc          # Run TypeScript compiler
```

Note: No lint or test scripts are currently configured. Consider adding ESLint and a testing framework if needed.

## Running a Single Test

Since no test framework is configured, tests cannot be run yet. To add testing:

1. Install a testing library: `pnpm add -D jest @testing-library/react @testing-library/jest-dom`
2. Or use Vitest: `pnpm add -D vitest`
3. Add test script to package.json: `"test": "vitest"`

## Code Style Guidelines

### TypeScript

- **Strict mode enabled**: All TypeScript errors must be resolved
- Use explicit types; avoid `any`
- Use interfaces for object shapes, types for unions/aliases
- Use `type` for utility types and complex unions
- Enable `strictNullChecks` - handle null/undefined explicitly

### Imports

- Use `@/*` path alias (configured in tsconfig.json)
- Group imports in this order:
  1. React/Next imports
  2. Third-party libraries
  3. Internal imports (@/...)
  4. CSS/Tailwind imports
- Use named exports for utilities, default exports for components
- Example:
```typescript
import { useState } from 'react';
import { Button } from './button';
import { formatCurrency } from '@/lib/utils';
```

### Naming Conventions

- **Components**: PascalCase (e.g., `LoginForm`, `InvoiceTable`)
- **Files**: 
  - Pages/route handlers: kebab-case (e.g., `login/page.tsx`, `query/route.ts`)
  - Components: PascalCase (e.g., `Button.tsx`, `LoginForm.tsx`)
  - Utils: kebab-case (e.g., `utils.ts`, `definitions.ts`)
- **Variables/functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE for config values, camelCase otherwise
- **Types/interfaces**: PascalCase (e.g., `Invoice`, `Customer`)

### React & Next.js Patterns

- **Server Components**: Default to server components (no "use client")
- **Client Components**: Add "use client" directive only when needed for hooks
- **Props**: Use explicit interface types, avoid implicit any
- **Async components**: Mark with `async` keyword for data fetching

### Error Handling

- Use try/catch with async functions
- Return proper HTTP status codes in API routes
- Use Next.js error boundaries for unexpected errors
- Handle database errors gracefully with user-friendly messages

### Styling with Tailwind

- Use utility classes for all styling (no custom CSS files unless needed)
- Use `clsx` or `cn()` for conditional classes
- Follow consistent spacing scale (use Tailwind defaults)
- Prefer semantic class names for accessibility
- Use `className` prop, not `style` prop

### Database & Data

- Use Zod for input validation (already installed)
- Define types in `app/lib/definitions.ts`
- Use parameterized queries to prevent SQL injection

### File Organization

```
app/
├── page.tsx           # Route pages
├── layout.tsx         # Layouts
├── loading.tsx        # Loading states
├── error.tsx          # Error boundaries
├── globals.css        # Global styles
├── ui/                # Reusable UI components
├── [slug]/            # Dynamic routes
└── lib/               # Utilities, types, data logic
```

### Best Practices

1. Run `pnpm tsc` before committing to catch type errors
2. Keep components small and focused
3. Extract reusable logic into utility functions
4. Use proper TypeScript types instead of falling back to `any`
5. Handle loading and error states explicitly
6. Use semantic HTML elements for accessibility

## Common Issues

- **bcrypt build failures**: Run `pnpm install` to trigger postinstall for native modules
- **Path alias not working**: Ensure `@/*` is properly configured in tsconfig.json
- **Type errors**: Check that files are included in tsconfig.json "include" array