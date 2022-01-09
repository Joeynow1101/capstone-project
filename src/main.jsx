import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import FontStyles from "./GlobalStyles/GlobalFonts";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <FontStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
