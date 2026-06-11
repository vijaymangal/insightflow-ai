# InsightFlow AI

**Turn business data into actionable insights.**

A production-quality SaaS dashboard built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Recharts, Zustand, and React Query. Designed as a portfolio-worthy enterprise analytics platform inspired by Linear, Stripe, and Vercel.

![InsightFlow AI Dashboard](https://via.placeholder.com/1200x630/09090B/3B82F6?text=InsightFlow+AI)

## Features

- **Authentication** — Premium split-screen login, register, and forgot password flows
- **Dashboard Overview** — Animated KPI cards, Recharts visualizations, AI insights panel, activity feed
- **Analytics** — Multi-chart analytics with date range picker and export UI
- **Customers** — Advanced data table with search, sort, filter, and pagination
- **Revenue** — MRR/ARR tracking, forecasts, and subscription analytics
- **Reports** — Report center with download actions and scheduled reports
- **Settings** — Profile, security, billing, notifications, and theme preferences
- **Advanced UX** — Dark mode, command palette (⌘K), notifications, collapsible sidebar, page transitions

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework & routing |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui | UI component library |
| Framer Motion | Animations |
| Recharts | Data visualization |
| Zustand | Client state management |
| React Query | Server state & data fetching |
| Lucide React | Icons |
| TanStack Table | Data tables |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/insightflow-ai.git
cd insightflow-ai

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Login

Use any email and password on the login page — authentication is simulated for demo purposes.

## Project Structure

```
src/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/         # Protected dashboard pages
│   │   ├── dashboard/
│   │   ├── analytics/
│   │   ├── customers/
│   │   ├── revenue/
│   │   ├── reports/
│   │   └── settings/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── app-sidebar.tsx
│   ├── dashboard-header.tsx
│   ├── stat-card.tsx
│   ├── chart-card.tsx
│   ├── data-table.tsx
│   ├── insight-card.tsx
│   ├── activity-feed.tsx
│   ├── notification-panel.tsx
│   ├── command-palette.tsx
│   └── charts.tsx
├── features/
│   └── auth/                # Auth-specific components
├── hooks/
│   ├── use-dashboard-data.ts
│   └── use-keyboard-shortcuts.ts
├── services/                # Data fetching services
├── store/                   # Zustand stores
├── types/                   # TypeScript interfaces
├── lib/                     # Utilities
└── data/                    # Mock data
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deploy on Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

### Environment Variables

No environment variables are required for the demo. For production, you would add:

```env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret
```

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `⌘K` / `Ctrl+K` | Open command palette |
| `⌘/` / `Ctrl+/` | Open search |

## Color System

| Token | Value |
|---|---|
| Background | `#09090B` |
| Surface | `#111113` |
| Card | `#18181B` |
| Border | `#27272A` |
| Primary | `#0D9488` (Teal) |
| Accent | `#D97706` (Amber) |
| Success | `#10B981` |
| Warning | `#F59E0B` |
| Danger | `#EF4444` |

## License

MIT
