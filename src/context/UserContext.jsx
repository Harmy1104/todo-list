import React, { createContext, useContext, useState } from "react";
import firebase, { auth } from "../firebase";

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const db = firebase.firestore();

  const setUserAccount = () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const userDocRef = db.collection("users").doc(user.uid);
        try {
          userDocRef.set({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.providerData[0].photoURL,
          });
        } catch (err) {
          console.log("-- Error setting data --\n", err);
        }
      } else {
        console.log("BTW, you are not logged in.");
      }
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
