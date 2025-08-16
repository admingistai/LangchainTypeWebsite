# Gist Answers - AI Search Companion Landing Page

<div align="center">
  <img src="public/Gist G white no background.png" alt="Gist Answers Logo" width="120" />
  
  <h3>The perfect AI search companion for your website. For free.</h3>
  
  <p>Supercharge your site with intelligent AI answers powered by your own content.<br/>
  Extend engagement, grow traffic, and unlock new revenue.</p>

  ![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js)
  ![React](https://img.shields.io/badge/React-19-blue?logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
  ![License](https://img.shields.io/badge/License-MIT-green)
</div>

## 🚀 Overview

Gist Answers is a modern, conversion-focused landing page for an AI-powered search widget that provides intelligent answers using website content. The project features a sleek dark theme with purple-to-pink gradients, smooth animations, and a fully responsive design.

### ✨ Key Features

- **🎨 Modern Design**: Dark theme with glass-morphism effects and gradient animations
- **🌊 Wave Animation**: Dynamic canvas-based hero background inspired by LangChain
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **⚡ Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **🔍 AI Search Widget**: Live demo of the Gist Answers search functionality
- **🎯 Conversion Focused**: Optimized for user engagement and sign-ups

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.2.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom design system
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + [Hugeicons](https://hugeicons.com/)
- **Fonts**: [Geist Sans & Mono](https://vercel.com/font)

## 📁 Project Structure

```
kore-ai-clone/
├── app/                      # Next.js app router
│   ├── page.tsx             # Homepage
│   ├── layout.tsx           # Root layout with metadata
│   ├── globals.css          # Global styles
│   └── book-demo/           # Demo booking page
├── components/
│   ├── layout/              # Header, Footer components
│   ├── sections/            # Page sections (Hero, Value, etc.)
│   └── ui/                  # shadcn/ui component library
├── public/                  # Static assets
│   ├── Gist G white no background.png  # Logo
│   └── images/              # Additional images
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
└── data/                    # Static data files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gist-answers-landing.git
cd gist-answers-landing
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple (#9333EA) to Pink (#EC4899)
- **Background**: Dark teal (#0d2626) with gradient variations
- **Glass Effects**: White at 5% opacity with backdrop blur

### Typography
- **Font Family**: Geist Sans (light weights preferred)
- **Headings**: Bold, gradient text effects
- **Body**: Light weight for readability

### Components
- Glass-morphism cards with subtle borders
- Gradient buttons with hover effects
- Smooth transitions (0.3s standard)
- Wave animation backgrounds

## 🔌 Widget Integration

The AI search widget is integrated via a script tag in the root layout:

```javascript
<script
  src="https://widget-deploy-hazel.vercel.app/widget.js"
  data-config='{"theme":"dark","borderGradient":{"from":"#C081FF","to":"#B8FFE3"}}'
  defer
></script>
```

This provides a live demo of the Gist Answers search functionality directly on the landing page.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with default Next.js settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

Build command:
```bash
pnpm build
```

Start command:
```bash
pnpm start
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and patterns
- Use TypeScript strictly
- Maintain responsive design principles
- Test on multiple devices and browsers
- Keep animations smooth and performant
- Preserve the glass-morphism design language

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Wave animation inspired by LangChain
- UI components from shadcn/ui
- Icons from Lucide React and Hugeicons

## 📞 Contact

For questions or support regarding the Gist Answers platform, visit [gistanswers.com](https://gistanswers.com)

---

<div align="center">
  Built with ❤️ using Next.js and TypeScript
</div>