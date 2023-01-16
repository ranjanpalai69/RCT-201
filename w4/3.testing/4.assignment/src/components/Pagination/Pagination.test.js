import { fireEvent, render, screen } from '@testing-library/react';
import  Pagination  from "./Pagination"

test('should have Prev', () => { 
    render(<Pagination count={10} currentPage={1} updateCurrentPage={1}/>)
    const ButtonElement = screen.getByTestId("prev");
    expect(ButtonElement).toHaveTextContent("Prev");
 })

 test('should have Next', () => { 
    render(<Pagination count={10} currentPage={1} updateCurrentPage={1}/>)
    const ButtonElement = screen.getByTestId("next");
    expect(ButtonElement).toHaveTextContent("Next");
 })
 test('should have Current', () => { 
    render(<Pagination count={10} currentPage={1} updateCurrentPage={1}/>)
    const ButtonElement = screen.getByTestId("cur");
    expect(ButtonElement).toHaveTextContent("1");
 })

 test('should have inc Current ', () => { 
    render(<Pagination count={10} currentPage={1} updateCurrentPage={1}/>)
    const ButtonElement = screen.getByTestId("cur");
    const buttonElement = screen.getByTestId("next");
    fireEvent.click(buttonElement)
    expect(ButtonElement).toHaveTextContent("2");
 })

 test('should have dec Current ', () => { 
    render(<Pagination count={10} currentPage={1} updateCurrentPage={1}/>)
    const ButtonElement = screen.getByTestId("cur");
    const buttonElement = screen.getByTestId("next");
    const buttonelement = screen.getByTestId("prev");
    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    fireEvent.click(buttonelement)
    expect(ButtonElement).toHaveTextContent("3");
 })