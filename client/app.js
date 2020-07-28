import React, { Fragment, Component } from 'react';
//import React, { Component } from 'react';
const ReactDOM = require('react-dom');
import "@babel/polyfill";
import axios from 'axios'

// importing different pages for routing
import CompanyProfile from './src/layout/CompanyProfile';
import Home from './src/layout/Home';
import Login from './src/layout/Login';
import Register from './src/layout/Register';
import Settings from './src/layout/Settings';
import './styles/styles.scss';
 


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


let setData = []; // stores the user data in async call on line 92

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { // setting the default state
      name: '',
      email: this.props.email,
      depthLevel: 0,
      searchResults: null,
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
    this.SearchSelector = this.SearchSelector.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  // ! setting the state
  componentDidMount(){
    const data = this.getUser();
    console.log("inside did mount" + data)
    //this.getUser()
      // create function that will set the state. Makes Async Call
    this.setState({companyListArray: setData}) // Set initial state 
  }

  render() {
    // console.log(this.state) // test to console.log the state
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
              searchResults={this.state.searchResults}
              SearchSelector={this.SearchSelector}
              companyListArray={this.state.companyListArray}
              onSearchClick={this.onSearchClick}
              getUser={this.getUser}
              onSliderChange={this.onSliderChange}
              depthLevel={this.state.depthLevel}
            />
          )}
        />
        <Route
          exact
          path="/companyprofile"
          render={(props) => (
            <CompanyProfile
              {...props}
              depthLevel={this.state.depthLevel}
            />
          )}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/settings" component={Settings} />
      </Router>
    );
  }

  // function to add company through search bar, and adds to the user's databse
  // also need to add in an email parameter
  async onSearchClick(e, email) {
    console.log('This is email in onSearchClick ' + email)
    e.preventDefault();
    console.log('This is e.target:  ', e.target.company.value);
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${e.target.company.value}&apikey=R4TK10Z7D2U5QEA6`)
    .then ((res) => {
      return res.json()
    })
    .then (data => {
      console.log('Search Results Data: ', data);
      this.setState({searchResults : data, email: email})
    } )



  }


  // 
  async SearchSelector(e, email) {
    // hits if not in the else blox
    const output = this.state.companyListArray;
    if (output.includes(e)) {
      alert('Company has already been added.');
      return;
    }
    output.push(e);// this is pushing to the array
    this.setState({ 
      companyListArray: output,
      searchResults: null
    });

    // ! making the axios request, working with the database
    const pushData = e // need to get value outside for async
    if (email){
      // getting the data and returning what we need
      const data = await axios.get('http://localhost:3000/api/users/' + email)
      const setData = data.data.favorites // getting the favorites array
      setData.push(pushData) // pushing typed element to the array
      // ! setData is what we need -- setData is an array of what we need
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      // axios request to add to db
      const upData = await axios.post('http://localhost:3000/api/users/' + email, setData, config)
        // make axios request to update the database
    }
  }

  // function to delete cards from the array

  // function makes async call to database to get specific user data
  async getUser(email){
    if (email){
      const data = await axios.get('http://localhost:3000/api/users/' + email) // makes axios request to get specific user
      setData = data.data.favorites
      this.setState({companyListArray: setData})
    } else{
      setData=[] // default data
      this.setState({companyListArray: setData})
    }
  }

  onSliderChange(number) {
    this.setState({depthLevel : number});
  };
}

export default App;
