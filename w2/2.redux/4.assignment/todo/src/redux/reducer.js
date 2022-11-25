import { ADDTODO, DELETETODO, UPDATETODO } from "./todo.types.js";

const initialData=[
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

export const reducer=(state=initialData,{type,payload})=>{
   switch(type){
     
    case ADDTODO:{
        return [...state,payload]      
        
    }

   case UPDATETODO:{
      let update_todos=state.map((todo)=>{
        if(todo.id===payload.id){
            return {
                ...todo,
                ...payload
            }
        }
        return todo;
      });

      return [...update_todos]
   }

   case DELETETODO :{
         let delete_todo=state.filter((todo)=>{
            return todo.id!==payload
         });
         return [...delete_todo];
   }


     default :{
        return state
     }
   }
}