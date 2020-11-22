import React, { createContext, useState } from "react";
import firebase from "firebase";
import { auth } from "../firebase";

export const LoginContext = createContext();

const Login = () => {};

const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <LoginContext.Provider value={{ test, Login }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
