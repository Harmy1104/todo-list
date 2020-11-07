import { createMuiTheme } from "@material-ui/core";
import { cyan, lightBlue } from "@material-ui/core/colors";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState([
    {
      isDarkMode: true,
      ui: createMuiTheme({
        palette: {
          type: "dark",
          primary: cyan,
          secondary: lightBlue,
        },
      }),
    },
  ]);

  const toggleTheme = () => {
    setTheme({
      isDarkMode: !theme.isDarkMode,
      ui: createMuiTheme({
        palette: {
          type: theme.isDarkMode ? "dark" : "light",
          primary: cyan,
          secondary: lightBlue,
        },
      }),
    });
  };

  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
