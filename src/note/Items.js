import React from 'react'
import {Link} from 'react-router-dom'
import './Items.css'

function Items(props) {
  return (
    <div>
      {Object.entries(props.items).map(
        item => <Link to={`/note/${item[0]}`} className={props.currentItem === item[0] ? 'Items-current' : 'Items-link'}>
        {item[1].name}
        </Link>
        )}
    </div>

  )

}

export default Items