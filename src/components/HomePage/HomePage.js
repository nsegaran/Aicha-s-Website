
import HomeBackground from "../../images/HomeBackground.png";
import hp3 from "../../images/hp3.png"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./HomePage.css";

function HomePage() {
return (
  <Box sx={{ overflow: "scroll", position: "absolute"}}>
      <Box style={styles.backgroundimagecontainer}>
        <Box style={styles.backgroundimageoverlay}></Box>
        <img src={HomeBackground} alt="home background" style={styles.backgroundimage}></img>
        <Box style={styles.backgroundimagetextunderlay}></Box>
        <Typography style={styles.backgroundimage_text}>
          FIND YOUR VOICE
        </Typography>
      </Box>
      <Box style={styles.hpinfo}>
        <Typography style={styles.hpinfotext}>
          “I had the will to be free, and the fire burns brighter and stronger
          than ever before so I can help other women who are trapped like me. I
          want them to know that they don’t have to stay in an abusive
          situation, or forced marriage. They too can find their voice.“
          <Typography style={styles.hpinfotextbold}>
            - Aicha Abdoulaye
          </Typography>
        </Typography>
        <Box style={styles.hpinfoflex}>
          <Box>
            <Typography style={styles.hpinfoflextitle}>ENTREPRENEUR</Typography>


            <Typography style={styles.hpinfoflextext}>As a speaker for the Tahirih Justice Center, as well as the 2018 and 2019 Orange County Galas, Aicha has raised over 1 million dollars. She is passionate about promoting self-love, women empowerment, and solidarity against sexual violence. </Typography>
          </Box>
          <Box>
            <Typography style={styles.hpinfoflextitle}>ADVOCATE</Typography>
            <img src={hp3} alt="hp3" style={{padding: "10px"}}></img>
            <Typography style={styles.hpinfoflextext}>Aicha is a Director of the Tahirih Justice Center. During the past three years she has held this position, Aicha has worked to protect and uplift immigrants fleeing gender-based violence. </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  backgroundimagecontainer: {
    width: "100%",
    height: "100vh",
    zIndex: 1,
    position: "relative",
  },
  backgroundimage: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  backgroundimageoverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(230, 133, 181, 0.32)" /* Transparent pink color */,
  },
  backgroundimagetextunderlay: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "50px",
    backgroundColor: "#EF72B0" /* Transparent pink color */,
  },
  backgroundimage_text: {
    position: "absolute",
    top: "62%",
    left: "51%",
    transform: "translate(-50%, -50%)",
    fontSize: "50px",
    color: "#FFFFFF",
    fontFamily: "Didot",
  },
  hpinfo: {
    minHeight: "100vh", // Set the height of the box to 100% viewport height
    backgroundColor: "#FEFAE8",
    display: "flex",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  },
  hpinfotext: {
    fontFamily: "Gill Sans",
    color: "#393839",
    textAlign: "center",
    width: "60%",
    marginTop: 40,
    fontSize: 20,
  },
  hpinfotextbold: {
    fontFamily: "Gill Sans",
    color: "#393839",
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    fontWeight: 625,
  },
  hpinfoflex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "85%",
    marginTop: 80,
  },
  hpinfoflextitle: {
    fontFamily: "Didot",
    fontSize: 22,
    textAlign: "center",
  },
  hpinfoflextext: {
    fontFamily: "Gill Sans",
    color: "#393839",
    textAlign: "center",
    fontSize: 20,
    width: 295,
    marginBottom: 20,
  },
};

export default HomePage;