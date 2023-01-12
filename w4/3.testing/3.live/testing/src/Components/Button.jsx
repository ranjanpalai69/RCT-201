
import React from 'react'

const Button = ({count,setCount}) => {
  return (
    <div>
        <button data-testid="add-btn" onClick={()=>setCount(count+5)}>ADD</button>
        <button data-testid="reduce-btn" onClick={()=>setCount(count-5)}>REDUCE</button>
    </div>
  )
}

export default Button