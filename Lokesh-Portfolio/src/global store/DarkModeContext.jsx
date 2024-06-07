import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);
export function DarkModeProvider({ children }) {
  const [DarkMode, SetDarkMode] = useState(() => {
    const darkLocal = localStorage.getItem("DarkMode");
    return darkLocal ? JSON.parse(darkLocal) : true;
  });

  const handleDark = () => {
    SetDarkMode(!DarkMode);
  };
  return (
    <DarkModeContext.Provider value={{ DarkMode, handleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}
