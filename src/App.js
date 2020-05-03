import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My <code>src/App.js</code> code.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Text {abc(2) * 3}
        </a>
      </header>
    </div>
  );
}
function abc(a) {
  return a + 10;
}
export default App;
