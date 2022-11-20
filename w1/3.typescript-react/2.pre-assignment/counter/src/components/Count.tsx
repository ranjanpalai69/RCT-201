import React from 'react'
interface countProps{
    count:number
}
const Count = ({count}:countProps) => {
  return (
    <div>
        <h1>Count:-- {count} </h1>
    </div>
  )
}

export default Count