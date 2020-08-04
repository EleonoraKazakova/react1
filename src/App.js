import React, { useState } from "react";
import "./App.css";
import List from "./List";
import Empty from "./Empty";
import Menu from "./Menu";
import Gallery from "./gallery/Gallery";
import Text from "./Text";
import Search from "./Search";
import Cat from "./Cat";
import AlbumSection from './AlbumSection'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState("1");

  return (
    <Router>
      <div className="App">
        <Menu />
        <div className='App-body'>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/albums'>
              <AlbumSection />
            </Route>
            <Route path='/to-do'>
              <div className='App-todo'>
                <Cat />
                <div>
                  <button className="block" onClick={() => setPage("1")}>
                    List
                </button>
                  <button className="block" onClick={() => setPage("2")}>
                    Empty
                </button>
                </div>

                <h1>The new list</h1>
                <br />
                {page === "1" ? <List /> : <Empty />}
              </div>
            </Route>

            <Route
              path='/gallery/:country/:city'
              render={(props) =>
                <div>
                  <Gallery
                    city={props.match.params.city}
                  />
                  <Text />
                </div>}
            />

            <Route path='/'>
              <Gallery
                city='Home'
              />
              <Text />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
