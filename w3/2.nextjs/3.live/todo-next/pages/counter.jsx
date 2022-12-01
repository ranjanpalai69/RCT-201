import React, { useState } from 'react'

const counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div className='counter'>
      <div>
      <h1>Counter:-  {count}</h1>
      <br />
      <br />
      <button onClick={()=>setCount(count-1)}>DEC</button>
      &nbsp;
      &nbsp;
      <button onClick={()=>setCount(count+1)}>INC</button> 
      </div>

    </div>
  )
}

export default counter