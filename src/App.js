import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import About from './Components/About';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
            <div className="App-content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
export default App
