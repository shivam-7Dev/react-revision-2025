import React, { useContext } from "react";
import { WarmupContext } from "./Warmup";
const Child = () => {
  const [state, _] = useContext(WarmupContext);
  return (
    <div>
      Child of Warmup
      <h3>state value is {state}</h3>
    </div>
  );
};

export default Child;
