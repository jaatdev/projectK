
// This is a client-side provider for managing app theme (dark/light/system)
"use client";


// Import React and the next-themes provider
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


/**
 * ThemeProvider wraps the app with next-themes for dark/light/system theme support.
 *
 * - Passes all props to NextThemesProvider
 * - Makes theme context available to all children
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
