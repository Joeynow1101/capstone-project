import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import FontStyles from "./GlobalStyles/GlobalFonts";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
