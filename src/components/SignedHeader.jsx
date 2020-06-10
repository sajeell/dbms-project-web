import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { toast } from "react-toastify";
import logo from "./assets/crown.svg";

import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
toast.configure();
const SignedHeader = ({ setAuth }) => {
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("customer_token");
      setAuth(false);
      toast.warn("Logout Succesfully");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <section>
        <header className='Header-wrapper'>
          <div className=''>
            <Link to='/'>
              <img src={logo} width='100' alt='logo'></img>
            </Link>
          </div>
          <div className='header-buttons'>
            <ul>
              <Link to='/'>
                <li>HOME</li>
              </Link>
              <Link to='/'>
                <li>ABOUT</li>
              </Link>
              <Link to='/shop'>
                <li>SHOP</li>
              </Link>
              <Link to='/cart'>
                <li>CART</li>
              </Link>
              <Link to='/signin'>
                <li onClick={(e) => logout(e)}>LOGOUT</li>
              </Link>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default SignedHeader;
