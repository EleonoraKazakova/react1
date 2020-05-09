import React from "react";
import "./Item.css";

function Item({done, text}) {
    return (
        <div className='Item' >
            <p className={ball(done)}>{/* ={done ? "Item-done" : ""} */}
                {text}
            </p>
        </div>
    )
}
export default Item;

function ball(done) {
    if(done){
        return "Item-done"
    } else {
        return ''
    }
    
} 