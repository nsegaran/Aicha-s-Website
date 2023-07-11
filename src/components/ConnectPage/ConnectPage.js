
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./ConnectPage.css";
import ContactForm from "../ContactForm/ContactForm.js"

function ConnectPage() {
  return (
    <Box sx={{ overflow: "scroll"}}>
     <Typography style={styles.cptitle}>LET'S GET CONNECTED</Typography>
      <Box
        style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", marginRight: "100px", marginLeft: "100px"}}
      >
        <Box style={{width: "40%"}}>
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
    marginTop: 40,
  },
  cptext: {
    fontFamily: "Gill Sans",
    fontSize: 20,
    marginBottom: 20,
  },
  cptextbold: {
    fontFamily: "Gill Sans",
    fontSize: 20,
    fontWeight: 625,
  },
};

export default ConnectPage;
