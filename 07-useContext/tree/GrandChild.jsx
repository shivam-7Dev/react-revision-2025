import React, { useContext } from "react";
import { AuthContext } from "./Parent";

const GrandChild = () => {
  const value = useContext(AuthContext);
  return (
    <div>
      GrandChild
      <h3>{JSON.stringify(value)}</h3>
    </div>
  );
};

export default GrandChild;
