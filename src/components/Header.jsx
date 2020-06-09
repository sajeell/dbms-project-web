import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import logo from "./assets/crown.svg";

const Header = () => {
  const signedIn = false;
  return (
    <div>
      <section>
        <header className="Header-wrapper">
          <div className="">
            <Link to="/">
            <img src={logo} width="100" alt="logo"></img>
            </Link>
          </div>
          <div className="header-buttons">
            <ul>
              {signedIn ? (
                <Link to="/logout">
                  <li>LOGOUT</li>
                </Link>
              ) : (
                <Link to="/signin">
                  <li>SIGNIN</li>
                </Link>
              )}
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
