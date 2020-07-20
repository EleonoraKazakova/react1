//@ts-check
import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Preview from "./Preview";
import "./Gallery.css";

const BACKEND = 'http://localhost:4000/'

function Gallery(props) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const makeRequest = async () =>
      setPhotos(
        (
          await (await fetch(BACKEND + `file/${props.city}`))
            .json()
        ).files.map(photo => BACKEND + photo)
      )
    makeRequest()
  }, []
  )

  return (
    <div>
      <Slider
        photos={photos}
        currentPhoto={currentPhoto}
        setCurrentPhoto={setCurrentPhoto}
      />
      <div className="gallery">
        <Preview
          photos={photos}
          currentPhoto={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
        />
      </div>
    </div>
  );
}

export default Gallery;
