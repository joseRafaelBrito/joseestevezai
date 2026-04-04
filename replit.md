# replit.md

## Overview

This is a modern AI-focused landing page application built with React, TypeScript, and Express.js. The application showcases AI technology services and features with a dark, futuristic design theme. It's structured as a full-stack web application with a React frontend and Express.js backend, using Drizzle ORM for database operations and shadcn/ui components for the user interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: TailwindCSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular approach with separate components for each page section

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for efficient bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schemas with Zod validation
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL

## Key Components

### Frontend Components
- **Header**: Sticky navigation with smooth scrolling to sections
- **HeroSection**: Main landing area with AI-themed animations and CTAs
- **Features**: Grid layout showcasing intelligent AI capabilities
- **Services**: Detailed service offerings with gradient icons
- **Projects**: Portfolio showcase with hover effects
- **Testimonials**: Client feedback with star ratings
- **Blog**: Latest articles with modern card layouts
- **Footer**: Comprehensive footer with social links and company info

### UI System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Dark theme with AI-focused color palette (blues, purples, reds)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: CSS transitions and hover effects for interactive elements

### Backend Structure
- **Storage Interface**: Abstracted storage layer supporting both memory and database storage
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware
- **Development Tools**: Hot reload with Vite integration

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for data fetching
2. API requests go through centralized query client with error handling
3. Components receive data through React Query hooks
4. UI updates reactively based on query state

### Server-Side Data Flow
1. Express middleware processes incoming requests
2. Routes delegate to storage interface for data operations
3. Storage layer abstracts database operations
4. Responses are JSON-formatted with consistent error handling

### Database Operations
1. Drizzle ORM provides type-safe database queries
2. Schema definitions ensure data consistency
3. Migrations handle database structure changes
4. Connection pooling through Neon serverless

## External Dependencies

### Core Technologies
- **React**: UI library for component-based architecture
- **Express.js**: Web framework for API endpoints
- **Drizzle ORM**: Type-safe database operations
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type safety across the application

### UI Libraries
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built components with consistent design
- **Lucide React**: Icon library for consistent iconography
- **TanStack Query**: Server state management and caching

### Development Tools
- **Vite**: Fast build tool with HMR
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production
- **PostCSS**: CSS processing with autoprefixer

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and management
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React components to optimized static assets
2. **Backend Build**: esbuild bundles Express server to single file
3. **Asset Optimization**: Automatic code splitting and minification
4. **Type Checking**: TypeScript compilation ensures type safety

### Environment Configuration
- **Development**: Hot reload with Vite dev server and tsx
- **Production**: Static file serving through Express with optimized builds
- **Database**: PostgreSQL connection via environment variables

### Deployment Architecture
- Server serves both API endpoints and static frontend assets
- Database migrations handled through Drizzle Kit
- Environment-specific configurations for development and production

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.