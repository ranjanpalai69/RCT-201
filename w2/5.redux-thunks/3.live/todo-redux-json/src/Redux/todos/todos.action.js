import axios from "axios";
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_LOADING, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./todos.types";




export const getTodos=()=>async (dispatch)=>{
   dispatch({type:GET_TODOS_LOADING});
   try{
       let res=await axios.get("http://localhost:8080/todos");
       dispatch({type:GET_TODOS_SUCCESS,payload:res.data});
   }
   catch(e){
      dispatch({type:GET_TODOS_ERROR,payload:e.message});
   }
}

export const addTodo=(todo)=>async (dispatch)=>{
    dispatch({type:ADD_TODO_LOADING});
    try{
        let res=await axios.post("http://localhost:8080/todos",todo);
        dispatch({type:ADD_TODO_SUCCESS,payload:res.data});
    }
    catch(e){
       dispatch({type:ADD_TODO_ERROR,payload:e.message});
    }
 }


 export const updateTodo=(val)=>async (dispatch)=>{
     dispatch({type:UPDATE_TODO_LOADING});
    try{
        let res=await axios.put(`http://localhost:8080/todos/${val.id}`,val);
        dispatch({type:UPDATE_TODO_SUCCESS,payload:res.data});
    }
    catch(e){
       dispatch({type:UPDATE_TODO_ERROR,payload:e.message});
    }
 }

 export const deleteTodo=(id)=>async (dispatch)=>{
    dispatch({type:DELETE_TODO_LOADING});
   try{
       let res=await axios.delete(`http://localhost:8080/todos/${id}`);
       dispatch({type:UPDATE_TODO_SUCCESS,payload:res.data});
   }
   catch(e){
      dispatch({type:UPDATE_TODO_ERROR,payload:e.message});
   }
}