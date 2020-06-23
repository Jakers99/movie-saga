import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import MovieDescription from '../MovieDescription/MovieDescription'
import Edit from '../EditPage/EditPage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link to = '/MovieList'></Link>
            </li>
          </ul>
          <Route exact path = '/' component= {MovieList} />
          <Route path = '/MovieDescription' component = {MovieDescription} />
          <Route path = '/details' component = {Edit}/>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
