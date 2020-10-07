import React, { useState, createContext } from "react";

export const SidenavContext = createContext();

export const SidenavProvider = (props) => {
  const [state, setState] = useState({
    left: false,
  });

  return (
    <SidenavContext.Provider value={[state, setState]}>
      {props.children}
    </SidenavContext.Provider>
  );
};
