
import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo, getTodos } from '../Redux/todo.action';

const AddTodo = () => {
    const[todo,setTodo]=useState("");
    const dispatch=useDispatch();
    const handleAdd=(todo)=>{
          let send_data={
            title:todo,
            status:false
          }
          dispatch(addTodo(send_data));
          dispatch(getTodos())
          setTodo("");
    }
  return (
    <div className="add-todo">
      <input type="text" placeholder='Add todo here' value={todo} onChange={(e)=>setTodo(e.target.value)}/> &nbsp; <button onClick={handleAdd}>Add todo</button>
       <br />
       <br />
       <br />
    </div>
  )
}

export default AddTodo