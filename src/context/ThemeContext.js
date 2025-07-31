// src/context/ThemeContext.js

import React from "react";
import { darkTheme } from "../styles/theme";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children(darkTheme)}
    </ThemeContext.Provider>
  );
};
