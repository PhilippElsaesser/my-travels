import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel.js"
import Travels from "./Travels.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Travel
          image="https://assets.change.org/photos/1/ol/ff/FoOlffAJfEhQamJ-800x450-noPad.jpg?1490147017"
          destination=" The Great Barrier Reef"
          country="Australia"
          distance="15.429 km"
        />

        <Travel
          image="https://cdn.kanootours.com/media/wysiwyg/machupicchu-tours/machu-picchu-tours-peru.jpg"
          destination="Machu Picchu"
          country="Peru"
          distance="10.095 km"
        />

        <Travels />
      </div>
    );
  }
}

export default App;
