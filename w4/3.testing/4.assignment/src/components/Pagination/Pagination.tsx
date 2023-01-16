import React, { useState } from "react";


type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
};

const Pagination = (props: PaginationProps) => {
  const [current, setcurrent] = useState(1)
  const {count,currentPage,updateCurrentPage}=props
  // console.log(count,currentPage,updateCurrentPage)
  let a:Array<number>=[]
  for( let i=1;i<=count;i++){
    a.push(i)
  }
  const handleinc=async()=>{
    setcurrent(current+updateCurrentPage)
  }
  const handleDec=async()=>{
    setcurrent(current-updateCurrentPage)
  }
  const handleChange=async(e:any)=>{
    setcurrent(e)
  }
  return(
    <div>
      <>
      <h1 data-testid="cur">{current}</h1>
      <button disabled={current==1} onClick={handleDec} data-testid="prev">
        Prev
      </button>
        {a.map((b)=>(
          <button key={b} onClick={()=>handleChange(b)} style={{borderColor:b===current?"blue":""}}>{b}</button>
        ))}
      </>
      <button disabled={current==count} onClick={handleinc} data-testid="next">Next</button>
    </div>
  )
};

export default Pagination;
