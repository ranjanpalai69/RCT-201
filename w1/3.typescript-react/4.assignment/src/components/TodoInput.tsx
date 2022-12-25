import React, { useState } from "react";

interface inputProp {
  // handleAdd(text:string):void
  handleAdd: (text: string) => void;
}

const TodoInput = ({ handleAdd }: inputProp) => {
  const [text, setText] = useState<string>("");
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleAdd(text);
    setText("");
  };
  console.log(text);
  return (
    <div>
      <input
        type="text"
        placeholder=" Enter Todo "
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
