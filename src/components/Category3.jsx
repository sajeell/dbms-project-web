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
    url: "https://downloader.la/temp/5edd596d8e3ff.jpg",
    title: "Suiting",
    width: "30%",
  },
  {
    url:
      "https://lh3.googleusercontent.com/nnr_bkH0UWokMgAyBGDlq69Kr30KsDqmtSqj18xiJn0h0qWt8OEfmsC3CC3dpXseB7OH9e1MOc0fsoNXTkKM2PYNuZsWUwYrfkpIHi0D3A7BxFgZ7TScLrg3tSY_yLAmAxl8lWYaOOMyWqQo047Q1l4pkLe2ozlokrhGCd_KC72nxW3jjmmjlwgs2uzl5qsZq1aax7UGX4CXrEnnj0tTpyiactp8wlxNhm2MXMFjvqGO0U6KurXHKlXKQfy_ispvUXhKSK0l43aPHPyWYYaS6c3SxiD9Lv6VvFEilIBFYxqymlniSAyXvb0xrSaULF7OSoizQRLmUu3F8tNYb9MuTizgCiVsQhgnHMs2uRp7xoylUDSFzHqW7LmLehgoCJD9Y3AMB9Roy8B34gmOPU8YtmFf0-qSrget5YN63J5vMYHrfbvuRi96dn4ZsyktLivJiZFlEniRas0WG8qNVgl60nBnxf47L0fMK7BFj0zkBQorFLcZrk2ki-ewJI_grsDQxp-xHDUUVA5UWpa_Fr8OAtPzFjDOLGOTXoSKR2bsW8gm1cM-8qkOoxsCXuHorX4b9Uiu-rK5KwgPDxJZzSkGaewwrpYAArtq7TjbZhhRzJ_XM_jSqr5f7xzhr_Psu8GduCOke250_NosB5c8Q1rNyf79PshbFYNuVLnezObZKwAQxy522uh5VtkR27-T=w944-h630-no?authuser=0",
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

const Category3 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={images[2].title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${images[2].url})`,
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
            {images[2].title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default Category3;
