import { ADD_TODO, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS } from "./todo.type"
 import axios from "axios"


export const getTodos=()=>async(dispatch)=>{
    dispatch({type:GET_TODOS_LOADING});
    try {
        const res=await axios.get("http://localhost:8080/todos");
        dispatch({type:GET_TODOS_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_TODOS_ERROR,payload:error.message});
    }
}

export const addTodo=(todo)=>async(dispatch)=>{
  try {
    let res=await axios.post("http://localhost:8080/todos",todo);
    let data= res.data;
    console.log(data)
    dispatch({type:ADD_TODO,payload:data});
    // dispatch(getTodos())
  } catch (error) {
    console.log(error)
  }
}

export const deleteTodo=(id)=>{
     return function(dispatch){
        axios.delete(  `http://localhost:8080/todos/${id}`).then((resp)=>{
            dispatch({type:DELETE_TODO})
        }). catch((error)=>console.log(error));
     }
     
}