import React, { Fragment, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./Admin.css";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import AdminLogin from "./AdminSignin";

const AdminDashboard = () => {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <div className="AdminDashboard-wrapper">
        <div className="header"></div>
        <Switch>
          <Route
            exact
            path="/admin/login"
            render={(props) =>
              !isAuthenticated ? (
                <AdminLogin {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/admin" />
              )
            }
          />
          <Route
            exact
            path="/admin"
            render={(props) =>
              isAuthenticated ? (
                <AddUser {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/admin/login" />
              )
            }
          />
          <Route
            exact
            path="/admin/add-user"
            render={(props) =>
              isAuthenticated ? (
                <AddUser {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/admin/login" />
              )
            }
          />
          <Route
            exact
            path="/admin/edit-user"
            render={(props) =>
              isAuthenticated ? (
                <EditUser {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/admin/login" />
              )
            }
          />
          <Route
            exact
            path="/admin/delete-user"
            render={(props) =>
              isAuthenticated ? (
                <DeleteUser {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/admin/login" />
              )
            }
          />
        </Switch>
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
