import React from "react";
import { todo } from "../types";
interface ItemProps {
  todo: todo;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoItem = ({ todo, handleToggle, handleDelete }: ItemProps) => {
  return (
    <li>
      <span>{todo.title}</span> &nbsp; &nbsp;{" "}
      <span>{todo.status ? "Completed" : "Pending"}</span> &nbsp; &nbsp;{" "}
      <button onClick={() => handleToggle(todo.id)}>Toggle</button>&nbsp; &nbsp;{" "}
      <button style={{ color: "red" }} onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
      <br />
      <br />
    </li>
  );
};

export default TodoItem;
