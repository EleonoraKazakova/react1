import React from "react";
import Item from "./Item";
import { useState, useReducer } from 'react';
import "./List.css";

function List() {
    const [list, dispatch] = useReducer(
        reducer, 
        [{ done: false, text: 'Red' }, { done: true, text: 'Black' }]
    )
    const [text, setText] = useState('')
    return <div className="List">
        <input
            type="text"
            className="block"
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button
            type="button"
            className="block"
            onClick={() => dispatch({ type: 'add', text: text })}
        >Add</button>

        {
            list.map(
                item => (
                    <Item
                        done={item.done}
                        text={item.text}
                        onClick={() => dispatch({ type: 'done', text: item.text })}
                    />
                )
            )
        }
    </div>
}

// state = [{ done: false, text: 'Red' }, { done: true, text: 'Black' }]
// action = { type: 'done', text: item.text }
function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [{ done: false, text: action.text }, ...state]
        case 'done':
            return state.map(item => item.text === action.text ? {...item, done: !item.done} : item)
    }
}

export default List;

