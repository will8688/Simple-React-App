import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import EventDetails from './EventDetails';
class App extends Component {
  render() {
    return (
      <div className="app">
        
        <header><img src={logo} className="app-logo" alt="logo" /></header>
        <div className="nav">
          <nav>
            <a href="/html/">Home</a>
            <a href="/css/">Events</a>
            <ul className="second-nav" ><li>Events</li><li>Events</li><li>Events</li><li>Events</li></ul>
          </nav>
        </div>
        <div className="app-event-details">
          <EventDetails></EventDetails>
        </div>

        <footer></footer>
      </div>
    );
  }
}

export default App;
