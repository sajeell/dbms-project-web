import React, {Fragment, useState, useEffect} from 'react';

import {toast} from 'react-toastify';
import './Admin.css';
import AddProducts from './AddProducts';

import logo from '../assets/crown.svg';
toast.configure();
const AdminDashboard = ({setAdminAuth}) => {
  const [orders, setOrders] = useState([]);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  const getAllOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/orders');
      const jsonData = await response.json(); // Parser
      setOrders(jsonData);
    } catch (error) {
      console.log(`Error getting all orders: ${error}`);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      if (status == 'delivered') {
        toast.error('Order is already delivered');
        return;
      }
      const response = await fetch(
        `http://localhost:5000/status/delivered/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      const jsonData = await response.json(); // Parser
      window.location.reload();
      toast.success('Order is succesfully set to delivered ');
    } catch (error) {
      console.log(`Error changing status to delivered: ${error}`);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  useEffect(() => {
    getAllOrders();
  }, []);

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
          <div className="add-products-wrapper">
            <AddProducts />
          </div>
          <div className="orders">
            <table>
              <tbody id="all-orders-table">
                <tr>
                  <th>ID</th>
                  <th>Customer Email</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Postal Code</th>
                  <th>Contact</th>
                  <th>Ordered Date</th>
                  <th>Delivered Date</th>
                  <th>Status</th>
                </tr>

                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer_email}</td>
                    <td>{order.address}</td>
                    <td>{order.postal_code}</td>
                    <td>{order.city}</td>
                    <td>{order.contact_num}</td>
                    <td>{order.ordered_date}</td>
                    <td>{order.delivered_date}</td>
                    <td
                      id="order_status"
                      onClick={e => {
                        updateStatus(order.id, order.status);
                      }}>
                      {order.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
