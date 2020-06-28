//@ts-check
import React, { useState, useEffect } from "react";
import axios from 'axios'
import './index.css'
import AlbumPhotos from './AlbumPhotos'

function AlbumSection() {
  const [albums, setAlbums] = useState([])
  const [opened, setOpened] = useState([])

  useEffect(() => {
    const makeRequest = async () =>
      setAlbums(
        (await axios('https://jsonplaceholder.typicode.com/albums')).data
      )
    makeRequest()
  }, [])

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>

          <div
            className='AlbumSection-text'
            onClick={() => setOpened(toggleAlbum(opened, album.id))}
          >
            {album.title}
          </div>

          <div>
            <p>{opened.includes(album.id) ? <AlbumPhotos id = {album.id}/> : ''}</p>
          </div>

        </div>
      )
      )}
    </div>
  );
}

/**
 * 
 * @param {number[]} opened 
 * @param {number} id
 * @returns {number[]} 
 */
export function toggleAlbum(opened, id){
  if(opened.includes(id)){
    return opened.filter(a => a !== id)
  } else {
    return [...opened, id]
  }
} 

export default AlbumSection;
