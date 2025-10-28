import { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  animated?: boolean
}

export default function Badge({ 
  className, 
  variant = 'default', 
  animated = false,
  children, 
  ...props 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors'
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  }

  if (animated) {
    const { onAnimationStart, onAnimationEnd, onDrag, onDragStart, onDragEnd, ...restProps } = props as typeof props & { onAnimationStart?: unknown; onAnimationEnd?: unknown; onDrag?: unknown; onDragStart?: unknown; onDragEnd?: unknown }
    return (
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring' as const, stiffness: 300 }}
        className={cn(baseStyles, variants[variant], className)}
        {...restProps}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}

