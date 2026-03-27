# Website Design & Content Architecture

**Swarnapali Balika National School, Anuradhapura**
Document Version: 1.0 | Last Updated: 2026-03-26

---

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Information Architecture](#2-information-architecture)
- [3. Visual Design System](#3-visual-design-system)
- [4. Page-by-Page Content Architecture](#4-page-by-page-content-architecture)
- [5. Navigation & User Flows](#5-navigation--user-flows)
- [6. Responsive Design Strategy](#6-responsive-design-strategy)
- [7. Bilingual Content Strategy](#7-bilingual-content-strategy)
- [8. Component Architecture](#8-component-architecture)
- [9. Asset Inventory](#9-asset-inventory)
- [10. Technology Stack Summary](#10-technology-stack-summary)
- [11. Third-Party Integrations](#11-third-party-integrations)
- [12. Future Considerations](#12-future-considerations)

---

## 1. Project Overview

### 1.1 School Identity

| Attribute | Value |
|-----------|-------|
| **Full Name** | Swarnapali Balika National School |
| **Location** | Anuradhapura, North Central Province, Sri Lanka |
| **Type** | National girls' school |
| **Grades** | 1 through 13 |
| **Student Body** | 2,000+ students |
| **Motto** | ප්‍රඥාව හා ආදර්ශය (Wisdom and Virtue) |
| **Tagline** | Excellence Through Knowledge and Virtue |
| **Principal** | Mrs. Ayanthi Rathnayake (25+ years experience) |

### 1.2 Website Purpose

The website serves as the school's digital presence with five core goals:

1. **Public information** -- Showcase the school's history, academics, and facilities to prospective families
2. **News & events** -- Keep the community informed about school activities and achievements
3. **Admissions** -- Guide parents through the enrollment process
4. **Visual showcase** -- Display school life through categorised photo galleries
5. **Student portal** -- Provide authenticated access to academic dashboards (demo stage)

### 1.3 Target Audiences

| Audience | Primary Needs |
|----------|---------------|
| Prospective parents | Admissions process, academic programmes, facilities, school reputation |
| Current parents | News, events, contact information, principal's messages |
| Students | Portal login, academic dashboard, assignments, grades |
| General community | School history, achievements, gallery, contact |
| Administrative staff | Content management (future CMS integration) |

---

## 2. Information Architecture

### 2.1 Sitemap

```
Home (/)
├── About Us (/about)
│   ├── School History
│   ├── Vision & Mission
│   ├── Facilities (Library, Labs, Auditorium, Sports)
│   └── Principal's Profile
│
├── Academics (/academics)
│   ├── Grade Levels
│   │   ├── Primary (Grades 1-5)
│   │   ├── Secondary (Grades 6-9)
│   │   ├── O/L (Grades 10-11)
│   │   └── A/L (Grades 12-13)
│   ├── A/L Streams
│   │   ├── Science
│   │   ├── Commerce
│   │   ├── Arts
│   │   └── Technology
│   └── Extracurricular Activities
│
├── Admissions (/admissions)
│   ├── Admission Process (4 steps)
│   ├── Eligibility Criteria
│   ├── Important Dates
│   └── FAQ (Accordion)
│
├── News & Events (/news)
│   ├── Category Filter (Academic, Events, Achievements)
│   ├── Search
│   └── Paginated Articles (6 per page)
│
├── Gallery (/gallery)
│   └── Category Tabs (All, School Life, Sports, Cultural, Infrastructure)
│
├── Contact (/contact)
│   ├── Contact Form (Name, Email, Subject, Message)
│   ├── School Address & Phone
│   └── Social Media Links
│
└── Student Dashboard (/dashboard) [Protected]
    ├── Courses & Progress
    ├── Assignments
    ├── Grades
    └── Notifications
```

### 2.2 Content Hierarchy

Each page follows a consistent information hierarchy:

```
Navigation (sticky)
  └── Page Content
        ├── Hero / Page Header (title + description + optional CTA)
        ├── Primary Content Sections (cards, grids, accordions)
        ├── Supporting Content (stats, testimonials, previews)
        └── Call-to-Action (where applicable)
  └── Footer (links, contact info, social media, copyright)
```

---

## 3. Visual Design System

### 3.1 Colour Palette

The design uses an HSL-based CSS variable system with full light and dark mode support.

**Primary Colours:**

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | Gold `hsl(45, 90%, 48%)` | Gold `hsl(45, 90%, 50%)` | Buttons, links, accents, brand identity |
| `--primary-foreground` | Near-white `hsl(45, 5%, 98%)` | Dark navy `hsl(220, 45%, 8%)` | Text on primary backgrounds |

**Neutral Palette:**

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--background` | White `hsl(0, 0%, 100%)` | Navy `hsl(220, 45%, 8%)` | Page backgrounds |
| `--foreground` | Dark navy `hsl(220, 45%, 12%)` | Light grey `hsl(220, 8%, 92%)` | Body text |
| `--card` | Off-white `hsl(220, 5%, 98%)` | Dark navy `hsl(220, 40%, 10%)` | Card surfaces |
| `--muted` | Soft grey `hsl(220, 10%, 92%)` | Dark blue `hsl(220, 32%, 16%)` | Subdued backgrounds |
| `--muted-foreground` | Mid grey `hsl(220, 35%, 35%)` | Muted `hsl(220, 15%, 65%)` | Secondary text |
| `--border` | Light grey `hsl(220, 8%, 88%)` | Dark `hsl(220, 20%, 18%)` | Dividers and borders |

**Semantic Colours:**

| Token | Value | Usage |
|-------|-------|-------|
| `--destructive` | `hsl(350, 65%, 45%)` | Errors, destructive actions |
| `--ring` | Matches `--primary` | Focus rings |
| `--chart-1..5` | Navy, Gold, Rose, Green, Blue | Data visualisations |

**Design Rationale:** Gold (`hsl(45)`) as the primary accent evokes the school's name ("Swarnapali" = golden) and conveys prestige. Navy blue neutrals provide a professional, academic tone.

### 3.2 Typography

| Font Family | CSS Variable / Class | Weights | Usage |
|-------------|---------------------|---------|-------|
| **Inter** | `--font-sans` / `font-sans` | 300-900 | Body text, UI elements |
| **Poppins** | `font-heading` | 400-900 | Headings, navigation labels |
| **Noto Sans Sinhala** | `font-sinhala` | 400-700 | Sinhala script content |
| **Georgia** | `--font-serif` | -- | Fallback serif |
| **Menlo** | `--font-mono` | -- | Monospace/code |

All fonts loaded via Google Fonts CDN with preconnect optimisation in `client/index.html`.

### 3.3 Spacing & Layout

| Property | Value | Notes |
|----------|-------|-------|
| Base spacing unit | `0.25rem` (4px) | Via `--spacing` |
| Max content width | `max-w-7xl` (80rem / 1280px) | Centred with `mx-auto` |
| Horizontal padding | `px-4 sm:px-6 lg:px-8` | Responsive gutters |
| Section vertical padding | `py-12` to `py-20` | Generous whitespace |
| Card border radius | `--radius: 0.5rem` (8px) | Consistent rounding |
| Grid gap | `gap-4 sm:gap-6 lg:gap-8` | Responsive spacing |

### 3.4 Shadow System

Eight elevation levels from `--shadow-2xs` to `--shadow-2xl`, with separate light/dark mode definitions. Dark mode uses higher opacity for visibility against dark surfaces.

### 3.5 Elevation / Interaction System

Custom CSS utility classes provide layered interaction feedback:

| Class | Behaviour |
|-------|-----------|
| `hover-elevate` | Subtle overlay on hover (`rgba(0,0,0, 0.03)` light / `rgba(255,255,255, 0.04)` dark) |
| `active-elevate-2` | Stronger overlay on press (`rgba(0,0,0, 0.08)` light / `rgba(255,255,255, 0.09)` dark) |
| `toggle-elevate` + `toggle-elevated` | Persistent toggled state via `::before` pseudo-element |

These use `::before` (toggle) and `::after` (hover/active) pseudo-elements to compound visual states.

### 3.6 Dark Mode

- Toggled via CSS class (`.dark`) on the root element
- Managed by `next-themes` library
- Every colour token has a dark mode counterpart
- Shadow opacities increase in dark mode for visibility

---

## 4. Page-by-Page Content Architecture

### 4.1 Home Page (`/`)

**File:** `client/src/pages/Home.tsx`

**Section Breakdown:**

| Order | Component | Content | Design Pattern |
|-------|-----------|---------|----------------|
| 1 | `Hero` | School name, tagline, CTA buttons | Full-width banner with background image |
| 2 | `StatsSection` | Key statistics (students, teachers, pass rate, years) | 4-column responsive grid with animated counters |
| 3 | `PrincipalMessage` | Principal's photo, welcome message, quote | Two-column layout (image + text) |
| 4 | `NewsSection` | Latest 3 news articles preview | Card grid with "View All" link |
| 5 | `GalleryPreview` | Featured gallery images | Image grid with "View Gallery" link |

**Purpose:** Provide a complete first impression -- who the school is, its scale, leadership voice, latest activity, and visual identity.

### 4.2 About Us (`/about`)

**File:** `client/src/pages/About.tsx`

| Section | Content |
|---------|---------|
| Page Header | "About Us" title and introductory text |
| School History | Narrative of the school's establishment and growth |
| Vision & Mission | Statement of educational philosophy |
| Facilities | Card grid: Library (10,000+ books), Science Labs, Computer Lab, Auditorium |
| Principal's Profile | Mrs. Ayanthi Rathnayake -- photo, biography, 25+ years of service |

### 4.3 Academics (`/academics`)

**File:** `client/src/pages/Academics.tsx`

| Section | Content |
|---------|---------|
| Grade Levels | 4 tiers: Primary (1-5), Secondary (6-9), O/L (10-11), A/L (12-13) |
| A/L Streams | Science, Commerce, Arts, Technology -- each with description and icons |
| Extracurricular | Sports, cultural activities, music, debate clubs |

**Design:** Card-based layout with icons from Lucide (BookOpen, FlaskConical, Award, Trophy).

### 4.4 Admissions (`/admissions`)

**File:** `client/src/pages/Admissions.tsx`

| Section | Content | Component |
|---------|---------|-----------|
| Process Steps | 4-step admission flow with numbered visual steps | Ordered step cards |
| Eligibility | Grade-level requirements and criteria | Information cards |
| Important Dates | Key admission deadlines | Timeline/date display |
| FAQ | Common questions about admissions | shadcn/ui Accordion |

### 4.5 News & Events (`/news`)

**File:** `client/src/pages/News.tsx`

| Feature | Implementation |
|---------|---------------|
| Category Filter | Tabs: Academic, Events, Achievements |
| Search | Text search across article titles/excerpts |
| Article Cards | Image, title, excerpt, category badge, date |
| Pagination | 6 articles per page with prev/next navigation |

**Data:** Currently hardcoded; schema ready for database-backed content (`news` table in `shared/schema.ts`).

### 4.6 Gallery (`/gallery`)

**File:** `client/src/pages/Gallery.tsx`

| Feature | Implementation |
|---------|---------------|
| Category Tabs | All, School Life, Sports, Cultural, Infrastructure |
| Image Grid | Responsive masonry-style grid |
| Image Sources | 31 stock images in `attached_assets/stock_images/` |

**Image Categories:**
- School Life: Uniforms, classrooms, daily activities
- Sports: Sports day events, athletics
- Cultural: Annual day, traditional performances
- Infrastructure: Labs, library, buildings

### 4.7 Contact (`/contact`)

**File:** `client/src/pages/Contact.tsx`

| Section | Content |
|---------|---------|
| Contact Form | Fields: Name, Email, Subject, Message -- validated with React Hook Form + Zod |
| School Info | Address: Anuradhapura, Sri Lanka |
| Phone | +94 25 222 2334 |
| Email | info@swarnapalibalika.lk |
| Social Media | Facebook, YouTube, Instagram (links in footer and contact page) |

### 4.8 Student Dashboard (`/dashboard`) -- Protected

**File:** `client/src/pages/Dashboard.tsx`

| Feature | Content |
|---------|---------|
| Authentication | Demo login: `student@swarnapali.lk` / `demo2025` |
| Courses | List with progress bars |
| Assignments | Upcoming assignments display |
| Grades | Subject-wise grade table |
| Notifications | Badge-counted notification list |

**Access Control:** Checks `isLoggedIn` from AppContext; redirects to `/` if unauthenticated.

### 4.9 404 Not Found

**File:** `client/src/pages/not-found.tsx`

Simple error page with message and link back to Home.

---

## 5. Navigation & User Flows

### 5.1 Primary Navigation

```
┌──────────────────────────────────────────────────────────────────────┐
│ [Logo + School Name + Motto]          [Nav Items]    [🌐] [🔔] [Login] │
│  Swarnapali Balika                    Home | About | Academics | ... │
│  National School, Anuradhapura                                        │
│  ප්‍රඥාව හා ආදර්ශය                                                    │
└──────────────────────────────────────────────────────────────────────┘
```

**Behaviour:**
- Sticky (`sticky top-0 z-50`) with backdrop blur
- Active route highlighted via `variant="secondary"`
- Desktop: Full horizontal menu (`hidden lg:flex`)
- Mobile: Hamburger icon toggles slide-down menu (`lg:hidden`)
- Language toggle: Globe icon dropdown (English / සිංහල)
- Notifications: Bell icon with red dot indicator (hidden on mobile)
- Student Login: Button opens `LoginModal`

### 5.2 Footer Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  [S] Swarnapali Balika  │  About          │  Quick Links    │  Contact Us      │
│      National School     │  - History      │  - Admissions   │  📍 Address      │
│      "Excellence Through │  - Vision       │  - Academics    │  📞 Phone        │
│       Knowledge..."      │  - Principal    │  - News         │  ✉️  Email        │
│                          │  - Faculty      │  - Contact      │  Follow Us       │
│                          │                 │                 │  [f] [▶] [📷]    │
├─────────────────────────────────────────────────────────────────┤
│              © 2024 Swarnapali Balika National School            │
└─────────────────────────────────────────────────────────────────┘
```

4-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).

### 5.3 Key User Flows

**Prospective Parent Flow:**
```
Home → Hero CTA → Admissions → Process Steps → FAQ → Contact Form
```

**Current Parent Flow:**
```
Home → News Section → News Page → Filter by Category → Read Article
```

**Student Portal Flow:**
```
Nav Login Button → LoginModal → Enter Credentials → Dashboard
  └── Courses / Assignments / Grades / Notifications
```

**Language Switch Flow:**
```
Globe Icon → Select Language → All visible content re-renders in chosen language
  (State managed by AppContext, no page reload)
```

---

## 6. Responsive Design Strategy

### 6.1 Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Default (mobile) | < 640px | Single column, hamburger nav, stacked cards |
| `sm` | >= 640px | 2-column grids begin, buttons side-by-side |
| `md` | >= 768px | 2-column footer, notification bell visible |
| `lg` | >= 1024px | Full nav menu, 4-column grids, side-by-side layouts |
| `xl` | >= 1280px | Max content width reached (`max-w-7xl`) |

### 6.2 Responsive Patterns by Component

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Logo + hamburger | Logo + actions + hamburger | Full horizontal menu |
| Hero | Stacked, `text-4xl` | `text-6xl` | `text-7xl`, side-by-side CTAs |
| Stats | 1 column | 2 columns | 4 columns |
| News Cards | 1 column | 2 columns | 3 columns |
| Footer | 1 column stacked | 2 columns | 4 columns |
| Gallery Grid | 1-2 columns | 2-3 columns | 3-4 columns |
| Contact Form | Full width | Full width | Side-by-side with info |

### 6.3 Viewport Configuration

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
```

`maximum-scale=1` prevents unwanted zoom on iOS form inputs.

---

## 7. Bilingual Content Strategy

### 7.1 Supported Languages

| Code | Language | Script | Font |
|------|----------|--------|------|
| `en` | English | Latin | Inter / Poppins |
| `si` | Sinhala | Sinhala | Noto Sans Sinhala |

### 7.2 Implementation Pattern

Content is embedded directly in components using language-keyed objects:

```tsx
const content = {
  en: {
    title: "About Us",
    description: "Learn about our school..."
  },
  si: {
    title: "අප ගැන",
    description: "අපගේ පාසල ගැන දැනගන්න..."
  }
};

const c = content[language as keyof typeof content] || content.en;
```

**Key characteristics:**
- No external i18n library -- lightweight inline approach
- English is the fallback language
- Language state stored in `AppContext` and propagated via props
- Switching is instant (no page reload, React re-render only)
- The school motto ("ප්‍රඥාව හා ආදර්ශය") always displays in Sinhala regardless of language setting

### 7.3 Translated Surfaces

| Surface | Translated? |
|---------|-------------|
| Navigation labels | Yes |
| Page content (titles, body text) | Yes |
| Footer links and labels | Yes |
| Contact info (address) | Yes |
| Form labels and placeholders | Yes |
| School motto | Always Sinhala |
| Error messages | Partially |
| Student dashboard | Yes |

---

## 8. Component Architecture

### 8.1 Layout Components

| Component | File | Role |
|-----------|------|------|
| `PageLayout` | `components/PageLayout.tsx` | Wraps every page with Navigation + Footer + LoginModal |
| `Navigation` | `components/Navigation.tsx` | Sticky top bar with menu, language toggle, login |
| `Footer` | `components/Footer.tsx` | 4-column footer with links, contact, social |
| `LoginModal` | `components/LoginModal.tsx` | Authentication dialog for student portal |

### 8.2 Home Page Section Components

| Component | File | Description |
|-----------|------|-------------|
| `Hero` | `components/Hero.tsx` | Full-width banner with school name, tagline, CTAs |
| `StatsSection` | `components/StatsSection.tsx` | Animated counters for key statistics |
| `PrincipalMessage` | `components/PrincipalMessage.tsx` | Principal's photo and welcome message |
| `NewsSection` | `components/NewsSection.tsx` | Latest news cards with "View All" link |
| `GalleryPreview` | `components/GalleryPreview.tsx` | Featured images with "View Gallery" link |

### 8.3 UI Component Library (shadcn/ui)

Over 50 Radix UI-based primitives in `client/src/components/ui/`:

**Layout:** Card, Separator, Sheet, Sidebar, Tabs, Collapsible
**Forms:** Button, Input, Textarea, Select, Checkbox, Radio, Switch, Form, Label
**Feedback:** Alert, Badge, Toast/Toaster, Progress, Skeleton
**Overlay:** Dialog, Dropdown Menu, Popover, Tooltip, Command, Context Menu
**Navigation:** Breadcrumb, Pagination, Menubar, Navigation Menu
**Data Display:** Accordion, Avatar, Calendar, Chart, Table, Carousel

### 8.4 State Management

```
AppContext (React Context)
├── language: 'en' | 'si'
├── isLoggedIn: boolean
├── loginModalOpen: boolean
├── setLanguage()
├── setIsLoggedIn()
└── setLoginModalOpen()

TanStack React Query (Server State)
└── Configured for API data caching (ready for backend integration)

Local Component State (useState)
├── mobileMenuOpen (Navigation)
├── searchQuery (News)
├── selectedCategory (News, Gallery)
├── currentPage (News pagination)
└── Form field values (Contact)
```

---

## 9. Asset Inventory

### 9.1 Brand Assets

| Asset | Path | Size | Usage |
|-------|------|------|-------|
| School Logo | `attached_assets/image_1761150455059.png` | 1.1 MB | Navigation bar, favicon |
| Principal's Photo | `attached_assets/image_1761150645668.png` | 278 KB | About page, Home page |
| Decorative Graphic | `attached_assets/image_1761153373341.png` | 8.8 KB | Supplementary decoration |

### 9.2 Stock Photography

31 images in `attached_assets/stock_images/` (~7.9 MB total), depicting:

| Category | Count | Subjects |
|----------|-------|----------|
| Female students in uniform | 12 | Classroom, outdoor, group shots |
| School facilities | 3 | Computer lab, library, science lab |
| Sports events | 2 | Sports day, athletics |
| Cultural activities | 5 | Annual day, traditional performances, drama |
| School buildings | 1 | Exterior architecture |
| General school scenes | 8 | Assembly, campus life, ceremonies |

### 9.3 Icons

All icons sourced from **Lucide React** (tree-shakeable, consistent stroke-width). Key icons used:

- **Navigation:** Menu, X, Globe, Bell, LogIn
- **Sections:** BookOpen, Award, FlaskConical, Trophy, GraduationCap
- **Contact:** Send, Mail, Phone, MapPin, Calendar, Clock
- **UI:** ChevronLeft, ChevronRight, Search, Download, ExternalLink
- **Social:** Facebook, Youtube, Instagram

### 9.4 Fonts (External)

Loaded from Google Fonts CDN:
- Inter (300-900)
- Poppins (400-900)
- Noto Sans Sinhala (400-700)

---

## 10. Technology Stack Summary

### 10.1 Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                     │
│                                                         │
│  React 18 + TypeScript                                  │
│  ├── Wouter (Routing)                                   │
│  ├── TailwindCSS + shadcn/ui (Styling & Components)     │
│  ├── AppContext (Language, Auth State)                   │
│  ├── TanStack React Query (Data Fetching & Cache)       │
│  ├── React Hook Form + Zod (Form Validation)            │
│  ├── Framer Motion (Animations)                         │
│  └── Lucide React (Icons)                               │
│                                                         │
│  Build: Vite 5 with HMR                                 │
└─────────────────────┬───────────────────────────────────┘
                      │ HTTP /api/*
                      ▼
┌─────────────────────────────────────────────────────────┐
│                   Server (Express.js)                    │
│                                                         │
│  Node.js + TypeScript                                   │
│  ├── Express Middleware (JSON, URL-encoded, Logger)      │
│  ├── Passport.js (Authentication)                       │
│  ├── express-session (Session Management)               │
│  ├── IStorage Interface                                 │
│  │   ├── MemStorage (current - in-memory)               │
│  │   └── DatabaseStorage (planned - PostgreSQL)         │
│  └── Drizzle ORM + Zod (Schema & Validation)            │
│                                                         │
│  Build: esbuild                                         │
└─────────────────────┬───────────────────────────────────┘
                      │ (planned)
                      ▼
┌─────────────────────────────────────────────────────────┐
│              PostgreSQL (Neon Serverless)                 │
│                                                         │
│  Tables: users, news, events, notifications             │
│  Schema: shared/schema.ts (Drizzle ORM)                 │
└─────────────────────────────────────────────────────────┘
```

### 10.2 Dependency Highlights

| Category | Package | Version | Purpose |
|----------|---------|---------|---------|
| UI Framework | react | 18.3.1 | Component rendering |
| Build Tool | vite | 5.4.20 | Bundling, HMR |
| CSS | tailwindcss | 3.4.17 | Utility-first styling |
| Components | @radix-ui/* | Various | Accessible primitives (shadcn/ui) |
| Routing | wouter | 3.3.5 | Client-side routing (~1.5KB) |
| Data | @tanstack/react-query | 5.60.5 | Server state cache |
| Forms | react-hook-form | 7.55.0 | Performant forms |
| Validation | zod | 3.24.2 | Runtime type checking |
| Animation | framer-motion | 11.13.1 | Motion effects |
| Icons | lucide-react | 0.453.0 | SVG icon library |
| Server | express | 4.21.2 | HTTP server |
| ORM | drizzle-orm | 0.39.1 | Type-safe DB queries |
| Auth | passport | 0.7.0 | Authentication |

### 10.3 Database Schema

Four tables defined in `shared/schema.ts`:

```
users           news                events              notifications
─────           ────                ──────              ─────────────
id (UUID PK)    id (UUID PK)        id (UUID PK)        id (UUID PK)
username        title               title               title
password        excerpt             description         message
                content             eventDate           category
                category            location            createdAt
                imageUrl                                read (int)
                publishedAt
```

### 10.4 Build & Deployment

| Script | Command | Output |
|--------|---------|--------|
| Development | `npm run dev` | Vite HMR on port 5000 |
| Build | `npm run build` | `dist/public/` (client) + `dist/index.js` (server) |
| Production | `npm start` | Express serves static + API |
| Type Check | `npm run check` | TypeScript validation |
| DB Migrate | `npm run db:push` | Push Drizzle schema to PostgreSQL |

**Supported deployment targets:** Replit (native), Render, Vercel, Railway, VPS with Nginx + PM2.

---

## 11. Third-Party Integrations

### 11.1 Active Integrations

| Service | Usage | Status |
|---------|-------|--------|
| Google Fonts CDN | Inter, Poppins, Noto Sans Sinhala font delivery | Active |

### 11.2 Configured / Planned

| Service | Usage | Status |
|---------|-------|--------|
| Neon Serverless PostgreSQL | Database backend | Schema ready, needs `DATABASE_URL` |
| Passport.js Local Auth | Student authentication | Demo mode active |
| WebSocket (ws) | Real-time notifications | Library included, not yet implemented |
| Social Media (Facebook, YouTube, Instagram) | Footer/contact links | Links present, URLs not configured |
| Google Maps | School location on contact page | Structure ready, not embedded |
| Email Service | Contact form submission delivery | Form validated client-side, no backend handler |

---

## 12. Future Considerations

### 12.1 Content Management

Currently all page content is hardcoded in React components. Migration to a CMS or database-backed content model would enable non-developer content updates. The Drizzle ORM schema for `news`, `events`, and `notifications` is already in place.

### 12.2 SEO & Accessibility

- Server-side rendering (SSR) or static site generation (SSG) would improve search engine indexing
- Image optimisation (compression, WebP format, lazy loading) for the 31 stock images
- ARIA attributes are partially covered via Radix UI primitives but could be audited
- Open Graph / social meta tags for link previews

### 12.3 Performance

- The school logo is 1.1 MB and should be compressed
- Stock images (~7.9 MB total) could benefit from responsive image sizes and modern formats
- Font subsetting for Noto Sans Sinhala (only needed characters) would reduce load

### 12.4 Content Gaps

- Social media URLs not yet linked to real accounts
- Google Maps embed not integrated on contact page
- Contact form has no backend handler (validated but submissions go nowhere)
- Student dashboard uses demo data only
- No staff directory or individual teacher profiles
- No school calendar or term dates page
