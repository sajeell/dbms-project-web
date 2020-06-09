import React from "react";
import AdminHeader from "./AdminHeader";

import "./Admin.css";

const AddUser = ({ setAuth }) => {
  return (
    <div className="AddUser-wrapper">
      <AdminHeader setAuth={setAuth} />
      <h1>Add User</h1>
    </div>
  );
};

export default AddUser;
