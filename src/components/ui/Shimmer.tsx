import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface ShimmerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Shimmer({ className, ...props }: ShimmerProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800',
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          animation: 'shimmer 2s infinite',
        }}
      />
    </div>
  )
}

