import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Category from "./Category.jsx";
import WomenProduct from "./WomenProduct.jsx";
import DressDetails from "./DressDetails.jsx";
import BillingDetails from "./BillingDetails.jsx";
import OrderConfirm from "./OrderConfirm.jsx";
import Cart from "./Cart.jsx";

import "./LandingPage.css";
import Main from "./Main.jsx";
import SignedHeader from "./SignedHeader.jsx";
import CustomerSignin from "./CustomerSignin.jsx";
import CustomerSignup from "./CustomerSignup.jsx";
import MenProduct from "./MenProduct.jsx";
import KidsProduct from "./KidsProduct.jsx";
import SuitingsProduct from "./SuitingsProduct.jsx";

const LandingPage = () => {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/customer/authentication/verify",
        {
          method: "POST",
          headers: { jwt_token: localStorage.customer_token },
        }
      );

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
    <div className='LandingPage-wrapper'>
      {!isAuthenticated ? <Header /> : <SignedHeader setAuth={setAuth} />}
      <Switch>
        <Route
          exact
          path='/register'
          render={(props) =>
            !isAuthenticated ? (
              <CustomerSignup {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />
        <Route
          exact
          path='/signin'
          render={(props) =>
            !isAuthenticated ? (
              <CustomerSignin {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/' />
            )
          }
        />

        <Route exact path='/'>
          <Main />
        </Route>

        <Route
          exact
          path='/cart'
          render={(props) =>
            isAuthenticated ? (
              <Cart {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />

        <Route
          exact
          path='/shop'
          render={(props) =>
            isAuthenticated ? (
              <Category {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />

        <Route
          exact
          path='/order-confirm'
          render={(props) =>
            isAuthenticated ? (
              <OrderConfirm {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />

        <Route
          exact
          path='/billing-details'
          render={(props) =>
            isAuthenticated ? (
              <BillingDetails {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />
        <Route
          exact
          path='/dress-details'
          render={(props) =>
            isAuthenticated ? (
              <DressDetails {...props} setAuth={setAuth} />
            ) : (
              <Redirect to='/signin' />
            )
          }
        />

        <Route exact path='/women-product'>
          <WomenProduct />
        </Route>
        <Route exact path='/men-product'>
          <MenProduct />
        </Route>
        <Route exact path='/kids-product'>
          <KidsProduct />
        </Route>
        <Route exact path='/suitings-product'>
          <SuitingsProduct />
        </Route>
        
      </Switch>
      <Footer />
    </div>
  );
};

export default LandingPage;
