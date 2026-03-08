# API Reference

This document describes the backend API structure, available endpoints, middleware, and the storage interface. Use this as a reference when adding new API functionality.

---

## Table of Contents

- [Overview](#overview)
- [Server Configuration](#server-configuration)
- [Middleware](#middleware)
- [API Endpoints](#api-endpoints)
- [Storage Interface](#storage-interface)
- [Adding New Endpoints](#adding-new-endpoints)
- [Error Handling](#error-handling)
- [Authentication (Planned)](#authentication-planned)

---

## Overview

The backend is built with Express.js and TypeScript. It serves both the API routes and the frontend application on a single port.

**Base URL:** `http://localhost:5000`  
**API Prefix:** `/api`

All API endpoints are prefixed with `/api`. The frontend is served from the root `/` path.

---

## Server Configuration

**File:** `server/index.ts`

| Setting | Value | Description |
|---------|-------|-------------|
| Host | `0.0.0.0` | Listens on all network interfaces |
| Port | `5000` (default) | Configurable via `PORT` environment variable |
| Body Parsing | JSON + URL-encoded | Standard Express middleware |
| Static Files | `dist/public` (production) | Served via Express in production mode |

### Environment Detection

```
NODE_ENV=development  → Vite dev middleware with HMR
NODE_ENV=production   → Static file serving from dist/public
```

---

## Middleware

The following middleware is applied to all requests in order:

### 1. Body Parsers

```typescript
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

### 2. Request Logger

Logs all API requests with method, path, status code, and response time.

**Output format:**
```
GET /api/news 200 in 15ms
POST /api/contact 201 in 42ms
```

Only logs requests to `/api` routes to avoid logging static file requests.

### 3. Error Handler

Catches unhandled errors and returns a structured JSON response:

```json
{
  "message": "Error description here"
}
```

**Status codes:**
- Returns the error's `status` property if set
- Defaults to `500` for unhandled errors

---

## API Endpoints

### Current Endpoints

The API is currently minimal as the frontend uses mock data for demonstration purposes. The route registration system is in place and ready for expansion.

**File:** `server/routes.ts`

```typescript
export async function registerRoutes(app: Express): Promise<Server> {
  // Routes are registered here
  // ...
  const httpServer = createServer(app);
  return httpServer;
}
```

### Planned Endpoints

These endpoints align with the database schema and storage interface:

#### Users

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| `POST` | `/api/auth/login` | Authenticate user | `{ username, password }` | `{ user, token }` |
| `POST` | `/api/auth/register` | Create new user | `{ username, password }` | `{ user }` |
| `GET` | `/api/auth/me` | Get current user | - | `{ user }` |

#### News

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| `GET` | `/api/news` | List all news articles | - | `News[]` |
| `GET` | `/api/news/:id` | Get single article | - | `News` |
| `POST` | `/api/news` | Create article (admin) | `InsertNews` | `News` |

#### Events

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| `GET` | `/api/events` | List all events | - | `Event[]` |
| `GET` | `/api/events/:id` | Get single event | - | `Event` |
| `POST` | `/api/events` | Create event (admin) | `InsertEvent` | `Event` |

#### Notifications

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| `GET` | `/api/notifications` | List user notifications | - | `Notification[]` |
| `PATCH` | `/api/notifications/:id` | Mark as read | `{ read: 1 }` | `Notification` |

#### Contact

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|--------------|----------|
| `POST` | `/api/contact` | Submit contact form | `{ name, email, subject, message }` | `{ success: true }` |

---

## Storage Interface

**File:** `server/storage.ts`

The storage layer is abstracted behind the `IStorage` interface, allowing the backend to swap between in-memory storage and a database without changing route logic.

### Interface Definition

```typescript
interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}
```

### Current Implementation: MemStorage

The `MemStorage` class stores data in JavaScript `Map` objects. Data is lost when the server restarts.

```typescript
class MemStorage implements IStorage {
  private users: Map<string, User>;
  // ...
}
```

### Extending the Storage Interface

When adding new features, extend the interface first:

```typescript
interface IStorage {
  // Existing methods...
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // New methods (example):
  getNews(): Promise<News[]>;
  getNewsById(id: string): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
}
```

Then implement the methods in `MemStorage` (and eventually in a database-backed class).

---

## Adding New Endpoints

### Step 1: Define the Schema

Add the data model to `shared/schema.ts`:

```typescript
export const myTable = pgTable("my_table", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  // ...
});

export const insertMyTableSchema = createInsertSchema(myTable).omit({ id: true });
export type MyTable = typeof myTable.$inferSelect;
export type InsertMyTable = z.infer<typeof insertMyTableSchema>;
```

### Step 2: Update the Storage Interface

Add CRUD methods to `IStorage` in `server/storage.ts`:

```typescript
interface IStorage {
  // ... existing methods
  getMyItems(): Promise<MyTable[]>;
  createMyItem(item: InsertMyTable): Promise<MyTable>;
}
```

Implement them in `MemStorage`.

### Step 3: Add the Route

Register the endpoint in `server/routes.ts`:

```typescript
import { insertMyTableSchema } from "@shared/schema";

app.get("/api/my-items", async (req, res) => {
  const items = await storage.getMyItems();
  res.json(items);
});

app.post("/api/my-items", async (req, res) => {
  const parsed = insertMyTableSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid data", errors: parsed.error.issues });
  }
  const item = await storage.createMyItem(parsed.data);
  res.status(201).json(item);
});
```

### Step 4: Use from the Frontend

```typescript
// Query (GET)
const { data, isLoading } = useQuery<MyTable[]>({
  queryKey: ["/api/my-items"]
});

// Mutation (POST)
const mutation = useMutation({
  mutationFn: async (newItem: InsertMyTable) => {
    const res = await apiRequest("POST", "/api/my-items", newItem);
    return res.json();
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["/api/my-items"] });
  }
});
```

---

## Error Handling

### Route-Level Errors

Throw errors with status codes:

```typescript
app.get("/api/items/:id", async (req, res) => {
  const item = await storage.getItem(req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});
```

### Global Error Handler

Unhandled errors are caught by the global error handler in `server/index.ts`:

```typescript
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(status).json({ message });
});
```

---

## Authentication (Planned)

The following authentication architecture is planned for production:

### Session-Based Auth

1. User submits credentials to `POST /api/auth/login`
2. Server validates against hashed password (bcrypt)
3. Server creates session stored in PostgreSQL (connect-pg-simple)
4. Session ID sent as HTTP-only cookie
5. Subsequent requests include cookie for authentication
6. Protected routes check session validity

### Password Hashing

```typescript
import bcrypt from "bcrypt";

// Hash password on registration
const hashedPassword = await bcrypt.hash(password, 10);

// Verify password on login
const isValid = await bcrypt.compare(password, user.password);
```

### Route Protection Middleware

```typescript
function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session?.userId) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
}

app.get("/api/dashboard", requireAuth, async (req, res) => {
  // Only accessible to authenticated users
});
```
