import React from "react";

const Button = ({ name, functionality }) => {
  return (
    <>
      <button onClick={functionality}>{name}</button>
    </>
  );
};

export default React.memo(Button);
