import React from "react";
import { Route, Switch } from "react-router-dom";

import TailorHeader from "./TailorHeader.jsx";
import TailorAdd from "./TailorAdd";
import TailorEdit from "./TailorEdit";
import TailorDelete from "./TailorDelete";

const TailorDashboard = () => {
  return (
    <div className="TailorDashboard-wrapper">
      <TailorHeader />
      <Switch>
        <Route exact path="/tailor">
          <h1>Hi there Tailor</h1>
        </Route>
        <Route exact path="/tailor/add">
          <TailorAdd />
        </Route>
        <Route exact path="/tailor/edit">
          <TailorEdit />
        </Route>
        <Route exact path="/tailor/delete">
          <TailorDelete />
        </Route>
      </Switch>
    </div>
  );
};

export default TailorDashboard;
