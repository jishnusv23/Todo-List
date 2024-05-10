import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    );
    setTodos(newTodos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>
        Focus on your day
        <FontAwesomeIcon icon={faLightbulb} style={{ color: "#FFD43B" }} />
      </h1>

      <TodoForm addTodo={addTodo} />
      <div
        className="todos-container"
        style={{
          maxHeight: "350px",
          overflowY: "auto",
        }}
      >
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
