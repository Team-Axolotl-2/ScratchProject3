import React, { Fragment } from 'react';
const ReactDOM = require('react-dom');


// importing different pages for routing
// import CompanyProfile from './layout/CompanyProfile';
// import Home from './layout/Home';
// import Login from './layout/Login';
// import Register from './layout/Register';



import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




const App = () =>  {
  return (
    <Router>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/companyProfile" component = {CompanyProfile} />
      <Route exact path = "/login" component = {Login} />
      <Route exact path = "/register" component = {Register} />
    </Router>
  )
}




export default App;