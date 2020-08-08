import React from 'react'
import './NoteText.css'

function NoteText(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <textarea className='NoteText-text' value={props.text}
                onChange={(event) => props.saveText(event.target.value)}
            />
        </>
    )

}

export default NoteText 