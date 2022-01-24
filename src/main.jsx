import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import GlobalFonts from "./GlobalStyles/GlobalFonts"
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <GlobalFonts/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
