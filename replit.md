# Swarnapali Balika National School Website

## Overview

This is a bilingual (English/Sinhala) website for Swarnapali Balika National School, a leading girls' school in North Central Province, Sri Lanka. The application provides comprehensive information about the school including its history, academics, admissions, news, gallery, and contact information. It features a student portal for authenticated users to access their dashboard with courses, assignments, and grades.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight React Router alternative)
- TailwindCSS for utility-first styling with custom design system
- shadcn/ui components built on Radix UI primitives for accessible UI components

**Design System:**
- Custom color palette optimized for dark mode with deep navy blue primary, gold accents, and burgundy for Buddhist/cultural elements
- Typography using Inter (body), Poppins (headings), and Noto Sans Sinhala for bilingual support
- Consistent spacing primitives based on Tailwind's 4-unit system
- Component library located in `client/src/components/ui/` with standardized variants

**State Management:**
- React Context API via `AppContext` for global state (language preference, authentication status, modal state)
- TanStack React Query for server state management and caching
- Local component state using React hooks

**Routing Structure:**
- `/` - Home page with hero, stats, principal message, news preview, gallery preview
- `/about` - School history, vision/mission, facilities, principal profile
- `/academics` - Grade levels, A/L streams, extracurricular activities
- `/admissions` - Admission process, eligibility, important dates, FAQs
- `/news` - News and events with filtering and pagination
- `/gallery` - Photo gallery with category filtering
- `/contact` - Contact form and school information
- `/dashboard` - Protected student portal (requires authentication)

**Component Architecture:**
- Page components in `client/src/pages/` handle route-level logic
- Reusable UI components in `client/src/components/` (Navigation, Footer, Hero, etc.)
- Layout wrapper component (`PageLayout`) provides consistent navigation and footer
- Language-aware components receive language prop from AppContext

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for API endpoints
- Custom Vite middleware integration for development with HMR
- HTTP server creation using Node's native `http` module

**API Design:**
- RESTful API structure with `/api` prefix for all routes
- Request/response logging middleware for debugging
- JSON body parsing with raw buffer preservation for webhooks
- Session management ready (connect-pg-simple included for PostgreSQL sessions)

**Storage Interface:**
- Abstract `IStorage` interface defining CRUD operations
- `MemStorage` in-memory implementation for development/testing
- Designed to be swapped with database-backed implementation (PostgreSQL with Drizzle ORM)

### Data Storage Solutions

**Database Schema (Drizzle ORM):**
- `users` table: User authentication with username/password
- `news` table: News articles with title, excerpt, content, category, image URL, published date
- `events` table: School events with title, description, date, location
- `notifications` table: System notifications with read status tracking

**Database Configuration:**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries and migrations
- Schema definitions with Zod validation via `drizzle-zod`
- Migration files stored in `./migrations` directory
- Environment variable `DATABASE_URL` required for database connection

**Planned Database Integration:**
- Currently using in-memory storage (`MemStorage`)
- PostgreSQL database provisioning needed via Replit/Neon
- Drizzle migration system configured and ready (`npm run db:push`)

### Authentication and Authorization

**Current Implementation:**
- Demo authentication via LoginModal component
- Session state stored in React Context (`isLoggedIn` boolean)
- Protected routes check authentication status (Dashboard page)
- Demo credentials: student@swarnapali.lk / demo2025

**Planned Security:**
- Password hashing mechanism to be implemented
- Session management using connect-pg-simple (PostgreSQL session store)
- HTTP-only cookies for session tokens
- CSRF protection for forms
- Role-based access control for admin vs student users

### External Dependencies

**UI Component Libraries:**
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, tabs, etc.)
- TailwindCSS v3 for utility-first styling
- class-variance-authority for component variant management
- Embla Carousel for image galleries
- Lucide React for consistent icon system

**Form Handling:**
- React Hook Form for performant form state management
- Zod schema validation via @hookform/resolvers
- Client-side validation with server-ready schema definitions

**Date Management:**
- date-fns for date formatting and manipulation

**Development Tools:**
- Vite with React plugin for fast development and HMR
- TypeScript for type safety across client and server
- ESBuild for production server bundling
- Replit-specific plugins (runtime error overlay, cartographer, dev banner)

**Asset Management:**
- Stock images stored in `attached_assets/stock_images/` directory
- Vite alias configuration (`@assets`) for easy asset imports
- Static file serving in production via Express

**Google Fonts:**
- Inter, Poppins, and Noto Sans Sinhala loaded via Google Fonts CDN
- Font preconnection for performance optimization

**Build and Deployment:**
- Development: `npm run dev` runs Vite dev server with Express backend
- Production: `npm run build` creates optimized client bundle and bundles server code
- Server starts with `npm start` serving static files and API routes
- Environment variables managed via .env file (DATABASE_URL required)