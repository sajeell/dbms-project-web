import React, {useState, useEffect, Fragment} from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {green} from '@material-ui/core/colors';
import {toast} from 'react-toastify';
import './OrderConfirm.css';

toast.configure();
const OrderConfirm = () => {
  const [credential, setCredential] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch('http://localhost:5000/credential/', {
        method: 'POST',
        headers: {jwt_token: localStorage.getItem('customer_token')},
      });

      const parseData = await res.json();
      setCredential(parseData);
      
    } catch (err) {
      console.error(err.message);
      console.log('Error in getting profile');
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="OrderConfirm-wrapper">
      {credential.map(cred => (
        <Fragment key={cred.email}>
          <div className="tick-icon">
            <CheckCircleOutlineIcon
              style={{fontSize: 200, color: green[500]}}
            />
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
        </Fragment>
      ))}
    </div>
  );
};

export default OrderConfirm;
