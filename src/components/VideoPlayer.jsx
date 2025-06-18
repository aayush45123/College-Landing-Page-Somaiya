import React, { useRef } from "react";
import "../styles/VideoPlayer.css";
import video from "../assets/somaiya.mp4";

const VideoPlayer = ({ play, setPlay }) => {
  const player = useRef(null);

  const closePlayer = (event) => {
    if (event.target === player.current) {
      setPlay(false);
    }
  };

  return (
    <div
      onClick={closePlayer}
      className={`videoContainer  ${play ? "" : "hide"}`}
      ref={player}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
