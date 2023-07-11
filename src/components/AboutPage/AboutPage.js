import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./AboutPage.css";
import ap from "../../images/ap.png";
import wedding from "../../images/wedding_pic.png";

function AboutPage() {
  return (
    <Box sx={{ overflow: "scroll", position: "relative" }}>
      <Typography style={styles.aptitle}>SURVIVOR, HERO, WOMAN</Typography>
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <img src={ap} alt={ap}></img>
        <Box
          style={{
            backgroundColor: "#FBD1E6",
            width: "250px",
            position: "absolute",
            top: 400,
            left: "79%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            padding: "50px",
          }}
        >
          <Typography style={styles.apcaption}>
            “I share my story when it is appropriate, not for pity, but for them
            to understand the reality on the ground.”
          </Typography>
        </Box>
      </Box>
      <Box
        style={{ marginTop: "50px", marginRight: "100px", marginLeft: "100px", marginBottom: "50px"}}
      >
        <Typography style={styles.aptext}>
        At first, my story was one of survival. Born in Niger, West Africa, at fifteen I was given away as a child bride. After seven months, I fled to America only to find myself once again trapped, not just by a man, but by a language I could not speak, and a system I did not understand. I spent years like this, living undocumented and moving from one abusive situation to the next. 
        </Typography>
        <div style={{textAlign: "center"}}>
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

const styles = {
  aptitle: {
    fontFamily: "Didot",
    fontSize: 50,
    color: "#393839",
    textAlign: "center",
    marginTop: 40,
  },
  apcaption: {
    fontFamily: "Gill Sans",
    fontSize: 25,
  },
  aptext: {
    fontFamily: "Gill Sans",
    fontSize: 20,
    marginBottom: 20,
  },
  wedding_pic: {
    width: 500,
    marginTop: 20,
    marginBottom: 30,
  }
};
export default AboutPage;
