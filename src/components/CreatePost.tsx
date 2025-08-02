
// This is a client-side component for creating a new post
"use client";


// Import hooks and UI components
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Textarea } from "./ui/textarea";
import { ImageIcon, Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import { createPost } from "@/actions/post.action";
import toast from "react-hot-toast";
import ImageUpload from "./ImageUpload";


/**
 * CreatePost is a form component for creating a new post with optional image.
 *
 * - Shows the user's avatar
 * - Allows entering post content and uploading an image
 * - Handles post submission and shows loading state
 */
function CreatePost() {
  // Get the current user from Clerk
  const { user } = useUser();
  // State for post content
  const [content, setContent] = useState("");
  // State for uploaded image URL
  const [imageUrl, setImageUrl] = useState("");
  // State for loading indicator during post submission
  const [isPosting, setIsPosting] = useState(false);
  // State to show/hide the image upload UI
  const [showImageUpload, setShowImageUpload] = useState(false);

  // Handles the post submission
  const handleSubmit = async () => {
    // Prevent empty posts
    if (!content.trim() && !imageUrl) return;

    setIsPosting(true);
    try {
      // Call the server action to create a post
      const result = await createPost(content, imageUrl);
      if (result?.success) {
        // Reset the form on success
        setContent("");
        setImageUrl("");
        setShowImageUpload(false);
        toast.success("Post created successfully");
      }
    } catch (error) {
      // Show error if post creation fails
      console.error("Failed to create post:", error);
      toast.error("Failed to create post");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    // Card container for the post creation form
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* User avatar and textarea for post content */}
          <div className="flex space-x-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user?.imageUrl || "/avatar.png"} />
            </Avatar>
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-[100px] resize-none border-none focus-visible:ring-0 p-0 text-base"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isPosting}
            />
          </div>

          {/* Image upload section, shown if toggled or image is present */}
          {(showImageUpload || imageUrl) && (
            <div className="border rounded-lg p-4">
              <ImageUpload
                endpoint="postImage"
                value={imageUrl}
                onChange={(url) => {
                  setImageUrl(url);
                  if (!url) setShowImageUpload(false);
                }}
              />
            </div>
          )}

          {/* Action buttons: image upload and submit */}
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
                onClick={() => setShowImageUpload(!showImageUpload)}
                disabled={isPosting}
              >
                <ImageIcon className="size-4 mr-2" />
                Photo
              </Button>
            </div>
            <Button
              className="flex items-center"
              onClick={handleSubmit}
              disabled={(!content.trim() && !imageUrl) || isPosting}
            >
              {isPosting ? (
                <>
                  <Loader2Icon className="size-4 mr-2 animate-spin" />
                  Posting...
                </>
              ) : (
                <>
                  <SendIcon className="size-4 mr-2" />
                  Post
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CreatePost;
