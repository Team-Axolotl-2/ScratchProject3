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
import './styles/styles.scss';
 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depthLevel: 0,
      companyListArray: [
        'Initial Hard Code Company',
        'Second fake',
        'Third hardcode fake',
      ],
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
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
              onSliderChange={this.onSliderChange}
              depthLevel={this.state.depthLevel}
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

  onSearchClick(e) {
    e.preventDefault();
    console.log('This is e.target:  ', e.target.company.value);
    const output = this.state.companyListArray;
    if (output.includes(e.target.company.value)) {
      alert('Company has already been added.');
      return;
    }
    output.push(e.target.company.value);
    this.setState({ companyListArray: output });
  }

  onSliderChange(number) {
    this.setState({depthLevel : number});
  };
}

export default App;
