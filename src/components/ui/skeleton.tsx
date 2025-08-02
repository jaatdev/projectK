
// Skeleton: UI primitive for loading placeholders (animated shimmer effect)
import { cn } from "@/lib/utils"


/**
 * Skeleton: Shows a pulsing placeholder for loading states.
 * Use to indicate where content will appear once loaded.
 *
 * @param className - Additional classes for custom size/shape
 * @param props - Other div props
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}


// Export Skeleton for use in loading UIs
export { Skeleton }
