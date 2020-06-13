import React, {useState, Fragment, useEffect} from 'react';
// import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import './DressDetails.css';
import {toast} from 'react-toastify';

toast.configure();
const WomenDressDetails = () => {
  const [shoulder, setShoulder] = useState();
  const [chest, setChest] = useState();
  const [waist, setWaist] = useState();
  const [sleevesLength, setSleevesLength] = useState();
  const [sleevesOpening, setSleevesOpening] = useState();
  const [armHole, setArmHole] = useState();
  const [shirtLength, setShirtLength] = useState();
  const [daman, setDaman] = useState();
  const [trouserWaist, setTrouserWaist] = useState();
  const [trouserFly, setTrouserFly] = useState();
  const [trouserLength, setTrouserLength] = useState();
  const [trouserThy, setTrouserThy] = useState();
  const [trouserHip, setTrouserHip] = useState();
  const [trouserBottom, setTrouserBottom] = useState();
  const [trouserKnee, setTrouserKnee] = useState();
  const [other, setOther] = useState();
  const [quantity, setQuantity] = useState(1);
  const [products, setProduct] = useState([]);
  const [credential, setCredential] = useState([]);
  const [email, setEmail] = useState('');
  // const [product_id, setProductId] = useState("");
  // const [price, setPrice] = useState("");

  const handleShoulder = event => {
    event.preventDefault();
    setShoulder(event.target.value);
  };
  const handleChest = event => {
    event.preventDefault();
    setChest(event.target.value);
  };

  const handleWaist = event => {
    event.preventDefault();
    setWaist(event.target.value);
  };

  const handleSleevesLength = event => {
    event.preventDefault();
    setSleevesLength(event.target.value);
  };

  const handleSleevesOpening = event => {
    event.preventDefault();
    setSleevesOpening(event.target.value);
  };

  const handleArmHole = event => {
    event.preventDefault();
    setArmHole(event.target.value);
  };

  const handleShirtLength = event => {
    event.preventDefault();
    setShirtLength(event.target.value);
  };

  const handleDaman = event => {
    event.preventDefault();
    setDaman(event.target.value);
  };

  const handleTrouserFly = event => {
    event.preventDefault();
    setTrouserFly(event.target.value);
  };

  const handleTrouserBottom = event => {
    event.preventDefault();
    setTrouserBottom(event.target.value);
  };

  const handleTrouserHip = event => {
    event.preventDefault();
    setTrouserHip(event.target.value);
  };

  const handleTrouserThy = event => {
    event.preventDefault();
    setTrouserThy(event.target.value);
  };

  const handleTrouserLength = event => {
    event.preventDefault();
    setTrouserLength(event.target.value);
  };

  const handleTrouserKnee = event => {
    event.preventDefault();
    setTrouserKnee(event.target.value);
  };

  const handleTrouserWaist = event => {
    event.preventDefault();
    setTrouserWaist(event.target.value);
  };

  const handleOther = event => {
    event.preventDefault();
    setOther(event.target.value);
  };

  const submitForm = async (ema, product_id, price) => {
    try {
      const body = {
        ema,
        product_id,
        quantity,
        price,
        shoulder,
        chest,
        waist,
        sleevesLength,
        sleevesOpening,
        armHole,
        shirtLength,
        daman,
        trouserWaist,
        trouserFly,
        trouserLength,
        trouserHip,
        trouserThy,
        trouserBottom,
        trouserKnee,
        other,
      };
      const res = await fetch('http://localhost:5000/order/women', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseData = await res.json();

      setTrouserHip('');
      setTrouserBottom('');
      setShoulder('');
      setChest('');
      setWaist('');
      setSleevesLength('');
      setSleevesOpening('');
      setArmHole('');
      setShirtLength('');
      setDaman('');
      setTrouserFly('');
      setTrouserThy('');
      setTrouserLength('');
      setTrouserKnee('');
      setTrouserWaist('');
      setOther('');
      toast.success('Product added to cart');
    } catch (error) {
      console.error(error);
      console.error('Error in Posting Women Dress');
    }
  };

  const getProduct = async () => {
    try {
      const product = await fetch(
        `http://localhost:5000/single-product/${localStorage.getItem(
          'product_id'
        )}`,
        {
          method: 'GET',
        }
      );
      const jsonData = await product.json(); // Parser
      setProduct(jsonData);
    } catch (error) {
      console.error(`Error Getting Single Product: ${error}`);
    }
  };

  const getProfile = async () => {
    try {
      const res = await fetch('http://localhost:5000/credential/', {
        method: 'POST',
        headers: {jwt_token: localStorage.getItem('customer_token')},
      });

      const parseData = await res.json();
      setCredential(parseData);

      credential.map(item => {
        console.log(`Setting email:     ${item.email}`);
        setEmail(item.email);
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProduct();
    getProfile();
  }, []);

  return (
    <Fragment>
      {credential.map(cred =>
        products.map(item => (
          <div className="DressDetails-wrapper" key={item.id}>
            <div className="image">
              <img alt="Dress" src={item.picture_link} width="420px"></img>
              <div className="product-details">
                <p></p>
                <p>
                  Title: <strong>{item.name}</strong>
                </p>
                <p>
                  Price: <strong>{item.price}</strong>
                </p>
                <p>
                  Description: <strong>{item.description}</strong>
                </p>
              </div>
            </div>

            <div className="measurements">
              <div className="measurements-heading">
                <h1>Suit Details</h1>
              </div>
              <p>{item.stock} pieces left</p>
              <div className="measurement-row-1">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Shoulder"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={shoulder}
                    onChange={e => {
                      handleShoulder(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Chest"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={chest}
                    onChange={e => {
                      handleChest(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-2">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Waist"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={waist}
                    onChange={e => {
                      handleWaist(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Sleeves Length"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={sleevesLength}
                    onChange={e => {
                      handleSleevesLength(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-3">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Sleeves Opening"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={sleevesOpening}
                    onChange={e => {
                      handleSleevesOpening(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Arm Hole"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={armHole}
                    onChange={e => {
                      handleArmHole(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-3">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Shirt Length"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={shirtLength}
                    onChange={e => {
                      handleShirtLength(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Daman"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={daman}
                    onChange={e => {
                      handleDaman(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-3">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trouser Waist"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserWaist}
                    onChange={e => {
                      handleTrouserWaist(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trowser Fly"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserFly}
                    onChange={e => {
                      handleTrouserFly(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-3">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trouser Length"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserLength}
                    onChange={e => {
                      handleTrouserLength(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trowser Hip"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserHip}
                    onChange={e => {
                      handleTrouserHip(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-3">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trouser Thy"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserThy}
                    onChange={e => {
                      handleTrouserThy(e);
                    }}
                  />
                </div>
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trowser Bottom"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserBottom}
                    onChange={e => {
                      handleTrouserBottom(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-4">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Trouser Knee"
                    placeholder="In Inches"
                    multiline
                    variant="outlined"
                    value={trouserKnee}
                    onChange={e => {
                      handleTrouserKnee(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-4">
                <div className="row-item">
                  <TextField
                    id="outlined-textarea"
                    label="Other Details"
                    placeholder="Anything else you want to enter?"
                    multiline
                    rows={6}
                    fullWidth={10}
                    variant="outlined"
                    value={other}
                    onChange={e => {
                      handleOther(e);
                    }}
                  />
                </div>
              </div>
              <div className="measurement-row-5">
                <h4 id="quantity-heading">Quantity</h4>
                <div className="row-item">
                  <button
                    id="quantity-minus"
                    onClick={e => {
                      e.preventDefault();
                      if (quantity === 1) {
                        toast.error('Cannot decrement more');
                      } else {
                        setQuantity(quantity - 1);
                      }
                    }}>
                    -
                  </button>
                  <span id="quantity">{quantity}</span>
                  <button
                    id="quantity-plus"
                    onClick={e => {
                      e.preventDefault();
                      setQuantity(quantity + 1);
                    }}>
                    +
                  </button>
                </div>
              </div>
              <div className="measurement-row-5">
                <button
                  id="shopping"
                  onClick={e => {
                    submitForm(cred.email, item.id, item.price);
                  }}>
                  Add To Cart
                </button>

                <Link to="/shop">
                  <button id="checkout">Continue Shopping</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </Fragment>
  );
};

export default WomenDressDetails;
