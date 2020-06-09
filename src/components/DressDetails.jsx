import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import "./DressDetails.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const DressDetails = () => {
  //    const classes = useStyles();
  //   const [value, setValue] = React.useState("Controlled");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  return (
    <div className="Cart-wrapper">
      <div className="image">
        <img
          alt="Dress"
          src="https://lh3.googleusercontent.com/ESME3k6O0ocpE_TzgSQe2lQLwEX2YU4Aj2trAWUqo4versTYVupzaxSpUiELY5kL1V5F1ffMrXjUFtoVy--pjW4JuJnqC-UK0Wc7XSAhZbke93Na-vk5rdWvCvsAAedmBkOTOCGF10Dxk86u97IwsCBh5UELN-ZfCVs_EqmvTASbF6OmjskksGxhm26Tf1H-VA1v30sczrsyJT2kg2TQy96qcSQO-fk5HhfnCzi9FpsXsbNE8-RLw8Eb1-c1tarTXqTjiPMcZ7npfoi6fHIrnBJ9Dt45bMt5pnn6Shq6YOJX_0OKoTum6r-KF0A931OIxnncRET-_vzZnVlKWgVyi9icSxyt5Rh_y20vEMfqgLDzD03FrGl6zaI6ALAVeHIfgQ47DC2CBWKQCPNed0qE9G7HMJaBXnEtX8gwPewSig5ItIut9GJqi1OksiCOjECghgcmx4Tqq5OyoHPsKrHaSxWz_3ZzPOBepn75lUGQkSPpZGABH6UE7fE6kT3rKLw8KCAvg8vd5xpf-TxtbzIPAtbZKziVatppJ-CsADZy6KRr-ubXC2ZXZuskDA4ylmVqm7tRDiaWsqGmp195aY0AgsxUIffyearmU9Y-wNI573GpxSZxRfjWyu7--8KcLWCrDnNdILOCHmmd5OXRgqpnLhGksxVLjbErUzy9d9IEErF-Jznsv2vHrZbiC0Xl=w944-h630-no?authuser=0"
        ></img>
      </div>
      <div className="measurements">
        <div className="measurements-heading">
          <h1>Suit Details</h1>
        </div>
        <div className="measurement-row-1">
          <div className="row-item">
            <TextField
              id="outlined-textarea"
              label="Chest"
              placeholder="In Inches"
              multiline
              variant="outlined"
            />
          </div>
          <div className="row-item">
            <TextField
              id="outlined-textarea"
              label="Legs"
              placeholder="In Inches"
              multiline
              variant="outlined"
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
            />
          </div>
          <div className="row-item">
            <TextField
              id="outlined-textarea"
              label="Collar"
              placeholder="In Inches"
              multiline
              variant="outlined"
            />
          </div>
        </div>
        <div className="measurement-row-3">
          <div className="row-item">
            <TextField
              id="outlined-textarea"
              label="Length"
              placeholder="In Inches"
              multiline
              variant="outlined"
            />
          </div>
          <div className="row-item">
            <TextField
              id="outlined-textarea"
              label="Width"
              placeholder="In Inches"
              multiline
              variant="outlined"
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
            />
          </div>
        </div>
        <div className="measurement-row-5">
          <h4 id="quantity-heading">Quantity</h4>
          <div className="row-item">
            <button id="quantity-minus">-</button>
            <span id="quantity">5</span>
            <button id="quantity-plus">+</button>
          </div>
        </div>
        <div className="measurement-row-5">
          <button id="shopping">Continue Shopping</button>
          <button id="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default DressDetails;
