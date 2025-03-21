# Dynamic Dashboard with Authentication and API Integration

A fully functional, responsive dashboard application built with Next.js, featuring authentication, API data fetching, and a modern UI powered by Tailwind CSS and shadcn/ui components.

#

## Dashboard preview

https://dynamic-dashboard-cnm5.vercel.app

#

## 🚀 Features

### Authentication Flow

- Secure login page with email and password validation
- JWT token-based authentication
- Protected routes with automatic redirection
- User data stored in Neon PostgreSQL via Prisma ORM

### Dashboard Interface

- Clean, modern UI with responsive design
- Interactive header with user info and logout functionality
- Navigation sidebar with multiple sections
- Data table with search and filtering capabilities
- Pagination system (5 posts per page)

### API Integration

- Server-side data fetching from JSONPlaceholder API
- Client-side filtering and state management
- Comprehensive error handling
- Loading states for improved UX

### UI/UX Features

- Dark, light, and system theme modes
- Responsive design for all device sizes
- Interactive elements with hover effects and transitions
- Modular, reusable component architecture

#

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: Neon PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT Token
- **API**: JSONPlaceholder
- **Deployment**: Vercel

#

## 📋 Requirements

- Node.js 16.8 or later
- npm or yarn package manager
- PostgreSQL database (Neon PostgreSQL used in this implementation)

#

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sagarmanchakatla/dynamic-dashboard.git
   cd dynamic-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="your_neon_postgresql_connection_string"
   JWT_SECRET="your_jwt_secret_key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Set up the database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

#

## 🧩 Project Structure

```
I'll create a README structure that explains your project based on the directory structure shown in the image. Here's what your README could look like:
markdownCopy# Dynamic Dashboard

A web application with user authentication and dashboard functionality.

## Project Structure
dynamic-dashboard/
├── app/                      # Main application directory
│   ├── api/                  # API routes and handlers
│   │   ├── login/            # Login API endpoints
│   │   │   └── route.ts
│   │   ├── register/         # Registration API endpoints
│   │   │   └── route.ts
│   │   └── users/            # User management API endpoints
│   │       └── route.ts
│   ├── dashboard/            # Dashboard views
│   │   └── page.tsx
│   ├── login/                # Login page
│   │   └── page.tsx
│   ├── register/             # Registration page
│   │   └── page.tsx
│   └── team/                 # Team-related pages
│       └── members/          # Team members page
│           ├── page.tsx
│           ├── favicon.ico
│           ├── globals.css
│           ├── layout.tsx
│           └── page.tsx
├── components/               # Reusable UI components
│   ├── ui/                   # UI components
│   │   ├── auth-layout.tsx
│   │   ├── Header.tsx
│   │   ├── PostCard.tsx
│   │   ├── Sidebar.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── hooks/                # Custom React hooks
├── lib/                      # Utility functions and libraries
├── node_modules/             # Node.js dependencies
├── prisma/                   # Database ORM configuration
├── public/                   # Static assets
├── .env                      # Environment variables
├── .gitignore                # Git ignore configuration
├── components.json           # Component configuration
├── eslint.config.mjs         # ESLint configuration
├── next-env.d.ts             # Next.js TypeScript definitions
└── next.config.js            # Next.js configuration
```

#

## 🔄 Authentication Flow

1. User enters email and password on the login page
2. Form validation checks:
   - Email format validation
   - Password length (minimum 6 characters)
3. On successful login:
   - JWT token is generated and stored in localStorage
   - User is redirected to the dashboard
4. Protected routes:
   - Check for valid token before rendering
   - Redirect to login page if token is missing or invalid
5. Logout:
   - Clears token from localStorage
   - Redirects user to login page

#

## 📊 API Data Handling

- Client-side filtering implemented with React hooks:
  - `useState` for managing filter state
  - `useEffect` for handling filter changes
- Pagination system displays 5 posts per page
- Error boundary catches and displays API failures gracefully

#

## 🎨 UI Components

Built using shadcn/ui components for a consistent design language:

- Header with user dropdown and theme toggle
- Sidebar navigation with links to different sections
- Data table with sorting and filtering capabilities
- Form elements with validation states
- Cards for presenting information in organized sections

#

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically from your main branch

#

## 👤 Developer

Developed by Sagar Manchakatla

- [LinkedIn](https://www.linkedin.com/in/sagar-manchakatla-4163-523b44284/)
- [GitHub](https://github.com/sagarmanchakatla/dynamic-dashboard)

#
