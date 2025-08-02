
// This is a client-side component for toggling between dark and light mode
"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";


/**
 * ModeToggle is a button for toggling between dark and light themes.
 *
 * - Uses next-themes to manage theme state
 * - Shows sun and moon icons for light/dark mode
 */
export default function ModeToggle() {
  // Get the current theme and function to change it
  const { theme, setTheme } = useTheme();

  return (
    // Button for toggling theme
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Sun icon for light mode, moon icon for dark mode */}
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
