import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Product.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 450,
    margin: 10,
  },
  media: {
    height: 200,
  },
});

const MenProduct = () => {
  const classes = useStyles();

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/product/4");
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
    <div className='MenProduct-wrapper'>
      <Fragment>
        {product.map((item) => (
          <div className='item'>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.picture_link}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {item.name}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  <Link to='/men-dress-details'>Add To Cart</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </Fragment>
    </div>
  );
};

export default MenProduct;
