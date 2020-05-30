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
                        onClick={() => dispatch(
                            { type: 'done', text: item.text }
                        )}
                    />
                )
            )
        }
    </div>
}

// state = [{ done: false, text: 'Red' }, { done: true, text: 'Black' }]
// action = { type: 'done', text: item.text }
/**
 * 
 * @param {{ done: boolean, text: string }[]} oldState 
 * @param {{ type: 'done' | 'add', text: string }} action 
 * @returns {{ done: boolean, text: string }[]}
 */
function reducer(oldState, action) {
    switch (action.type) {
        case 'add':
            return [{ done: false, text: action.text }, ...oldState].sort(compare)
        default:
        case 'done':
            return oldState.map(
                item => item.text === action.text
                    ? { ...item, done: !item.done }
                    : item
            ).sort(compare)

    }

}

/**
 * 
 * @param {{ done: boolean, text: string }} item1 
 * @param {{ done: boolean, text: string }} item2
 * @returns {1 | 0 | -1} 
 */
function compare(item1, item2) {
    if (item1.done && !item2.done) {
        return -1
    }
    if (!item1.done && item2.done) {
        return 1
    }
    return 0
}

export default List;

