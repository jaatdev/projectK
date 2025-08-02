
// Import the createRouteHandler from uploadthing/next
import { createRouteHandler } from "uploadthing/next";
// Import the file router from the core.ts file
import { ourFileRouter } from "./core";


// Create the route handler for the uploadthing API
export const { GET, POST } = createRouteHandler({
  // Pass the file router to the handler
  router: ourFileRouter,
});
