import React, { useState, Fragment, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./DressDetails.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const MenDressDetails = () => {
  //    const classes = useStyles();
  //   const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const [products, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    try {
      const product = await fetch(
        `http://localhost:5000/single-product/${localStorage.getItem(
          "product_id"
        )}`,
        {
          method: "GET",
        }
      );
      const jsonData = await product.json(); // Parser
      setProduct(jsonData);
    } catch (error) {
      console.error(`Error Getting Single Product: ${error}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Fragment>
      <div className='DressDetails-wrapper'>
        {products.map((item) => (
          <div className='image' key={item.id}>
            <img alt='Dress' src={item.picture_link}></img>
          </div>
        ))}

        <div className='measurements'>
          <div className='measurements-heading'>
            <h1>Suit Details</h1>
          </div>
          <div className='measurement-row-1'>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Chest'
                placeholder='In Inches'
                multiline
                variant='outlined'
              />
            </div>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Legs'
                placeholder='In Inches'
                multiline
                variant='outlined'
              />
            </div>
          </div>
          <div className='measurement-row-2'>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Waist'
                placeholder='In Inches'
                multiline
                variant='outlined'
              />
            </div>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Collar'
                placeholder='In Inches'
                multiline
                variant='outlined'
              />
            </div>
          </div>
          <div className='measurement-row-3'>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Length'
                placeholder='In Inches'
                multiline
                variant='outlined'
              />
            </div>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Width'
                placeholder='In Inches'
                multiline
                variant='outlined'
              />
            </div>
          </div>
          <div className='measurement-row-4'>
            <div className='row-item'>
              <TextField
                id='outlined-textarea'
                label='Other Details'
                placeholder='Anything else you want to enter?'
                multiline
                rows={6}
                fullWidth={10}
                variant='outlined'
              />
            </div>
          </div>
          <div className='measurement-row-5'>
            <h4 id='quantity-heading'>Quantity</h4>
            <div className='row-item'>
              <button
                id='quantity-minus'
                onClick={(e) => {
                  e.preventDefault();
                  if (quantity === 0) {
                    alert("Invalid Action\nCannot decrement more");
                  } else {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
              <span id='quantity'>{quantity}</span>
              <button
                id='quantity-plus'
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className='measurement-row-5'>
            <Link to='/shop'>
              <button id='shopping'>Continue Shopping</button>
            </Link>
            <Link to='/billing-details'>
              <button id='checkout'>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MenDressDetails;
