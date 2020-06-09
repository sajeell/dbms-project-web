import React from "react";
import logo from "./assets/crown.svg";

const Main = () => {
  return (
    <div className="LandingPage-wrapper">
      <section id="main">
        <div className="main-text">
          <span>Stitchers101.</span> <br /> where we reinvent <br />
          the meaning of <span id="tailor-span">tailoring</span>
        </div>
        <img src={logo} width="400" alt="leaf-main" id="main-logo-lg"></img>
      </section>
    </div>
  );
};

export default Main;
