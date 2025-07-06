/*
    1. Create a new Vite React Project

    2. Create a TextBox.jsx file to create a TextBox
       Component that you export within it

    3. Inside Textbox, create an <h1> with an <input> element
       below it.

    4. Make it so that when you type in to the <input>, the <h1>
       updates to match the text that has been entered

    5. Import the TextBox component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/

import React, { useState } from "react";

const One = () => {
  const [input, setinput] = useState("");

  return (
    <div>
      One
      <h1>Entered value:{input}</h1>
      <input
        type="text"
        name="input"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
    </div>
  );
};

export default One;
