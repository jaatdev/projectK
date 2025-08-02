
// This is a client-side component for following a user
"use client";


// Import hooks, UI components, and actions
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";


/**
 * FollowButton allows the current user to follow another user.
 *
 * - Shows a loading spinner while the follow action is in progress
 * - Calls the toggleFollow action on click
 * - Shows a toast notification on success or error
 */
function FollowButton({ userId }: { userId: string }) {
  // State for loading indicator during follow action
  const [isLoading, setIsLoading] = useState(false);

  // Handles the follow button click
  const handleFollow = async () => {
    setIsLoading(true);

    try {
      // Call the server action to follow the user
      await toggleFollow(userId);
      toast.success("User followed successfully");
    } catch (error) {
      toast.error("Error following user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Button for following a user
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleFollow}
      disabled={isLoading}
      className="w-20"
    >
      {/* Show spinner if loading, otherwise show 'Follow' */}
      {isLoading ? <Loader2Icon className="size-4 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
