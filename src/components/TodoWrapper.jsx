import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), todo: task, isEditing: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Thing Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
