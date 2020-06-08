import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Cube } from "react-preloaders";
ReactDOM.render(
  <React.StrictMode>
    <Cube time={700} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
