
// Server actions for fetching user profile and posts
import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
// Next.js navigation for handling 404s
import { notFound } from "next/navigation";
// Client-side profile page component
import ProfilePageClient from "./ProfilePageClient";


/**
 * Generates dynamic metadata (title, description) for the user's profile page.
 * Uses the user's name and bio if available.
 */
export async function generateMetadata({ params }: { params: { username: string } }) {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}


/**
 * ProfilePageServer is a server component that fetches all data for a user's profile page.
 * - Fetches user profile, posts, liked posts, and follow status in parallel
 * - Passes all data to the ProfilePageClient for rendering
 * - Handles 404 if user is not found
 */
async function ProfilePageServer({ params }: { params: { username: string } }) {
  // Fetch user profile by username
  const user = await getProfileByUsername(params.username);

  // If user not found, show 404 page
  if (!user) notFound();

  // Fetch posts, liked posts, and follow status in parallel for performance
  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id),
  ]);

  // Render the client-side profile page with all fetched data
  return (
    <ProfilePageClient
      user={user}
      posts={posts}
      likedPosts={likedPosts}
      isFollowing={isCurrentUserFollowing}
    />
  );
}

export default ProfilePageServer;
