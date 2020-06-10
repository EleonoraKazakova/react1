//@ts-check
import React, { useState } from 'react'
import photo1 from '../photo/IMG_4758.JPG'
import photo2 from '../photo/IMG_4802.JPG'
import photo3 from '../photo/IMG_4832.JPG'
import Slider from './Slider'
import Preview from './Preview'
import './Gallery.css'

function Gallery() {
    const photos = [photo1, photo2, photo3]
    const [currentPhoto, setCurrentPhoto] = useState(0)

    return <div>
        <Slider
            photos={photos}
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
        />
        <div className='gallery'>
            <Preview
                photos={photos}
                currentPhoto={currentPhoto}
                setCurrentPhoto={setCurrentPhoto}
            />
        </div>

    </div>




}


export default Gallery 