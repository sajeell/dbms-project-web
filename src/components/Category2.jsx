import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";


const images = [
    {
      url: "https://downloader.la/temp/5edd595703c78.jpg",
      title: "Women",
      width: "30%",
    },
    {
      url: "https://lh3.googleusercontent.com/2t3607q2nuWFiYc3Vs5Lnnep2l6viaR_EfdP-VQ9sot5MmGTQbUAuGFDcsS7kAC27A2PtCbwvMWxuERObGexQvTGkX7L7PdKxcVHf8NpZGfyE7085KiqWcQWDw-e6fPj-yiqqut56YurE84dJOSSfyDevJuWWi8YcZcX7xId7rC0qhLoF79wDZ5Hp1c3nCIGN_vVuB2bgP78NjbjG_yJmKujHYPgK-hDOH9xKSIX53o8LkuNh_jQegxXkLzUld_60HOkgFxAMiKDhBXGqMAHWrNsvk6IyD-pI2tVZ5SfVLNpoosmKx_KBYj_5UtIYP5xkKEc9meqGm9jQwme3FisF2J4YL64sKjchYk-Db9MDsvsPm36liqHpwhSHmHTD5QpKP52AU7wqx7mUsSQIvSAsV5MHp3OW-l9y_cP2raqSCDMMYc0J2c5ukiOBPFVE_fj8jcb_YHETgmCCWlLZ7TOxbReZHvytMzAYgPxbSviycbmtBM1zVCXu5O-KrsC8CgJc20uIlT3AxfNgpwp2tj1Q7uIpm25BQCNaIaXnVjQtYxFFCMMnLJ2zHJeRmGeLKJ0m2CmQubOPN6RU89BhThKZtdQ0GWU7zWiJGZcOC9f_8S70RZ9HmgdIMWp5EP_By2pLh9zfrADGVnu_Ebnfxk2v3Ie6WqT6rjdiC1ig7rYgt17CBIU9RR69OpDhQv6=w944-h629-no?authuser=0",
      title: "Suiting",
      width: "30%",
    },
    {
      url: "https://downloader.la/temp/5edd596339170.jpg",
      title: "Kids",
      width: "30%",
    },
    {
      url: "https://downloader.la/temp/5edd5b3083be3.jpg",
      title: "Casual Dress",
      width: "30%",
    },
  ];
  

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const Category2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={images[1].title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${images[1].url})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {images[1].title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default Category2;
