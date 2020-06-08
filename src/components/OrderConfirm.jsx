import React from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { green } from "@material-ui/core/colors";
import "./OrderConfirm.css";

const OrderConfirm = () => {
  return (
    <div className="OrderConfirm-wrapper">
      <div className="tick-icon">
        <CheckCircleOutlineIcon style={{ fontSize: 200, color: green[500] }} />
      </div>
      <div className="order-confirm">
        <p>Order Confirmed</p>
      </div>
      <div className="order-confirm">
        <p>
          Your order number is: <span id="order-num">#500</span>
        </p>
      </div>
      <div className="order-confirm">
        <p>Your order will be delivered soon</p>
      </div>
    </div>
  );
};

export default OrderConfirm;
