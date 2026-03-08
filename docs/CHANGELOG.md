# Changelog

All notable changes to the Swarnapali Balika National School website are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.0.0] - 2025-10-22

### Added

- **Core Pages**: 7 fully functional public pages (Home, About, Academics, Admissions, News, Gallery, Contact)
- **Student Portal**: Protected dashboard at `/dashboard` with courses, assignments, grades, and notifications
- **Bilingual Support**: Full English and Sinhala (සිංහල) language toggle with persistent language preference
- **Responsive Design**: Optimized layouts for desktop, tablet, and smartphone
- **Dark Mode**: Complete dark mode support using class-based CSS variable theming
- **School Branding**: Authentic school logo, principal's photo (Mrs. Ayanthi Rathnayake), and school motto ("ප්‍රඥාව හා ආදර්ශය")
- **Navigation**: Responsive sticky navigation with school name, location (Anuradhapura), and motto
- **Hero Section**: Dynamic hero with title "Excellence Through Exceptional Knowledge, Wisdom and Virtue" and large Sinhala motto
- **Gallery**: Photo gallery with category filtering using authentic Sri Lankan imagery
- **News Section**: Filterable news with search, category tabs, and pagination (9 articles)
- **Contact Form**: Form with Zod validation and toast notification feedback
- **FAQ Accordion**: Interactive FAQ section on the Admissions page
- **Statistics Section**: Animated counters for school metrics
- **Principal's Message**: Featured section with actual principal's photo and bilingual message
- **Demo Authentication**: Client-side login for student portal demonstration

### Technical

- React 18 with TypeScript and Vite build system
- Express.js backend with TypeScript
- TailwindCSS with custom design system (navy blue and gold)
- shadcn/ui component library (30+ components)
- Wouter for client-side routing
- TanStack React Query for server state management
- Drizzle ORM schema ready for PostgreSQL (currently using in-memory storage)
- React Hook Form with Zod validation
- Google Fonts: Inter, Poppins, Noto Sans Sinhala

### Assets

- All imagery replaced with authentic Sri Lankan content
- Real school photos from swarnapalibalika.lk
- Sri Lankan-specific imagery for sports, cultural, and academic categories
- School logo from official website

---

## [Unreleased]

### Planned

- PostgreSQL database integration
- Server-side authentication with password hashing
- Admin panel for content management
- Email notifications for contact form
- Event calendar with iCal export
- Alumni network section
- Online exam results portal
- Tamil language support
