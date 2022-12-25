import { todo } from "../types";
import React from "react";
import TodoItem from "../components/TodoItem";
interface todolistProps {
  todos: todo[];
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoList = ({ todos, handleToggle, handleDelete }: todolistProps) => {
  return (
    <ol className="todo-list">
      {todos?.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ol>
  );
};

export default TodoList;
