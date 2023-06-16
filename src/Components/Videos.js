import React from "react";
import "./Videos.css";

function Videos(props) {
  return (
    <div className="video-player">
      <iframe
        className="video-player__frame"
        height="475"
        width="700"
        title={props.title}
        src={props.videoLink}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Videos;
