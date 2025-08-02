
// Import server actions to fetch posts and user info
import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
// Import UI components for creating posts, displaying posts, and showing suggestions
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhoToFollow from "@/components/WhoToFollow";
// Import Clerk's currentUser to get the logged-in user
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


/**
 * Home is the main page of ProjectK. It displays the post feed and suggestions.
 *
 * - Shows a post creation box if the user is logged in
 * - Lists all posts using PostCard
 * - Shows a sidebar with 'Who to Follow' suggestions on large screens
 */
export default async function Home() {
  // Get the currently logged-in user (if any)
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Fetch all posts to display in the feed
  const posts = await getPosts();
  // Get the database user ID for the current user
  const dbUserId = await getDbUserId();

  return (
    // Responsive grid: main feed and sidebar
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      {/* Main feed area (6 columns on large screens) */}
      <div className="lg:col-span-6">
        {/* Show post creation box only if user is logged in */}
        <CreatePost />

        {/* List of posts, each rendered as a PostCard */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId} />
          ))}
        </div>
      </div>

      {/* Sidebar: Who to Follow suggestions, only visible on large screens */}
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
        {/* who to follow */}
      </div>
    </div>
  );
}
