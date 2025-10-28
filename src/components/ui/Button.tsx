import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  magnetic?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', magnetic = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40',
      secondary: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100',
      outline: 'border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950',
      ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    }
    
    const sizes = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    }

    if (magnetic) {
      const { onAnimationStart, onAnimationEnd, onDrag, onDragStart, onDragEnd, ...restProps } = props as typeof props & { onAnimationStart?: unknown; onAnimationEnd?: unknown; onDrag?: unknown; onDragStart?: unknown; onDragEnd?: unknown }
      return (
        <motion.button
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...restProps}
        >
          {children}
        </motion.button>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

