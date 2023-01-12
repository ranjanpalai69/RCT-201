
import React from 'react';

import {render,screen,fireEvent, cleanup} from "@testing-library/react";
import App from './App';

it("Should render Button Component",()=>{
    render(<App/>);
    expect(screen.getByTestId("add-btn")).toBeInTheDocument();
    expect(screen.getByTestId("reduce-btn")).toBeInTheDocument();
    expect(screen.getByTestId("counter")).toBeInTheDocument();
    expect(screen.getByTestId("counter")).toHaveTextContent(0);
});

it ("Should increament value by 5 when click ADD button",()=>{
    render(<App/>);
    let addBtn=screen.getByTestId("add-btn");
    let reduceBtn=screen.getByTestId("reduce-btn");
    for(let i=0;i<5;i++){
        fireEvent.click(addBtn);
    }
    expect(screen.getByTestId("counter")).toHaveTextContent(5);
    for(let i=0;i<5;i++){
        fireEvent.click(reduceBtn);
    }
    expect(screen.getByTestId("counter")).toHaveTextContent(0);
})