import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

import logo from "./assets/crown.svg";

const SignedHeader = () => {
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
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/">
                <li>ABOUT</li>
              </Link>
              <Link to="/shop">
                <li>SHOP</li>
              </Link>
              <Link to="/cart">
                <li>CART</li>
              </Link>
              <Link>
                <li>LOGOUT</li>
              </Link>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default SignedHeader;
