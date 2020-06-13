import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const TailorSignin = ({setTailorAuth}) => {
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
        'http://localhost:5000/tailor/authentication/login',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      if (parseRes.tailorjwtToken) {
        localStorage.setItem('tailor_token', parseRes.tailorjwtToken);
        setTailorAuth(true);
        toast.success('Tailor Logged in Successfully');
      } else {
        setTailorAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
      toast.error('Error in tailor signin client');
    }
  };

  return (
    <Fragment>
      <div
        className="TailorSignin-wrapper"
        style={{width: '30%', marginLeft: '35%', marginBottom: '10.5%'}}>
        <h1 className="m-5 text-center">Tailor Login</h1>
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
          <button className="btn btn-success btn-block">Log In</button>
        </form>
        <br />
        <br />
        <p>
          Don't have an Account? <Link to="/tailor/register">Register</Link>{' '}
          here
        </p>
        <br />
      </div>
    </Fragment>
  );
};

export default TailorSignin;
