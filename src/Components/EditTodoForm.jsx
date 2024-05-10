import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() !== "") {
      editTodo(value, task.id);

      setValue("");
    }
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="edit-todo-input"
      />
      <button type="submit" className="todo-btn-1">
        Task
      </button>
    </form>
  );
};

export default EditTodoForm;
