import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
