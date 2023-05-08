import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
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

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, todo: task, isEditing: !todo.isEditing }
          : todo,
      ),
    );
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
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} todo={todo} />
        ) : (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ),
      )}
    </div>
  );
}
