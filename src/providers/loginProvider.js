import React, { useState, createContext } from "react";
import { auth } from "../services/firebase";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
      {props.children}
    </LoginContext.Provider>
  );
};
