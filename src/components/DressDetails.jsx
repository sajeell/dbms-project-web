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
          src="https://lh3.googleusercontent.com/1NSmfSiyg3YsO9mO-6a4zbU1uXwe_EwUn7-35B1NOhFP2zugNlUgzzgV5Hqt0-ebKTnGO9IxJemTStO6vfbKq2Ft39HDtqZO9cGTIwLsHWG0-RC45--g1FKcnHP56CUvWdL6zzsXHl1U_NUB90VEBlZ_ayJKUzXcxCpWWngbzLkrbZmS3bXlHrSsG9cuDeSU1ICarnBWQU-Z-HA8zynQ1DE_q6JfHmxrDXnuA0YjMpWwwCvSW4Siiy3p5rTZSWnV7dWlPi6HxnzxDnZPbMMZd1tHt6WGeUi5_ZdpwrOzc6g2nZyhvxh1NQq_rQoy4vnshTz2LfZvPgKmfd6QzPjhsnWrC_5SXM-67Wxmljm7txCRBAIULSwcbAcCBxMkktcmcHZ_bx5XdORlUgXigV3Fs3-PHWrKb6luwB8oLA65etsfCy-dxM7_YhWAidHVbW01ewxbGtlJWo4jRPVTpMiNR-rDuUf54rYq0jypDMKMPiSVV6bkYPR-Z_K5lSEv7RnofkjetownM71_3iKRsqu8YSDI1JXV2yUtEgYvVOJQ14ZWHv3tWWllsXunjNEmFFwwETCXdl2MFsVz6N6l5Q4at3UrYpMp90HqAtsSfYtw5oMm_37lkcOuvnMDgAunMHxukVL4ZhwCfJRli55btcY14hYmGCeQwtJAbz6nZw_HYc9F4UZ2K5uFtXlFAsJ4=w944-h630-no?authuser=0"
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
