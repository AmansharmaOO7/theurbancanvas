# Deployment Guide

## 🚀 Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/urban-canvas-frontend.git
   git push -u origin main
   ```

2. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root) or gh-pages
   - Save

3. **Add GitHub Actions (Optional)**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
       
       - name: Install dependencies
         run: npm ci
       
       - name: Build
         run: npm run build
       
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

## 🔗 Deploy to Vercel

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite settings

2. **Manual Deployment**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

## 🌐 Deploy to Netlify

1. **Drag & Drop**
   ```bash
   npm run build
   ```
   - Drag `dist` folder to [netlify.com/deploy](https://netlify.com/deploy)

2. **Git Integration**
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Add Redirects** (Create `public/_redirects`):
   ```
   /*    /index.html   200
   ```

## ⚡ Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 🐳 Deploy with Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build
   
   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and Run**
   ```bash
   docker build -t urban-canvas .
   docker run -p 80:80 urban-canvas
   ```

## 🎯 Custom Domain Setup

### For GitHub Pages:
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS A records to GitHub IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

### For Vercel/Netlify:
- Add domain in dashboard
- Update DNS to point to their servers

## 📊 Performance Optimization

Before deployment:
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Optimize images
# Consider using next-gen formats (WebP, AVIF)
# Add lazy loading for portfolio images
```

## 🔒 Security Headers

Add to `public/_headers` (Netlify) or `vercel.json` (Vercel):
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

## 📈 Analytics Setup

Add Google Analytics to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```