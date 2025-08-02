
// ScrollArea UI primitive for custom scrollable containers using Radix UI
"use client"


import * as React from "react"
// Import Radix UI's scroll area primitives for accessibility and styling
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

// Utility for merging class names
import { cn } from "@/lib/utils"


/**
 * ScrollArea: A scrollable container with custom styled scrollbars.
 * Wrap your content in this to enable smooth, accessible scrolling.
 * Uses Radix UI primitives for consistent cross-browser behavior.
 */
const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    {/* The visible scrollable area */}
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    {/* Custom scrollbar (vertical or horizontal) */}
    <ScrollBar />
    {/* Corner element for styling when both scrollbars are visible */}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName


/**
 * ScrollBar: Custom styled scrollbar for ScrollArea.
 * Supports both vertical and horizontal orientation.
 */
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    {/* The draggable thumb inside the scrollbar */}
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName


// Export scroll area components for use in the app
export { ScrollArea, ScrollBar }
