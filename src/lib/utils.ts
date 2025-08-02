
// Utility to merge Tailwind CSS class names conditionally and without duplicates
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


/**
 * cn: Combines class names conditionally and merges Tailwind classes.
 *
 * Usage:
 *   cn('p-2', isActive && 'bg-blue-500', 'text-sm')
 *   // => 'p-2 bg-blue-500 text-sm' (if isActive is true)
 *
 * - Removes duplicate/conflicting Tailwind classes
 * - Accepts any number of arguments, including arrays and objects
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
