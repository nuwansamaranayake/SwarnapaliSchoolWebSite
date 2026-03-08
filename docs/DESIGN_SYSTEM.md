# Design System

This document describes the visual design system, color tokens, typography, theming, and styling conventions used throughout the application. Follow these guidelines when creating new components or modifying existing ones.

---

## Table of Contents

- [Color System](#color-system)
- [Typography](#typography)
- [Spacing](#spacing)
- [Border Radius](#border-radius)
- [Dark Mode](#dark-mode)
- [Interaction States](#interaction-states)
- [CSS Variables Reference](#css-variables-reference)
- [Tailwind Configuration](#tailwind-configuration)
- [Styling Conventions](#styling-conventions)

---

## Color System

The application uses a HSL-based CSS variable system. Colors are defined in `client/src/index.css` as space-separated HSL values (without the `hsl()` wrapper) and referenced through Tailwind utility classes.

### Primary Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `45 90% 48%` (Gold) | `45 90% 50%` | Primary buttons, links, school branding |
| `--primary-foreground` | `45 10% 10%` | `45 10% 10%` | Text on primary backgrounds |
| `--background` | `0 0% 100%` (White) | `220 45% 8%` (Deep Navy) | Page background |
| `--foreground` | `220 45% 12%` (Dark Navy) | `220 8% 92%` (Off-white) | Default text color |

### Secondary & Accent

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--secondary` | `220 12% 88%` | `220 12% 18%` | Secondary buttons, subtle backgrounds |
| `--accent` | `220 10% 92%` | `220 10% 15%` | Hover states, highlighted areas |
| `--muted` | `220 10% 94%` | `220 10% 16%` | Muted text backgrounds |
| `--destructive` | `350 65% 45%` | `350 55% 50%` | Error states, delete actions |

### Surface Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--card` | `220 8% 98%` | `220 40% 10%` | Card backgrounds |
| `--popover` | `0 0% 100%` | `220 42% 10%` | Dropdown menus, popovers |
| `--sidebar` | `220 6% 96%` | `220 42% 12%` | Sidebar background |

### Chart Colors

Five chart colors are defined for data visualization:

| Token | Purpose |
|-------|---------|
| `--chart-1` | Primary chart color (navy blue) |
| `--chart-2` | Secondary chart color (gold) |
| `--chart-3` | Tertiary chart color (red/coral) |
| `--chart-4` | Quaternary chart color (green) |
| `--chart-5` | Quinary chart color (light blue) |

### How to Use Colors

```tsx
// Using Tailwind utility classes (preferred)
<div className="bg-primary text-primary-foreground">Gold button</div>
<div className="bg-card text-card-foreground">Card surface</div>
<div className="text-muted-foreground">Subtle text</div>

// Never use raw color values - always use design tokens
// BAD:  <div className="bg-yellow-500">
// GOOD: <div className="bg-primary">
```

---

## Typography

### Font Families

| Font | CSS Variable | Tailwind Class | Usage |
|------|-------------|----------------|-------|
| Inter | `--font-sans` | `font-sans` | Body text, general content |
| Poppins | - | `font-heading` | Headings, navigation labels |
| Noto Sans Sinhala | - | `font-sinhala` | Sinhala language text |
| Georgia | `--font-serif` | `font-serif` | Quotes, editorial content |
| Menlo | `--font-mono` | `font-mono` | Code snippets |

### Font Loading

Fonts are loaded via Google Fonts CDN in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Noto+Sans+Sinhala:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Text Hierarchy

Use three levels of text color for information hierarchy:

| Level | Class | Usage |
|-------|-------|-------|
| Primary | `text-foreground` | Main content, headings, important text |
| Secondary | `text-muted-foreground` | Supporting text, labels, metadata |
| Tertiary | `text-muted-foreground/60` | Least important info, timestamps, hints |

### Heading Pattern

```tsx
<h1 className="font-heading font-bold text-4xl md:text-6xl">Page Title</h1>
<h2 className="font-heading font-bold text-2xl md:text-3xl">Section Title</h2>
<h3 className="font-heading font-semibold text-xl">Subsection</h3>
<p className="text-muted-foreground">Body text paragraph.</p>
```

---

## Spacing

The application uses Tailwind's default spacing scale (based on 4px units). Three levels of spacing are used consistently:

| Level | Values | Usage |
|-------|--------|-------|
| Small | `gap-2`, `p-2`, `space-x-2` (8px) | Inside compact elements, between icons and text |
| Medium | `gap-4`, `p-4`, `py-6` (16-24px) | Inside cards, between form fields |
| Large | `gap-8`, `py-12`, `py-16` (32-64px) | Between sections, page padding |

### Section Spacing Pattern

```tsx
<section className="py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

---

## Border Radius

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| Small | 3px | `rounded-sm` | - |
| Medium | 6px | `rounded-md` | Buttons, cards, inputs (default) |
| Large | 9px | `rounded-lg` | Larger containers |
| Full | 50% | `rounded-full` | Avatars, pill badges |

**Rule:** Always use small to medium border radius unless creating circles or pills.

---

## Dark Mode

### Implementation

Dark mode uses Tailwind's class-based strategy:

```typescript
// tailwind.config.ts
darkMode: ["class"]
```

The `.dark` class is toggled on the `<html>` element, which swaps all CSS variable values defined in the `.dark` block of `index.css`.

### How It Works

1. CSS variables are defined in `:root` (light) and `.dark` (dark) blocks
2. Tailwind config maps these variables to utility classes
3. Components using Tailwind utilities automatically adapt

### When Manual Dark Variants Are Needed

If you use literal color values (not design tokens), you must include dark variants:

```tsx
// Using design tokens (automatic dark mode):
<div className="bg-card text-card-foreground">Adapts automatically</div>

// Using literal colors (manual dark mode required):
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">Manual variants</div>
```

---

## Interaction States

### Elevation System

The design system provides custom utility classes for hover and active states. These work with any background color and automatically adapt to light/dark mode.

| Utility Class | Effect | Usage |
|---------------|--------|-------|
| `hover-elevate` | Subtle background elevation on hover | Cards, list items, custom interactive elements |
| `active-elevate-2` | More pronounced elevation on press | Active/pressed state for interactive elements |
| `toggle-elevate` | Toggleable elevation state | Toggle buttons, selectable items |
| `toggle-elevated` | Applied with `toggle-elevate` when "on" | Indicates active toggle state |

### Rules

1. **Never** add custom hover/active background colors to `<Button>` or `<Badge>` - they have built-in elevation
2. **Never** use `hover-elevate` on elements with `overflow-hidden` or `overflow-scroll`
3. Use `hover-elevate` for custom interactive elements (cards, list items)
4. Use `active-elevate-2` alongside `hover-elevate` for press-down feedback

### Examples

```tsx
// Custom interactive card
<Card className="hover-elevate active-elevate-2 cursor-pointer">
  Card content
</Card>

// Button - already has built-in elevation, do NOT add hover-elevate
<Button variant="default">Click Me</Button>

// Toggle element
<div className={`toggle-elevate ${isActive ? 'toggle-elevated' : ''}`}>
  Toggleable Item
</div>
```

### Removing Default Elevation

```tsx
// Remove hover elevation from a component that has it by default
<Badge className="no-default-hover-elevate" />

// Remove active elevation
<Badge className="no-default-active-elevate" />
```

---

## CSS Variables Reference

### Full Variable List (index.css)

```css
:root {
  /* Backgrounds */
  --background: 0 0% 100%;
  --foreground: 220 45% 12%;

  /* Card surfaces */
  --card: 220 8% 98%;
  --card-foreground: 220 45% 12%;

  /* Popover surfaces */
  --popover: 0 0% 100%;
  --popover-foreground: 220 45% 12%;

  /* Primary (Gold) */
  --primary: 45 90% 48%;
  --primary-foreground: 45 10% 10%;

  /* Secondary */
  --secondary: 220 12% 88%;
  --secondary-foreground: 220 35% 18%;

  /* Muted */
  --muted: 220 10% 94%;
  --muted-foreground: 220 10% 40%;

  /* Accent */
  --accent: 220 10% 92%;
  --accent-foreground: 220 35% 18%;

  /* Destructive (Red) */
  --destructive: 350 65% 45%;
  --destructive-foreground: 350 10% 98%;

  /* Borders */
  --border: 220 8% 86%;
  --input: 220 8% 86%;
  --ring: 45 90% 48%;

  /* Sidebar */
  --sidebar-background: 220 6% 96%;
  --sidebar-foreground: 220 35% 18%;
  --sidebar-border: 220 8% 88%;
  --sidebar-accent: 220 10% 92%;
  --sidebar-accent-foreground: 220 35% 18%;
  --sidebar-ring: 45 90% 48%;

  /* Border radius */
  --radius: 0.5rem;
}
```

---

## Tailwind Configuration

### File: `tailwind.config.ts`

Key extensions to the default Tailwind configuration:

```typescript
{
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        // ... all other color mappings
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        sinhala: ["Noto Sans Sinhala", "sans-serif"],
      },
      borderRadius: {
        sm: ".1875rem",
        md: ".375rem",
        lg: ".5625rem",
      },
    },
  },
}
```

---

## Styling Conventions

### Do's

- Use design token classes (`bg-primary`, `text-foreground`, `bg-card`)
- Use shadcn/ui components (`Button`, `Card`, `Badge`, etc.)
- Use `hover-elevate` for custom interactive elements
- Use `font-heading` for headings, `font-sinhala` for Sinhala text
- Use responsive prefixes (`sm:`, `md:`, `lg:`)
- Include `data-testid` on all interactive and meaningful elements

### Don'ts

- Don't use raw color values (`bg-yellow-500`) - use design tokens instead
- Don't add hover/active colors to `<Button>` or `<Badge>` components
- Don't use `hover-elevate` with `overflow-hidden`
- Don't nest `<Card>` inside another `<Card>`
- Don't use `display: table` styling
- Don't use large border radius on elements (use `rounded-md` as default)
- Don't apply borders to fewer than 4 sides of rounded elements
