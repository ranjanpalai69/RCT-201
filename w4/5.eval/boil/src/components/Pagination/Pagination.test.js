

import {fireEvent, render,screen} from "@testing-library/react";

import Pagination from "./Pagination";

it("Should render Pagination component",()=>{
    render(<Pagination count={10} updateCurrentPage={1} currentPage={1}/>);
    const prevBtn=screen.getByTestId("prevBtn");
    const nextBtn=screen.getByTestId("nextBtn");
    const currVal=screen.getByTestId("currVal");
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toHaveTextContent("PREV")
    expect(nextBtn).toBeInTheDocument();
     expect(nextBtn).toHaveTextContent("NEXT")
    expect(currVal).toBeInTheDocument();
    expect(currVal).toHaveTextContent("1")

})

it("Should disable  prev button",()=>{
    render(<Pagination count={10} updateCurrentPage={1} currentPage={3}/>);
    const prevBtn=screen.getByTestId("prevBtn");
    const currVal=screen.getByTestId("currVal");
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toHaveTextContent("PREV");
    expect(prevBtn).toBeEnabled();
    expect(currVal).toHaveTextContent("3");
    fireEvent.click(prevBtn);
    expect(currVal).toHaveTextContent("2");
    expect(prevBtn).toBeEnabled();
    fireEvent.click(prevBtn);
    expect(currVal).toHaveTextContent("1");
    expect(prevBtn).toBeDisabled();

})


it("Should disable  next button",()=>{
    render(<Pagination count={10} updateCurrentPage={1} currentPage={8}/>);
    const nextBtn=screen.getByTestId("nextBtn");
    const currVal=screen.getByTestId("currVal");
    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toHaveTextContent("NEXT");
    expect(nextBtn).toBeEnabled();
    expect(currVal).toHaveTextContent("8");
    fireEvent.click(nextBtn);
    expect(currVal).toHaveTextContent("9");
    expect(nextBtn).toBeEnabled();
    fireEvent.click(nextBtn);
    expect(currVal).toHaveTextContent("10");
    expect(nextBtn).toBeDisabled();

})


