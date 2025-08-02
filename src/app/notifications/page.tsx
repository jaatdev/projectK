

// This is a client-side page for displaying user notifications
"use client";

// --- Imports ---
// Import server actions to fetch and update notifications
import { getNotifications, markNotificationsAsRead } from "@/actions/notification.action";
// Import skeleton loader for loading state (shows while notifications are loading)
import { NotificationsSkeleton } from "@/components/NotificationSkeleton";
// Import UI components for avatars and cards
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
// Import utility to format time (e.g., '2 minutes ago')
import { formatDistanceToNow } from "date-fns";
// Import icons for notification types (like, comment, follow)
import { HeartIcon, MessageCircleIcon, UserPlusIcon } from "lucide-react";

// Import React hooks and toast notification for state and error handling
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// --- Type Definitions ---
// Notifications: array of notification objects returned from getNotifications
type Notifications = Awaited<ReturnType<typeof getNotifications>>;
// Notification: single notification object
type Notification = Notifications[number];

// --- Utility: Get Notification Icon ---
/**
 * Returns the appropriate icon component for a given notification type.
 * @param type - The type of notification ("LIKE", "COMMENT", "FOLLOW")
 * @returns JSX element for the icon, or null if type is unknown
 */
const getNotificationIcon = (type: string) => {
  switch (type) {
    case "LIKE":
      // Heart icon for likes
      return <HeartIcon className="size-4 text-red-500" />;
    case "COMMENT":
      // Message icon for comments
      return <MessageCircleIcon className="size-4 text-blue-500" />;
    case "FOLLOW":
      // User plus icon for follows
      return <UserPlusIcon className="size-4 text-green-500" />;
    default:
      // No icon for unknown types
      return null;
  }
};


/**
 * NotificationsPage displays a list of user notifications.
 *
 * - Fetches notifications from the server
 * - Marks unread notifications as read
 * - Shows a loading skeleton while fetching
 * - Displays each notification with an icon, message, and timestamp
 */
function NotificationsPage() {
  // State to hold notifications and loading status
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch notifications on mount and mark unread as read
  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      try {
        // Get notifications from the server
        const data = await getNotifications();
        setNotifications(data);
        // Find unread notifications and mark them as read
        const unreadIds = data.filter((n) => !n.read).map((n) => n.id);
        if (unreadIds.length > 0) await markNotificationsAsRead(unreadIds);
      } catch (error) {
        // Show error toast if fetching fails
        toast.error("Failed to fetch notifications");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Show skeleton loader while loading
  // This displays a placeholder UI while notifications are being fetched
  if (isLoading) return <NotificationsSkeleton />;

  // Render notifications list UI
  return (
    <div className="space-y-4">
      {/* Main card container for notifications */}
      <Card>
        {/* Card header with title and unread count */}
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle>Notifications</CardTitle>
            {/* Show count of unread notifications (number of notifications where read is false) */}
            <span className="text-sm text-muted-foreground">
              {notifications.filter((n) => !n.read).length} unread
            </span>
          </div>
        </CardHeader>
        {/* Card content holds the scrollable notifications list */}
        <CardContent className="p-0">
          {/* Scrollable area for notifications, so the list doesn't overflow the page */}
          <ScrollArea className="h-[calc(100vh-12rem)]">
            {notifications.length === 0 ? (
              // If there are no notifications, show a friendly message
              <div className="p-4 text-center text-muted-foreground">No notifications yet</div>
            ) : (
              // Otherwise, render each notification in the list
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  // Highlight unread notifications with a different background
                  className={`flex items-start gap-4 p-4 border-b hover:bg-muted/25 transition-colors ${
                    !notification.read ? "bg-muted/50" : ""
                  }`}
                >
                  {/* User avatar (profile image or fallback) */}
                  <Avatar className="mt-1">
                    <AvatarImage src={notification.creator.image ?? "/avatar.png"} />
                  </Avatar>
                  {/* Main notification content */}
                  <div className="flex-1 space-y-1">
                    {/* Row with icon and message */}
                    <div className="flex items-center gap-2">
                      {/* Icon based on notification type (like, comment, follow) */}
                      {getNotificationIcon(notification.type)}
                      <span>
                        {/* Show creator's name or username */}
                        <span className="font-medium">
                          {notification.creator.name ?? notification.creator.username}
                        </span>{" "}
                        {/* Show message based on notification type */}
                        {notification.type === "FOLLOW"
                          ? "started following you"
                          : notification.type === "LIKE"
                          ? "liked your post"
                          : "commented on your post"}
                      </span>
                    </div>

                    {/* If notification is LIKE or COMMENT, show post content and image */}
                    {notification.post &&
                      (notification.type === "LIKE" || notification.type === "COMMENT") && (
                        <div className="pl-6 space-y-2">
                          {/* Show the post content and image (if any) */}
                          <div className="text-sm text-muted-foreground rounded-md p-2 bg-muted/30 mt-2">
                            <p>{notification.post.content}</p>
                            {/* If the post has an image, display it */}
                            {notification.post.image && (
                              <img
                                src={notification.post.image}
                                alt="Post content"
                                className="mt-2 rounded-md w-full max-w-[200px] h-auto object-cover"
                              />
                            )}
                          </div>

                          {/* If notification is a COMMENT, show the comment content */}
                          {notification.type === "COMMENT" && notification.comment && (
                            <div className="text-sm p-2 bg-accent/50 rounded-md">
                              {notification.comment.content}
                            </div>
                          )}
                        </div>
                      )}

                    {/* Show how long ago the notification was created (e.g., '2 minutes ago') */}
                    <p className="text-sm text-muted-foreground pl-6">
                      {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              ))
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}

export default NotificationsPage;
