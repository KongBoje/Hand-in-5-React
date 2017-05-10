import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="left-header">
            <ul>
              <li><Link activeClassName="active" to="/home">Home</Link></li>
              <li><Link activeClassName="active" to="/about">About</Link></li>
              <li><Link activeClassName="active" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="right-header">
            <img src={logo} className="App-logo" alt="logo" />

          </div>
          <div className="mid-head">
            <img src={logo} className="App-logo" alt="logo" />

          </div>
        </div>
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
