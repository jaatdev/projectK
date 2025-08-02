
// Textarea: Styled textarea for multi-line text input in forms
import * as React from "react"

// Utility for merging class names
import { cn } from "@/lib/utils"


/**
 * Textarea: Custom styled textarea for multi-line input.
 *
 * - Full width, rounded, with border and shadow
 * - Handles disabled, focus, and placeholder states
 * - Use in forms for comments, descriptions, etc.
 *
 * Usage:
 *   <Textarea placeholder="Write your comment..." />
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"


// Export Textarea for use in forms
export { Textarea }
