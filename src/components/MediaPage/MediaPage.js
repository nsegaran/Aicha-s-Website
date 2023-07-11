import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./MediaPage.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer.js";

function MediaPage() {
  const videoId = "p7Za1eQIXt4";

  const handleClickM1 = () => {
    window.open("https://www.youtube.com/watch?v=p7Za1eQIXt4", "_blank");
  };

  const handleClickM2 = () => {
    window.open("https://fundforsharedinsight.org/case-study/client-empowerment-experience-in-listening/", "_blank");
  };

  const handleClickM3 = () => {
    window.open("https://www.tahirih.org/news/aicha-abdoulaye-mahamane-survivor-hero-woman/", "_blank");
  };

  const handleClickM4 = () => {
    window.open("https://www.stunewslaguna.com/index.php/archives/front-page-archive/7570-tahirih-justice-center-inaugural-gala-101918", "_blank");
  };

  const handleClickM5 = () => {
    window.open("https://www.nbcnews.com/news/latino/help-sick-child-or-forgo-citizenship-immigrants-anguish-over-new-n1042526", "_blank");
  };

  const handleClickM6 = () => {
    window.open("https://www.tahirih.org/news/trumps-asylum-crackdown-intensifies-the-fight-for-refugee-rights/", "_blank");
  };

  const handleClickM7 = () => {
    window.open("https://msmagazine.com/2020/07/08/trumps-anti-asylum-rule-spells-disaster-for-women-and-girls/", "_blank");
  };

  const handleClickM8 = () => {
    window.open("https://womensmediacenter.com/news-features/the-triple-tsunami-of-covid-19-economic-collapse-and-domestic-violence", "_blank");
  };

  return (
    <Box sx={{ overflow: "scroll" }}>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "50px" }}
      >
        <VideoPlayer videoId={videoId} />
      </Box>
      <Box
        style={{
          marginTop: "50px",
          marginRight: "100px",
          marginLeft: "100px",
          marginBottom: "50px",
        }}
      >
        <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM1}>
          <Typography style={styles.mptext}>
            The Spark Inside - by Aicha Abdoulaye, with artwork by Keleia Epley
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Story Center
            </Typography>
          </Typography>
        </Box>
        <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM2}>
          <Typography style={styles.mptext}>
            A Legal-Services Nonprofit Roots Its ‘Client Empowerment Experience’
            in Listening, Feedback, and Lived Expertise
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Fund for Shared Insight
            </Typography>
          </Typography>
        </Box>
        <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM3}>
          <Typography style={styles.mptext}>
            Aicha Abdoulaye Mahamane: Survivor, Hero, Woman
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Tahirih Justice Center
            </Typography>
            </Typography></Box>
            
            <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM4}>
          <Typography style={styles.mptext}>
            Tahirih Justice Center Inaugural Gala raises $440k for women and
            girls fleeing violence
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Stu News Laguna
            </Typography>
          </Typography>
          </Box>
          <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM5}>
          <Typography style={styles.mptext}>
            Help a sick child or forgo citizenship? Immigrants anguish over new
            Trump rule
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / NBC
            </Typography>
          </Typography>
          </Box>
          <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM6}>
          <Typography style={styles.mptext}>
            Trump’s Asylum Crackdown Intensifies Refugee Rights
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Tahirih Justice Center
            </Typography>
          </Typography>
          </Box>
          <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM7}>
          <Typography style={styles.mptext}>
            Trump’s Anti-Asylum Rule Spells Disaster for Women and Girls
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Ms. Magazine
            </Typography>
          </Typography>
          </Box>
          <Box style={{ margin: 10, cursor: "pointer" }} onClick={handleClickM8}>
          <Typography style={styles.mptext}>
            The ‘Triple Tsunami’ of COVID-19, Economic Collapse, and Domestic
            Violence
            <Typography style={styles.mptextbold} component="span">
              {" "}
              / Women’s Media Center
            </Typography>
          </Typography>
          </Box>
        </Box>
      </Box>
  );
}

const styles = {
  mptext: {
    fontFamily: "Gill Sans",
    fontSize: 20,
  },
  mptextbold: {
    fontFamily: "Gill Sans",
    fontSize: 20,
    fontWeight: 625,
  },
};

export default MediaPage;
