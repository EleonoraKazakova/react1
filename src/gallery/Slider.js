//@ts-check
import React from 'react'
import './Slider.css'
import arrowLeft from '../svg/back.svg'
import arrowRight from '../svg/next.svg'

/**
 * @param {{
 * photos: string[], 
 * currentPhoto: number, 
 * setCurrentPhoto: (arg: number)=>void
 * }} props
 */
function Slider({photos, currentPhoto, setCurrentPhoto}) {

    return <div className='container'>
        <img
            src={arrowLeft}
            className='arrow'
            alt=''
            onClick={() => setCurrentPhoto(currentPhoto === 0 ? photos.length - 1 : currentPhoto - 1)}
        />
        {photos.map(
            (photo, i) => (
                <img
                    src={photo}
                    className={currentPhoto === i ? 'photo' : 'photo_hidden'}
                    alt=''
                />
            )
        )}
        <img
            src={arrowRight}
            className='arrow'
            alt=''
            onClick={() => setCurrentPhoto(currentPhoto === photos.length - 1 ? 0 : currentPhoto + 1)}
        />
    </div>

}


export default Slider 