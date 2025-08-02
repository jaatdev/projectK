
// Label: Accessible label component for form fields using Radix UI
"use client"


import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

// Utility for merging class names
import { cn } from "@/lib/utils"


// Variants for label styling (small, medium font, handles disabled state)
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)


/**
 * Label: Accessible label for form fields, using Radix UI for a11y.
 * Applies consistent font, size, and disabled styling.
 *
 * Usage:
 *   <Label htmlFor="username">Username</Label>
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName


// Export Label for use in forms
export { Label }
