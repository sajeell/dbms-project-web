import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

import { toast } from "react-toastify";

import logo from "../assets/crown.svg";

const Header = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout sloginuccessfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <section>
        <header className="Header-wrapper">
          <div className="">
            <img src={logo} width="100" alt="logo"></img>
            <p>{name}</p>
          </div>
          <div className="header-buttons">
            <ul>
              <Link to="/admin/add-user">
                <li>Add User</li>
              </Link>
              <Link to="/admin/delete-user">
                <li>Delete User</li>
              </Link>
              <Link to="/admin/edit-user">
                <li>Edit User</li>
              </Link>
              <Link to="/logout">
                <li onClick={(e) => logout(e)}>Logout</li>
              </Link>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Header;
