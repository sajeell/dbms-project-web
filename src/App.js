import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import TailorDashboard from "./components/tailor/TailorDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/tailor">
          <TailorDashboard />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route>
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
