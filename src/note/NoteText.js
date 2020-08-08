import React from 'react'
import './NoteText.css'

function NoteText(props) {
    return (
        <>
            <input
                type='text'
                value={props.name}
                onChange={event => props.saveName(event.target.value)}
            />
            <textarea
                className='NoteText-text'
                value={props.text}
                onChange={(event) => props.saveText(event.target.value)}
            />
        </>
    )

}

export default NoteText 