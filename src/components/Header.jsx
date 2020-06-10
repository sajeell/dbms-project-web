import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { toast } from "react-toastify";
import logo from "./assets/crown.svg";

const Header = ({ setAuth }) => {
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("customer_token");
      setAuth(false);
      toast.success("Logout Succesfully");
    } catch (err) {
      console.error(err.message);
    }
  };

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
                  <li onClick={(e) => logout(e)}>LOGOUT</li>
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
