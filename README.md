# Urban Canvas - Interior Design Frontend

A sophisticated, modern interior design website built with React, TypeScript, and Tailwind CSS. This frontend showcases Urban Canvas's portfolio and services with a beautiful blue color theme inspired by professional design aesthetics.

## 🎨 Features

- **Modern Design**: Clean, professional interface with blue color scheme
- **Responsive Layout**: Works beautifully on all devices
- **Portfolio Showcase**: Grid-based project gallery 
- **Service Categories**: Residential, Commercial, Hospitality, and Turnkey projects
- **Contact Form**: Interactive form with validation
- **Smooth Animations**: Framer Motion for elegant transitions
- **Client Reviews**: Testimonials section
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Wouter** for routing
- **React Hook Form** with Zod validation
- **TanStack Query** for state management
- **Framer Motion** for animations
- **Lucide React** for icons

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd urban-canvas-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Demo Features

This is a frontend-only demo with simulated API responses for:
- Contact form submissions
- Portfolio interactions
- Service inquiries

## 🎯 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   └── navigation.tsx      # Main navigation
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and configurations
├── pages/                  # Page components
└── main.tsx               # App entry point
```

## 🎨 Color Scheme

The design uses a sophisticated blue palette:
- **Navy**: `hsl(220, 60%, 12%)` - Deep, professional blue
- **Royal Blue**: `hsl(221, 83%, 53%)` - Primary brand color
- **Steel Blue**: `hsl(215, 20%, 40%)` - Secondary accents
- **Slate Blue**: `hsl(215, 25%, 60%)` - Light accents
- **Deep Blue**: `hsl(222, 70%, 20%)` - Dark variants
- **Midnight Blue**: `hsl(220, 80%, 8%)` - Darkest shade

## 📄 Sections

1. **Hero Section** - Compelling intro with call-to-action
2. **Projects Grid** - Four main project categories
3. **About Section** - Company story and founder
4. **Services** - Detailed service offerings
5. **Portfolio** - Project showcase gallery
6. **Reviews** - Client testimonials
7. **Contact** - Contact form and information
8. **Footer** - Links and social media

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to `src/pages/home.tsx`
3. Update navigation if needed

### Modifying Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --navy: hsl(220, 60%, 12%);
  --royal-blue: hsl(221, 83%, 53%);
  /* ... other colors */
}
```

### Adding Components
Use shadcn/ui CLI:
```bash
npx shadcn-ui@latest add [component-name]
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Vite settings
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from Arclavish Interior
- UI components from shadcn/ui
- Images from Unsplash
- Icons from Lucide React

---

**Urban Canvas** - Transform Your Space ✨