# Design Guidelines: Swarnapali Balika School Website

## Design Approach

**Reference-Based Approach** drawing from leading Sri Lankan school websites (Royal College, Ladies' College) while incorporating Buddhist educational institution aesthetics and modern web standards.

**Design Philosophy**: Professional academic excellence meets cultural heritage. Create a trustworthy, inspiring digital presence that reflects the school's status as North Central Province's leading girls' school while demonstrating technological advancement through portal simulations.

## Color Palette

**Primary Colors (Dark Mode)**
- Deep Navy Blue: 220 45% 25% (primary brand, headers, navigation)
- Rich Gold/Amber: 45 90% 55% (accents, CTAs, achievements)
- Pure White: 0 0% 100% (text on dark backgrounds)
- Soft Gray: 220 15% 95% (body text, cards)

**Secondary Colors**
- Burgundy Red: 350 65% 45% (cultural/Buddhist elements, important notices)
- Sage Green: 140 25% 50% (success states, academics section)
- Light Blue: 210 40% 92% (backgrounds, cards in dark mode)

**Functional Colors**
- Warning: 35 100% 50%
- Success: 145 65% 45%
- Error: 0 70% 50%

## Typography

**Font Families**
- Primary: 'Inter' (Google Fonts) - Modern, highly legible for UI elements, body text
- Headings: 'Poppins' (Google Fonts) - Strong, contemporary feel for hero sections and major headings
- Sinhala Support: 'Noto Sans Sinhala' (Google Fonts) - Seamless bilingual experience

**Type Scale**
- Hero/Display: text-5xl to text-7xl, font-bold (Poppins)
- Page Headings: text-3xl to text-4xl, font-semibold (Poppins)
- Section Headings: text-2xl, font-semibold (Inter)
- Body: text-base, font-normal (Inter)
- Small/Captions: text-sm, font-medium (Inter)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, and 32 for consistent vertical and horizontal rhythm.

**Container Strategy**
- Max width: max-w-7xl for main content
- Section padding: py-16 md:py-20 lg:py-24
- Card spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8 lg:gap-12

**Responsive Breakpoints**
- Mobile-first approach
- Use md: (768px) and lg: (1024px) breakpoints primarily
- Single column on mobile, 2-3 columns on desktop where appropriate

## Core Components

### Navigation
- Sticky top navigation with transparent-to-solid transition on scroll
- Logo left, primary nav center, language toggle + login button right
- Mobile: Hamburger menu with slide-in drawer
- Mega menu for Academics section showing grade levels

### Hero Sections
- Full-width hero image (school building, students in action) with dark overlay
- Large hero image of the school campus/students
- Centered content with bold Poppins headings
- Dual CTA buttons: Primary "Take Virtual Tour" + Outline "Admissions 2025"
- Subtle scroll indicator at bottom

### Cards & Content Blocks
- Elevated cards with subtle shadow and hover lift effect
- Image + content layouts for news/events (40% image, 60% content on desktop)
- Icon + heading + description pattern for features/academics
- Category tags with colored backgrounds

### Student Portal Components
- Login modal with school logo, username/password fields
- Demo credentials displayed: "Demo User: student@swarnapali.lk / Pass: demo2025"
- Dashboard with sidebar navigation (Courses, Assignments, Grades, Notifications)
- Card-based dashboard showing upcoming assignments, recent grades, notifications
- Mock LMS interface with course tiles showing progress bars

### Notification System
- Bell icon in header with unread count badge
- Dropdown panel showing 3 recent notifications
- Full notification page with filters (All, Academics, Events, Announcements)
- Notification cards with icon, timestamp, title, and preview text

### Forms
- Clean, accessible form design with proper labels
- Input fields with focus states and validation
- Contact form: Name, Email, Subject, Message fields
- Inquiry form for admissions with student details

## Page-Specific Design

### Homepage
1. **Hero**: Large image of school with overlaid heading "දැනුමෙන්, ගුණයෙන් - Excellence Through Knowledge and Virtue"
2. **Principal's Message**: Two-column (image left, message right) with elegant framing
3. **Quick Stats**: 4-column grid showing student count, teachers, achievements, years established
4. **Latest News Carousel**: 3 featured news cards with auto-rotate
5. **Achievement Showcase**: Highlight O/L and A/L results with visual graphs
6. **Upcoming Events**: Timeline-style layout with dates
7. **Gallery Preview**: Masonry grid of 6 images with "View All" CTA
8. **Call to Action**: Admissions banner with background image

### About Us
- School history timeline with milestone markers
- Vision/Mission statements in prominent boxes
- Principal and Vice-Principal profiles with photos
- School badge and motto explanation
- Facilities showcase with icon grid

### Academics
- Grade-level cards (Primary, Secondary, O/L, A/L) with student count
- Subject streams for A/L with detailed descriptions
- Academic calendar downloadable PDF
- Examination results statistics with charts
- Extra-curricular activities showcase

### Admissions
- Step-by-step admission process (numbered cards)
- Eligibility criteria table
- Required documents checklist
- Important dates calendar
- Download application form CTA
- FAQ accordion section

### News & Events
- Filter tabs: All, Academic News, Events, Achievements, Notices
- Search bar at top
- Grid layout: 3 columns on desktop, 1 on mobile
- Each card: Featured image, category badge, date, title, excerpt
- Pagination at bottom

### Gallery
- Category filters: School Life, Sports, Cultural, Ceremonies, Infrastructure
- Masonry grid layout
- Lightbox with image navigation and captions
- Download option for high-res images

### Contact
- Two-column: Contact form (left 60%) + Info sidebar (right 40%)
- Info sidebar: Address, phone, email, office hours, social media icons
- Google Maps embed showing school location
- Quick links to Admissions and Principal's office

## Special Features

### Bilingual Toggle
- Flag icons (🇱🇰 for Sinhala, 🇬🇧 for English) in header
- Smooth content transition without page reload
- Maintain user preference across navigation

### Student Portal Simulation
- Prominent "Student Login" button in navigation
- Modal login with demo credentials clearly shown
- After login: Full dashboard simulation with:
  - Sidebar: My Courses, Assignments, Grades, Notifications, Resources, Settings
  - Main area: Welcome message, upcoming tasks cards, grade summary
  - Mock course cards with progress indicators
  - Assignment list with due dates and submission status
  - Notification feed with school announcements

### Animations
- Subtle fade-in on scroll for content sections
- Smooth page transitions
- Hover effects on cards (slight lift + shadow increase)
- Loading states for portal simulation
- **Use sparingly** - prioritize performance and accessibility

## Images

**Required Images from Original Website**:
1. **Hero Image**: School building facade or students in assembly (wide format, 1920x800px minimum)
2. **Principal Photo**: Professional portrait for homepage and About page
3. **School Activities**: Students in classrooms, sports, cultural events (minimum 15 images)
4. **Infrastructure**: Library, labs, auditorium, playgrounds (8-10 images)
5. **Achievement Photos**: O/L and A/L result ceremonies, prize giving
6. **Gallery Collection**: Minimum 30 diverse images covering all aspects

**Image Treatment**: All images should have subtle overlays when used as backgrounds, maintain aspect ratios in cards, and use object-fit-cover for consistent presentation.