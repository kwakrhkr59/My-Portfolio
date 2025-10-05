# My-Portfolio

This is a personal portfolio website built with Next.js and TypeScript. It showcases professional experience, projects, publications, awards, and contact information. The site is styled with Tailwind CSS and features a modern, responsive design.

## Features

- **Home Page:** Introduction, profile, and overview of skills and achievements
- **Experience:** Timeline of professional and academic experiences
- **Projects:** Detailed project pages with descriptions, images, and links
- **Publications:** List of academic or professional publications
- **Awards:** Highlights of awards and recognitions
- **Contact:** Contact form for direct communication
- **Dark/Light Theme:** Toggle between dark and light modes

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Data Fetching:** Custom API routes, Notion, Supabase
- **Deployment:** Vercel (recommended)

## Project Structure

```
components.json
public/           # Static assets (images, PDFs, SVGs)
src/
  app/            # Next.js app directory
    api/          # API routes for data fetching
    ...           # Pages (projects, experience, contact, etc.)
  components/     # Reusable UI and page components
  data/           # Static data files
  lib/            # Utility and data fetching libraries
  types/          # TypeScript type definitions
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Environment Variables

Create a `.env.local` file in the root directory and add the following if you want to enable email features:

```
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_gmail_app_password
```

## Customization

- Update your profile, experience, projects, and other data in the `src/data` and `src/lib` directories.
- Replace images and assets in the `public/` folder.
- Adjust theme and layout in the `src/components/layout` directory.

## License

This project is open source and available under the [MIT License](LICENSE).
