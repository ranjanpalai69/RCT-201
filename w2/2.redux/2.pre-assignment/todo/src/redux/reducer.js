import { INC ,DEC} from "./counter.type.js"

const initialState={
    count:0
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case INC:{
            return {
                ...state,count:state.count+payload
            }
        }
        case DEC:{
            return {
                ...state,count:state.count-payload
            }
        }
         default:{
            return state
        }
    }
}