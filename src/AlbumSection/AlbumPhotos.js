//@ts-check
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './AlbumPhotos.css'

/**
 * 
 * @param {{id: number}} props 
 */
function AlbumPhotos(props) {
    const [photos, setPhotos] = useState([])
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        const makeRequest = async () =>
            setPhotos(
                (await Axios(`https://jsonplaceholder.typicode.com/albums/${props.id}/photos`)).data
            )
        makeRequest()
    }, [props.id])

    return (
        <>
            <div className='AlbumPhotos'>
                {/* {photos.map((photo) => (
                <img 
                    className='AlbumPhotos-img'
                    src={photo.thumbnailUrl}
                    alt=''
                />
            ))} */}

                {photos.slice(0, (showMore ? photos.length : 9)).map((photo) => (
                    <img
                        className='AlbumPhotos-img'
                        src={photo.thumbnailUrl}
                        alt=''
                    />
                ))}


            </div>

            <div
                onClick={() => setShowMore(!showMore)}
                
            >
                Show more
            </div>
        </>
    )
}

export default AlbumPhotos