import React, { Fragment, Component } from 'react';
//import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import "@babel/polyfill";

// importing different pages for routing
import CompanyProfile from './src/layout/CompanyProfile';
import Home from './src/layout/Home';
import Login from './src/layout/Login';
import Register from './src/layout/Register';
import Settings from './src/layout/Settings';
import axios from 'axios'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// create function to set the initial state. 



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      companyListArray: [
        'Company 1',
        'Company 2',
        'Company 3',
        'Company 4',
        'Company 5',
        'Company 6',
      ],
      settings: '',
      depthLevel: 1,
    };
    this.onSearchClick = this.onSearchClick.bind(this);
  }
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              companyListArray={this.state.companyListArray}
              onSearchClick={this.onSearchClick}
            />
          )}
        />
        <Route exact path="/companyprofile" component={CompanyProfile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/settings" component={Settings} />
      </Router>
    );
  }

  // function to add company through search bar
  onSearchClick(e) {
    e.preventDefault();
    console.log('This is e.target:  ', e.target.company.value);
    const output = this.state.companyListArray;
    if (output.includes(e.target.company.value)) {
      alert('Company has already been added.');
      return;
    }
    output.push(e.target.company.value);
    this.setState({ companyListArray: output }); // setting the state
  }


  // function to delete cards from the array
}

export default App;
