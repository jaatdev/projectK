
// Import actions, UI components, and follow button for suggestions
import { getRandomUsers } from "@/actions/user.action";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import FollowButton from "./FollowButton";


/**
 * WhoToFollow displays a list of suggested users to follow.
 *
 * - Fetches random users from the backend
 * - Shows avatar, name, username, and follower count
 * - Includes a follow button for each user
 */
async function WhoToFollow() {
  // Fetch random users to suggest
  const users = await getRandomUsers();

  // If no users to suggest, render nothing
  if (users.length === 0) return null;

  return (
    // Card container for suggestions
    <Card>
      <CardHeader>
        <CardTitle>Who to Follow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex gap-2 items-center justify-between ">
              <div className="flex items-center gap-1">
                {/* User avatar and profile link */}
                <Link href={`/profile/${user.username}`}>
                  <Avatar>
                    <AvatarImage src={user.image ?? "/avatar.png"} />
                  </Avatar>
                </Link>
                <div className="text-xs">
                  {/* User name and username */}
                  <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer">
                    {user.name}
                  </Link>
                  <p className="text-muted-foreground">@{user.username}</p>
                  <p className="text-muted-foreground">{user._count.followers} followers</p>
                </div>
              </div>
              {/* Follow button for each user */}
              <FollowButton userId={user.id} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default WhoToFollow;
