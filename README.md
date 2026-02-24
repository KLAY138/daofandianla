# 到饭点啦！ (Daofandianla) - Hackathon Project

## Project Overview
This is a landing page for the "到饭点啦！" (It's Time To Eat!) project, designed for the "North Tropic Hackathon - AI Agent Track".
The design mimics the "A City Boy" poster style with a retro/journalistic aesthetic.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Vercel

This project is optimized for Vercel deployment.

1. **Push to GitHub/GitLab/Bitbucket**:
   - Initialize git repo: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Push to your remote repository.

2. **Deploy on Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click "Add New..." -> "Project".
   - Import your git repository.
   - **Framework Preset**: Next.js (Default)
   - **Root Directory**: `.` (Default)
   - Click **Deploy**.

## Customization

- **Colors**: Edit `app/globals.css` to change the CSS variables (Cream background, Navy text, etc.).
- **Content**: Edit `app/page.tsx` to update text, images, and team info.
- **Images**: Replace placeholder images in `app/page.tsx` with your actual assets (put them in `public/` folder).

## Features
- **Responsive Design**: Mobile-first approach, looks great on phone and desktop.
- **Retro Aesthetic**: Paper texture, bold borders, specific color palette.
- **Components**:
  - Hero Section with Phone Mockup
  - Feature Grid
  - Pain/Gain Comparison
  - Process Flow
  - Team & Demo Sections

Good luck with the Hackathon! 🚀
