import React, { createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const test = {
    id: 1,
    msg: "this is test",
  };

  return (
    <LoginContext.Provider value={{ test }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
