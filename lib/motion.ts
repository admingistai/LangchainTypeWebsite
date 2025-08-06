// Optimized motion variants and utilities for better performance
export const motionVariants = {
  // Fast fade up - minimal delay for immediate impact
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.3, 
      ease: [0.25, 0.25, 0, 1], // Optimized easing
      willChange: 'opacity, transform'
    }
  },

  // Slower fade up for headers
  fadeUpSlow: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.25, 0, 0.75],
      willChange: 'opacity, transform'
    }
  },

  // Optimized container variants
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08, // Reduced from 0.1-0.2
        delayChildren: 0.1
      }
    }
  },

  // Performance-optimized hover effects
  hoverLift: {
    rest: { y: 0, scale: 1 },
    hover: { 
      y: -4, 
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
        willChange: 'transform'
      }
    }
  },

  // Subtle hover for heavy cards
  hoverLiftSubtle: {
    rest: { y: 0 },
    hover: { 
      y: -2,
      transition: {
        duration: 0.15,
        ease: 'easeOut',
        willChange: 'transform'
      }
    }
  }
}

// Viewport configuration optimized for performance
export const optimizedViewport = {
  once: true,
  margin: '0px 0px -50px 0px', // Trigger earlier for better UX
  amount: 0.3 // Require less of element to be visible
}

// Utility to disable animations on slow devices
export const getReducedMotionVariants = (variants: any) => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  if (prefersReducedMotion) {
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 }
    }
  }

  return variants
}

// Performance-aware motion props
export const getMotionProps = (baseProps: any) => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: false,
      whileHover: undefined,
      transition: { duration: 0 }
    }
  }

  return baseProps
}