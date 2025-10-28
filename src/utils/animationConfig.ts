/**
 * Optimized animation configuration for Framer Motion
 * Reduces scroll lag by using transform and opacity only
 */

// Use hardware-accelerated properties only (transform, opacity)
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Optimized variants for lists
export const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
}

// Scale animation (transform only)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 },
}

// Slide animations (transform only)
export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

// Reduce motion preferences
export const getReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Get animation config based on user preferences
export const getAnimationConfig = (animation: any) => {
  if (getReducedMotion()) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.01 },
    }
  }
  return animation
}

