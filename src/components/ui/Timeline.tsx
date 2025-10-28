import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import Chip from './Chip'

interface TimelineItemProps {
  title: string
  subtitle: string
  period: string
  description: string
  highlights?: string[]
  technologies?: string[]
  index: number
}

function TimelineItem({ 
  title, 
  subtitle, 
  period, 
  description, 
  highlights,
  technologies,
  index 
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-950 shadow-lg" />

      <div className="space-y-3">
        <div>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
            </div>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 whitespace-nowrap">
              {period}
            </span>
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="text-primary-500 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Chip key={i}>{tech}</Chip>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface TimelineProps {
  children?: ReactNode
  items?: TimelineItemProps[]
}

export default function Timeline({ children, items }: TimelineProps) {
  if (items) {
    return (
      <div className="relative">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="relative">
      {children}
    </div>
  )
}

export { TimelineItem }

