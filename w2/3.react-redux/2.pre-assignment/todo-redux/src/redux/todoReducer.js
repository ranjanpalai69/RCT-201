import { ADDTODO, DELETETODO, UPDATETODO } from "./todo.type.js";


const initialData={
    count:0,
    todos:[
    {
        id:1,
        message:"Go for travel",
        status:false
    },
    {
        id:2,
        message:"Study Redux",
        status:false
    }
]
}

export const todoReducer=(state=initialData,{type,payload})=>{
   switch(type){
     
    case ADDTODO:{
        return {
            ...state,
            todos:[...state.todos,payload]
        }     
        
    }

   case UPDATETODO:{
      let update_todos=state.todos.map((todo)=>{
        if(todo.id===payload){
            return {
                ...todo,status:!todo.status
                
            }
        }
        return todo;
      });

      return{
        ...state,
        todos:update_todos
      }
   }

   case DELETETODO :{
         let delete_todo=state.todos.filter((todo)=>{
            return todo.id!==payload
         });
         return{
            ...state,
            todos:delete_todo
         }
   }


     default :{
        return state
     }
   }
}