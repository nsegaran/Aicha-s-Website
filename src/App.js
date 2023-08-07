import "./App.css";
import TopBar from "./components/TopBar/TopBar.js";
import HomePage from "./components/HomePage/HomePage.js";
import AboutPage from "./components/AboutPage/AboutPage.js";
import ConnectPage from "./components/ConnectPage/ConnectPage.js";
import MediaPage from "./components/MediaPage/MediaPage.js";
import BottomBar from "./components/BottomBar/BottomBar.js";
import Box from "@mui/material/Box";
import { Analytics } from '@vercel/analytics/react';
import { HashRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div
      style={{
        position: "absolute",
        overflow: "auto",
        width: "100%",
        height: "100vh",
      }}
    >
      <HashRouter>
        <Switch>
          <Route path="/about"  render={(props) => (
              <div>
                <TopBar />
                <AboutPage />
              </div>
            )}/>
          <Route path="/media"  render={(props) => (
              <div>
                <TopBar />
                <MediaPage />
              </div>
            )} />
          <Route
            path="/connect"
            render={(props) => (
              <div>
                <TopBar />
                <ConnectPage />
              </div>
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <div>
                <TopBar />
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: "100%",
                  }}
                >
                  <HomePage></HomePage>
                </Box>
              </div>
            )}
          />
        </Switch>
      </HashRouter>
      <BottomBar />
    </div>
  );
}

export default App;
