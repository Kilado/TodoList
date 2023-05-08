import React from "react";

export default function EditTodoForm({ editTodo, todo }) {
  const [task, setTask] = React.useState(todo.todo);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(task, todo.id);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Update Todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
}
