import { createMuiTheme } from "@material-ui/core";
import { cyan, lightBlue } from "@material-ui/core/colors";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isDarkMode: true,
    ui: null,
  });

  const ui = createMuiTheme({
    palette: {
      type: theme.isDarkMode ? "dark" : "light",
      primary: cyan,
      secondary: lightBlue,
    },
  });

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.childern}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
