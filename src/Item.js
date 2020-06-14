import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    return (
      <div className="Item" onClick={this.props.onClick}>
        <p className={ball(this.props.done)}>
          {/* ={done ? "Item-done" : ""} */}
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Item;

function ball(done) {
  if (done) {
    return "Item-done";
  } else {
    return "";
  }
}
