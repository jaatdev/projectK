// Core configuration for UploadThing file uploads
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

// Create an UploadThing instance for defining upload routes
const f = createUploadthing();


/**
 * ourFileRouter: Defines file upload endpoints for UploadThing.
 *
 * - postImage: Handles image uploads (max 1 file, 4MB)
 *   - Middleware: Checks user authentication before upload
 *   - onUploadComplete: Returns the uploaded file URL
 */
export const ourFileRouter = {
  // Route for uploading a single image (used for posts, avatars, etc.)
  postImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      // This code runs on your server before the upload starts
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");

      // Return metadata for use in onUploadComplete
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        // Return the uploaded file's URL to the client
        return { fileUrl: file.url };
      } catch (error) {
        console.error("Error in onUploadComplete:", error);
        throw error;
      }
    }),
} satisfies FileRouter;


// Export the type for use in route handler
export type OurFileRouter = typeof ourFileRouter;