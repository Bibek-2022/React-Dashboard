import React, { createContext, useContext, useEffect, useState } from "react";
const StateContext = createContext();

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const COntextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
