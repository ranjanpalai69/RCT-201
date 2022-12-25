import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { todo } from "../types";

const Todo = () => {
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 164784,
      status: false,
      title: "Eat"
    },
    {
      id: 164785,
      status: false,
      title: "Sleep"
    }
  ]);
  const handleAdd = (text: string) => {
    const todoObj: todo = {
      id: Date.now() + Math.random(),
      title: text,
      status: false
    };
    setTodos([...todos, todoObj]);
  };

  const handleToggle = (id: number) => {
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoInput handleAdd={handleAdd} />
      <br />
      <br />
      <br />
      <TodoList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;
