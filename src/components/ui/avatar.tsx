// This file defines a custom Avatar component using Radix UI primitives and Tailwind CSS.
// It provides a reusable, accessible avatar for user profile images, with fallback support.
// Each subcomponent is commented to help beginners understand its role.
"use client"


import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
// Utility for merging class names
import { cn } from "@/lib/utils"


// Avatar: main wrapper for the user's profile image (circular, overflow-hidden)
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      // Styles for size, shape, and layout
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName


// AvatarImage: displays the user's profile image (fills the avatar area)
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName


// AvatarFallback: shows initials or a placeholder if image fails to load
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      // Styles for fallback background and centering
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName


// Export all avatar components for use in the app
export { Avatar, AvatarImage, AvatarFallback }
