import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo.action';
const AddTodo = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" placeholder='Add todo' value={message} onChange={(e) => setMessage(e.target.value)} /> &nbsp; <button onClick={() => dispatch(addTodo(message))}>Add</button>
        </div>
    )
}

export default AddTodo