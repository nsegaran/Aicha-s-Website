
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./ConnectPage.css";
import ContactForm from "../ContactForm/ContactForm.js";
import { useMediaQuery } from '@mui/material';

function ConnectPage() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  return (
    <Box sx={{ overflow: "scroll"}}>
     <Typography style={styles.cptitle}>LET'S GET CONNECTED</Typography>
      <Box
        style={{ display: "flex", justifyContent: "space-between", marginTop: "5%", marginRight: "10%", marginLeft: "10%", flexDirection: isSmallScreen ? "column" : "row"}}
      >
        <Box style={{width: isSmallScreen ? "100%" : "40%"}}>
          <Typography style={styles.cptext}>
          I’m always interested in connecting with new people to support one another, book a speaking event, collaborate, and more!
          </Typography>
          <Typography style={styles.cptextbold}>
          Email:
          </Typography>
          <Typography style={styles.cptext}>
          abdoulayeachia@gmail.com
          </Typography>
          <Typography style={styles.cptextbold}>
          Instagram:
          </Typography>
          <Typography style={styles.cptext}>
          @aicha_thefriendlymotivator
          </Typography>
          <Typography style={styles.cptextbold}>
          Tiktok:
          </Typography>
          <Typography style={styles.cptext}>
          @aichaabodulaye2014
          </Typography>
        </Box>
        <ContactForm/>
      </Box>
    </Box>
  );
}

const styles = {
  cptitle: {
    fontFamily: "Didot",
    fontSize: 50,
    color: "#393839",
    textAlign: "center",
    marginTop: "5%",
  },
  cptext: {
    fontFamily: "Gill Sans",
    fontSize: 20,
    marginBottom: "5%",
  },
  cptextbold: {
    fontFamily: "Gill Sans",
    fontSize: 20,
    fontWeight: 625,
  },
};

export default ConnectPage;
