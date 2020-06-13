import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AdminSignin from './components/admin/AdminSignin';
import TailorSignin from './components/tailor/TailorSignin';
import AdminDashboard from './components/admin/AdminDashboard';
import TailorDashboard from './components/tailor/TailorDashboard';
import AdminSignup from './components/admin/AdminSignup';
import TailorSignup from './components/tailor/TailorSignup';

import './App.css';

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isTailorAuthenticated, setIsTailorAuthenticated] = useState(false);

  const setAdminAuth = boolean => {
    setIsAdminAuthenticated(boolean);
  };

  const setTailorAuth = boolean => {
    setIsTailorAuthenticated(boolean);
  };
  const checkAdminAuthenticated = async () => {
    try {
      const res = await fetch(
        'http://localhost:5000/admin/authentication/verify',
        {
          method: 'POST',
          headers: {admin_jwt_token: localStorage.admin_token},
        }
      );

      const parseRes = await res.json();

      parseRes === true
        ? setIsAdminAuthenticated(true)
        : setIsAdminAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  const checkTailorAuthenticated = async () => {
    try {
      const res = await fetch(
        'http://localhost:5000/tailor/authentication/verify',
        {
          method: 'POST',
          headers: {tailor_jwt_token: localStorage.tailor_token},
        }
      );

      const parseRes = await res.json();

      parseRes === true
        ? setIsTailorAuthenticated(true)
        : setIsTailorAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkTailorAuthenticated();
  }, []);

  useEffect(() => {
    checkAdminAuthenticated();
  }, []);

  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          <LandingPage />
        </Route>
        <Route
          exact
          path="/admin/dashboard"
          render={props =>
            isAdminAuthenticated ? (
              <AdminDashboard {...props} setAdminAuth={setAdminAuth} />
            ) : (
              <Redirect to="/admin" />
            )
          }
        />
        <Route
          exact
          path="/admin"
          render={props =>
            !isAdminAuthenticated ? (
              <AdminSignin {...props} setAdminAuth={setAdminAuth} />
            ) : (
              <Redirect to="/admin/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/tailor"
          render={props =>
            !isTailorAuthenticated ? (
              <TailorSignin {...props} setTailorAuth={setTailorAuth} />
            ) : (
              <Redirect to="/tailor/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/tailor/dashboard"
          render={props =>
            isTailorAuthenticated ? (
              <TailorDashboard {...props} setTailorAuth={setTailorAuth} />
            ) : (
              <Redirect to="/tailor" />
            )
          }
        />
        <Route
          exact
          path="/tailor/register"
          render={props =>
            !isTailorAuthenticated ? (
              <TailorSignup {...props} setTailorAuth={setTailorAuth} />
            ) : (
              <Redirect to="/tailor/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/admin/register"
          render={props =>
            !isAdminAuthenticated ? (
              <AdminSignup {...props} setAdminAuth={setAdminAuth} />
            ) : (
              <Redirect to="/admin/dashboard" />
            )
          }
        />


        <Route>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
