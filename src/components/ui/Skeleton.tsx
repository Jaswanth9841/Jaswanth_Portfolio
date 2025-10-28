import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular'
}

export default function Skeleton({ 
  className, 
  variant = 'rectangular',
  ...props 
}: SkeletonProps) {
  const baseStyles = 'animate-pulse bg-gray-200 dark:bg-gray-800'
  
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  )
}

