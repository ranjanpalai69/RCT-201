import React,{useState} from "react";
import PageCell from "./PageCell";

type PaginationProps = {
  count: number;
  currentPage: number;
  updateCurrentPage: number;
};

const Pagination = ({count,currentPage,updateCurrentPage}: PaginationProps) => {

  const[curr,setCurr]=useState(currentPage);

  const handlePage=(val:number):void=>{
      setCurr(curr+val)
  }

  const handlePageChange=(val:number)=>{
     setCurr(val);
  }
  
  console.log(count,currentPage);

  let arr:number[]=[];

  for(let i=1;i<=count;i++){
    arr.push(i);
  }
  console.log(arr);
  
  return <div>
     <h1 data-testid="currVal">{curr}</h1>
     <button onClick={()=>handlePage(-1)} disabled={curr===1} data-testid="prevBtn">PREV</button>
     {
      arr?.map((page,ind)=><PageCell page={page} key={ind} curr={curr} handlePageChange={handlePageChange}/>)
     }
     <button onClick={()=>handlePage(1)} disabled={curr===count} data-testid="nextBtn">NEXT</button>
  </div>;
};

export default Pagination;
