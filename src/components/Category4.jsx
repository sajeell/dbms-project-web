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
    url: "https://downloader.la/temp/5edd596339170.jpg",
    title: "Kids",
    width: "30%",
  },
  {
    url:
      "https://lh3.googleusercontent.com/XP08mAKwSKQq2VIXphhvUublQzihNDxkuI44TXuVecaOtgLCzwvolXn4vJR6MmyAVJeVB8jqjz9tWallessep53q4ZoaqXk2y-AKlgt5Jg2AqiLjCSeLMRXS1Xv3WAqIWR0N6Bll9KE4YSZcP2JxJ2RYQwsJwN912YA2liYTQsC0KYpDDx4sfKYdcFhXeDxwJX1Uo7zsRzxK15yLnXHZGJ_8qsMWx--wyYnPysMBedvqyTj_PIkvhl1lR6PPCaKNUO52z603YWT60TR35zaRr0JOQydBznzfNlKya8s2eGyA8EmtyuHUrg58MaRm1wghqmCbUqeitbFUYBV9rw8zdygyEqr-ek-5qkZuNZ1GhyGoKi2qpJe6cPmooLtE9LlAUUUBkHSgdiiqA20TYz-zmZzHXUIvgP667eYxlefss82G-DaXGtpiYvafN4bR65NvAz3TxyYzYNqu_GUdG0MVugX-OVRxdEFuRvN6HJUTIbSCNRr-52TgDBPCVLAnWFUw-QK0mZH7Z5JvSWRMJLbcy-8MdCLoLUX1mCJTjjqRsnEB9iw04Q8OUp7OfpkheuRlMCo_qc4xuhEf7hefuhhUthMaD7JOLJbz3TX6kbfMcsZ5c23nJwtHsuH_MgJGRz1UWAEZpjhIgkLqmDqOreSJUuWPtwGuMgPPynNT9Qc9D-eya9Jg0_zgb09BZd_R=w944-h628-no?authuser=0",
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

const Category4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        key={images[3].title}
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "100%",
        }}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${images[3].url})`,
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
            {images[3].title}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default Category4;
