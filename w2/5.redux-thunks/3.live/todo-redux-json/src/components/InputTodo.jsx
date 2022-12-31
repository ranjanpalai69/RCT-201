// import axios from "axios"

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/todos/todos.action';

const InputTodo = () => {
  const dispatch=useDispatch();
  const[text,setText]=useState("");
  const handleChange=(e)=>{
    setText(e.target.value);

  }
  const handleAdd=(text)=>{
        const todo={
          title:text,
          status:false

        }
        dispatch(addTodo(todo));
        setText("");

  }
  return (
    <div>
        <input type="text" placeholder='Add Todo' value={text} onChange={handleChange}/> &nbsp; <button onClick={()=>handleAdd(text)}>Add Todo</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default InputTodo;