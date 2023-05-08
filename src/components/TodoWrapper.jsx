import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (task) => {
    setTodos([
      ...todos,
      { id: uuidv4(), todo: task, isCompleted: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Thing Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        // <p>{console.log(todo.isCompleted)}</p>
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
