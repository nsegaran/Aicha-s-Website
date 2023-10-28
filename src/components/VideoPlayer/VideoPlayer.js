import React from "react";
import YouTube from "react-youtube";
import { useMediaQuery } from '@mui/material';

const VideoPlayer = ({ videoId }) => {

  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const opts = {
    height: isSmallScreen ? "auto" : "390px",
    width: isSmallScreen ? "100%" : "640px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default VideoPlayer;
