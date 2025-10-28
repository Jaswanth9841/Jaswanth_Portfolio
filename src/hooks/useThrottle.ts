import { useRef, useCallback } from 'react'

/**
 * Throttle hook to limit function execution rate
 * Useful for scroll and resize handlers
 */
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 200
): T {
  const lastRan = useRef(Date.now())
  const timeoutRef = useRef<number | null>(null)

  const throttledCallback = useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now()
      const timeSinceLastRun = now - lastRan.current

      if (timeSinceLastRun >= delay) {
        callback(...args)
        lastRan.current = now
      } else {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = window.setTimeout(
          () => {
            callback(...args)
            lastRan.current = Date.now()
          },
          delay - timeSinceLastRun
        )
      }
    },
    [callback, delay]
  ) as T

  return throttledCallback
}

