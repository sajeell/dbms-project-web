import React, {Fragment, useState, useEffect} from 'react';

import {toast} from 'react-toastify';
import './Admin.css';
import AddProducts from './AddProducts';

import logo from '../assets/crown.svg';
toast.configure();
const AdminDashboard = ({setAdminAuth}) => {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        'http://localhost:5000/admin/authentication/verify',
        {
          method: 'POST',
          headers: {admin_jwt_token: localStorage.admin_token},
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

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem('admin_token');
      setAdminAuth(false);
      toast.success('Admin Logged Out');
      window.location.replace('/admin');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="AdminDashboard-wrapper">
        <header className="Header-wrapper">
          <div className="">
            <img src={logo} width="100" alt="logo"></img>
          </div>
          <div className="header-buttons">
            <ul>
              <li onClick={e => logout(e)}>Logout</li>
            </ul>
          </div>
        </header>
        <div className="middle-wrapper">
          <AddProducts />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
