/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file to create a Counter
       Component that you export within it

    3. Inside Counter, create an <h1> with two <button>
       elements. One button should have the text '-' inside
       while the other has a '+' inside.

    4. Make it so that the <h1> displays a counter starting at
       0 and when you click the buttons, they act appropriately.
       (The counter in the h1 should go up and down by 1)

    5. Import the Counter component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/

import React, { useState } from "react";

const Warmup = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div>
      Warmup
      <h1>count:{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Warmup;
