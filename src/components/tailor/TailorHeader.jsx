import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/crown.svg';

const TailorHeader = () => {
  return (
    <div className="TailorHeader-wrapper">
      <section>
        <header className="Header-wrapper">
          <div className="">
            <img src={logo} width="100" alt="logo"></img>
          </div>
          <div className="header-buttons">
            <ul>
              <Link to="/tailor">
                <li>DASHBOARD</li>
              </Link>
              <Link to="/tailor/add">
                <li>ADD</li>
              </Link>
              <Link to="/tailor/edit">
                <li>EDIT</li>
              </Link>
              <Link to="/tailor/delete">
                <li>DELETE</li>
              </Link>
            </ul>
          </div>
        </header>
      </section>
    </div>
  );
};

export default TailorHeader;
