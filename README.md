# Repox Portal Webapp

This is a [Next.js](https://nextjs.org) project for the Repox Portal web application.

## Prerequisites

1. Node.js 18+
2. npm, yarn, pnpm, or bun package manager
3. Bun

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd repox-portal-webapp
```

2. Install dependencies:

```bash
bun install
```

## Environment Variables

**⚠️ IMPORTANT: You must create a `.env` file before running the application.**

Create a `.env` file in the root directory with the following required environment variables:

```env
# API Configuration
API_KEY=your_api_key_here
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_TENANT_KEY=your_tenant_key_here
```

### Environment Variables Explained

- `API_KEY`: Server-side API key for authenticating requests to the backend API
- `NEXT_PUBLIC_API_URL`: Base URL of the API endpoint (must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser)
- `NEXT_PUBLIC_TENANT_KEY`: Tenant identifier key for multi-tenant support (must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser)

You can copy the `.env.example` file as a template:

```bash
cp .env.example .env
```

Then edit `.env` and fill in your actual values.

## Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files. You can start editing the page by modifying `app/page.tsx`.

## Build

Build the application for production:

```bash
bun run build
```

This creates an optimized production build in the `.next` folder.

## Run Production Build

After building, start the production server:

```bash
bun run start
```

The production server will run on [http://localhost:3000](http://localhost:3000) by default.

## Linting

Run the linter to check for code issues:

```bash
bun run lint
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
