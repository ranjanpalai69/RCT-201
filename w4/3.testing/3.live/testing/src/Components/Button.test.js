
import React from 'react';
import Button from './Button';
import {render,screen,fireEvent, cleanup} from "@testing-library/react";

it("Should render Button Component",()=>{
    render(<Button/>);
    expect(screen.getByTestId("add-btn")).toBeInTheDocument();
    expect(screen.getByTestId("reduce-btn")).toBeInTheDocument();
});

it("Should have text Content",()=>{
    render(<Button/>);
    expect(screen.getByTestId("add-btn")).toHaveTextContent("ADD");
    expect(screen.getByTestId("reduce-btn")).toHaveTextContent("REDUCE");
});


afterAll(()=>{
    cleanup();
})