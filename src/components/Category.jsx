import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
import Category4 from "./Category4";

import "./Category.css";

const Category = () => {
  return (
    <Router forceRefresh="true">
      <div className="Category-wrapper">
        <div className="cat-row">
          <div className="row-item-1">
            <Link to="/women">
              <Category1 />
            </Link>
          </div>
          <div className="row-item-2">
            <Category2 />
          </div>
        </div>
        <div className="cat-row">
          <div className="row-item-3">
            <Category3 />
          </div>
          <div className="row-item-4">
            <Category4 />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Category;
