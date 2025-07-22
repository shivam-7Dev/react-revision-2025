import React, { useContext, useEffect } from "react";
import Warmup from "./Warmup";
import Parent from "./tree/Parent";
import { AuthContext } from "../src/context/AuthContextProvider";

const UseContext = () => {
  const { userData, dispatch } = useContext(AuthContext);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: "shivam",
    });
  }, []);

  return (
    <div>
      Use Context
      <div style={{ border: " 4px solid black", padding: "10px" }}>
        <Parent />
        {/* <Warmup /> */}
      </div>
      <hr />
      <hr />
      <div style={{ border: " 4px solid black", padding: "10px" }}>
        <h4>global Auth context</h4>
        {userData && <h5> logged in user name:{userData.user}</h5>}

        <button
          onClick={() => {
            dispatch({ type: "LOGOUT" });
          }}
        >
          logout
        </button>

        <button
          onClick={() => {
            dispatch({
              type: "LOGIN",
              payload: "shivam",
            });
          }}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default UseContext;
