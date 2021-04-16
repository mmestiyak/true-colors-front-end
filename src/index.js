import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.min.css";
import App from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
