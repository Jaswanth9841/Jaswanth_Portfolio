import { useEffect, useState, RefObject } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: UseIntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const { triggerOnce = true, threshold, root, rootMargin } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        
        // Unobserve after first intersection for better performance
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(element)
        }
      },
      {
        threshold: threshold || 0.1,
        root: root || null,
        rootMargin: rootMargin || '50px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, root, rootMargin, triggerOnce])

  return isIntersecting
}

