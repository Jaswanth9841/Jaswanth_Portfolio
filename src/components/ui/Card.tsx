import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  glass?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, glass = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl border transition-all duration-200'
    
    const variantStyles = glass
      ? 'glass'
      : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800'
    
    const hoverStyles = hoverable
      ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
      : ''

    if (hoverable) {
      const { onAnimationStart, onAnimationEnd, onDrag, onDragStart, onDragEnd, ...restProps } = props as typeof props & { onAnimationStart?: unknown; onAnimationEnd?: unknown; onDrag?: unknown; onDragStart?: unknown; onDragEnd?: unknown }
      return (
        <motion.div
          ref={ref}
          className={cn(baseStyles, variantStyles, hoverStyles, className)}
          whileHover={{ y: -4 }}
          transition={{ type: 'spring' as const, stiffness: 300 }}
          {...restProps}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variantStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card

