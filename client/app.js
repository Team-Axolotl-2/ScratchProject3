import React, { Fragment } from 'react';
const ReactDOM = require('react-dom');
import "@babel/polyfill";


// importing different pages for routing
import CompanyProfile from './src/layout/CompanyProfile';
import Home from './src/layout/Home';
import Login from './src/layout/Login';
import Register from './src/layout/Register';
import Settings from './src/layout/Settings';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




const App = () =>  {
  return (
    <Router>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/companyprofile" component = {CompanyProfile} />
      <Route exact path = "/login" component = {Login} />
      <Route exact path = "/register" component = {Register} />
      <Route exact path = "/settings" component = {Settings} />
    </Router>
  )
}




export default App;