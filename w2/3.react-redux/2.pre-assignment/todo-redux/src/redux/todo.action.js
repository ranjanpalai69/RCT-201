import { ADDTODO, DELETETODO, UPDATETODO } from "./todo.type"



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

export const updateTodo=(id)=>{
    return {
     type:UPDATETODO,
     payload:id
    }
}

export const deleteTodo=(id)=>{
    return {
        type:DELETETODO,payload:id
    }
}