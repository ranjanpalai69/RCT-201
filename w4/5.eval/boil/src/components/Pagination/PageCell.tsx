import React from 'react';
interface pageCellProps{
    page:number;
    curr:number;
    handlePageChange:(val:number)=>void
}

const PageCell = ({page,curr,handlePageChange}:pageCellProps) => {

  return (
    <button data-testid="changeBtn" onClick={()=>handlePageChange(page)} style={page===curr?{"borderColor":"blue","borderRadius":"5px"}:{"border":"1px solid"}}>
        {page}
    </button>
  )
}

export default PageCell