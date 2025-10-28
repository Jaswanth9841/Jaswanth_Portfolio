import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outlined'
}

export default function Chip({ 
  className, 
  variant = 'default',
  children, 
  ...props 
}: ChipProps) {
  const baseStyles = 'inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all duration-200'
  
  const variants = {
    default: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
    outlined: 'border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600',
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

