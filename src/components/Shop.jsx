import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Shop.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const Shop = () => {
  const classes = useStyles();

  return (
    <Router forceRefresh="true">
      <div className="Shop-wrapper">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://lh3.googleusercontent.com/2t3607q2nuWFiYc3Vs5Lnnep2l6viaR_EfdP-VQ9sot5MmGTQbUAuGFDcsS7kAC27A2PtCbwvMWxuERObGexQvTGkX7L7PdKxcVHf8NpZGfyE7085KiqWcQWDw-e6fPj-yiqqut56YurE84dJOSSfyDevJuWWi8YcZcX7xId7rC0qhLoF79wDZ5Hp1c3nCIGN_vVuB2bgP78NjbjG_yJmKujHYPgK-hDOH9xKSIX53o8LkuNh_jQegxXkLzUld_60HOkgFxAMiKDhBXGqMAHWrNsvk6IyD-pI2tVZ5SfVLNpoosmKx_KBYj_5UtIYP5xkKEc9meqGm9jQwme3FisF2J4YL64sKjchYk-Db9MDsvsPm36liqHpwhSHmHTD5QpKP52AU7wqx7mUsSQIvSAsV5MHp3OW-l9y_cP2raqSCDMMYc0J2c5ukiOBPFVE_fj8jcb_YHETgmCCWlLZ7TOxbReZHvytMzAYgPxbSviycbmtBM1zVCXu5O-KrsC8CgJc20uIlT3AxfNgpwp2tj1Q7uIpm25BQCNaIaXnVjQtYxFFCMMnLJ2zHJeRmGeLKJ0m2CmQubOPN6RU89BhThKZtdQ0GWU7zWiJGZcOC9f_8S70RZ9HmgdIMWp5EP_By2pLh9zfrADGVnu_Ebnfxk2v3Ie6WqT6rjdiC1ig7rYgt17CBIU9RR69OpDhQv6=w944-h629-no?authuser=0"
              title="Dress"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Best Dress ever
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to="/dress-details">Add To Cart</Link>
            </Button>
          </CardActions>
        </Card>
      </div>
    </Router>
  );
};

export default Shop;
