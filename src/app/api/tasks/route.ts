
// --- Types ---
// Task: Represents a single todo task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Request body for creating a new task
interface CreateTaskRequest {
  title: string;
}


// In-memory array to store tasks (resets on server restart)
let tasks: Task[] = [
  { id: 1, title: "Learn Next.js", completed: false },
  { id: 2, title: "Build a project", completed: false },
];


// Returns the list of all tasks
export async function GET() {
  return Response.json(tasks);
}


// Creates a new task from the request body
export async function POST(request: Request) {
  try {
    const body: CreateTaskRequest = await request.json();

    // Validate title
    if (!body.title) {
      return Response.json({ error: "Title is required" }, { status: 400 });
    }
    // Create new task object
    const newTask: Task = {
      id: tasks.length + 1,
      title: body.title,
      completed: false,
    };

    // Add to tasks array
    tasks.push(newTask);
    return Response.json(newTask, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}


// Deletes a task by ID (provided as a query parameter)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "");

    // Validate ID
    if (!id) {
      return Response.json({ error: "Task ID is required" }, { status: 400 });
    }

    // Find the task index
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return Response.json({ error: "Task not found" }, { status: 404 });
    }

    // Remove the task from the array
    tasks = tasks.filter((task) => task.id !== id);
    return Response.json({ message: "Task deleted" });
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
