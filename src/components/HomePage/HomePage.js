
import HomeBackground from "../../images/Group 1.png";
import HomeBackground2 from "../../images/Group 2.png";
import hp1 from "../../images/hp1.png"
import hp2 from "../../images/hp2.png"
import hp3 from "../../images/hp3.png"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./HomePage.css";
import { useMediaQuery } from '@mui/material';

function HomePage() {

  const isSmallScreen = useMediaQuery('(max-width:768px)');


const styles = {
  backgroundimagecontainer: {
    width: "100%",
    zIndex: 1,
    position: "relative",
  },
  backgroundimage: {
    width: "100%",
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
    transform: "translateX(-50%)",
    width: "500px",
    height: "50px",
    backgroundColor: "#EF72B0" /* Transparent pink color */,
  },
  backgroundimage_text: {
    position: "absolute",
    top: "2%",
    left: "51%",
    transform: "translateX(-50%)",
    fontSize: "50px",
    color: "#FFFFFF",
    fontFamily: "Didot",
    whiteSpace: "nowrap",
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
    paddingTop: "3%",
    fontSize: 20,
  },
  hpinfotextbold: {
    fontFamily: "Gill Sans",
    color: "#393839",
    textAlign: "center",
    marginTop: "5%",
    fontSize: 20,
    fontWeight: 625,
  },
  hpinfoflex: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: isSmallScreen ? "column" : "row",
    width: "85%",
    marginTop: "5%",
    alignItems: isSmallScreen ? "center" : "start",
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
    marginBottom: "10%",
  },
};

return (
  <Box sx={{ overflow: "scroll", position: "absolute"}}>
      <Box style={styles.backgroundimagecontainer}>
        {isSmallScreen ? (
        <img src={HomeBackground2} alt="home background" style={styles.backgroundimage}></img>
        ) : (
          <img src={HomeBackground} alt="home background" style={styles.backgroundimage}></img>
        )}
        {isSmallScreen ? (
          <Box></Box>
        ) : (
          <Box style={styles.backgroundimagetextunderlay}>
        <Typography style={styles.backgroundimage_text}>
          FIND YOUR VOICE
        </Typography>
        </Box>
        )}
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
            <img src={hp1} alt="hp1" style={{padding: "7%"}}></img>
            <Typography style={styles.hpinfoflextext}>Aicha founded her own international goods business selling African jewelery to help support local businesswomen and traditions. </Typography>
          </Box>
          <Box>
            <Typography style={styles.hpinfoflextitle}>SPEAKER</Typography>
            <img src={hp2} alt="hp2" style={{padding: "7%"}}></img>
            <Typography style={styles.hpinfoflextext}>Aicha has been an honored speaker of multiple charity galas, raising over 1 million towards the Tahirih Justice Center. She is passionate about promoting self-love, women empowerment, and solidarity against sexual violence. </Typography>
          </Box>
          <Box>
            <Typography style={styles.hpinfoflextitle}>ADVOCATE</Typography>
            <img src={hp3} alt="hp3" style={{padding: "7%"}}></img>
            <Typography style={styles.hpinfoflextext}>Aicha is a Director of the Tahirih Justice Center. During the past three years she has held this position, Aicha has worked to protect and uplift immigrants fleeing gender-based violence. </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
