

import {render,screen,fireEvent} from "@testing-library/react" ;
import App from "./App";
import PageCell from "./components/Pagination/PageCell";

it ("Should  increase and decrease current value",()=>{
    render(<App/>)
    const prevBtn=screen.getByTestId("prevBtn");
    const nextBtn=screen.getByTestId("nextBtn");
    const currVal=screen.getByTestId("currVal");
    expect(currVal).toHaveTextContent("1");
    expect(prevBtn).toBeDisabled();
    fireEvent.click(nextBtn);
    expect(currVal).toHaveTextContent("2");
    expect(prevBtn).toBeEnabled();
    expect(nextBtn).toBeEnabled();
    fireEvent.click(nextBtn);
    expect(currVal).toHaveTextContent("3");
    fireEvent.click(prevBtn);
    expect(currVal).toHaveTextContent("2");
    fireEvent.click(prevBtn);
    expect(currVal).toHaveTextContent("1");
    expect(prevBtn).toBeDisabled();
})


it("Should works correctly page cell components",()=>{
    render(<App/>)
    const currVal=screen.getByTestId("currVal");
    expect(currVal).toBeInTheDocument();
    expect(currVal).toHaveTextContent("1");
    render(<PageCell page={5}/>);
    const changeBtn=screen.getByTestId("changeBtn");
    expect(changeBtn).toBeInTheDocument();
    fireEvent.click(changeBtn);
    expect(currVal).toHaveTextContent("5");
})
