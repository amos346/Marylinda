# MARYLINDA | Author Portfolio & Ebook Showcase

A stunning, premium, minimalist, and highly interactive author portfolio website for American author **MARYLINDA**. Designed with an exquisite editorial aesthetic inspired by luxury literary magazines and independent publishing houses.

---

## 📚 Project Overview

Marylinda's portfolio is built as a single-page landing website featuring exactly 7 immersive sections:
1. **Hero / Front Page**: Full-screen literary study background, editorial typography, welcome intro, and primary/secondary CTAs.
2. **About the Author**: Sophisticated two-column layout with author portrait, rich biography, writing philosophy, signature, and an interactive "Read My Story" modal.
3. **Featured Books ("Stories Worth Discovering")**: Showcase of published ebooks and philosophy works featuring the author's real photography assets, synopsis, excerpt, and purchase links.
4. **The Writing Journey**: Behind-the-scenes editorial exploration of the creative process, research, and character crafting.
5. **Reader Experiences ("Words From My Readers")**: Testimonial carousel with critic praise, star ratings, and smooth navigation.
6. **Newsletter ("A Letter From Marylinda")**: Email subscription form with validation and success state.
7. **Contact & Footer**: Direct inquiry form modal, social links (Instagram, Facebook, TikTok, Goodreads), and footer navigation.

---

## 🛠️ Technology Stack

- **React 19** & **TypeScript**
- **Vite** (Blazing fast build tool & dev server)
- **Tailwind CSS v4** (Utility-first styling with custom typography and color palette)
- **Lucide React** (Minimalist UI icons)
- **Framer Motion / CSS Animations** (Smooth transitions and entrance effects)

---

## 🚀 Getting Started & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Local Development
1. Clone the repository and navigate to the project root.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:3000`.

### Production Build
To generate the production build in the `dist` folder:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 GitHub & Vercel Deployment Instructions

### Step 1: Upload to GitHub
1. Create a new repository on GitHub.
2. Initialize git, add all files (including `public/` and `src/`), and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial production-ready commit for Marylinda Author Portfolio"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository for Marylinda.
4. Vercel will automatically detect the **Vite** preset and use the following settings (defined in `vercel.json`):
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your stunning author website will be live in seconds!

---

## 📂 Project Directory Structure

```text
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── README.md
├── public/
│   └── assets/
│       └── aistudio/
│           ├── WhatsApp_Image_2026-11-16_at_5.34.12_PM__1__791c5d0f.jpeg
│           ├── WhatsApp_Image_2026-11-16_at_5.34.12_PM_b9412646.jpeg
│           ├── WhatsApp_Image_2026-11-16_at_5.34.13_PM__1__4ce18ee8.jpeg
│           └── WhatsApp_Image_2026-11-16_at_5.34.13_PM_4b4c1d6c.jpeg
└── src/
    ├── App.tsx
    ├── data.ts
    ├── index.css
    ├── main.tsx
    ├── types.ts
    └── components/
        ├── About.tsx
        ├── Books.tsx
        ├── Contact.tsx
        ├── Hero.tsx
        ├── Journey.tsx
        ├── LoadingScreen.tsx
        ├── Navbar.tsx
        ├── Newsletter.tsx
        └── Testimonials.tsx
```

---

## 🔒 Environment Variables

- `.env.example` is provided as a template. For standard portfolio use without AI backend dependencies, no additional environment variables are required on Vercel.

---

## ©️ License
© 2026 Marylinda. All rights reserved. Stories that inspire. Words that remain.
