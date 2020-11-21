import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
