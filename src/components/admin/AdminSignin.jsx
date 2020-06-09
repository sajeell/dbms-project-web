import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import "./Admin.css";

import { toast } from "react-toastify";

const AdminLogin = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="AdminSignin-wrapper">
        <h1 className="m-5 text-center">Admin Login</h1>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onChange(e)}
            className="form-control my-3"
          />
          <button className="btn btn-success btn-block">Submit</button>
        </form>
        <Link to="/register">register</Link>
      </div>
    </Fragment>
  );
};

export default AdminLogin;
