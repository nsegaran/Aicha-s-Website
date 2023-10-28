import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export default function TopBar() {
  const history = useHistory();
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleClick = (path) => {
    history.push(path);
    if (isSmallScreen) {
      setDrawerOpen(false); // Close the drawer after a menu item is clicked
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <Box sx={{ width: "100%" }}>
        <AppBar position="static" sx={{ backgroundColor: "#EF72B0" }}>
          <Toolbar>
            <Typography style={styles.logo}>Aicha Abdoulaye</Typography>
            {isSmallScreen ? (
              <IconButton
                sx={{
                  display: "block",
                  color: "white",
                  zIndex: "2",
                  marginLeft: "auto",
                }}
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={styles.pagetitle}
                  onClick={() => handleClick("/")}
                >
                  HOME
                </Typography>
                <Typography
                  style={styles.pagetitle}
                  onClick={() => handleClick("/about")}
                >
                  ABOUT AICHA
                </Typography>
                <Typography
                  style={styles.pagetitle}
                  onClick={() => handleClick("/media")}
                >
                  MEDIA
                </Typography>
                <Typography
                  style={styles.pagetitle}
                  onClick={() => handleClick("/connect")}
                >
                  CONNECT
                </Typography>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List sx={{ backgroundColor: "#EF72B0" }}>
            <ListItem>
              <Typography
                style={styles.pagetitle}
                onClick={() => handleClick("/")}
              >
                HOME
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                style={styles.pagetitle}
                onClick={() => handleClick("/about")}
              >
                ABOUT AICHA
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                style={styles.pagetitle}
                onClick={() => handleClick("/media")}
              >
                MEDIA
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                style={styles.pagetitle}
                onClick={() => handleClick("/connect")}
              >
                CONNECT
              </Typography>
            </ListItem>
          </List>
        </Drawer>
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
    whiteSpace: "nowrap", // Prevent "About Aicha" from wrapping
    zIndex: 2,
    cursor: "pointer",
    color: "white",
  },
};
