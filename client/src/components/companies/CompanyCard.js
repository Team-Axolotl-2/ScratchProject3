// Create the card for each individual company// Create the list of companies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create a loop, that will create many company cards
class CompanyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.companyName}</div>;
    // Start w/ company name

    // Preview (STRETCH FEATURE)
  }
}

export default CompanyCard;
