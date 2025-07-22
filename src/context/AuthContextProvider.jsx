import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (currentState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...currentState, user: action.payload, isLoggedIn: true };
    }

    case "LOGOUT": {
      return null;
    }
    default:
      return currentState;
  }
};

const AuthContextProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(authReducer, null);
  return (
    <AuthContext.Provider value={{ userData, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
