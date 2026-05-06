<div align="center">
  <img src="src/assets/urai-logo-button.png" alt="URAI" width="120" />

  <br/>
  <br/>

  <p><em>The official website of Regensburg's student AI initiative</em></p>

  ![React 18](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
  ![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white)
</div>

---

The public-facing website for [URAI](https://urai-group.com/) — the AI student association at the University of Regensburg and OTH Regensburg.

Built with React, TypeScript, and Tailwind CSS. Deployed automatically via Vercel on every merge to `main`.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 (SWC) |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix primitives) |
| Routing | React Router DOM 6 |
| Server State | TanStack Query 5 |
| Forms | React Hook Form + Zod |
| Testing | Vitest + Testing Library |
| Deployment | Vercel (with serverless functions) |
| Font | Inter (self-hosted variable font) |

## Project Structure

```text
urai-website/
├── src/
│   ├── components/          Section components (HeroSection, Footer, etc.)
│   │   └── ui/              shadcn/ui primitives (do not edit manually)
│   ├── pages/               Route-level pages
│   ├── hooks/               Custom hooks (parallax, particles, mobile detection)
│   ├── lib/                 Utilities
│   ├── assets/              Images, logos, sponsor assets
│   ├── App.tsx              Route definitions
│   ├── main.tsx             Entry point
│   └── index.css            Design tokens + Tailwind directives
├── api/                     Vercel serverless functions
├── public/                  Favicons, fonts, PWA manifest
└── vercel.json              SPA rewrite rules
```

## Routes

| Path | Page |
|------|------|
| `/` | Landing page |
| `/member` | Membership |
| `/impressum` | Legal notice |
| `/privacy` | Data privacy |
| `*` | 404 |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:8080)
npm run dev

# Production build
npm run build

# Run tests
npm test

# Lint
npm run lint
```

## Environment Variables

Required only for the contact form serverless function (`api/send-email.ts`):

| Variable | Required | Description |
|----------|----------|-------------|
| `MAILGUN_API_KEY` | Yes | Mailgun API key |
| `MAILGUN_DOMAIN` | Yes | Mailgun sending domain |
| `CONTACT_EMAIL` | No | Recipient address (defaults to `contact@urai-group.com`) |

These are configured in the Vercel dashboard, not committed to the repo.

## Conventions

| Concern | Convention |
|---------|-----------|
| Site content language | German |
| Code and comments | English |
| Components | PascalCase named exports |
| Hooks | `use-` prefix, kebab-case filenames |
| Pages | Lowercase filenames |
| Colors | HSL via CSS custom properties |
| Commits | [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) |
| Path alias | `@src/` resolves to `./src/` |

## Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feat/my-change`)
3. Commit using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
4. Open a pull request against `main`

Merged changes are automatically deployed by Vercel.

## License

Internal project of [URAI e.V.](https://urai-group.com/)
