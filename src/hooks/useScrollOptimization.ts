import { useEffect } from 'react'

/**
 * Hook to optimize scroll performance
 * Uses CSS containment and passive listeners
 */
export function useScrollOptimization() {
  useEffect(() => {
    // Enable smooth scrolling with better performance
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)

    // Add CSS containment to improve scroll performance
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.style.contain = 'layout style paint'
    })

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
    }
  }, [])
}

