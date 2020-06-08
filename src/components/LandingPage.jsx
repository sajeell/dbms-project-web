import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./LandingPage.css";
import logo from "./assets/crown.svg";

const LandingPage = () => {
  return (
    <Router>
      <div>
        <section id="main">
          <div className="main-text">
            <span>Crown Tailors.</span> <br /> where we reinvent <br />
            the meaning of <span id="tailor-span">tailoring</span>
          </div>
          <img src={logo} width="400" alt="leaf-main" id="main-logo-lg"></img>
        </section>
      </div>
    </Router>
  );
};

export default LandingPage;
