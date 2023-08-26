import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router} from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  const history = useHistory();

  const handleClickHome = () => {
    history.push("/");
  };

  const handleClickAbout = () => {
    history.push("/about");
  };

  const handleClickMedia = () => {
    history.push("/media");
  };

  const handleClickConnect = () => {
    history.push("/connect");
  };

  return (
    <Router>
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ backgroundColor: "#EF72B0" }}>
          <Toolbar>
            <Typography style={styles.logo}>Aicha Abdoulaye</Typography>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography style={styles.pagetitle} onClick={handleClickHome}>
                HOME
              </Typography>
              <Typography  style={styles.pagetitle} onClick={handleClickAbout}>
                ABOUT AICHA
              </Typography>
              <Typography style={styles.pagetitle} onClick={handleClickMedia}>
                MEDIA
              </Typography>
              <Typography style={styles.pagetitle} onClick={handleClickConnect}>
                CONNECT
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Router>
  );
}

const styles = {
  logo: {
    fontFamily: "BonheurRoyale",
    display: "inline",
    whiteSpace: "nowrap",
    fontSize: 50,
    zIndex: 2,
  },
  pagetitle: {
    fontFamily: "Didot",
    display: "inline",
    flex: 1,
    fontSize: 22,
    padding: "0 20px", // Add padding for extra spacing
    whiteSpace: "nowrap", //prevent about aicha from wrapping
    zIndex: 2,
    cursor: "pointer",
  },
};
