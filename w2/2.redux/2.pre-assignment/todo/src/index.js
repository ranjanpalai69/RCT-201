import { decreament, increament } from "./redux/counter.action.js";
import { store } from "./redux/store.js";


console.log(store.getState()) ;

store.dispatch(increament(1));
store.dispatch(increament(4));
console.log(store.getState()) ;
store.dispatch(decreament(1));
store.dispatch(decreament(2));
console.log(store.getState()) ;