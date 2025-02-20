import React, { useState } from 'react';
import './Note.css'
import Items from './Items'
import NoteText from './NoteText'

const notes = {
  '1': { name: 'The first', text: 'Mauris scelerisque nisl eu augue bibendum vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit aliquet fermentum. Nulla ornare tincidunt consectetur. Etiam convallis feugiat ullamcorper. Aenean a dolor ut mauris pellentesque sollicitudin. Praesent porttitor, ante quis viverra tincidunt, elit ex scelerisque libero, at laoreet massa dui eu felis. Cras euismod, nulla ac faucibus lacinia, orci mi eleifend neque, vitae luctus diam erat ut ante.' },
  '2': { name: 'The second', text: 'Integer libero metus, rutrum eu faucibus id, lobortis sit amet arcu. Suspendisse potenti. Donec et quam facilisis, finibus nibh non, blandit enim. Mauris in facilisis lectus, a elementum libero. Nunc eleifend, urna nec scelerisque consectetur, tortor augue accumsan nisi, id tempus est risus a eros. Nullam dapibus gravida tortor, a scelerisque augue. ' },
  '3': { name: 'The third', text: 'lacinia in ultrices ut, mollis sit amet nisl. Praesent sed est accumsan, ultrices justo vel, blandit est. Maecenas facilisis erat sed vehicula suscipit. Etiam sed massa vel turpis posuere fringilla. Aenean quis lacus a mi suscipit placerat eu in turpis. Integer tincidunt dui id massa pharetra, rhoncus tincidunt leo posuere. Donec porta consectetur mi, at pulvinar dui volutpat in. Nam quam erat, consectetur nec elit quis, dictum tempus elit. Quisque elit risus, venenatis sed erat nec, porttitor varius neque. Nunc ex nulla, vehicula ut aliquam et, tincidunt vel tellus.' }
}

function Note(props) {
  const [currentNotes, setCurrentNotes] = useState(notes)
  return (
    <div className='note'>
      <div className='noteItem'>
        <div className='noteAdd'>New note</div>
        <Items items={currentNotes} currentItems={props.item} />
      </div>
      <div className='noteText'>
        <NoteText
          text={currentNotes[props.item].text}
          name={currentNotes[props.item].name}
          saveName={newName => setCurrentNotes({...currentNotes, [props.item]: {...currentNotes[props.item], name: newName} })}
          saveText={(newText) => setCurrentNotes({ ...currentNotes, [props.item]: { ...currentNotes[props.item], text: newText } })}
        />
      </div>
    </div>
  )
}

export default Note