import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTodos } from '../Redux/todos/todos.action'
import InputTodo from './InputTodo'
import TodoItems from './TodoItems'


const Todo = () => {
  
  const dispatch=useDispatch();
  const value=useSelector((state)=>state.todoManager);
  
  useEffect(()=>{
          dispatch(getTodos());
  },[])
  
  console.log(value);

  if(value.loading){
    return <h1>Loading....</h1>
  }
  return (
    <div>
       <InputTodo/>
       <TodoItems todos={value.todos} />
    </div>
  )
}

export default Todo