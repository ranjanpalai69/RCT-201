import { ADDTODO, DELETETODO, UPDATETODO } from "./todo.types.js"


export const addTodo=(todo)=>{
    const todo_obj={
        id:Math.random()+Date.now(),
        message:todo,
        status:false
    }
  return {
    type:ADDTODO,payload:todo_obj
  }
}

export const updateTodo=(id,changes)=>{
    return {
     type:UPDATETODO,
     payload:{
        id,
        ...changes
     }
    }
}

export const deleteTodo=(id)=>{
    return {
        type:DELETETODO,payload:id
    }
}