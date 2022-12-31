import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./Redux/todos/todos.reducers";


export const rootReducer = combineReducers({
    todoManager:todoReducer
})


const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)));