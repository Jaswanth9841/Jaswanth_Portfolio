import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface MetricProps {
  label: string
  value: string | number
  icon?: string
  delay?: number
}

export default function Metric({ label, value, icon, delay = 0 }: MetricProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref)

  const numericValue = typeof value === 'number' ? value : parseInt(value.replace(/\D/g, '')) || 0
  const suffix = typeof value === 'string' ? value.replace(/[\d\s]/g, '') : ''

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepValue = numericValue / steps
    const stepTime = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700"
    >
      {icon && <span className="text-4xl">{icon}</span>}
      <div className="text-4xl font-bold gradient-text">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 text-center font-medium">
        {label}
      </div>
    </motion.div>
  )
}

