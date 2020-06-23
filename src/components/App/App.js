import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import MovieDescription from '../MovieDescription/MovieDescription'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <Router>
          <ul>
            <li>
              <Link to = '/MovieList'></Link>
            </li>
          </ul>
          <Route exact path = '/' component= {MovieList} />
          <Route path = '/MovieDescription' component = {MovieDescription} />
        </Router>
      </div>
    );
  }
}

export default App;
