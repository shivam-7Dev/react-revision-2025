import React, { useContext } from "react";
import { ThreeContext } from "./Three";

const Child = () => {
  const [state, dispatch] = useContext(ThreeContext);
  return (
    <div>
      <h3>Three child</h3>
      <h5>current state:{state}</h5>
      <button
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child;
