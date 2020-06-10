import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import Empty from "./Empty";
import Menu from './Menu'
import Gallery from './gallery/Gallery'

function App() {
  const [ page, setPage ] = useState('1')
  
  return (
    <div className="App">
      <Menu />

      <Gallery />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My <code>src/App.js</code> code.
        </p>
        <div>
          <button className='block' onClick={() => setPage('1') }>List</button>
          <button className='block' onClick={() => setPage('2') }>Empty</button>
        </div>

        <h1>The new list</h1>
        <br />
        {page === '1' ? <List /> : <Empty />}
        
        
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

