# System Architecture

This document provides a high-level overview of the Swarnapali Balika National School website architecture. It is intended for developers who need to understand how the system is structured before making changes.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [System Diagram](#system-diagram)
- [Frontend Architecture](#frontend-architecture)
- [Backend Architecture](#backend-architecture)
- [Data Flow](#data-flow)
- [Build Pipeline](#build-pipeline)
- [Directory Structure](#directory-structure)

---

## Architecture Overview

The application follows a **monorepo full-stack architecture** with a React frontend and Express.js backend sharing a single codebase. Both the client and server are written in TypeScript and share type definitions through a `shared/` directory.

### Key Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Monorepo structure | Single repository | Simplified deployment, shared types between client/server |
| Frontend framework | React 18 + Vite | Fast development with HMR, TypeScript support |
| Routing | Wouter | Lightweight alternative to React Router (~1.5KB) |
| Styling | TailwindCSS + shadcn/ui | Utility-first CSS with accessible component primitives |
| State management | React Context + TanStack Query | Context for UI state, Query for server state |
| Backend | Express.js | Minimal, flexible HTTP server |
| ORM | Drizzle ORM | Type-safe queries, lightweight, PostgreSQL support |
| Validation | Zod | Runtime type checking shared between client and server |

---

## System Diagram

```
                    ┌─────────────────────────────────────────────┐
                    │              Browser (Client)                │
                    │                                             │
                    │  ┌─────────┐  ┌──────────┐  ┌───────────┐  │
                    │  │  Wouter │  │ AppContext│  │  TanStack  │  │
                    │  │ Router  │  │  (State)  │  │   Query    │  │
                    │  └────┬────┘  └────┬─────┘  └─────┬──────┘  │
                    │       │            │              │          │
                    │  ┌────▼────────────▼──────────────▼──────┐  │
                    │  │           React Components             │  │
                    │  │  (Pages, Navigation, Footer, etc.)     │  │
                    │  └───────────────────┬───────────────────┘  │
                    └─────────────────────┬───────────────────────┘
                                          │ HTTP Requests
                                          │ (fetch /api/*)
                                          ▼
                    ┌─────────────────────────────────────────────┐
                    │              Server (Express.js)             │
                    │                                             │
                    │  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
                    │  │  Routes  │  │Middleware │  │  Vite    │  │
                    │  │ (/api/*) │  │(logging,  │  │  Dev     │  │
                    │  │          │  │ parsing)  │  │  Server  │  │
                    │  └────┬─────┘  └──────────┘  └──────────┘  │
                    │       │                                     │
                    │  ┌────▼──────────────────────────────────┐  │
                    │  │     IStorage Interface                 │  │
                    │  │  ┌──────────┐    ┌─────────────────┐  │  │
                    │  │  │MemStorage│    │  DatabaseStorage │  │  │
                    │  │  │(current) │    │   (planned)      │  │  │
                    │  │  └──────────┘    └────────┬────────┘  │  │
                    │  └──────────────────────────┬────────────┘  │
                    └─────────────────────────────┬───────────────┘
                                                  │
                                                  ▼
                                    ┌─────────────────────────┐
                                    │   PostgreSQL (Neon)      │
                                    │   (planned/optional)     │
                                    └─────────────────────────┘
```

---

## Frontend Architecture

### Component Hierarchy

```
App.tsx
├── QueryClientProvider        (TanStack Query)
├── TooltipProvider            (Radix UI)
├── AppProvider                (Global state context)
│   └── Router (Wouter)
│       ├── Home               → PageLayout → Hero, Stats, PrincipalMessage, News, Gallery
│       ├── About              → PageLayout → School history, Vision, Facilities
│       ├── Academics          → PageLayout → Grade levels, Streams, Activities
│       ├── Admissions         → PageLayout → Process, Eligibility, FAQ Accordion
│       ├── News               → PageLayout → Filterable news grid with pagination
│       ├── Gallery            → PageLayout → Category-filtered photo gallery
│       ├── Contact            → PageLayout → Contact form, School info
│       └── Dashboard          → PageLayout → Protected student portal
└── Toaster                    (Toast notifications)
```

### State Management

The application uses three layers of state:

1. **Global State (AppContext)** - Language preference, authentication status, modal visibility
2. **Server State (TanStack Query)** - API data caching, background refetching
3. **Local State (useState/useReducer)** - Component-specific UI state (form inputs, filters, pagination)

### Routing

Routes are defined in `client/src/App.tsx` using Wouter's `<Route>` component:

| Path | Component | Protected |
|------|-----------|-----------|
| `/` | `Home` | No |
| `/about` | `About` | No |
| `/academics` | `Academics` | No |
| `/admissions` | `Admissions` | No |
| `/news` | `News` | No |
| `/gallery` | `Gallery` | No |
| `/contact` | `Contact` | No |
| `/dashboard` | `Dashboard` | Yes (redirects if not logged in) |

---

## Backend Architecture

### Server Lifecycle

1. Express app is created and configured with middleware
2. API routes are registered via `registerRoutes()` in `server/routes.ts`
3. In development: Vite dev server middleware is attached for HMR
4. In production: Static files are served from `dist/public`
5. HTTP server starts listening on port 5000 (configurable via `PORT` env var)

### Middleware Stack

```
Request → JSON Parser → URL Encoded Parser → Logging → Route Handler → Error Handler → Response
```

| Middleware | Purpose |
|-----------|---------|
| `express.json()` | Parse JSON request bodies |
| `express.urlencoded()` | Parse URL-encoded form data |
| Custom Logger | Log API requests with method, path, status, duration |
| Error Handler | Catch errors and return structured JSON error responses |

### Storage Layer

The storage layer uses an abstract interface pattern for easy database swapping:

```typescript
interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}
```

Currently implemented with `MemStorage` (in-memory Map). Ready to be replaced with a PostgreSQL-backed implementation using Drizzle ORM.

---

## Data Flow

### Language Switching Flow

```
User clicks Globe icon
  → Navigation component calls onLanguageChange()
  → AppContext updates language state ('en' ↔ 'si')
  → All child components re-render with new language
  → Content objects select correct language key
```

### Authentication Flow

```
User clicks "Student Login"
  → Navigation calls onLoginClick()
  → AppContext sets loginModalOpen = true
  → LoginModal renders with email/password form
  → User submits credentials
  → Client-side validation (demo: student@swarnapali.lk / demo2025)
  → AppContext sets isLoggedIn = true
  → Dashboard page becomes accessible
  → Dashboard checks isLoggedIn on mount, redirects to / if false
```

### Page Data Flow

```
Page Component mounts
  → Reads language from AppContext via useApp()
  → Selects content object based on language key
  → Renders bilingual content
  → Interactive elements (forms, filters) use local state
  → API calls (future) go through TanStack Query
```

---

## Build Pipeline

### Development

```bash
npm run dev
```

1. `tsx` runs `server/index.ts` directly (TypeScript execution)
2. Express server starts on port 5000
3. Vite dev middleware attaches to Express for frontend HMR
4. Single port serves both API routes and frontend

### Production

```bash
npm run build
npm start
```

1. `vite build` compiles React app to `dist/public/`
2. `esbuild` bundles server code to `dist/index.js`
3. `node dist/index.js` starts production server
4. Express serves static files from `dist/public/` and API routes

---

## Directory Structure

```
project-root/
├── client/                     # Frontend application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── ui/             # shadcn/ui base components (30+ components)
│   │   │   ├── Navigation.tsx  # Main nav with school branding
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   ├── Hero.tsx        # Home page hero section
│   │   │   ├── PageLayout.tsx  # Layout wrapper (nav + footer + login modal)
│   │   │   └── ...             # Other section components
│   │   ├── contexts/
│   │   │   └── AppContext.tsx   # Global state provider
│   │   ├── pages/              # Route-level page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility functions (queryClient, utils)
│   │   ├── App.tsx             # Root component with routing
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles, CSS variables, custom utilities
│   └── index.html              # HTML template
├── server/                     # Backend application
│   ├── index.ts                # Server entry, middleware, startup
│   ├── routes.ts               # API route definitions
│   ├── storage.ts              # Storage interface + MemStorage
│   └── vite.ts                 # Vite dev server integration
├── shared/
│   └── schema.ts               # Drizzle ORM schema + Zod validation
├── docs/                       # Documentation (you are here)
├── attached_assets/            # Static images and assets
│   └── stock_images/           # Sri Lankan school imagery
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind configuration with design tokens
├── vite.config.ts              # Vite build configuration
├── drizzle.config.ts           # Database migration configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project overview and setup guide
```
