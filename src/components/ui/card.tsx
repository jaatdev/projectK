
// Card UI primitives for consistent card layouts throughout the app
import * as React from "react"

// Utility for merging class names
import { cn } from "@/lib/utils"


/**
 * Card: Main container for card UI. Adds border, background, and shadow.
 * Use for wrapping content in a visually distinct box.
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"


/**
 * CardHeader: Top section of the card, usually for title and actions.
 * Adds padding and vertical spacing.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"


/**
 * CardTitle: For the main heading/title of the card.
 * Uses bold font and tight spacing.
 */
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"


/**
 * CardDescription: For secondary text or descriptions under the title.
 * Uses smaller, muted text.
 */
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"


/**
 * CardContent: Main content area of the card. Use for body text, forms, etc.
 * Adds padding by default.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"


/**
 * CardFooter: Bottom section of the card, usually for actions (buttons, links).
 * Uses flex layout and padding.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"


// Export all card components for use in the app
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
