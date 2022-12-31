import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./todos.types" ;


const initialState = {

    todos:[],
    loading:false,
    error:false,
    

}


export const todoReducer = (state = initialState, {type,payload}) => {

    switch(type){
        case GET_TODOS_LOADING:{
            return{
                ...state,
                loading:true

            }
        }
        case GET_TODOS_SUCCESS:{
            return{
               ...state,
                todos:payload,
                loading:false,
                error:false
            }
        }

        case GET_TODOS_ERROR:{
            return{
               ...state,
                loading:false,
                error:true

            }
        }


        case ADD_TODO_LOADING:{
            return{
               ...state,
                loading:true

            }
        }   
        case ADD_TODO_SUCCESS:{
            return{
              ...state,
                todos:[...state.todos,payload],
                loading:false,
                error:false
            }

        }

        case ADD_TODO_ERROR:{
            return{
               ...state,
                loading:false,
                error:true


            }
        }

        case UPDATE_TODO_LOADING:{
            return{
              ...state,
                loading:true

            }
        }

        case UPDATE_TODO_SUCCESS:{
            return{
             ...state,
              todos:[...state.todos,payload],
                loading:false,
            }
        }

        case UPDATE_TODO_ERROR:{
            return{
             ...state,
            }
        }

        case DELETE_TODO_LOADING:{
            return{
             ...state,
                loading:true

            }
        } 

        case DELETE_TODO_SUCCESS:{
            return{
            ...state,
             loading:false

            }
        }

        case DELETE_TODO_ERROR:{
            return{
           ...state,
           error:true
            }
        }
        
        default:{
            return{
               ...state,
                
        }
    }
}

}
