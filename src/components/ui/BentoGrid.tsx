import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { cn } from '../../utils/cn'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]',
      className
    )}>
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: ReactNode
  className?: string
  colSpan?: number
  rowSpan?: number
  gradient?: boolean
  hover?: boolean
}

export function BentoCard({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1,
  gradient = false,
  hover = true
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800',
        'bg-white dark:bg-gray-900',
        'p-6',
        hover && 'transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]',
        gradient && 'bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950',
        `md:col-span-${colSpan} md:row-span-${rowSpan}`,
        className
      )}
      style={{
        gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
        gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
      }}
    >
      {children}
    </motion.div>
  )
}

