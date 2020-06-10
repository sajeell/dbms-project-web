import React, { useState, useEffect } from "react";
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
  const [credential, setCredential] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/credential/", {
        method: "POST",
        headers: { jwt_token: localStorage.getItem("customer_token") },
      });

      const parseData = await res.json();
      setCredential(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  const classes = useStyles();

  return (
    <Router forceRefresh='true'>
      <div className='Cart-wrapper'>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='spanning table'>
            <TableHead>
              <TableRow>
                <TableCell align='center' colSpan={3}>
                  Details
                </TableCell>
                <TableCell align='center'>Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align='right'>Qty.</TableCell>
                <TableCell align='right'>Unit</TableCell>
                <TableCell align='center'>Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>
                    <div className='table-row'>
                      <div className='dress-image'>
                        <img
                          src='https://lh3.googleusercontent.com/ESME3k6O0ocpE_TzgSQe2lQLwEX2YU4Aj2trAWUqo4versTYVupzaxSpUiELY5kL1V5F1ffMrXjUFtoVy--pjW4JuJnqC-UK0Wc7XSAhZbke93Na-vk5rdWvCvsAAedmBkOTOCGF10Dxk86u97IwsCBh5UELN-ZfCVs_EqmvTASbF6OmjskksGxhm26Tf1H-VA1v30sczrsyJT2kg2TQy96qcSQO-fk5HhfnCzi9FpsXsbNE8-RLw8Eb1-c1tarTXqTjiPMcZ7npfoi6fHIrnBJ9Dt45bMt5pnn6Shq6YOJX_0OKoTum6r-KF0A931OIxnncRET-_vzZnVlKWgVyi9icSxyt5Rh_y20vEMfqgLDzD03FrGl6zaI6ALAVeHIfgQ47DC2CBWKQCPNed0qE9G7HMJaBXnEtX8gwPewSig5ItIut9GJqi1OksiCOjECghgcmx4Tqq5OyoHPsKrHaSxWz_3ZzPOBepn75lUGQkSPpZGABH6UE7fE6kT3rKLw8KCAvg8vd5xpf-TxtbzIPAtbZKziVatppJ-CsADZy6KRr-ubXC2ZXZuskDA4ylmVqm7tRDiaWsqGmp195aY0AgsxUIffyearmU9Y-wNI573GpxSZxRfjWyu7--8KcLWCrDnNdILOCHmmd5OXRgqpnLhGksxVLjbErUzy9d9IEErF-Jznsv2vHrZbiC0Xl=w944-h630-no?authuser=0'
                          alt='dress snap'
                        ></img>
                      </div>
                      <div className='dress-desc'>{row.desc}</div>
                    </div>
                  </TableCell>
                  <TableCell align='right'>{row.qty}</TableCell>
                  <TableCell align='right'>{row.unit}</TableCell>
                  <TableCell align='right'>
                    <div className='price-remove'>
                      <div className='price'>{ccyFormat(row.price)}</div>
                      <div className='remove-icon'>
                        <DeleteOutlineIcon id='remove-button' />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align='right'>
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align='right'>{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align='right'>{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Link to='/billing-details'>
            <button id='payment'>Pay</button>
          </Link>
        </TableContainer>
      </div>
    </Router>
  );
};

export default Cart;
