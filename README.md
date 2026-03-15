# LMS Front-End

A Learning Management System (LMS) front-end built with Next.js 15, React 19, and Tailwind CSS. Browse courses, view categories, manage your learning, and toggle between light and dark themes.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router) with Turbopack
- **UI:** [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com), [Radix UI](https://www.radix-ui.com)
- **Charts:** [Recharts](https://recharts.org)
- **Icons:** [Lucide React](https://lucide.dev)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

| Command       | Description                |
|--------------|----------------------------|
| `npm run build` | Build for production   |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint             |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home / landing
│   ├── dashboard/          # Dashboard
│   ├── courses/            # Course listing & detail
│   ├── categories/         # Category listing & detail
│   ├── profile/            # User profile
│   └── settings/           # Settings
├── components/
│   ├── common/             # Navbar, Footer
│   ├── ui/                 # Reusable UI (Radix + Tailwind)
│   └── mode-toggle.tsx     # Theme toggle
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities (e.g. cn)
├── providers/              # Theme provider
└── public/                 # Static assets
```

## Features

- **Courses:** Browse featured courses, view course details, and access “My Course” view
- **Categories:** Explore courses by category
- **Dashboard:** Overview and charts (Recharts)
- **Profile & Settings:** User profile and app settings
- **Dark/Light mode:** System-aware theme switching via next-themes

## Deploy

The app can be deployed on [Vercel](https://vercel.com). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)
