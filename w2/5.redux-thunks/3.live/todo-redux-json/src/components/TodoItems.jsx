import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, getTodos, updateTodo } from '../Redux/todos/todos.action';

const TodoItems = ({todos}) => {
  const dispatch=useDispatch();
  const handleUpdate=(val)=>{
      const updateVal={
        ...val,status:!val.status
      }
      dispatch(updateTodo(updateVal));
      dispatch(getTodos())
  }
  const handleDelete=(id)=>{
    dispatch(deleteTodo(id));
    dispatch(getTodos())
  }
  return (
    <div >
       {
       todos?.map((todo)=>{
          return (
            <div key={todo.id} style={{"display":"flex","justifyContent":"space-evenly","margin":"8px"}}>
              <span>{todo.id}.</span>  <span>{todo.title}</span> <button onClick={()=>handleUpdate(todo)}>{todo.status?"COMPLETED":"INPROGRESS"}</button><button onClick={()=>handleDelete(todo.id)}>Delete</button>

            </div>
            
          )
       })
          
       }
    </div>
  )
}

export default TodoItems