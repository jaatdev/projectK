
// This is a client-side component for showing a confirmation dialog before deleting
"use client";


// Import icons and UI components
import { Loader2Icon, Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


// Props for the DeleteAlertDialog component
interface DeleteAlertDialogProps {
  isDeleting: boolean; // Whether the delete action is in progress
  onDelete: () => Promise<void>; // Function to call when confirming delete
  title?: string; // Optional dialog title
  description?: string; // Optional dialog description
}


/**
 * DeleteAlertDialog shows a confirmation dialog before performing a delete action.
 *
 * - Shows a trash/delete button
 * - When clicked, opens a dialog asking for confirmation
 * - Shows a loading spinner while deleting
 * - Calls the onDelete function when confirmed
 */
export function DeleteAlertDialog({
  isDeleting,
  onDelete,
  title = "Delete Post",
  description = "This action cannot be undone.",
}: DeleteAlertDialogProps) {
  return (
    // AlertDialog wraps the confirmation dialog logic
    <AlertDialog>
      {/* Trigger button for opening the dialog */}
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-red-500 -mr-2"
        >
          {/* Show spinner if deleting, otherwise trash icon */}
          {isDeleting ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <Trash2Icon className="size-4" />
          )}
        </Button>
      </AlertDialogTrigger>
      {/* Dialog content with title, description, and actions */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600"
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
