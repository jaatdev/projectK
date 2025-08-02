
// Import the type definition for the file upload router
import type { OurFileRouter } from "@/app/api/uploadthing/core";

// Import functions to generate upload UI components from UploadThing
import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";


// Create a reusable UploadButton component for file uploads
export const UploadButton = generateUploadButton<OurFileRouter>();

// Create a reusable UploadDropzone component for drag-and-drop uploads
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
