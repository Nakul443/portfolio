# Nakul Kumar Singh Portfolio

A modern, production-ready Next.js 14 portfolio for a software developer, featuring advanced animations, 3D effects, and a signature timeline illumination effect.

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion
- React Three Fiber (Three.js)
- Lucide React
- React Hook Form + Zod
- FormSubmit.co (Email Service)
- ESLint & Prettier

## Features
- Hero section with 3D floating tech icons
- Animated experience timeline (signature effect)
- 3D project cards with hover effects
- Animated skills, achievements, and counters
- Functional contact form with email service
- Responsive, accessible, and SEO-optimized
- Centralized dark/light theme toggle

## Getting Started
```bash
cd portfolio
npm install
npm run dev
```

## Email Service Setup

This portfolio uses [FormSubmit.co](https://formsubmit.co/) as a free, no-signup email service for the contact form. The implementation:

1. Sends emails directly to `nakul.kumar627@gmail.com` when users submit the contact form
2. Includes proper subject formatting with the user's subject line
3. Formats the message in a clean, readable table format
4. Requires no API keys, passwords, or backend code

### How It Works

The contact form uses FormSubmit.co's service by setting the form's action to their endpoint with your email address. When a user submits the form:

1. The data is sent directly to FormSubmit.co's servers
2. FormSubmit.co processes the submission and forwards it to your email
3. The user sees a success message on your site

### Customization

To change the recipient email, update the form action in `components/sections/Contact.tsx`:

```jsx
action="https://formsubmit.co/your-email@example.com"
```

Additional FormSubmit.co options are configured via hidden input fields in the form.

## Customization
- All main sections/components are in `components/sections` and `components/ui`.
- Animations are in `components/animations`.
- Theme logic is centralized for easy editing.

---

© Nakul Kumar Singh
