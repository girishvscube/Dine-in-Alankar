import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <AppContext.Provider value={{ handleClick, show }}>
      {children}
    </AppContext.Provider>
  );
};
