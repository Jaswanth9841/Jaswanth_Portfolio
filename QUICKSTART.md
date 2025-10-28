# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Customize Your Content
Edit `src/data/site.ts` with your personal information:
- Name, role, tagline
- Email, phone, location
- Skills and technologies
- Projects and experience
- Social media links

### 3. Add Your Assets
- Place your resume in `public/assets/Resume.pdf`
- Add project images to `public/assets/`
- Update image paths in `site.ts`

### 4. Run Development Server
```bash
npm run dev
```
Visit http://localhost:3000

### 5. Build for Production
```bash
npm run build
```
Output will be in the `dist/` folder.

### 6. Preview Production Build
```bash
npm run preview
```

## ✨ Key Features

- **Command Palette**: Press `⌘K` (Mac) or `Ctrl+K` (Windows) for quick navigation
- **Theme Toggle**: Click the theme button in the header to switch between light/dark modes
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Bento Grid**: Modern dashboard-style home page
- **Spotlight Cards**: Interactive project cards with cursor-following effects
- **Timeline**: Beautiful experience timeline
- **Full Accessibility**: WCAG AA+ compliant, keyboard navigation, screen reader support

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Components
All UI components are in `src/components/ui/` - customize them as needed.

### Fonts
Change fonts in `index.html` (Google Fonts link) and `tailwind.config.js`.

## 📝 Adding Content

### Add a New Project
Edit `src/data/site.ts`:
```typescript
{
  id: "project-id",
  title: "Project Name",
  summary: "Short description",
  tags: ["React", "TypeScript"],
  highlights: ["Feature 1", "Feature 2"],
  featured: true,
}
```

### Add Experience
Edit the `experience` array in `src/data/site.ts`.

## 🧪 Testing
```bash
npm run test        # Run tests
npm run test:ui     # Run tests with UI
```

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy the `dist/` folder

### GitHub Pages
1. Update `base` in `vite.config.ts` to your repo name
2. Build and deploy the `dist/` folder

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code

## 💡 Tips

1. Use the Command Palette (⌘K/Ctrl+K) to quickly navigate
2. All animations respect `prefers-reduced-motion`
3. The site is fully accessible - test with a screen reader
4. Images are placeholders - replace with your own
5. Update the sitemap.xml and robots.txt with your domain

## 📧 Support

For issues or questions, check the main README.md or create an issue on GitHub.

## 🎉 You're All Set!

Your portfolio is ready to go. Start customizing and make it yours!

