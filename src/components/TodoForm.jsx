import React from "react";

export default function TodoForm({ addTodo }) {
  const [task, setTask] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(task);
    setTask("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="What is the taks today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Taks
      </button>
    </form>
  );
}
