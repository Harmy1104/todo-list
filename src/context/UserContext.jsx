import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setUserAccount = () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  };

  return (
    <UserContext.Provider value={{ user, setUserAccount }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
