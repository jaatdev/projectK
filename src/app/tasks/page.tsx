
// This is a server component for displaying a list of tasks.

/**
 * TasksPage fetches and displays a list of tasks from the API.
 *
 * - Fetches tasks from the /api/tasks endpoint (no caching)
 * - Logs the tasks to the console
 * - (Currently) only displays a placeholder div
 */
async function TasksPage() {
  // Fetch tasks from the local API endpoint, disabling cache for fresh data
  const response = await fetch("https://projectk-beta.vercel.app/api/tasks", {
    cache: "no-store",
  });
  // Parse the response as JSON to get the tasks array
  const tasks = await response.json();

  // Log the fetched tasks to the browser/server console for debugging
  console.log("tasks:", tasks);

  // Render a placeholder (replace with actual task list UI as needed)
  return <div>TasksPage</div>;
}

export default TasksPage;
