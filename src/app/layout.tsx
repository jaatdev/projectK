
// Import type for page metadata from Next.js
import type { Metadata } from "next";
// Import utility to load local fonts
import localFont from "next/font/local";
// Import global CSS styles
import "./globals.css";
// Import ClerkProvider for authentication context
import { ClerkProvider } from "@clerk/nextjs";
// Import ThemeProvider to enable dark/light mode and theming
import { ThemeProvider } from "@/components/ThemeProvider";
// Import Navbar and Sidebar UI components
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
// Import Toaster for showing toast notifications
import { Toaster } from "react-hot-toast";


// Load custom local fonts and assign them to CSS variables for use throughout the app
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Path to the Geist Sans font file
  variable: "--font-geist-sans", // CSS variable name
  weight: "100 900", // Supported font weights
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Path to the Geist Mono font file
  variable: "--font-geist-mono", // CSS variable name
  weight: "100 900", // Supported font weights
});


// Metadata for the application, used by Next.js for SEO and browser tab info
export const metadata: Metadata = {
  title: "ProjectK", // The title of the website
  description: "A modern social media application powered by Next.js", // Description for SEO
};


/**
 * RootLayout is the main layout component for the entire application.
 * It wraps all pages with providers for authentication, theming, and layout structure.
 *
 * @param children - The page content to render inside the layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ClerkProvider provides authentication context to the app
    <ClerkProvider>
      {/* The root HTML element, with language set to English and hydration warning suppressed for SSR */}
      <html lang="en" suppressHydrationWarning>
        {/* The body uses the custom fonts and antialiasing for better text rendering */}
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* ThemeProvider enables dark/light mode and system theme detection */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Main container for the app, ensures minimum screen height */}
            <div className="min-h-screen">
              {/* Top navigation bar */}
              <Navbar />

              {/* Main content area with vertical padding */}
              <main className="py-8">
                {/* Center the content and set max width for large screens */}
                <div className="max-w-7xl mx-auto px-4">
                  {/* Responsive grid: sidebar on large screens, main content on the right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Sidebar is hidden on small screens, visible on large screens */}
                    <div className="hidden lg:block lg:col-span-3">
                      <Sidebar />
                    </div>
                    {/* Main page content goes here */}
                    <div className="lg:col-span-9">{children}</div>
                  </div>
                </div>
              </main>
            </div>
            {/* Toaster displays toast notifications globally */}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
