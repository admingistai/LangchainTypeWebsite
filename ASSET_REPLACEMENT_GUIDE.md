# Asset Replacement Guide

## How to Replace Placeholder Assets

### 1. Company Logos (150x60px recommended)
- Place in: `/public/images/logos/company-logos/`
- Format: PNG with transparent background
- Naming: `charter.png`, `alaska-airlines.png`, etc.

### 2. Partner Logos (200x80px recommended)
- Place in: `/public/images/logos/partner-logos/`
- Format: PNG with transparent background
- Naming: `aws.png`, `microsoft.png`

### 3. Product Screenshots (1920x1080px)
- Place in: `/public/images/screenshots/`
- Format: JPG or PNG
- Naming: `ai-work-demo.jpg`, `ai-service-demo.jpg`, etc.

### 4. Blog Thumbnails (800x600px)
- Place in: `/public/images/blog-thumbnails/`
- Format: JPG
- Naming: Match the slug in blogPosts.ts

### 5. Demo Videos
- Place in: `/public/videos/demo-videos/`
- Format: MP4 (H.264)
- Naming: `ai-work-demo.mp4`, etc.

## Updating Content

Edit the following files in `/src/data/`:
- `companies.ts` - Update company names and descriptions
- `solutions.ts` - Update solution content
- `testimonials.ts` - Update quotes and authors
- `blogPosts.ts` - Update blog post metadata

## Component Customization

### Colors
Update colors in `tailwind.config.ts`:
- Primary brand colors
- Gradient combinations
- Background variations

### Typography
Modify font settings in `tailwind.config.ts` and `globals.css`

### Animations
Customize animations in individual components using Framer Motion

## Development Setup

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for production: `npm run build`

## Performance Optimization

- Images are lazy-loaded by default
- Components use React.memo where appropriate
- Animations are optimized for 60fps
- Bundle splitting is configured automatically

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
