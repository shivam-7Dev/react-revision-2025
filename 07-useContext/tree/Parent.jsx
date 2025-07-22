import React, { createContext } from "react";
import Child from "./Child";

const AuthContext = createContext();
const authState = {
  user: "shivam",
  isLoggedIn: true,
};
const Parent = () => {
  return (
    <AuthContext.Provider value={authState}>
      <div>
        Parent
        <Child />
      </div>
    </AuthContext.Provider>
  );
};

export default Parent;

export { AuthContext };
