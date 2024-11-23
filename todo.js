const express = require("express");

const app = express();
app.use(express.json()); // Middleware to parse JSON body
let todos = []; // In-memory array to store todos

// Endpoint to add a new todo
app.post("/todos", (req, res) => {
  try {
    const { title, description } = req.body; // Destructure title and description from request body
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }
    const newTodo = {
      id: todos.length + 1,
      title,
      description,
    };
    todos.push(newTodo);
    return res
      .status(201)
      .json({ message: "Todo added successfully", todo: newTodo });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to get all todos
app.get("/todos", (req, res) => {
  try {
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to delete particular todo
app.delete("/todos/:id", (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
