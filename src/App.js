import React, { useRef, useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";

const App = () => {
  const inputRef = useRef();
  const [inputText, setInputText] = useState("");

  const clickHandler = (props) => {
    props.preventDefault();
    setInputText(inputRef.current.value);
  };

  return (
    <>
      <form>
        <h1>Form:</h1>
        <Input type="text" ref={inputRef} />
        <Button name="Submit" functionality={clickHandler} />
        <div>
          <h2>{inputText}</h2>
        </div>
      </form>
    </>
  );
};

export default React.memo(App);
