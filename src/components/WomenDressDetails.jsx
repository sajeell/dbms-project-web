import React, { useState, Fragment, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./DressDetails.css";
import { toast } from "react-toastify";


toast.configure();
const WomenDressDetails = () => {
  //    const classes = useStyles();
  //   const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };
  const [shoulder,      setShoulder] = useState("");
  const [chest,          setChest] = useState("");
  const [waist,         setWaist] = useState("");
  const [sleevesLength, setSleevesLength] = useState("");
  const [sleevesOpening, setSleevesOpening] = useState("");
  const [armHole,               setArmHole] = useState("");
  const [shirtLength,   setShirtLength] = useState("");
  const [daman,             setDaman] = useState("");
  const [trouserWaist,  setTrouserWaist] = useState("");
  const [trouserFly,             setTrouserFly] = useState("");
  const [trouserLength, setTrouserLength] = useState("");
  const [trouserThy,        setTrouserThy] = useState("");
  const [trouserHip,        setTrouserHip] = useState("");
  const [trouserBottom,         setTrouserBottom] = useState("");
  const [trouserKnee,       setTrouserKnee] = useState("");
  const [other,         setOther] = useState("");
  const [quantity,  setQuantity] = useState(1);

 
  const [products, setProduct] = useState([]);

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
      {products.map((item) => (
        <div className='DressDetails-wrapper'>
          <div className='image' key={item.id}>
            <img alt='Dress' src={item.picture_link} width='420px'></img>
          </div>

          <div className='measurements'>
            <div className='measurements-heading'>
              <h1>Suit Details</h1>
            </div>
            <p>{item.stock} pieces left</p>
            <div className='measurement-row-1'>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Shoulder'
                  placeholder='In Inches'
                  multiline
                  variant='outlined'
                />
              </div>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Chest'
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
                  label='Sleeves Length'
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
                  label='Sleeves Opening'
                  placeholder='In Inches'
                  multiline
                  variant='outlined'
                />
              </div>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Arm Hole'
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
                  label='Shirt Length'
                  placeholder='In Inches'
                  multiline
                  variant='outlined'
                />
              </div>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Daman'
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
                  label='Trouser Waist'
                  placeholder='In Inches'
                  multiline
                  variant='outlined'
                />
              </div>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Trowser Fly'
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
                  label='Trouser Length'
                  placeholder='In Inches'
                  multiline
                  variant='outlined'
                />
              </div>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Trowser Hip'
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
                  label='Trouser Thy'
                  placeholder='In Inches'
                  multiline
                  variant='outlined'
                />
              </div>
              <div className='row-item'>
                <TextField
                  id='outlined-textarea'
                  label='Trowser Bottom'
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
                  label='Trouser Knee'
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
                    if (quantity === 1) {
                      toast.error("Cannot decrement more");
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
              <button
                id='shopping'
                onClick={(e) => {
                  toast.success("Product Added to Cart");
                }}
              >
                Add To Cart
              </button>

              <Link to='/shop'>
                <button id='checkout'>Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default WomenDressDetails;
