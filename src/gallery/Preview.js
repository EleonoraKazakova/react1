//@ts-check
import React from "react";
import "./Preview.css";

/**
 * @param {{
 * photos: string[],
 * currentPhoto: number,
 * setCurrentPhoto: (arg: number)=>void
 * }} props
 */
function Preview(props) {
  return (
    <div className="background-container">
      <div className="preview-container">
        {props.photos.map((photo, i) => (
          <img
            src={photo}
            className={
              props.currentPhoto === i ? "selected preview" : "preview"
            }
            onClick={() => props.setCurrentPhoto(i)}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Preview;
