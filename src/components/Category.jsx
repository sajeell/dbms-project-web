import React from "react";
import { Link } from "react-router-dom";

import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
import Category4 from "./Category4";

import "./Category.css";

const Category = () => {
  return (
    <div className='Category-wrapper'>
      <div className='cat-row'>
        <div className='row-item-1'>
          <Link to='/women-product'>
            <Category1 />
          </Link>
        </div>
        <div className='row-item-2'>
          <Link to='/kids-product'>
            <Category2 />
          </Link>
        </div>
      </div>
      <div className='cat-row'>
        <div className='row-item-3'>
          <Link to='/suitings-product'>
            <Category3 />
          </Link>
        </div>
        <div className='row-item-4'>
          <Link to='/men-product'>
            <Category4 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
