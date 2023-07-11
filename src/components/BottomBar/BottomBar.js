import * as React from "react";

import Box from "@mui/material/Box";


import "./BottomBar.css";
import insta_icon from "../../images/insta_icon.png"
import tiktok_icon from "../../images/tiktok_icon.png"
import facebook_icon from "../../images/facebook_icon.png"

export default function BottomBar({ onPageChange, selectedPage }) {

  const handleClickInsta = () => {
    window.open("https://www.instagram.com/aicha_thefriendlymotivator/", "_blank");
  };

  const handleClickTikTok = () => {
    window.open("https://www.facebook.com/aicha.abdoulaye.31?mibextid=LQQJ4d", "_blank");
  };

  const handleClickFacebook = () => {
    window.open("https://www.facebook.com/aicha.abdoulaye.31?mibextid=LQQJ4d", "_blank");
  };

  return (
    <Box style={styles.bottombar}>
     <img src={insta_icon} alt={insta_icon} style={styles.bottombaricon} onClick={handleClickInsta}></img>
     <img src={tiktok_icon} alt={tiktok_icon}style={styles.bottombaricon} onClick={handleClickTikTok}></img>
     <img alt={facebook_icon} src={facebook_icon} style={styles.bottombaricon} onClick={handleClickFacebook}></img>
    </Box>
  );
}

const styles = {
  bottombar: {
    width: "100%",
    height: 65,
    backgroundColor: "#FBD1E6",
    display: "flex",
    alignItems: "center",
  },
  bottombaricon: {
    marginLeft: 20,
    width: 30,
    height: 30,
  }
};
