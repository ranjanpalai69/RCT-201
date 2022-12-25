import { ADD_TODO, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS } from "./todo.type"

const initialState={
    todos:[],
    loading:false,
    error:false
}

export const todoReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS_LOADING :{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_TODOS_SUCCESS :{
            return {
                ...state,
                todos:payload,
                loading:false
            }
        }
        case GET_TODOS_ERROR :{
            return {
                ...state,
                loading:false,
                error:payload
            }
        }
        case ADD_TODO :{
            return {
                ...state,
                loding:false,
                todos:[...state.todos,payload]
            }
        }

        case DELETE_TODO:{
            return {
                ...state,
                loading:false
            }
        }
         default :{
            return state
        }
    }
}