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
      searchResults: {"bestMatches": [
        {
          "1. symbol": "TSLA",
          "2. name": "Tesla Inc.",
          "3. type": "Equity",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.8571"
        },
        {
          "1. symbol": "AEHR",
          "2. name": "Aehr Test Systems",
          "3. type": "Equity",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.7500"
        },
        {
          "1. symbol": "TESS",
          "2. name": "TESSCO Technologies Incorporated",
          "3. type": "Equity",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.6667"
        },
        {
          "1. symbol": "TESIX",
          "2. name": "Franklin Mutual Shares Fund Class A",
          "3. type": "Mutual Fund",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.5714"
        },
        {
          "1. symbol": "TSCDY",
          "2. name": "Tesco PLC",
          "3. type": "Equity",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.5714"
        },
        {
          "1. symbol": "PQQQX",
          "2. name": "Test Mutual Fund 3 - PIMC",
          "3. type": "Mutual Fund",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.5000"
        },
        {
          "1. symbol": "KIMDX",
          "2. name": "Test Mutual Fund 7 - BSYS",
          "3. type": "Mutual Fund",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.3000"
        },
        {
          "1. symbol": "TESTAX",
          "2. name": "TEST - Separately Managed Accou",
          "3. type": "Mutual Fund",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.2500"
        },
        {
          "1. symbol": "TSNP",
          "2. name": "Tesoro Enterprises Inc.",
          "3. type": "Equity",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.2143"
        },
        {
          "1. symbol": "TXLZF",
          "2. name": "Tesla Exploration Ltd.",
          "3. type": "Equity",
          "4. region": "United States",
          "5. marketOpen": "09:30",
          "6. marketClose": "16:00",
          "7. timezone": "UTC-05",
          "8. currency": "USD",
          "9. matchScore": "0.2143"
        }
      ]
    },
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
    console.log(this.state) // test to console.log the state
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

  // function to add company through search bar
  onSearchClick(e) {
    e.preventDefault();
    console.log('This is e.target:  ', e.target.company.value);
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${e.target.company.value}&apikey=R4TK10Z7D2U5QEA6`)
    .then ((res) => {
      return res.json()
    })
    .then (data => {
      console.log('Search Results Data: ', data);
      this.setState({searchResults : data})
    } )
  }

  SearchSelector(e) {
    const output = this.state.companyListArray;
    if (output.includes(e)) {
      alert('Company has already been added.');
      return;
    }
    output.push(e);
    this.setState({ 
      companyListArray: output,
      searchResults: null
    });
  }

  // function to delete cards from the array

  // function makes async call to database to get specific user data
  async getUser(email){
    if (email){
      const data = await axios.get('http://localhost:3000/api/users/' + email) // makes axios request to get specific user
      setData = data.data.favorites
      this.setState({companyListArray: setData})
    } else{
      setData=["GOOG","FB","AMZN"] // default data
      this.setState({companyListArray: setData})
    }
  }

  onSliderChange(number) {
    this.setState({depthLevel : number});
  };
}

export default App;
