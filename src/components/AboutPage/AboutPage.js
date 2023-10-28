import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./AboutPage.css";
import ap from "../../images/ap.png";
import wedding from "../../images/wedding_pic.png";
import { useMediaQuery } from '@mui/material';

function AboutPage() {

  const isSmallScreen = useMediaQuery('(max-width:768px)');

  const styles = {
    aptitle: {
      fontFamily: "Didot",
      fontSize: 50,
      color: "#393839",
      textAlign: "center",
      marginTop: "10%",
    },
    apcaption: {
      fontFamily: "Gill Sans",
      fontSize: 25,
    },
    aptext: {
      fontFamily: "Gill Sans",
      fontSize: 20,
      marginBottom: "5%",
    },
    wedding_pic: {
      maxWidth: isSmallScreen ? "100%" : "600px",
      marginTop: "5%",
      marginBottom: "5%",
    },
    ap: {
      maxWidth: isSmallScreen ? "100%" : "600px",
    }
  };

  return (
    <Box sx={{ overflow: "scroll", position: "relative" }}>
      <Typography style={styles.aptitle}>SURVIVOR, HERO, WOMAN</Typography>
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <img src={ap} alt={ap} style={styles.ap}></img>
        
          {isSmallScreen ? (
          <Box></Box>
        ) : (
          <Box
          style={{
            backgroundColor: "#FBD1E6",
            width: "300px",
            position: "absolute",
            top: "30%",
            left: "79%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            padding: "2%",
          }}
        >
          <Typography style={styles.apcaption}>
          “I share my story when it is appropriate, not for pity, but for them
          to understand the reality on the ground.”
        </Typography>
        </Box>
        )}
        </Box>
      <Box
        style={{ marginRight: "10%", marginLeft: "10%", marginTop: "10%", marginBottom: "10%"}}
      >
        <Typography style={styles.aptext}>
        At first, my story was one of survival. Born in Niger, West Africa, at fifteen I was given away as a child bride. After seven months, I fled to America only to find myself once again trapped, not just by a man, but by a language I could not speak, and a system I did not understand. I spent years like this, living undocumented and moving from one abusive situation to the next. 
        </Typography>
        <div style={{textAlign: "center", alignItems:"center"}}>
        <img src={wedding} alt={wedding} style={styles.wedding_pic}></img>
        </div>
        <Typography style={styles.aptext}>
        But, my story is also one of hope. In 2008, I connected with the Tahirih Justice Center which facilitated my documentation and gave me the helping hand I needed to pull myself up. Through the kindness of angels around me and having faith, I found a way out. I became the Director of the Tahirih Justice Center, a successful entrepreneur, and a proud mother. 
        </Typography>
        <Typography style={styles.aptext}>
        Looking back, my story is one of liberation. I did not want the life of abuse and exploitation I was born into. Now, I want to spread my story so women facing the same fate can connect with local resources and be empowered to find their way out.
        </Typography>
      </Box>
    </Box>
  );
}


export default AboutPage;
