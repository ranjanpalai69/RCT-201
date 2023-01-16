// TODO


import {render,screen} from "@testing-library/react";

import Button from "./Button";

it("Should render Button with hello",()=>{
    render(<Button children="hello"/>)
    const Btn=screen.getByTestId("btn");
    expect(Btn).toBeInTheDocument();
    expect(Btn).toHaveTextContent("hello");
})

it("Should render Button with Hii",()=>{
    render(<Button children="Hii"/>)
    const Btn=screen.getByTestId("btn");
    expect(Btn).toBeInTheDocument();
    expect(Btn).toHaveTextContent("Hii");
})

it("Should render Button with Bye",()=>{
    render(<Button children="bye"/>)
    const Btn=screen.getByTestId("btn");
    expect(Btn).toBeInTheDocument();
    expect(Btn).toHaveTextContent("bye");
})