import { useRef, useState, MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900',
        'transition-all duration-300',
        className
      )}
      whileHover={!prefersReducedMotion ? { scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Spotlight effect */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

