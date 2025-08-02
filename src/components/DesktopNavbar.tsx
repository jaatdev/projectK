
// Import icons and UI components for the navigation bar
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";


/**
 * DesktopNavbar is the navigation bar for desktop screens.
 *
 * - Shows navigation links for Home, Notifications, and Profile
 * - Displays a sign-in button if the user is not logged in
 * - Includes a dark/light mode toggle
 */
async function DesktopNavbar() {
  // Get the current user (if logged in)
  const user = await currentUser();

  return (
    // Only show on medium and larger screens
    <div className="hidden md:flex items-center space-x-4">
      {/* Dark/light mode toggle button */}
      <ModeToggle />

      {/* Home link */}
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {/* Show additional links if user is logged in */}
      {user ? (
        <>
          {/* Notifications link */}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>
          {/* Profile link, uses username or email prefix */}
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link
              href={`/profile/${
                user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          {/* User menu button (avatar, sign out, etc.) */}
          <UserButton />
        </>
      ) : null}
    </div>
  );
}

export default DesktopNavbar;
