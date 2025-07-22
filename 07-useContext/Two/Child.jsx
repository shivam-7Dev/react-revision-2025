import React, { useContext } from "react";
import { TwoContext1, TwoContext2 } from "./Two";

const Child = () => {
  const [state1] = useContext(TwoContext1);
  const [state2] = useContext(TwoContext2);
  return (
    <div>
      <h4>Two child</h4>
      <h3>State one :{state1}</h3>
      <h3>State Two :{state2}</h3>
    </div>
  );
};

export default Child;
