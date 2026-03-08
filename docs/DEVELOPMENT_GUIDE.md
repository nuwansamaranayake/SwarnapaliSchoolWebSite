# Development Guide

This guide helps new developers get started with the Swarnapali Balika National School website project. It covers setup, development workflow, coding conventions, and common tasks.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Development Workflow](#development-workflow)
- [Project Conventions](#project-conventions)
- [Common Tasks](#common-tasks)
- [Bilingual Content Guide](#bilingual-content-guide)
- [Image Guidelines](#image-guidelines)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Code Style](#code-style)

---

## Prerequisites

Before starting, ensure you have the following installed:

| Tool | Minimum Version | Check Command |
|------|----------------|---------------|
| Node.js | 18.0.0 | `node --version` |
| npm | 9.0.0 | `npm --version` |
| Git | 2.0+ | `git --version` |

### Recommended Editor

- **VS Code** with the following extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript Importer

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/swarnapali-balika-website.git
cd swarnapali-balika-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

### 4. Verify the Setup

- Open `http://localhost:5000` in your browser
- You should see the home page with the school hero section
- Click the language toggle (globe icon) to verify bilingual support
- Try the "Student Login" button (use `student@swarnapali.lk` / `demo2025`)

---

## Development Workflow

### Daily Development

1. Start the dev server: `npm run dev`
2. Make changes to files - Vite provides Hot Module Replacement (HMR)
3. Changes appear instantly in the browser without manual refresh
4. Check the terminal for any TypeScript or build errors

### File Change Effects

| File Changed | Effect |
|-------------|--------|
| `client/src/**/*.tsx` | Instant HMR update in browser |
| `client/src/index.css` | Instant CSS update |
| `server/**/*.ts` | Server restarts automatically |
| `shared/schema.ts` | Both client and server update |
| `tailwind.config.ts` | Full page reload required |

### Build for Production

```bash
npm run build    # Creates optimized bundle
npm start        # Starts production server
```

### Type Checking

```bash
npm run check    # Runs TypeScript compiler check
```

---

## Project Conventions

### File Organization

| Type | Location | Naming |
|------|----------|--------|
| Page components | `client/src/pages/` | `PascalCase.tsx` (e.g., `About.tsx`) |
| Reusable components | `client/src/components/` | `PascalCase.tsx` (e.g., `Navigation.tsx`) |
| UI primitives | `client/src/components/ui/` | `kebab-case.tsx` (e.g., `button.tsx`) |
| Contexts | `client/src/contexts/` | `PascalCase.tsx` (e.g., `AppContext.tsx`) |
| Custom hooks | `client/src/hooks/` | `kebab-case.ts` (e.g., `use-toast.ts`) |
| Utilities | `client/src/lib/` | `camelCase.ts` (e.g., `queryClient.ts`) |
| Server files | `server/` | `camelCase.ts` (e.g., `routes.ts`) |
| Shared types | `shared/` | `camelCase.ts` (e.g., `schema.ts`) |

### Import Aliases

The project uses path aliases configured in `vite.config.ts`:

| Alias | Path | Example |
|-------|------|---------|
| `@/` | `client/src/` | `import { Button } from "@/components/ui/button"` |
| `@shared/` | `shared/` | `import { User } from "@shared/schema"` |
| `@assets/` | `attached_assets/` | `import logo from "@assets/image.png"` |

### Component Pattern

Every component follows this structure:

```tsx
// 1. Imports
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";

// 2. Props interface
interface MyComponentProps {
  language: string;
}

// 3. Component function
export default function MyComponent({ language }: MyComponentProps) {
  // 4. Bilingual content
  const content = {
    en: { title: "English Title" },
    si: { title: "සිංහල මාතෘකාව" }
  };
  const c = content[language as keyof typeof content] || content.en;

  // 5. JSX with data-testid
  return (
    <section className="py-12">
      <h2 className="font-heading font-bold text-2xl" data-testid="text-section-title">
        {c.title}
      </h2>
    </section>
  );
}
```

### data-testid Convention

Every interactive or meaningful element must have a `data-testid` attribute:

| Element Type | Pattern | Example |
|-------------|---------|---------|
| Buttons | `button-{action}` | `button-submit`, `button-login` |
| Links | `link-{target}` | `link-home`, `link-about` |
| Inputs | `input-{field}` | `input-email`, `input-search` |
| Text displays | `text-{content}` | `text-title`, `text-subtitle` |
| Images | `img-{description}` | `img-logo`, `img-principal` |
| Status elements | `status-{type}` | `status-login`, `status-error` |
| Dynamic lists | `{type}-{desc}-{id}` | `card-news-${newsId}` |

---

## Common Tasks

### Add a New Page

1. Create `client/src/pages/NewPage.tsx` (see [Component Guide](COMPONENT_GUIDE.md#adding-a-new-page))
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/Navigation.tsx`
4. Add bilingual content (English + Sinhala)
5. Add `data-testid` attributes

### Add a New API Endpoint

1. Define schema in `shared/schema.ts` (if new data model)
2. Update `IStorage` interface in `server/storage.ts`
3. Implement in `MemStorage`
4. Add route in `server/routes.ts`
5. Validate request body with Zod schema

See [API Reference](API_REFERENCE.md#adding-new-endpoints) for detailed steps.

### Add a New UI Component from shadcn/ui

The project already includes 30+ shadcn/ui components in `client/src/components/ui/`. If you need one that isn't there:

1. Check the [shadcn/ui documentation](https://ui.shadcn.com/docs/components)
2. Install it via the shadcn CLI or manually copy the component
3. Place it in `client/src/components/ui/`

### Modify the Color Scheme

1. Edit CSS variables in `client/src/index.css` (both `:root` and `.dark` blocks)
2. Use HSL format: `H S% L%` (space-separated, no `hsl()` wrapper)
3. Reference via Tailwind: `bg-primary`, `text-foreground`, etc.

See [Design System](DESIGN_SYSTEM.md) for full details.

---

## Bilingual Content Guide

### Content Object Pattern

Every component that displays text should use the bilingual content pattern:

```tsx
const content = {
  en: {
    title: "Welcome to Swarnapali Balika",
    description: "A leading girls' school in Anuradhapura."
  },
  si: {
    title: "ස්වර්ණපාලි බාලිකාවට සාදරයෙන් පිළිගනිමු",
    description: "අනුරාධපුරයේ ප්‍රමුඛ බාලිකා පාසලකි."
  }
};

const c = content[language as keyof typeof content] || content.en;
```

### Translation Tips

- Always provide both English and Sinhala for all user-facing text
- Use `font-sinhala` class for Sinhala-specific text that should use Noto Sans Sinhala
- The school motto "ප්‍රඥාව හා ආදර්ශය" is always displayed in Sinhala regardless of language
- Navigation labels, form labels, button text, and error messages should all be bilingual

### Adding Sinhala Text

If you don't know the Sinhala translation:
1. Add the English text first
2. Mark it with a `// TODO: translate` comment
3. Consult with a Sinhala speaker for accurate translation
4. Avoid machine translation for school-specific terminology

---

## Image Guidelines

### Mandatory Requirements

- **All images must be Sri Lankan specific** - no generic international stock photos
- Use real photos from [swarnapalibalika.lk](https://swarnapalibalika.lk) when available
- Use contextually appropriate Sri Lankan school imagery for other content

### Image Sources (Priority Order)

1. Official school website: `https://swarnapalibalika.lk/img/`
2. Downloaded Sri Lankan imagery in `attached_assets/stock_images/`
3. Sri Lankan-specific stock photos (as a last resort)

### Using Images in Components

```tsx
// Importing local images
import schoolPhoto from "@assets/stock_images/school_image.jpg";

// Using in JSX
<img src={schoolPhoto} alt="Description in English" className="w-full h-48 object-cover" />

// Using remote images
<img src="https://swarnapalibalika.lk/img/school1.jpg" alt="School building" />
```

### Image Alt Text

Always provide descriptive alt text. For bilingual support:

```tsx
const altText = language === 'en'
  ? "Students participating in sports day"
  : "ක්‍රීඩා දිනයට සහභාගී වන සිසුන්";

<img src={img} alt={altText} />
```

---

## Testing

### Manual Testing Checklist

Before submitting changes, verify:

- [ ] Page loads correctly on desktop (1920px, 1440px, 1024px)
- [ ] Page loads correctly on mobile (375px, 414px)
- [ ] Language switch works (English ↔ Sinhala)
- [ ] Dark mode toggle works correctly
- [ ] All navigation links work
- [ ] Login modal opens and demo credentials work
- [ ] Forms validate correctly
- [ ] Images load properly
- [ ] No console errors in the browser

### TypeScript Check

```bash
npm run check
```

Fix any TypeScript errors before committing.

---

## Troubleshooting

### Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Blank page on load | JavaScript error | Check browser console (F12) for errors |
| Styles not applying | Tailwind class not generated | Restart dev server, check class name spelling |
| Image not loading | Wrong import path | Verify path matches file in `attached_assets/` |
| HMR not working | Vite connection lost | Refresh the page manually |
| TypeScript error | Type mismatch | Run `npm run check` and fix reported issues |
| Port 5000 in use | Another process using the port | Kill the process or set `PORT` env variable |
| Sinhala text not rendering | Font not loaded | Check Google Fonts link in `index.html` |
| Login not working | Wrong credentials | Use `student@swarnapali.lk` / `demo2025` |

### Useful Commands

```bash
# Check for TypeScript errors
npm run check

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json && npm install

# Check what's running on port 5000
lsof -i :5000
```

---

## Code Style

### TypeScript

- Use explicit types for function parameters and return values
- Prefer interfaces over type aliases for component props
- Use `const` by default, `let` only when reassignment is needed
- Destructure props in function signatures

### React

- Use functional components exclusively (no class components)
- Use hooks for state and side effects
- Keep components focused - extract sub-components when a file exceeds ~200 lines
- Always provide default values for optional props

### CSS / Tailwind

- Use Tailwind utility classes (not custom CSS) whenever possible
- Use design tokens (not literal colors)
- Follow the responsive pattern: mobile-first, then `sm:`, `md:`, `lg:`
- Use `gap` over `space-x` / `space-y` when possible

### Imports

Order imports consistently:
1. React and framework imports
2. Third-party library imports
3. Internal component imports (`@/components/...`)
4. Context and hook imports (`@/contexts/...`, `@/hooks/...`)
5. Utility imports (`@/lib/...`)
6. Type imports (`@shared/...`)
7. Asset imports (`@assets/...`)
