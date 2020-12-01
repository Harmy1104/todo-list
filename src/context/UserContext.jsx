import React, { createContext, useContext, useState } from "react";
import firebase, { auth } from "../firebase";

export const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const db = firebase.firestore();

  const setUserDatabase = (user) => {
    var docRef = db.collection("users").doc(user.id);
    docRef
      .set({
        id: user.id,
        name: user.name || "",
        email: user.email || "",
        image: user.image || "",
        todos: user.todos,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const setUserAccount = () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // setting the user
      setUser(user);

      // checking if the user is in the database setup already
      var docRef = db.collection("users").doc(user.uid);
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log(doc.data());
          } else {
            setUserDatabase({
              id: user.uid,
              name: user.displayName,
              email: user.email,
              image: user.providerData[0].photoURL,
              todos: [],
            });
          }
        })
        .catch(function (error) {
          console.log("-- Error getting document -- \n", error);
        });
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
