import { render } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar Component", () => {
  it("should render correctly", () => {
    render(<Avatar name="A B" />);
  });
});


it ("Should have name Anand Kulkarni",()=>{

  render(<Avatar name="Anand Kulkarni"/>)
})


it ("Babu Rao",()=>{
  
  render(<Avatar name="Babu Rao"/>)
})

