# Gist Answers - AI Search Companion Landing Page

## Project Overview

**Product**: Gist Answers - AI search companion for websites  
**Purpose**: Landing page to showcase AI-powered search widget that provides intelligent answers using website content  
**Evolution**: Originally a Kore.ai clone, transformed into Gist Answers brand

## Technical Stack

- **Framework**: Next.js 15.2.4 with App Router
- **React**: v19 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth interactions
- **UI Components**: Radix UI components with shadcn/ui
- **Icons**: Lucide React + Hugeicons MCP access
- **Fonts**: Geist Sans & Mono
- **Development**: TypeScript, PostCSS, ESLint

## Current Brand Identity

### Core Messaging
- **Primary Value Prop**: "The perfect AI search companion for your website. For free."
- **Subtitle**: "Supercharge your site with intelligent AI answers powered by your own content. Extend engagement, grow traffic, and unlock new revenue."
- **Key Benefits**: Effortless install, accurate answers, privacy-focused, free (ad-supported)

### Visual Design System
- **Color Palette**: Dark theme with purple-to-pink gradients
- **Primary Colors**: Purple (#9333EA) to Pink (#EC4899) gradients
- **Background**: Dark teal (#0d2626) with gradient variations
- **Typography**: Geist Sans (light weights preferred)
- **Logo**: "Gist G white no background.png" and "Gist-social-black (1).png"

### Design Patterns
- Glass-morphism effects (backdrop-blur-xl, white/5 backgrounds)
- Gradient text and buttons
- Subtle hover animations with transform and shadow effects
- Wave animation as hero background (LangChain-inspired)

## Current File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata, widget script
│   ├── page.tsx           # Main homepage component structure
│   └── globals.css        # Tailwind config + custom styles
├── components/
│   ├── layout/
│   │   ├── DarkHeader.tsx      # Navigation header
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx             # Hero with wave animation
│   │   ├── LangChainWaveAnimation.tsx  # Animated wave background
│   │   ├── ValueSection.tsx            # "Why Gist Answers" 4-card grid
│   │   ├── SolutionsSection.tsx        # Solutions showcase
│   │   ├── TestimonialsSection.tsx     # Social proof
│   │   └── CTASection.tsx              # Final call-to-action
│   └── ui/                # Complete shadcn/ui component library
├── public/
│   ├── Gist G white no background.png  # Primary logo
│   ├── Gist-social-black (1).png       # Social/favicon logo
│   └── images/                          # Additional assets
```

## Component Architecture

### Page Structure (app/page.tsx)
1. **DarkHeader** - Navigation with logo and menu
2. **HeroSection** - Wave animation with CTA
3. **ValueSection** - 4-feature grid (install, accuracy, privacy, free)
4. **SolutionsSection** - Product solutions showcase
5. **TestimonialsSection** - Customer testimonials
6. **CTASection** - Final conversion section
7. **Footer** - Site footer with links

### Key Components

**LangChainWaveAnimation** (Hero Background):
- Canvas-based animated wave visualization
- Purple-to-pink gradient flowing waves
- Responsive full-screen background
- Overlay content with title, subtitle, CTA button

**ValueSection** (4-Card Grid):
- Effortless install ⚡
- Accurate answers 🎯  
- Privacy-focused 🔒
- Free with ads ✨

## Development History

### Brand Transformation
- **Original**: Kore.ai clone structure and components
- **Current**: Gist Answers rebrand with custom messaging
- **Files**: Many components have `.old.tsx` backup versions from transformation
- **Assets**: Replaced Kore.ai imagery with Gist branding

### Recent Updates
- Updated ValueSection with new 4-card layout and messaging
- Enhanced SolutionsSection with product-specific content  
- Refined color scheme to purple/pink gradients
- Added wave animation hero background
- Integrated AI search widget script

## Widget Integration

**AI Search Widget**: Embedded via script tag in layout.tsx
- **Source**: `https://widget-deploy-hazel.vercel.app/widget.js`
- **Config**: Dark theme enabled
- **Purpose**: Demo the actual Gist Answers functionality on landing page

## Next Steps & Considerations

### Content Areas
- Solutions section could use more specific use cases
- Testimonials section needs real customer quotes/logos
- Pricing/plans section might be valuable addition

### Technical Improvements
- Performance optimization for wave animation
- Mobile responsiveness refinements
- SEO metadata optimization
- Analytics integration

### Design Enhancements
- Icon system standardization (current mix of emojis/Lucide)
- Additional micro-animations and interactions
- More sophisticated gradient and glass effects
- Improved loading states

## Development Guidelines

### Code Patterns
- Use TypeScript strictly
- Follow shadcn/ui component patterns
- Implement responsive-first design
- Prefer Framer Motion for animations
- Maintain glass-morphism design language

### File Organization
- Keep `.old.tsx` files for reference during iterations
- Use descriptive component names
- Separate layout, sections, and UI components
- Store brand assets in `/public/` root

### Brand Consistency
- Always use Gist Answers messaging (not Kore.ai references)
- Maintain purple-to-pink gradient theme
- Use Geist font family consistently
- Follow established animation timing (0.3s transitions)

## Context for AI Assistance

This is a modern, conversion-focused landing page for an AI search widget. The brand emphasizes simplicity, privacy, and free access. The technical stack is contemporary (Next.js 15, React 19) with a focus on smooth animations and professional design.

When working on this project:
- Prioritize user experience and conversion optimization
- Maintain brand consistency with purple/pink gradients and dark theme
- Ensure mobile-first responsive design
- Use established component patterns from shadcn/ui
- Consider performance impact of animations and effects