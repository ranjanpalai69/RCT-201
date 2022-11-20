import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'

const Counter = () => {
    const [count,setCount]=useState<number>(0);
    const handleClick=():void=>{
       setCount(count+1);
    }
  return (
    <div>
        <Count count={count}/>
        <Button handleClick={handleClick} text="Increase by 1"/>
    </div>
  )
}

export default Counter