import React, { Fragment } from 'react';
const ReactDOM = require('react-dom');


// importing different pages for routing
import companyProfile from './layout/companyProfile';
import home from './layout/home';
import login from './layout/login';
import register from './layout/register';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




const App = () =>  {
  return (
    <Router>
      <Route exact path = "/" component = {home} />
      <Route exact path = "/companyProfile" component = {companyProfile} />
      <Route exact path = "/login" component = {login} />
      <Route exact path = "/register" component = {register} />
    </Router>
    
  )
}




export default App;