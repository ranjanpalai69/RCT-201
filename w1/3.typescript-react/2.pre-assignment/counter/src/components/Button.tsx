import React from 'react';
interface buttonProps{
    handleClick:()=>void;
    text:string;
}
const Button = ({handleClick,text}:buttonProps) => {
  return (
    <div>
        <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button