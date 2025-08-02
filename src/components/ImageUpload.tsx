// This is a client-side component for uploading and displaying an image
"use client";


// Import the upload dropzone component and close icon
import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";


// Props for the ImageUpload component
interface ImageUploadProps {
  onChange: (url: string) => void; // Callback when image is uploaded or removed
  value: string; // Current image URL
  endpoint: "postImage"; // Upload endpoint
}


/**
 * ImageUpload allows users to upload an image or display the uploaded image.
 *
 * - Shows the uploaded image with a remove button if value is set
 * - Otherwise, shows a dropzone for uploading an image
 * - Calls onChange with the image URL when upload is complete or removed
 */
function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  // If an image is already uploaded, show the image and a remove button
  if (value) {
    return (
      <div className="relative size-40">
        <img src={value} alt="Upload" className="rounded-md size-40 object-cover" />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  // Otherwise, show the upload dropzone
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}

export default ImageUpload;