import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header.jsx";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import DressDetails from "./components/DressDetails";
import Cart from "./components/Cart";
import BillingDetails from "./components/BillingDetails";
import OrderConfirm from "./components/OrderConfirm";

import "./App.css";

function App() {
  return (
    <Router forceRefresh="true">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/shop">
            <Category />
          </Route>
          <Route exact path="/women">
            <Shop />
          </Route>
          <Route exact path="/dress-details">
            <DressDetails />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/billing-details">
            <BillingDetails />
          </Route>
          <Route exact path="/order-confirm">
            <OrderConfirm />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
