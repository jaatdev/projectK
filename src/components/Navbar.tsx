
// Import navigation components and user utilities
import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";


/**
 * Navbar is the main navigation bar for the application.
 *
 * - Syncs the user with the backend if logged in
 * - Shows the app logo/title
 * - Includes both desktop and mobile navigation components
 */
async function Navbar() {
  // Get the current user (if logged in)
  const user = await currentUser();
  // Sync user data with the backend if logged in
  if (user) await syncUser(); // POST

  return (
    // Sticky navigation bar at the top of the page
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* App logo/title, links to home */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
              ProjectK
            </Link>
          </div>

          {/* Desktop and mobile navigation menus */}
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
