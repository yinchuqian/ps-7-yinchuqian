import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Project } from './Project.js';
import { About } from './About.js';
import { Homepage } from './Homepage.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
      return (
          <Router>
            <div className="container">
            <div className = "row">
              <Link className="col badge badge-primary text-align-center" to="/">Home</Link>
              { ' ' }
              <Link className="col badge badge-primary text-align-center" to="/project">Projects</Link>
              { ' ' }
              <Link className="col badge badge-primary text-align-center" to="/about">About</Link>
              </div>
              <Route exact path="/" component={ Homepage } />
              <Route path="/project" component={ Project } />
              <Route path="/about" component={ About } />
              
            </div>
          </Router>
          );
  }
}
export default App;
