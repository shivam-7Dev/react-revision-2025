/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file with a Counter
       component and export it

    3. Make Counter return an <h1> as well as 3
       <button> elements

    4. Create a reducer function and use useReducer
       to hook up the 3 buttons to make the counter
       go up, go down, and reset to 0. The current
       count should show in the <h1>

    5. Replace the <App /> in main.jsx with your Counter
       component and test that it works in your Browser
*/ import React, { useReducer, useState } from "react";

const intialState = 0;

const reducer = (currentState, action) => {
  if (action.type === "INCREMENT") {
    return currentState + action.payload;
  }
  if (action.type === "DECREMENT") {
    return currentState - action.payload;
  }

  if (action.type === "RESET") {
    return intialState;
  }
};

const One = () => {
  const [count, setCount] = useState(0);

  const [reduceCount, dispatch] = useReducer(reducer, intialState);

  const [coutntThree, setCoutntThree] = useState(0);

  const customReducer = (action) => {
    if (action.type === "INCREMENT") {
      setCoutntThree(coutntThree + action.payload);

      return;
    }
    if (action.type === "DECREMENT") {
      setCoutntThree(coutntThree - action.payload);

      return;
    }

    if (action.type === "RESET") {
      setCoutntThree(0);

      return;
    }
  };

  return (
    <div>
      <h2>Normal count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count + 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <hr />
      <h2>Reduce count:{reduceCount}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: 1,
          })
        }
      >
        Reduce Increase{" "}
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            payload: 1,
          })
        }
      >
        Reduce Decrease
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        Reduce Reset
      </button>
      <hr />
      <h2>Normal count:{coutntThree}</h2>
      <button onClick={() => customReducer({ type: "INCREMENT", payload: 1 })}>
        CUSTOM Increase
      </button>
      <button onClick={() => customReducer({ type: "DECREMENT", payload: 1 })}>
        CUSTOM Decrease
      </button>
      <button onClick={() => customReducer({ type: "RESET", payload: 11 })}>
        CUSTOM Reset
      </button>
      <hr />
    </div>
  );
};

export default One;
