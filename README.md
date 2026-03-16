# Learning Next.js 16

A modern dashboard application built with Next.js 16 App Router, featuring invoice management, authentication, and data visualization.

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js v5
- **Database**: PostgreSQL
- **Validation**: Zod

## Features

- User authentication with NextAuth.js
- Invoice management (create, edit, view)
- Customer management
- Revenue dashboard with charts
- Responsive design
- Type-safe data handling

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with Turbopack |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm tsc` | Run TypeScript type checking |

## Project Structure

```
app/
├── page.tsx           # Home page
├── layout.tsx         # Root layout
├── login/             # Login page
├── ui/                # Reusable components
│   ├── dashboard/     # Dashboard components
│   ├── invoices/      # Invoice components
│   └── customers/     # Customer components
└── lib/               # Utilities and types
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [Tailwind CSS](https://tailwindcss.com)

## License

MIT
