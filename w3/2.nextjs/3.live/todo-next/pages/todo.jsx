import React, { useState } from 'react'

const todo = () => {
    const [text,setText]=useState("");
    const [todos,setTodos]=useState([{
        title:"Eat",status:false
    },
    {
        title:"Sleep",status:false
    }]);

 const handleChange=(e)=>{
    setText(e.target.value);
 }

 const handleSubmit=()=>{
    const todo={
        title:text,
        status:false
    }
    setTodos([...todos,todo]);
    setText("");
 }

  return (
    <div className='todo-cont'>
       <div className='add-todo'>
         <input type="text" placeholder='Add todo' value={text} onChange={handleChange}/> &nbsp; <button onClick={handleSubmit}>Add Todo</button>
       </div>
       <br />
       <br />
       <br /><br />
       <div className='todos'>
         {
            todos?.map((todo)=>{
                return <div><h2 key={Math.random()+Date.now()}>---  {todo.title}</h2>
                <br />
                </div>
            })
         }
       </div>
    </div>
  )
}

export default todo