import React, { useContext } from "react";
import { OneContext } from "./One";

const Child = () => {
  const [state, setState] = useContext(OneContext);
  return (
    <div>
      One child
      <h4>State value is :{state}</h4>
      <button
        onClick={() => {
          const rand = Math.floor(Math.random() * 10);
          setState(rand);
        }}
      >
        genereate random rumber
      </button>
    </div>
  );
};

export default Child;
