# Swarnapali Balika National School - Official Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)
![React](https://img.shields.io/badge/react-18.x-61DAFB.svg)

A modern, responsive, bilingual (English/Sinhala) website for **Swarnapali Balika National School, Anuradhapura** - the leading girls' school in North Central Province, Sri Lanka.

**School Motto:** ප්‍රඥාව හා ආදර්ශය (Wisdom and Virtue)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Pages](#pages)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Demo Credentials](#demo-credentials)
- [Design System](#design-system)
- [Bilingual Support](#bilingual-support)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## About

This website serves as the digital presence for Swarnapali Balika National School, Anuradhapura, one of Sri Lanka's premier girls' schools. The site provides comprehensive information about the school's history, academics, admissions process, latest news, photo gallery, and contact details. It also includes a fully functional simulated student portal for demonstration purposes.

All imagery used throughout the website features authentic Sri Lankan content - real photos from the official school website ([swarnapalibalika.lk](https://swarnapalibalika.lk)) and contextually appropriate Sri Lankan school imagery.

---

## Features

- **Bilingual Support** - Full English and Sinhala (සිංහල) language toggle with persistent language preference
- **Responsive Design** - Optimized for desktop, tablet, and smartphone viewing
- **Dark Mode** - Complete dark mode support throughout the application
- **Student Portal** - Protected dashboard with courses, assignments, grades, and notifications
- **Interactive Gallery** - Photo gallery with category filtering (Academic, Sports, Cultural, Facilities)
- **News & Events** - Filterable news section with search and pagination
- **Contact Form** - Functional contact form with validation
- **FAQ Accordion** - Interactive frequently asked questions on the Admissions page
- **School Branding** - Authentic school logo, principal's photo, and school motto displayed throughout
- **SEO Optimized** - Proper meta tags and semantic HTML structure

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section with school motto, statistics, principal's message, news preview, gallery preview |
| `/about` | About | School history, vision/mission, facilities, principal profile (Mrs. Ayanthi Rathnayake) |
| `/academics` | Academics | Grade levels (6-13), A/L streams (Science, Commerce, Arts, Technology), extracurricular activities |
| `/admissions` | Admissions | Admission process, eligibility criteria, important dates, FAQ accordion |
| `/news` | News & Events | All news articles with category filtering (Academic, Events, Achievements), search, and pagination |
| `/gallery` | Gallery | Photo gallery with category tabs and lightbox viewing |
| `/contact` | Contact | Contact form, school address, phone, email, Google Maps location |
| `/dashboard` | Student Portal | Protected route - courses, assignments, grades, notifications (requires login) |

---

## Technology Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI component library with TypeScript |
| **Vite** | Build tool and development server with HMR |
| **TailwindCSS** | Utility-first CSS framework with custom design tokens |
| **shadcn/ui** | Accessible UI component library built on Radix UI primitives |
| **Wouter** | Lightweight client-side routing |
| **TanStack React Query** | Server state management and data caching |
| **React Hook Form** | Performant form handling with Zod validation |
| **Lucide React** | Icon library |
| **date-fns** | Date formatting and manipulation |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Express.js** | HTTP server and API routes |
| **TypeScript** | Type-safe server code |
| **Drizzle ORM** | Database schema and type-safe queries |
| **Zod** | Runtime schema validation |
| **PostgreSQL** (planned) | Production database via Neon serverless |

### Fonts
- **Inter** - Body text
- **Poppins** - Headings
- **Noto Sans Sinhala** - Sinhala language text

---

## Project Structure

```
swarnapali-balika-website/
├── client/                          # Frontend application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── ui/                  # shadcn/ui base components
│   │   │   ├── Navigation.tsx       # Main navigation with school branding
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   ├── Hero.tsx             # Home page hero section
│   │   │   ├── PageLayout.tsx       # Layout wrapper (nav + footer)
│   │   │   ├── LoginModal.tsx       # Authentication modal
│   │   │   ├── NewsSection.tsx      # News preview component
│   │   │   ├── GalleryPreview.tsx   # Gallery preview component
│   │   │   ├── PrincipalMessage.tsx # Principal's message section
│   │   │   ├── StatsSection.tsx     # School statistics display
│   │   │   └── StudentDashboard.tsx # Dashboard content component
│   │   ├── contexts/
│   │   │   └── AppContext.tsx       # Global state (language, auth, modals)
│   │   ├── pages/                   # Route-level page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Academics.tsx
│   │   │   ├── Admissions.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── not-found.tsx
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── lib/                     # Utility functions
│   │   ├── App.tsx                  # Root component with routing
│   │   ├── main.tsx                 # Application entry point
│   │   └── index.css                # Global styles and CSS variables
│   └── index.html                   # HTML template
├── server/                          # Backend application
│   ├── index.ts                     # Server entry point
│   ├── routes.ts                    # API route definitions
│   ├── storage.ts                   # Storage interface and implementation
│   └── vite.ts                      # Vite dev server middleware
├── shared/
│   └── schema.ts                    # Shared data types and Drizzle schema
├── attached_assets/
│   └── stock_images/                # Sri Lankan school imagery
├── package.json
├── tailwind.config.ts
├── vite.config.ts
├── drizzle.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/swarnapali-balika-website.git
   cd swarnapali-balika-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5000`

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build optimized production bundle (client + server) |
| `npm start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push Drizzle schema to database |

---

## Deployment

This section walks you through deploying the website step by step. Choose the method that works best for you.

### Option 1: Deploy on Replit (Easiest for Beginners)

Replit is a browser-based platform where you can run and host the site without installing anything on your computer.

1. **Create a Replit account**
   - Go to [replit.com](https://replit.com) and sign up for a free account

2. **Import the project**
   - Click the **"+ Create Repl"** button
   - Select **"Import from GitHub"**
   - Paste the repository URL: `https://github.com/your-username/swarnapali-balika-website.git`
   - Click **"Import from GitHub"**

3. **Install dependencies**
   - Replit will detect the project type automatically
   - If prompted, click **"Run"** to install dependencies. Otherwise, open the Shell tab and type:
     ```bash
     npm install
     ```

4. **Start the application**
   - Click the green **"Run"** button at the top
   - The website will open in a preview panel on the right side
   - You will also get a public URL (like `https://your-project.your-username.repl.co`) that anyone can visit

5. **Publish (make it permanently live)**
   - Click the **"Deploy"** button in the top right
   - Choose **"Autoscale"** or **"Reserved VM"** deployment
   - Set the build command: `npm run build`
   - Set the run command: `npm start`
   - Click **"Deploy"** to publish your site

> **Tip:** On Replit, the site will be available at a `.replit.app` URL that you can share with anyone. You can also connect a custom domain (like `swarnapalibalika.lk`).

---

### Option 2: Deploy on Render (Free Tier Available)

Render is a cloud platform that can host full-stack applications with a free tier.

1. **Create a Render account**
   - Go to [render.com](https://render.com) and sign up (you can use your GitHub account)

2. **Connect your GitHub repository**
   - Click **"New +"** then select **"Web Service"**
   - Connect your GitHub account if not already connected
   - Select the `swarnapali-balika-website` repository

3. **Configure the service**
   - **Name**: `swarnapali-balika-website`
   - **Runtime**: `Node`
   - **Build Command**:
     ```bash
     npm install && npm run build
     ```
   - **Start Command**:
     ```bash
     npm start
     ```

4. **Set environment variables**
   - In the **"Environment"** section, add:
     - `NODE_ENV` = `production`
     - `SESSION_SECRET` = any random string (e.g., `my-super-secret-key-12345`)
   - If using a database, also add `DATABASE_URL` with your PostgreSQL connection string

5. **Deploy**
   - Click **"Create Web Service"**
   - Render will build and deploy your site automatically
   - Your site will be live at `https://swarnapali-balika-website.onrender.com`

---

### Option 3: Deploy on Vercel

Vercel is great for frontend-focused projects with serverless backends.

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

2. **Import the project**
   - Click **"Add New Project"**
   - Select the `swarnapali-balika-website` repository from GitHub

3. **Configure build settings**
   - **Framework Preset**: `Other`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Set environment variables**
   - Add `SESSION_SECRET` with a random string value

5. **Deploy**
   - Click **"Deploy"**
   - Your site will be live at `https://swarnapali-balika-website.vercel.app`

---

### Option 4: Deploy on Railway

Railway provides simple cloud hosting with GitHub integration.

1. **Create a Railway account**
   - Go to [railway.app](https://railway.app) and sign up with GitHub

2. **Create a new project**
   - Click **"New Project"**
   - Select **"Deploy from GitHub repo"**
   - Choose the `swarnapali-balika-website` repository

3. **Configure the service**
   - Railway auto-detects Node.js projects
   - Add environment variables:
     - `NODE_ENV` = `production`
     - `SESSION_SECRET` = any random string

4. **Deploy**
   - Railway will automatically build and deploy
   - Click **"Generate Domain"** to get a public URL

---

### Option 5: Deploy on a VPS (Advanced)

For those who want full control on a Virtual Private Server (e.g., DigitalOcean, AWS EC2, Linode).

1. **Set up your server**
   - Get a VPS running Ubuntu 22.04 or later
   - Connect via SSH:
     ```bash
     ssh your-username@your-server-ip
     ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and build the project**
   ```bash
   git clone https://github.com/your-username/swarnapali-balika-website.git
   cd swarnapali-balika-website
   npm install
   npm run build
   ```

4. **Set environment variables**
   ```bash
   export NODE_ENV=production
   export SESSION_SECRET=your-secret-key-here
   ```
   For permanent variables, add them to `/etc/environment` or use a `.env` file.

5. **Install PM2 (process manager)**
   PM2 keeps your site running even after you close the terminal or if it crashes.
   ```bash
   sudo npm install -g pm2
   pm2 start npm --name "swarnapali-website" -- start
   pm2 startup
   pm2 save
   ```

6. **Set up Nginx (web server)**
   Nginx acts as a reverse proxy, forwarding web traffic to your Node.js app.
   ```bash
   sudo apt install nginx
   ```

   Create a configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/swarnapali
   ```

   Paste this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/swarnapali /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Set up SSL (HTTPS) with Let's Encrypt**
   This makes your site secure with the padlock icon in the browser.
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```
   Follow the prompts and Certbot will automatically configure SSL.

8. **Your site is now live!**
   Visit `https://your-domain.com` to see your website.

---

### Connecting a Custom Domain

After deploying on any platform, you can connect a custom domain (like `swarnapalibalika.lk`):

1. **Purchase a domain** from a domain registrar (e.g., Namecheap, GoDaddy, Google Domains)

2. **Update DNS settings** - Add these records in your domain registrar's DNS settings:
   - **A Record**: Points to your server's IP address
   - **CNAME Record**: Points to your hosting platform's URL (e.g., `your-project.onrender.com`)

3. **Configure the domain on your hosting platform** - Each platform has a "Custom Domains" section where you add your domain name

4. **Wait for DNS propagation** - DNS changes can take up to 48 hours to take effect worldwide, but usually happen within a few minutes to a few hours

> **Note for Sri Lankan domains (.lk):** You can register `.lk` domains through [LK Domain Registry](https://www.nic.lk/).

---

### Troubleshooting Deployment

| Problem | Solution |
|---------|----------|
| Site shows blank page | Make sure you ran `npm run build` before starting with `npm start` |
| Port already in use | Change the port by setting the `PORT` environment variable |
| Dependencies fail to install | Delete `node_modules` folder and `package-lock.json`, then run `npm install` again |
| CSS/styles not loading | Clear browser cache (Ctrl+Shift+R) and ensure the build completed without errors |
| Images not loading | Check that the `attached_assets/stock_images/` folder was included in the deployment |
| "Module not found" error | Run `npm install` again to ensure all dependencies are installed |
| Site works locally but not deployed | Check that all environment variables are set on the hosting platform |

---

## Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NODE_ENV` | For production | Set to `production` for deployed sites |
| `DATABASE_URL` | For production | PostgreSQL connection string (Neon serverless) |
| `SESSION_SECRET` | For production | Secret key for session management (any random string, keep it private) |
| `PORT` | Optional | Port number for the server (default: 5000) |

### Development

The development server runs on port **5000** by default. Vite handles the frontend with hot module replacement, while Express serves the API routes - both on the same port.

---

## Demo Credentials

The student portal includes a demo authentication system for demonstration:

| Field | Value |
|-------|-------|
| **Email** | `student@swarnapali.lk` |
| **Password** | `demo2025` |

> **Note:** This is a client-side demo authentication. Production deployment would require proper server-side authentication with password hashing and session management.

---

## Design System

### Color Scheme
- **Primary**: Deep navy blue - representing trust and academic excellence
- **Accent**: Gold - representing achievement and the school's prestigious heritage
- **Cultural**: Burgundy tones for Buddhist/cultural elements

### Typography
- **Headings**: Poppins (clean, modern)
- **Body**: Inter (highly readable)
- **Sinhala**: Noto Sans Sinhala (native script support)

### Design Principles
- Navy blue and gold color scheme reflecting school identity
- Dark mode support with carefully tuned color variables
- Consistent spacing using Tailwind's spacing scale
- Accessible components via Radix UI primitives
- Mobile-first responsive design

---

## Bilingual Support

The website supports two languages with seamless switching:

- **English** (default)
- **Sinhala** (සිංහල)

Language switching is available via the globe icon in the navigation bar. The selected language persists across page navigation through React Context state management.

All content including:
- Navigation labels
- Page headings and body text
- Form labels and placeholders
- Button text
- Footer content
- School motto display

...is fully translated in both languages.

---

## Screenshots

### Home Page
The landing page features a hero section with the school motto "ප්‍රඥාව හා ආදර්ශය" (Wisdom and Virtue), school statistics, principal's message, news preview, and gallery preview.

### Navigation
Responsive navigation showing:
- School logo and name (Swarnapali Balika, National School, Anuradhapura)
- School motto in Sinhala
- Language toggle, notifications, and student login

### Student Portal
Protected dashboard showing courses, assignments, grades, and notifications for authenticated students.

---

## Future Enhancements

- [ ] PostgreSQL database integration for persistent data storage
- [ ] Server-side authentication with password hashing (bcrypt)
- [ ] Admin panel for content management (news, events, gallery)
- [ ] Email notifications for contact form submissions
- [ ] Event calendar with iCal export
- [ ] Alumni network section
- [ ] Online exam results portal
- [ ] Push notifications for important announcements
- [ ] Multi-language support expansion (Tamil)
- [ ] Integration with Sri Lankan education ministry systems

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use existing shadcn/ui components where possible
- Maintain bilingual support for all new content
- Test on both desktop and mobile viewports
- Ensure dark mode compatibility for new components
- Use authentic Sri Lankan imagery only

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Swarnapali Balika National School, Anuradhapura** - For inspiring this project
- **Principal Mrs. Ayanthi Rathnayake** - School leadership
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Noto Sans Sinhala** - Google Fonts for Sinhala language support

---

<p align="center">
  <strong>Swarnapali Balika National School, Anuradhapura</strong><br>
  ස්වර්ණපාලි බාලිකා ජාතික පාසල, අනුරාධපුරය<br>
  <em>ප්‍රඥාව හා ආදර්ශය - Wisdom and Virtue</em>
</p>
