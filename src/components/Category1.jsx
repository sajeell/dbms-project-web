import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url:
      "https://lh3.googleusercontent.com/1NSmfSiyg3YsO9mO-6a4zbU1uXwe_EwUn7-35B1NOhFP2zugNlUgzzgV5Hqt0-ebKTnGO9IxJemTStO6vfbKq2Ft39HDtqZO9cGTIwLsHWG0-RC45--g1FKcnHP56CUvWdL6zzsXHl1U_NUB90VEBlZ_ayJKUzXcxCpWWngbzLkrbZmS3bXlHrSsG9cuDeSU1ICarnBWQU-Z-HA8zynQ1DE_q6JfHmxrDXnuA0YjMpWwwCvSW4Siiy3p5rTZSWnV7dWlPi6HxnzxDnZPbMMZd1tHt6WGeUi5_ZdpwrOzc6g2nZyhvxh1NQq_rQoy4vnshTz2LfZvPgKmfd6QzPjhsnWrC_5SXM-67Wxmljm7txCRBAIULSwcbAcCBxMkktcmcHZ_bx5XdORlUgXigV3Fs3-PHWrKb6luwB8oLA65etsfCy-dxM7_YhWAidHVbW01ewxbGtlJWo4jRPVTpMiNR-rDuUf54rYq0jypDMKMPiSVV6bkYPR-Z_K5lSEv7RnofkjetownM71_3iKRsqu8YSDI1JXV2yUtEgYvVOJQ14ZWHv3tWWllsXunjNEmFFwwETCXdl2MFsVz6N6l5Q4at3UrYpMp90HqAtsSfYtw5oMm_37lkcOuvnMDgAunMHxukVL4ZhwCfJRli55btcY14hYmGCeQwtJAbz6nZw_HYc9F4UZ2K5uFtXlFAsJ4=w944-h630-no?authuser=0",
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
