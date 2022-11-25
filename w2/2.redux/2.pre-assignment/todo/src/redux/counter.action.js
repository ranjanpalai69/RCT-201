import { INC,DEC } from "./counter.type.js";

export const increament=(val)=>{
    return {
        type:INC,
        payload:val
    }
}

export const decreament=(val)=>{
    return {
        type:DEC,
        payload:val
    }
}