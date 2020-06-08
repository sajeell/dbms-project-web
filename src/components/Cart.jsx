import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Cart.css";

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Cart = () => {
  const classes = useStyles();

  return (
    <Router forceRefresh="true">
      <div className="Cart-wrapper">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="center">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>
                    <div className="table-row">
                      <div className="dress-image">
                        <img
                          src="https://lh3.googleusercontent.com/1NSmfSiyg3YsO9mO-6a4zbU1uXwe_EwUn7-35B1NOhFP2zugNlUgzzgV5Hqt0-ebKTnGO9IxJemTStO6vfbKq2Ft39HDtqZO9cGTIwLsHWG0-RC45--g1FKcnHP56CUvWdL6zzsXHl1U_NUB90VEBlZ_ayJKUzXcxCpWWngbzLkrbZmS3bXlHrSsG9cuDeSU1ICarnBWQU-Z-HA8zynQ1DE_q6JfHmxrDXnuA0YjMpWwwCvSW4Siiy3p5rTZSWnV7dWlPi6HxnzxDnZPbMMZd1tHt6WGeUi5_ZdpwrOzc6g2nZyhvxh1NQq_rQoy4vnshTz2LfZvPgKmfd6QzPjhsnWrC_5SXM-67Wxmljm7txCRBAIULSwcbAcCBxMkktcmcHZ_bx5XdORlUgXigV3Fs3-PHWrKb6luwB8oLA65etsfCy-dxM7_YhWAidHVbW01ewxbGtlJWo4jRPVTpMiNR-rDuUf54rYq0jypDMKMPiSVV6bkYPR-Z_K5lSEv7RnofkjetownM71_3iKRsqu8YSDI1JXV2yUtEgYvVOJQ14ZWHv3tWWllsXunjNEmFFwwETCXdl2MFsVz6N6l5Q4at3UrYpMp90HqAtsSfYtw5oMm_37lkcOuvnMDgAunMHxukVL4ZhwCfJRli55btcY14hYmGCeQwtJAbz6nZw_HYc9F4UZ2K5uFtXlFAsJ4=w944-h630-no?authuser=0"
                          alt="dress snap"
                        ></img>
                      </div>
                      <div className="dress-desc">{row.desc}</div>
                    </div>
                  </TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">
                    <div className="price-remove">
                      <div className="price">{ccyFormat(row.price)}</div>
                      <div className="remove-icon">
                        <DeleteOutlineIcon id="remove-button" />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Link to="/billing-details">
            <button id="payment">Pay</button>
          </Link>
        </TableContainer>
      </div>
    </Router>
  );
};

export default Cart;
