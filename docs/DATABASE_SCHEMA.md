# Database Schema

This document describes the database schema, data types, validation rules, and migration procedures. The schema is defined using Drizzle ORM in `shared/schema.ts`.

---

## Table of Contents

- [Overview](#overview)
- [Schema Definition](#schema-definition)
- [Table Descriptions](#table-descriptions)
- [Validation Schemas (Zod)](#validation-schemas-zod)
- [TypeScript Types](#typescript-types)
- [Entity Relationship Diagram](#entity-relationship-diagram)
- [Database Configuration](#database-configuration)
- [Migration Guide](#migration-guide)
- [Adding a New Table](#adding-a-new-table)

---

## Overview

| Property | Value |
|----------|-------|
| ORM | Drizzle ORM |
| Database | PostgreSQL (via Neon Serverless) |
| Schema File | `shared/schema.ts` |
| Migration Output | `./migrations/` |
| Validation | Zod (via `drizzle-zod`) |
| Current Storage | In-memory (`MemStorage`) |

The schema is defined once in `shared/schema.ts` and shared between the frontend and backend for type safety.

---

## Schema Definition

### File: `shared/schema.ts`

```typescript
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
```

---

## Table Descriptions

### users

Stores registered user accounts for authentication.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `varchar` | PRIMARY KEY, default `gen_random_uuid()` | Unique user identifier |
| `username` | `text` | NOT NULL, UNIQUE | Login username (email) |
| `password` | `text` | NOT NULL | Password (plain text in demo, hashed in production) |

**SQL equivalent:**
```sql
CREATE TABLE users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);
```

---

### news

Stores news articles and announcements published on the website.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `varchar` | PRIMARY KEY, default `gen_random_uuid()` | Unique article identifier |
| `title` | `text` | NOT NULL | Article headline |
| `excerpt` | `text` | NOT NULL | Short summary for previews |
| `content` | `text` | NOT NULL | Full article body |
| `category` | `text` | NOT NULL | Category (e.g., "Academic", "Events", "Achievement") |
| `image_url` | `text` | nullable | URL to the article's featured image |
| `published_at` | `timestamp` | NOT NULL | Publication date and time |

**SQL equivalent:**
```sql
CREATE TABLE news (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  published_at TIMESTAMP NOT NULL
);
```

---

### events

Stores school events and calendar items.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `varchar` | PRIMARY KEY, default `gen_random_uuid()` | Unique event identifier |
| `title` | `text` | NOT NULL | Event name |
| `description` | `text` | NOT NULL | Event details |
| `event_date` | `timestamp` | NOT NULL | Date and time of the event |
| `location` | `text` | nullable | Event venue |

**SQL equivalent:**
```sql
CREATE TABLE events (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP NOT NULL,
  location TEXT
);
```

---

### notifications

Stores system notifications for users (e.g., announcements, alerts).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | `varchar` | PRIMARY KEY, default `gen_random_uuid()` | Unique notification identifier |
| `title` | `text` | NOT NULL | Notification headline |
| `message` | `text` | NOT NULL | Notification body text |
| `category` | `text` | NOT NULL | Notification type (e.g., "info", "warning") |
| `created_at` | `timestamp` | NOT NULL | Creation timestamp |
| `read` | `integer` | NOT NULL, default `0` | Read status (0 = unread, 1 = read) |

**SQL equivalent:**
```sql
CREATE TABLE notifications (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  read INTEGER NOT NULL DEFAULT 0
);
```

---

## Validation Schemas (Zod)

Each table has a corresponding Zod insert schema created using `drizzle-zod`. These schemas validate data before insertion and automatically omit auto-generated fields.

| Schema | Based On | Omits | Used For |
|--------|----------|-------|----------|
| `insertUserSchema` | `users` | `id` (picks only `username`, `password`) | User registration |
| `insertNewsSchema` | `news` | `id` | Creating news articles |
| `insertEventSchema` | `events` | `id` | Creating events |
| `insertNotificationSchema` | `notifications` | `id` | Creating notifications |

### Example Usage

```typescript
import { insertNewsSchema } from "@shared/schema";

// Validate incoming data
const result = insertNewsSchema.safeParse(requestBody);
if (!result.success) {
  // result.error.issues contains validation errors
}

// Use validated data
const validatedNews = result.data;
```

---

## TypeScript Types

The schema exports both select (read) and insert (write) types for each table:

### Select Types (for reading data)

```typescript
type User = typeof users.$inferSelect;
// { id: string; username: string; password: string }

type News = typeof news.$inferSelect;
// { id: string; title: string; excerpt: string; content: string;
//   category: string; imageUrl: string | null; publishedAt: Date }

type Event = typeof events.$inferSelect;
// { id: string; title: string; description: string;
//   eventDate: Date; location: string | null }

type Notification = typeof notifications.$inferSelect;
// { id: string; title: string; message: string; category: string;
//   createdAt: Date; read: number }
```

### Insert Types (for creating data)

```typescript
type InsertUser = z.infer<typeof insertUserSchema>;
// { username: string; password: string }

type InsertNews = z.infer<typeof insertNewsSchema>;
// { title: string; excerpt: string; content: string;
//   category: string; imageUrl?: string; publishedAt: Date }

type InsertEvent = z.infer<typeof insertEventSchema>;
// { title: string; description: string; eventDate: Date; location?: string }

type InsertNotification = z.infer<typeof insertNotificationSchema>;
// { title: string; message: string; category: string;
//   createdAt: Date; read?: number }
```

---

## Entity Relationship Diagram

```
┌──────────────┐
│    users     │
├──────────────┤
│ id (PK)      │
│ username (UQ)│
│ password     │
└──────────────┘

┌──────────────┐     ┌──────────────┐     ┌────────────────┐
│    news      │     │   events     │     │ notifications  │
├──────────────┤     ├──────────────┤     ├────────────────┤
│ id (PK)      │     │ id (PK)      │     │ id (PK)        │
│ title        │     │ title        │     │ title          │
│ excerpt      │     │ description  │     │ message        │
│ content      │     │ event_date   │     │ category       │
│ category     │     │ location     │     │ created_at     │
│ image_url    │     └──────────────┘     │ read           │
│ published_at │                          └────────────────┘
└──────────────┘
```

> **Note:** Currently there are no foreign key relationships between tables. Future enhancements may add `user_id` references to notifications and a `gallery` table for images.

---

## Database Configuration

### File: `drizzle.config.ts`

```typescript
export default {
  dialect: "postgresql",
  schema: "./shared/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
};
```

### Connection

The application uses the Neon serverless PostgreSQL driver:

```typescript
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);
```

---

## Migration Guide

### Push Schema to Database

```bash
npm run db:push
```

This command uses `drizzle-kit push` to synchronize the schema defined in `shared/schema.ts` with the PostgreSQL database. It creates or alters tables as needed.

### Generate Migration Files

```bash
npx drizzle-kit generate
```

This creates SQL migration files in the `./migrations/` directory.

### Requirements

- Set the `DATABASE_URL` environment variable with a valid PostgreSQL connection string
- Example: `postgresql://user:password@host:5432/database`

---

## Adding a New Table

### Step 1: Define the Table

Add the table definition to `shared/schema.ts`:

```typescript
export const gallery = pgTable("gallery", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  altTextEn: text("alt_text_en"),
  altTextSi: text("alt_text_si"),
  uploadedAt: timestamp("uploaded_at").notNull(),
});
```

### Step 2: Create Validation Schema

```typescript
export const insertGallerySchema = createInsertSchema(gallery).omit({ id: true });
```

### Step 3: Export Types

```typescript
export type Gallery = typeof gallery.$inferSelect;
export type InsertGallery = z.infer<typeof insertGallerySchema>;
```

### Step 4: Update Storage Interface

Add CRUD methods to `IStorage` in `server/storage.ts` and implement them.

### Step 5: Push Schema

```bash
npm run db:push
```
