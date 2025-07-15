/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file with a Counter
       component and export it as well as a
       Button.jsx with a Button component and
       export that as well

    3. Make Counter return an <h1> as well as 3
       <Button> elements

    4. Make Button return a <button> element (the
       info for the button will come from props later)

    5. Create a reducer function and use useReducer
       to hook up the 3 buttons to make the counter
       go up, go down, and reset to 0. The current
       count should show in the <h1>

    6. You will need to figure out what props to pass
       into each Button from Counter

    7. Replace the <App /> in main.jsx with your Counter
       component and test that it works in your Browser

    BONUS* Try out various useEffects inside Counter and
           Button to see if you can guess when each will
           re-render (mount, update, and state updates)
*/

import React, { useReducer } from "react";
import Button from "./TwoChild";
const reducer = (currentState, action) => {
  if (action.type === "INCREMENT") {
    return currentState + action.payload;
  }
  if (action.type === "DECREMENT") {
    return currentState - action.payload;
  }

  if (action.type === "RESET") {
    return 0;
  }
};

const Two = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1> Problem2 count {count}</h1>
      <Button dispatch={dispatch} type={"INCREMENT"} />
      <Button dispatch={dispatch} type={"DECREMENT"} />
      <Button dispatch={dispatch} type={"RESET"} />
    </div>
  );
};

export default Two;
