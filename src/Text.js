import React from 'react'
import photoText from '../src/photo-text/IMG_2064.JPG'
import './Text.css'

function Text() {
    return (
        <div className='text-container'>
            <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum eu facilisis sed odio morbi quis commodo.
                Aliquet porttitor lacus luctus accumsan tortor posuere ac.
                Sed sed risus pretium quam vulputate. Id diam vel quam elementum.
                Id porta nibh venenatis cras sed felis eget velit.
                Volutpat est velit egestas dui id ornare arcu odio.
                Blandit cursus risus at ultrices mi tempus.
                Euismod in pellentesque massa placerat duis ultricies lacus.
                Fringilla urna porttitor rhoncus dolor purus non enim praesent
                elementum. 
            </p>
            <img src={photoText} className='photo' />
        </div>
    )
}


export default Text