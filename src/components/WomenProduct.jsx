import React, {useState, useEffect, Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Product.css';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 330,
    margin: 10,
 
  },
  media: {
    height: 200,
  },
});

const WomenProduct = () => {
  const classes = useStyles();

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch('http://localhost:5000/product/1');
      const jsonData = await response.json(); // Parser
      setProduct(jsonData);
    } catch (error) {
      console.log(`Error Getting Category 1: ${error}`);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="WomenProduct-wrapper">
      <Fragment>
        {product.map(item => (
          <div className="item" key={item.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.picture_link}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={e => {
                    e.preventDefault();
                    try {
                      console.log(item.id);
                      window.localStorage.setItem('product_id', item.id);
                    } catch (error) {
                      console.error(
                        `Error in storing product id in local storage`
                      );
                    }
                  }}>
                  <Link to="/women-dress-details">Order</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Fragment>
    </div>
  );
};

export default WomenProduct;
