import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <input type={props.type} ref={ref} />
    </>
  );
});

export default Input;
