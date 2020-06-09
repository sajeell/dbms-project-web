import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url:
      "https://lh3.googleusercontent.com/ESME3k6O0ocpE_TzgSQe2lQLwEX2YU4Aj2trAWUqo4versTYVupzaxSpUiELY5kL1V5F1ffMrXjUFtoVy--pjW4JuJnqC-UK0Wc7XSAhZbke93Na-vk5rdWvCvsAAedmBkOTOCGF10Dxk86u97IwsCBh5UELN-ZfCVs_EqmvTASbF6OmjskksGxhm26Tf1H-VA1v30sczrsyJT2kg2TQy96qcSQO-fk5HhfnCzi9FpsXsbNE8-RLw8Eb1-c1tarTXqTjiPMcZ7npfoi6fHIrnBJ9Dt45bMt5pnn6Shq6YOJX_0OKoTum6r-KF0A931OIxnncRET-_vzZnVlKWgVyi9icSxyt5Rh_y20vEMfqgLDzD03FrGl6zaI6ALAVeHIfgQ47DC2CBWKQCPNed0qE9G7HMJaBXnEtX8gwPewSig5ItIut9GJqi1OksiCOjECghgcmx4Tqq5OyoHPsKrHaSxWz_3ZzPOBepn75lUGQkSPpZGABH6UE7fE6kT3rKLw8KCAvg8vd5xpf-TxtbzIPAtbZKziVatppJ-CsADZy6KRr-ubXC2ZXZuskDA4ylmVqm7tRDiaWsqGmp195aY0AgsxUIffyearmU9Y-wNI573GpxSZxRfjWyu7--8KcLWCrDnNdILOCHmmd5OXRgqpnLhGksxVLjbErUzy9d9IEErF-Jznsv2vHrZbiC0Xl=w944-h630-no?authuser=0",
    title: "Women",
    width: "30%",
  },
  {
    url: "https://downloader.la/temp/5edd596d8e3ff.jpg",
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

const Category1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={images[0].title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${images[0].url})`,
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
            {images[0].title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default Category1;
