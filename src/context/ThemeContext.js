import { createMuiTheme } from "@material-ui/core";
import { cyan, lightBlue } from "@material-ui/core/colors";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDarkMode, setMode] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: cyan,
      secondary: lightBlue,
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
