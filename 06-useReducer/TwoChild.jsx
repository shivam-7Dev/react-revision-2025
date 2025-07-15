import React from "react";

const Button = ({ dispatch, type }) => {
  return <button onClick={() => dispatch({ type, payload: 1 })}>{type}</button>;
};

export default Button;
