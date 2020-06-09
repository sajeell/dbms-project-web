import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Category from "./Category.jsx";
import Shop from "./Shop.jsx";
import DressDetails from "./DressDetails.jsx";
import BillingDetails from "./BillingDetails.jsx";
import OrderConfirm from "./OrderConfirm.jsx";
import Cart from "./Cart.jsx";

import "./LandingPage.css";
import Main from "./Main.jsx";
import SignedHeader from "./SignedHeader.jsx";
import CustomerSignin from "./CustomerSignin.jsx";
import CustomerSignup from "./CustomerSignup.jsx";

const LandingPage = () => {
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
    <div className="LandingPage-wrapper">
      {!isAuthenticated ? <Header /> : <SignedHeader />}
      <Switch>
        <Route
          exact
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <CustomerSignup {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/signin" />
            )
          }
        />
        <Route
          exact
          path="/signin"
          render={(props) =>
            !isAuthenticated ? (
              <CustomerSignin {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/" />
            )
          }
        />

        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/shop">
          <Category />
        </Route>
        <Route exact path="/order-confirm">
          <OrderConfirm />
        </Route>
        <Route exact path="/billing-details">
          <BillingDetails />
        </Route>
        <Route exact path="/women">
          <Shop />
        </Route>
        <Route exact path="/dress-details">
          <DressDetails />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default LandingPage;
