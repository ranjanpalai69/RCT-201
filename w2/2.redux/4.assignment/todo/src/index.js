import { store } from "./redux/store.js";
import { addTodo, deleteTodo, updateTodo } from "./redux/todo.actions.js";


console.log(store.getState());

store.dispatch(addTodo("Go to gym"));
store.dispatch(addTodo("Go for a dinner"));

console.log(store.getState());

store.dispatch(updateTodo(2,{message:"Study React",status:true}));
store.dispatch(updateTodo(1,{message:"Study Node",status:true}));
store.dispatch(addTodo("Go to Swim"));
store.dispatch(deleteTodo(2));
console.log(store.getState());