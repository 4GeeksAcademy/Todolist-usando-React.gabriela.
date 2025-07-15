import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

function App() {
  const [tasks, setTasks] = useState([
    "make the bed",
    "wash my hands",
    "eat",
    "walk the dog",
    "do my homework",
  ]);

  const [taskInput, setTaskInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <h1 className="list-title">What needs to be done?</h1>

      <input
        type="text"
        placeholder="add new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="task-input"
      />

      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="empty-message">There are no tasks</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>

      <p className="task-count">
        {tasks.length} {tasks.length === 1 ? "pending task" : "pending tasks"}
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

