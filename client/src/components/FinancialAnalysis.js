import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import data from './../../public/finStats.json'
import FinancialDetails from './FinancialDetails'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from 'react-fontawesome'

class FinancialAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      finData: {
      'EPS': null,
      'P/E': null,
      'Beta': null,
      'P/B': null,
      'PEG': null,
      // 'Free Cash Flow': null,
      },
      isHovering: false,
    }
    this.handleHover = this.handleHover.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  // to show/hide definitions
  handleHover() {
    this.setState(this.toggleHover);
  }

  toggleHover(state) {
    return {
      isHovering: !state.isHovering,
    };
  } 

  // need to grab query symbol from search
  componentDidMount() {
    axios.get('/api/overview?symbol=' + this.state.name)
      .then(res => {
        this.setState({ finData:{
          'EPS': Math.round(res.data.EPS * 100)/100,
          'P/E': Math.round(res.data.PERatio * 100)/100,
          'Beta': Math.round(res.data.Beta * 100)/100,
          'P/B': Math.round(res.data.PriceToBookRatio * 100)/100,
          'PEG': Math.round(res.data.PEGRatio * 100)/100,
          // 'Free Cash Flow': null,
          }
        })
      })
      .catch(err => console.log(err));
  }
 
  render() {

  const rawStats = {...this.state.finData};
    
    // how to link up the detail with the stat?

    const outputStats = [];
    let index = 0;
    // check depth/level of interest
    // for (let key in rawStats) {
    //   outputStats.push(
    //       <li key={index}>
    //       {key}: {rawStats[key]}
    //       </li>)
    //   index += 1;
    // };


    for (let key in rawStats) {
      outputStats.push(
        <div>
          <p key={index}>{key}<FontAwesomeIcon icon={faInfoCircle} fixedWidth/>: {rawStats[key]}</p>
        </div>)
      index += 1;
    };

    return (
      <div id='fin-data'>
        Investment Metrics
        <div>
          {outputStats}
        </div>
      </div>
    )
  }
}

export default FinancialAnalysis;