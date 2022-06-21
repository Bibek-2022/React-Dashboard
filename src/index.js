import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { COntextProvider } from "./contexts/ContextProvider";
import "./index.css";
ReactDOM.render(
  <COntextProvider>
    <App />
  </COntextProvider>,
  document.getElementById("root")
);
