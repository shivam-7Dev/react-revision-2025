/*
    1. Create a new Vite React project

    2. Create an Input.jsx with an Input component
       that is exported

    3. Inside Input, return a text <input> element with
       a <button> below it that says "Focus"

    4. Find a way to use useRef such that when you click
       on the <button> the <input> gets focused

    5. Replace the <App /> in main.jsx with your Input
       component and test that it works in your Browser

    HINT* Check how to focus an input element on MDN
*/

import React, { useEffect, useRef } from "react";

const Warmup = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    //  inputRef.current.focus();

    return () => {};
  }, []);

  return (
    <div>
      Warmup
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
};

export default Warmup;
