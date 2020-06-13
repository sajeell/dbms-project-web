import React, {useState} from 'react';
import {toast} from 'react-toastify';
import './Admin.css';

toast.configure();
const AddProducts = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [pictureLink, setPictureLink] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [price, setPrice] = useState(0);

  function handleName(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleDescription(e) {
    e.preventDefault();
    setDescription(e.target.value);
  }

  function handleStock(e) {
    e.preventDefault();
    setStock(e.target.value);
  }

  function handlePictureLink(e) {
    e.preventDefault();
    setPictureLink(e.target.value);
  }

  function handleCategoryID(e) {
    e.preventDefault();
    setCategoryID(e.target.value);
  }

  function handlePrice(e) {
    e.preventDefault();
    setPrice(e.target.value);
  }

  async function submitForm() {
    try {
      if (price < 1 || stock <= 1) {
        toast.error('Invalid Values');
        return;
      }
      const body = {name, price, stock, pictureLink, description, categoryID};
      const response = await fetch('http://localhost:5000/postproduct', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      toast.success('Product Created');
    } catch (error) {
      console.error(error);
      toast.error('Error in posting product client');
    }
  }

  return (
    <div className="AddProduct-wrapper">
      <form id="addProductForm">
        <h1 id="addProductHeading">Add Product</h1>
        <div className="add-product-row">
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={e => {
              handleName(e);
            }}
          />
        </div>
        <div className="add-product-row">
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={description}
            onChange={e => {
              handleDescription(e);
            }}
          />
        </div>
        <div className="add-product-row">
          <input
            type="number"
            id="stock"
            placeholder="Stock"
            value={stock}
            onChange={e => {
              handleStock(e);
            }}
          />
          <input
            type="text"
            id="pictureLink"
            placeholder="Picture Link"
            value={pictureLink}
            onChange={e => {
              handlePictureLink(e);
            }}
          />
        </div>
        <div className="add-product-row">
          <input
            type="number"
            id="categoryID"
            placeholder="Category ID"
            value={categoryID}
            onChange={e => {
              handleCategoryID(e);
            }}
          />

          <input
            type="text"
            id="price"
            placeholder="Price"
            value={price}
            onChange={e => {
              handlePrice(e);
            }}
          />
        </div>
        <input
          type="submit"
          value="Add Product"
          id="add-product-button"
          onClick={() => {
            submitForm();
          }}
        />
      </form>
    </div>
  );
};

export default AddProducts;
