# Component Guide

This document describes every custom component in the application, its purpose, props, and usage patterns. Use this as a reference when maintaining or extending the frontend.

---

## Table of Contents

- [Layout Components](#layout-components)
- [Page Components](#page-components)
- [Section Components](#section-components)
- [Interactive Components](#interactive-components)
- [UI Component Library](#ui-component-library)
- [Contexts and Hooks](#contexts-and-hooks)
- [Adding a New Page](#adding-a-new-page)
- [Adding a New Component](#adding-a-new-component)

---

## Layout Components

### PageLayout

**File:** `client/src/components/PageLayout.tsx`

The primary layout wrapper used by all public pages. Provides consistent navigation, footer, and login modal across the site.

**Usage:**
```tsx
<PageLayout>
  <YourPageContent />
</PageLayout>
```

**Responsibilities:**
- Renders `Navigation` component at the top
- Renders `Footer` component at the bottom
- Manages `LoginModal` visibility through AppContext
- Passes language, authentication state, and callbacks to child components

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Page content to render between nav and footer |

---

### Navigation

**File:** `client/src/components/Navigation.tsx`

Sticky top navigation bar with school branding, page links, language toggle, and login button.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `onLoginClick` | `() => void` | Callback to open login modal |
| `onLanguageChange` | `(lang: string) => void` | Callback to switch language |
| `currentLanguage` | `string` | Current language code (`'en'` or `'si'`) |

**Key Features:**
- School logo, name ("Swarnapali Balika"), location ("National School, Anuradhapura"), and motto ("ප්‍රඥාව හා ආදර්ශය")
- Desktop navigation links (hidden on mobile, shown on `lg` breakpoint)
- Mobile hamburger menu with full navigation
- Language switcher dropdown (English / සිංහල)
- Notification bell icon
- Student Login button (shows "Login" on medium, "Student Login" on large screens)
- Active route highlighting

**Responsive Behavior:**
| Screen Size | Behavior |
|-------------|----------|
| Mobile (<640px) | Logo + compact name + hamburger menu |
| Tablet (640px-1024px) | Logo + full name + hamburger menu + login |
| Desktop (>1024px) | Logo + full name + nav links + all controls |

---

### Footer

**File:** `client/src/components/Footer.tsx`

Site-wide footer with school information, quick links, and social media.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language for bilingual content |

---

## Page Components

All page components are located in `client/src/pages/`. Each is a top-level route component.

### Home (`Home.tsx`)

Landing page assembling multiple section components:

```tsx
<PageLayout>
  <Hero />
  <StatsSection />
  <PrincipalMessage />
  <NewsSection />
  <GalleryPreview />
</PageLayout>
```

### About (`About.tsx`)

School information page with:
- School history and heritage
- Vision and mission statements
- Facilities overview
- Principal's profile (Mrs. Ayanthi Rathnayake)

### Academics (`Academics.tsx`)

Academic programs page with:
- Grade levels (6-13)
- A/L subject streams (Science, Commerce, Arts, Technology)
- Extracurricular activities
- Uses Tabs component for stream switching

### Admissions (`Admissions.tsx`)

Admission information page with:
- Step-by-step admission process
- Eligibility criteria
- Important dates
- FAQ section using Accordion component
- Uses structured data objects for bilingual content

### News (`News.tsx`)

News and events listing with:
- Category filtering (All, Academic, Events, Achievements)
- Search functionality
- Pagination (6 items per page)
- News cards with images, categories, dates
- All images are Sri Lankan specific

**State:**
- `activeTab` - Current filter category
- `searchQuery` - Search input text
- `currentPage` - Current pagination page

### Gallery (`Gallery.tsx`)

Photo gallery with:
- Category tabs for filtering
- Grid layout of images
- All images from swarnapalibalika.lk or Sri Lankan sources

### Contact (`Contact.tsx`)

Contact page with:
- Contact form (react-hook-form + Zod validation)
- School address, phone, email
- Google Maps embed
- Form submission with toast notification feedback

### Dashboard (`Dashboard.tsx`)

Protected student portal:
- Checks `isLoggedIn` from AppContext on mount
- Redirects to `/` if not authenticated
- Renders `StudentDashboard` component with courses, assignments, grades

---

## Section Components

These are used within page components to build page layouts.

### Hero

**File:** `client/src/components/Hero.tsx`

Full-width hero banner on the home page.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language code |

**Content displayed:**
- Subtitle badge: "Leading Girls' School in North Central Province"
- Main title: "Excellence Through Exceptional Knowledge, Wisdom and Virtue"
- School motto in large Sinhala text: "ප්‍රඥාව හා ආදර්ශය"
- School description paragraph
- Two CTA buttons: "Take Virtual Tour" (links to `/gallery`) and "Admissions 2025" (links to `/admissions`)

---

### StatsSection

**File:** `client/src/components/StatsSection.tsx`

Animated statistics counter section showing school metrics.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language code |

**Stats displayed:** Student count, teacher count, pass rate, years of excellence.

---

### PrincipalMessage

**File:** `client/src/components/PrincipalMessage.tsx`

Principal's welcome message with photo and quote.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language code |

**Features:**
- Principal's photo (Mrs. Ayanthi Rathnayake - actual photo)
- Quoted message in selected language
- Name and title

---

### NewsSection

**File:** `client/src/components/NewsSection.tsx`

Preview of latest news items on the home page (3 items).

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language code |

**Features:**
- Three news cards with Sri Lankan imagery
- Category badges, dates, excerpts
- "View All News" button linking to `/news`

---

### GalleryPreview

**File:** `client/src/components/GalleryPreview.tsx`

Preview grid of gallery images on the home page (6 images).

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language code |

**Features:**
- Six image thumbnails from the school
- Bilingual alt text for accessibility
- Links to full `/gallery` page

---

## Interactive Components

### LoginModal

**File:** `client/src/components/LoginModal.tsx`

Dialog-based login form for the student portal.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `open` | `boolean` | Whether the modal is visible |
| `onOpenChange` | `(open: boolean) => void` | Callback to toggle visibility |
| `onLoginSuccess` | `() => void` | Callback after successful login |
| `language` | `string` | Current language code |

**Demo credentials:** `student@swarnapali.lk` / `demo2025`

---

### StudentDashboard

**File:** `client/src/components/StudentDashboard.tsx`

Dashboard content component for authenticated students.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `language` | `string` | Current language code |
| `onLogout` | `() => void` | Callback to handle logout |

**Features:**
- Course list with progress indicators
- Assignment tracker
- Grade overview
- Notifications panel

---

## UI Component Library

Located in `client/src/components/ui/`, these are shadcn/ui components built on Radix UI primitives. They are pre-configured with the application's design system.

### Available Components

| Component | File | Common Usage |
|-----------|------|-------------|
| `Accordion` | `accordion.tsx` | FAQ sections on Admissions page |
| `Badge` | `badge.tsx` | Category labels on news cards |
| `Button` | `button.tsx` | All interactive buttons |
| `Card` | `card.tsx` | Content containers (news, gallery, stats) |
| `Dialog` | `dialog.tsx` | Login modal |
| `DropdownMenu` | `dropdown-menu.tsx` | Language switcher |
| `Form` | `form.tsx` | Contact form (wraps react-hook-form) |
| `Input` | `input.tsx` | Form text inputs |
| `Tabs` | `tabs.tsx` | Category filtering (gallery, news, academics) |
| `Textarea` | `textarea.tsx` | Contact form message field |
| `Toast` / `Toaster` | `toast.tsx` / `toaster.tsx` | Form submission feedback |

### Usage Pattern

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

<Card>
  <CardHeader>Title</CardHeader>
  <CardContent>
    <Button variant="default" size="sm">Click Me</Button>
  </CardContent>
</Card>
```

### Button Variants

| Variant | Usage |
|---------|-------|
| `default` | Primary actions (gold background) |
| `secondary` | Active nav items, secondary actions |
| `ghost` | Icon buttons, subtle actions |
| `outline` | CTA buttons over images |
| `destructive` | Dangerous actions |

### Button Sizes

| Size | Height | Usage |
|------|--------|-------|
| `default` | min-h-9 | Standard buttons |
| `sm` | min-h-8 | Compact buttons (nav items) |
| `lg` | min-h-10 | Hero CTA buttons |
| `icon` | h-9 w-9 | Icon-only buttons (language, menu) |

---

## Contexts and Hooks

### AppContext

**File:** `client/src/contexts/AppContext.tsx`

Global state provider wrapping the entire application.

**State:**
| State | Type | Default | Description |
|-------|------|---------|-------------|
| `language` | `string` | `'en'` | Current UI language |
| `isLoggedIn` | `boolean` | `false` | Authentication status |
| `loginModalOpen` | `boolean` | `false` | Login modal visibility |

**Actions:**
| Function | Description |
|----------|-------------|
| `setLanguage(lang)` | Switch between `'en'` and `'si'` |
| `setIsLoggedIn(bool)` | Update authentication status |
| `setLoginModalOpen(bool)` | Show/hide login modal |

**Usage:**
```tsx
import { useApp } from "@/contexts/AppContext";

function MyComponent() {
  const { language, isLoggedIn, setLanguage } = useApp();
  // Use state and actions
}
```

### useToast

**File:** `client/src/hooks/use-toast.ts`

Hook for displaying toast notification messages.

```tsx
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();
toast({
  title: "Success",
  description: "Your message has been sent."
});
```

---

## Adding a New Page

Follow these steps to add a new page to the website:

### Step 1: Create the Page Component

Create a new file in `client/src/pages/`:

```tsx
// client/src/pages/NewPage.tsx
import { useApp } from "@/contexts/AppContext";
import PageLayout from "@/components/PageLayout";

export default function NewPage() {
  const { language } = useApp();

  const content = {
    en: {
      title: "Page Title",
      description: "Page description in English."
    },
    si: {
      title: "පිටුවේ මාතෘකාව",
      description: "සිංහල භාෂාවෙන් පිටුව විස්තරය."
    }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading font-bold text-3xl mb-4" data-testid="text-page-title">
          {c.title}
        </h1>
        <p data-testid="text-page-description">{c.description}</p>
      </div>
    </PageLayout>
  );
}
```

### Step 2: Register the Route

Add the route in `client/src/App.tsx`:

```tsx
import NewPage from "@/pages/NewPage";

// Inside the Router component:
<Route path="/new-page" component={NewPage} />
```

### Step 3: Add Navigation Link

Update the `navItems` array in `client/src/components/Navigation.tsx`:

```tsx
const navItems = [
  // ... existing items
  { path: '/new-page', label: currentLanguage === 'en' ? 'New Page' : 'නව පිටුව' },
];
```

### Step 4: Add data-testid Attributes

Add `data-testid` attributes to all interactive and meaningful elements following the naming convention:
- Interactive: `button-submit`, `input-email`, `link-profile`
- Display: `text-title`, `img-banner`, `status-result`

---

## Adding a New Component

### Step 1: Create the Component

```tsx
// client/src/components/NewComponent.tsx
interface NewComponentProps {
  language: string;
  // other props
}

export default function NewComponent({ language }: NewComponentProps) {
  const content = {
    en: { /* English content */ },
    si: { /* Sinhala content */ }
  };

  const c = content[language as keyof typeof content] || content.en;

  return (
    <section className="py-12">
      {/* Component content */}
    </section>
  );
}
```

### Step 2: Bilingual Content Pattern

Always use the content object pattern for bilingual support:

```tsx
const content = {
  en: { title: "English Title", description: "English text" },
  si: { title: "සිංහල මාතෘකාව", description: "සිංහල පෙළ" }
};
const c = content[language as keyof typeof content] || content.en;
```

### Step 3: Follow Design Guidelines

- Use shadcn/ui components (`Button`, `Card`, `Badge`, etc.)
- Use `hover-elevate` and `active-elevate-2` for interactive states
- Never implement custom hover/active background colors on Buttons or Badges
- Ensure dark mode compatibility
- Add `data-testid` attributes to all interactive and display elements
