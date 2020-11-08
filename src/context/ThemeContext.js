import { createMuiTheme } from "@material-ui/core";
import { lightBlue, red } from "@material-ui/core/colors";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
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
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
