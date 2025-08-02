
// Input: Styled input field for forms, with consistent appearance and accessibility
import * as React from "react"

// Utility for merging class names
import { cn } from "@/lib/utils"


/**
 * Input: Custom styled input for text, password, email, etc.
 *
 * - Full width, rounded, with border and shadow
 * - Handles disabled, focus, and file input states
 * - Use in forms for consistent look and accessibility
 *
 * Usage:
 *   <Input type="text" placeholder="Enter your name" />
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"


// Export Input for use in forms
export { Input }
