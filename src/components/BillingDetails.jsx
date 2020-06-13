import React, {useState, useEffect, Fragment} from 'react';
import {toast} from 'react-toastify';
import './BillingDetails.css';

toast.configure();
const BillingDetails = () => {
  // States
  const [credential, setCredential] = useState([]);
  const [address, setAddress] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  async function getProfile() {
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
  }

  async function submitBillingForm(email) {
    try {
      const body = {email, address, contactNum, postalCode, city, postalCode};
      const res = await fetch('http://localhost:5000/checkout/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseData = await res.json();
      toast.success(parseData);

      setAddress('');
      setContactNum();
      setCity('');
      setPostalCode('');
    } catch (err) {
      console.error(err.message);
      console.log('Error in getting profile');
    }
  }

  // Handling Input Changes
  async function handleAddress(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }

  async function handleCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  async function handleContactNum(e) {
    e.preventDefault();
    setContactNum(e.target.value);
  }

  async function handlePostalCode(e) {
    e.preventDefault();
    setPostalCode(e.target.value);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Fragment>
      {credential.map(cred => (
        <div className="BillingDetails-wrapper">
          <div className="payment-option">
            <div className="payment-option-header">Payment Details</div>
            <div className="radio-button">
              <input type="radio" name="cash_on_delivery" required></input> Cash
              on Delivery
            </div>
          </div>
          <div className="address-details">
            <h3 id="address-heading">Address Details</h3>

            <div className="address-row-3">
              <div className="row-item-4">
                <input
                  value={address}
                  type="text"
                  placeholder="Address"
                  id="address"
                  onChange={async e => {
                    handleAddress(e);
                  }}
                  required
                />
              </div>
            </div>
            <div className="address-row-4">
              <div className="row-item-5">
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  required
                  value={city}
                  onChange={async e => {
                    handleCity(e);
                  }}
                />
              </div>
              <div className="row-item-6">
                <input
                  type=""
                  placeholder="Postal Code"
                  id="zip"
                  required
                  value={postalCode}
                  onChange={async e => {
                    handlePostalCode(e);
                  }}
                />
              </div>
            </div>
            <div className="address-row-5">
              <div className="row-item-7">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  id="mobile"
                  value={contactNum}
                  onChange={async e => {
                    handleContactNum(e);
                  }}
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              value="Confirm Order"
              id="order"
              onClick={() => {
                submitBillingForm(cred.email);
              }}
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default BillingDetails;
