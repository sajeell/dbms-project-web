import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Cube} from 'react-preloaders';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={false}>
      <App />
      <Cube time={600} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
