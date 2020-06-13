import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Link} from 'react-router-dom';
import './Cart.css';
import {toast} from 'react-toastify';
const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return {desc, qty, unit, price};
}

function subtotal(items) {
  return items.map(({price}) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;
toast.configure();
const Cart = () => {
  const [credential, setCredential] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const classes = useStyles();

  const getProfile = async () => {
    try {
      const res = await fetch('http://localhost:5000/credential/', {
        method: 'POST',
        headers: {jwt_token: localStorage.getItem('customer_token')},
      });

      const parseData = await res.json();
      setCredential(parseData);
    } catch (err) {
      console.error(err.message);
      console.log('Error in getting profile');
    }
  };

  const deleteCartItem = async id => {
    try {
      const res = await fetch(`http://localhost:5000/cart/${id}`, {
        method: 'DELETE',
      });
      const parseData = await res.json();
      toast.success(parseData.msg);
      cart.filter(cartItem => cartItem.order_id !== id);
      window.location.reload();
    } catch (error) {
      console.error(error);
      console.log('Erorr in deleting cart item');
    }
  };

  const getCartItems = async email => {
    try {
      setTotalAmount(0);
      const res = await fetch(`http://localhost:5000/cart/${email}`);
      const parseData = await res.json();
      setCart(parseData);
    } catch (error) {
      console.error(error);
      console.error('Error in getting cart items');
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="Cart-wrapper">
      {credential.map(item => (
        <div
          className="div"
          onPointerEnter={() => {
            getCartItems(item.email);
          }}>
          <TableContainer component={Paper} key={item.email}>
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
                {cart.map(row => (
                  <TableRow key={row.order_id}>
                    <TableCell>
                      <div className="table-row">
                        <div className="dress-image">
                          <img src={row.picture_link} alt="dress snap"></img>
                        </div>
                        <div className="dress-desc">{row.description}</div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      <div className="price-remove">
                        <div className="price">{row.amount}</div>
                        <div className="remove-icon">
                          <DeleteOutlineIcon
                            id="remove-button"
                            onClick={e => {
                              deleteCartItem(row.order_id);
                            }}
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">{parseFloat(totalAmount)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Link to="/billing-details">
              <button id="payment">Pay</button>
            </Link>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export default Cart;
