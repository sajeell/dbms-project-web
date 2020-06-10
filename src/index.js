import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Cube } from "react-preloaders";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Cube time={700} />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
