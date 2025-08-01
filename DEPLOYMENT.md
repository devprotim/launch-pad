# 🚀 Vercel Deployment Guide for LaunchPad

This guide will help you deploy your LaunchPad Angular application to Vercel.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Vercel account (free at [vercel.com](https://vercel.com))

## 🛠️ Pre-Deployment Setup

The project is already configured with the following files:

### 1. `vercel.json` - Vercel Configuration
```json
{
  "version": 2,
  "name": "launch-pad",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/launch-pad/browser"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*\\.(js|css|ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot))",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 2. `.vercelignore` - Exclude Files
Excludes unnecessary files from deployment (node_modules, build artifacts, etc.)

### 3. Updated `package.json`
- Added `build:vercel` script for production builds
- Optimized build configuration

### 4. Updated `angular.json`
- Increased bundle size limits for production
- Optimized build settings

## 🚀 Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Angular and use the correct settings

3. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your app
   - You'll get a live URL (e.g., `https://launch-pad-xyz.vercel.app`)

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` (for first deployment)
   - What's your project's name? `launch-pad`
   - In which directory is your code located? `./`

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

## 🔧 Build Verification

Before deploying, verify your build works locally:

```bash
# Test production build
npm run build:vercel

# Serve the built files (optional)
npx http-server dist/launch-pad/browser
```

## 📊 Expected Build Output

Your production build should generate:
- `main-[hash].js` (~1.01 MB)
- `styles-[hash].css` (~245 KB)
- `polyfills-[hash].js` (~35 KB)
- `index.html`
- `favicon.ico`
- Font files in `media/` directory

## 🌐 Domain Configuration

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables

If you need environment variables:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add variables for different environments:
   - Production
   - Preview
   - Development

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check Node.js version (use 18+)
   - Verify all dependencies are installed
   - Run `npm run build:vercel` locally first

2. **Routing Issues**:
   - The `vercel.json` includes SPA routing configuration
   - All routes redirect to `index.html` for Angular routing

3. **Bundle Size Warnings**:
   - Bundle limits are set to 5MB max
   - Consider code splitting if needed

4. **Font Loading Issues**:
   - PrimeIcons fonts are included in the build
   - Cache headers are set for optimal loading

## 📈 Performance Optimization

The deployment includes:

- ✅ **Gzip Compression**: Automatic by Vercel
- ✅ **CDN**: Global edge network
- ✅ **Caching**: Static assets cached for 1 year
- ✅ **Minification**: Production build optimizations
- ✅ **Tree Shaking**: Unused code removal

## 🔄 Continuous Deployment

Once connected to GitHub:

1. **Automatic Deployments**: Every push to main branch
2. **Preview Deployments**: Every pull request
3. **Rollback**: Easy rollback to previous deployments
4. **Branch Deployments**: Deploy specific branches

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Angular Deployment**: [angular.io/guide/deployment](https://angular.io/guide/deployment)
- **Project Issues**: Create an issue in the repository

## ✅ Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] Production build tested locally
- [ ] Vercel account created
- [ ] Repository connected to Vercel
- [ ] Environment variables configured (if needed)
- [ ] Custom domain configured (if needed)
- [ ] SSL certificate verified
- [ ] Performance tested

Your LaunchPad application is now ready for deployment! 🎉
