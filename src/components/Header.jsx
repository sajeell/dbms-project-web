import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./LandingPage.css";

import logo from "./assets/crown.svg";

const Header = () => {
  const signedIn = false;
  return (
    <Router forceRefresh="true">
      <div>
        <section>
          <header>
            <div className="">
              <img src={logo} width="100" alt="logo"></img>
            </div>
            <div className="Header-wrapper">
              <ul>
                <Link to="/">
                  <li>HOME</li>
                </Link>
                <Link to="/about">
                  <li>ABOUT</li>
                </Link>
                <Link to="/shop">
                  <li>SHOP</li>
                </Link>
                <Link to="/cart">
                  <li>CART</li>
                </Link>
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
    </Router>
  );
};

export default Header;
