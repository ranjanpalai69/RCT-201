import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/todo.action';

const TodoItem = ({ id, message, status }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <span>{id}..</span> &nbsp;&nbsp; <span>{message}</span>  &nbsp;&nbsp; <span>{status}</span>  &nbsp;&nbsp; <span>{status ? "Completed" : "Pending"}</span> &nbsp;&nbsp; <button onClick={() => dispatch(updateTodo(id))}>Change Status</button> &nbsp;<button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      <br />
      <br />
    </div>
  )
}

export default TodoItem