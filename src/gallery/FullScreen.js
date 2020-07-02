import React from "react";
import "./FullScreen.css";

function FullScreen(props) {
  return (
    <div className="FullScreen">
      <img
        src={props.photo}
        className="FullScreen-img"
        onClick={props.closeFunction}
        alt=''
      />
    </div>
  );
}

export default FullScreen;
