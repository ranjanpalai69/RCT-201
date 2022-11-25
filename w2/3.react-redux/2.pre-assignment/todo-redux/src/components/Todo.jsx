import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

const Todo = () => {
    const todos = useSelector((store) => store.todos);
    console.log(todos);
    return (
        <div>
            <h1>Redux-Todo</h1>
            <AddTodo />
            <br />
            <br />
            {
                todos?.map((todo) => {
                    return <TodoItem key={Math.random() + Date.now()} id={todo.id} message={todo.message} status={todo.status} />
                })
            }
        </div>
    )
}

export default Todo