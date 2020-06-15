import React, {Fragment, useState} from 'react';
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const AdminSignin = ({setAdminAuth}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const {email, password} = inputs;

  const onChange = e => setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {email, password};
      const response = await fetch(
        'http://localhost:5000/admin/authentication/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      if (parseRes.adminjwtToken) {
        localStorage.setItem('admin_token', parseRes.adminjwtToken);
        setAdminAuth(true);
        toast.success('Admin Logged in Successfully');
      } else {
        setAdminAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div
        className="AdminSignin-wrapper"
        style={{width: '30%', marginLeft: '35%', marginBottom: '10.5%'}}>
        <h1 className="m-5 text-center">Admin Login</h1>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email Address"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <button className="btn btn-success btn-block">Submit</button>
        </form>
        <br />
        <br />

        <br />
      </div>
    </Fragment>
  );
};

export default AdminSignin;
