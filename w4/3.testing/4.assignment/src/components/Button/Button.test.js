// TODO
import { fireEvent, render, screen } from '@testing-library/react';
import  Button  from "./Button"

test('should have hello', () => { 
    render(<Button children='hello'/>)
    const ButtonElement = screen.getByTestId("chil");
    expect(ButtonElement).toHaveTextContent("hello");
 })

 test('should have hi', () => { 
    render(<Button children='hi'/>)
    const ButtonElement = screen.getByTestId("chil");
    expect(ButtonElement).toHaveTextContent("hi");
 })

 test('should have FUCK OFF', () => { 
   render(<Button children='FUCK OFF'/>)
   const ButtonElement = screen.getByTestId("chil");
   expect(ButtonElement).toHaveTextContent("FUCK OFF");
})
test('should have set', () => { 
   render(<Button children='set'/>)
   const ButtonElement = screen.getByTestId("chil");
   expect(ButtonElement).toHaveTextContent("set");
})
