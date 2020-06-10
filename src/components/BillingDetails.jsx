import React from "react";
import { Link } from "react-router-dom";

import "./BillingDetails.css";

const BillingDetails = () => {
  return (
    <div className="BillingDetails-wrapper">
      <div className="payment-option">
        <div className="payment-option-header">Payment Details</div>
        <div className="radio-button">
          <input type="radio" name="gender" value="male"></input> Cash on
          Delivery
        </div>
      </div>
      <div className="address-details">
        <h3 id="address-heading">Address Details</h3>
        <div className="address-row-1">
          <div className="row-item-1">
            <input type="text" placeholder="First Name" id="first" />
          </div>
          <div className="row-item-2">
            <input type="text" placeholder="Last Name" id="last" />
          </div>
        </div>
        <div className="address-row-2">
          <div className="row-item-3">
            <input type="email" placeholder="Email Address" id="email" />
          </div>
        </div>
        <div className="address-row-3">
          <div className="row-item-4">
            <input type="text" placeholder="Address" id="address" />
          </div>
        </div>
        <div className="address-row-4">
          <div className="row-item-5">
            <input type="text" placeholder="City" id="city" />
          </div>
          <div className="row-item-6">
            <input type="text" placeholder="Zip" id="zip" />
          </div>
        </div>
        <div className="address-row-5">
          <div className="row-item-7">
            <input type="number" placeholder="Mobile Number" id="mobile" />
          </div>
        </div>
        <Link to="/order-confirm">
          <button id="order">Confirm Order</button>
        </Link>
      </div>
    </div>
  );
};

export default BillingDetails;
