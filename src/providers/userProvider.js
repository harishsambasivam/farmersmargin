import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";

export const UserContext = createContext({ user: null });
export default (props) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    console.log("onAuthStateChange");
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email } = user;
        console.log(displayName, email);
        setuser({
          displayName,
          email,
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
