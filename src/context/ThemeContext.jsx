import { createMuiTheme } from "@material-ui/core";
import { lightBlue, red } from "@material-ui/core/colors";
import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        light: isDarkMode ? lightBlue[300] : red[200],
        main: isDarkMode ? lightBlue[500] : red[400],
        dark: isDarkMode ? lightBlue[700] : red[600],
      },
      secondary: {
        light: isDarkMode ? lightBlue[300] : red[200],
        main: isDarkMode ? lightBlue[500] : red[400],
        dark: isDarkMode ? lightBlue[700] : red[600],
      },
    },
  });

  const toggleMode = () => {
    setMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
