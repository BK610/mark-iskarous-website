# Mark Iskarous Website - Handover Document

## Overview

This document provides an overview of the Mark Iskarous website codebase, its architecture, and development workflows. The website is built using modern web technologies and follows current best practices.

## Technology Stack

### Core Technologies

- **Astro**: A modern static site builder that allows you to build fast, content-focused websites. It's the main framework of this project.
- **React**: Used for interactive components within the Astro framework.
- **TypeScript**: Provides type safety and better developer experience.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Sanity.io**: A headless CMS (Content Management System) used for content management.

### Key Dependencies

- `@astrojs/react`: Integration between Astro and React
- `@astrojs/tailwind`: Tailwind CSS integration for Astro
- `@astrojs/vercel`: Deployment configuration for Vercel
- `sanity`: Sanity.io client and tools
- `swiper`: For carousel/slider components
- `lucide-react`: Icon library
- `tailwind-merge`: Utility for merging Tailwind classes

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layout templates
├── pages/          # Astro pages/routes
├── sanity/         # Sanity.io configuration and schemas
└── styles/         # Global styles and Tailwind configuration
```

## Development Workflow

### Setting Up the Development Environment

1. **Prerequisites**

   - Node.js (latest LTS version recommended)
   - npm or yarn package manager
   - Git

2. **Installation**

   ```bash
   npm install
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```
   This starts a local development server, by default at `http://localhost:4321`

### Common Development Tasks

1. **Adding New Pages**

   - Create new `.astro` files in the `src/pages` directory
   - The file name determines the URL route (e.g., `pages/about.astro` → `/about`)

2. **Creating Components**

   - Reusable components go in `src/components`
   - Use TypeScript for type safety
   - Follow the existing component structure
   - Components can be made with Astro or a Javascript framework like React

3. **Styling**

   - Use [Tailwind CSS](https://tailwindcss.com/) classes directly in components
   - Note: Uses **Tailwind V3**
   - Global styles can be added in `src/styles`

4. **Content Management**
   - Content is managed through Sanity.io
   - The schema definitions are in `src/sanity`
   - Use the Sanity Studio interface for content updates

### Deployment

The site is deployed on Vercel. The deployment process is automated:

1. Push changes to the main branch
2. Vercel automatically builds and deploys the changes
3. Preview deployments are created for pull requests

## Key Concepts for New Developers

### Astro

- Astro is a static site generator that allows you to write components in multiple frameworks
- Pages are written in `.astro` files, which use a template syntax similar to HTML
- Components can be written in React, but they're rendered to static HTML at build time

### Sanity.io

- Sanity is a headless CMS that manages all the website's content
- Content is structured using schemas defined in `src/sanity`
- The website fetches content from Sanity at build time

### TypeScript

- All components and utilities are written in TypeScript
- Type definitions help catch errors early and provide better IDE support
- The `tsconfig.json` file defines TypeScript configuration

### Tailwind CSS

- Utility-first CSS framework
- Classes are used directly in HTML/JSX
- Configuration is in `tailwind.config.mjs`

## Common Issues and Solutions

1. **Build Errors**

   - Check TypeScript errors first
   - Ensure all required environment variables are set
   - Verify Sanity.io connection

2. **Styling Issues**

   - Use the browser's dev tools to inspect elements
   - Check for conflicting Tailwind classes
   - Verify the component's responsive design

3. **Content Updates**
   - Use Sanity Studio for content changes
   - Verify content structure matches the schema
   - Check for missing required fields

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Contact

For any questions or issues, please contact [Bailey Kane](https://baileykane.co/).
