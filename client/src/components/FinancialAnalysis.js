import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import data from './../../public/finStats.json';

class FinancialAnalysis extends Component {
  constructor() {
    super();
    this.state = {
      'EPS': null,
      'P/E': null,
      'Beta': null,
      'P/B': null,
      'PEG': null,
      // 'Free Cash Flow': null,
    }
  }
  // need to grab query symbol from search
  componentDidMount() {
    axios.get('/api/overview?symbol=TSLA')
      .then(res => {
        console.log('res.data', res.data);
        this.setState({
          'EPS': Math.round(res.data.EPS * 100)/100,
          'P/E': Math.round(res.data.PERatio * 100)/100,
          'Beta': Math.round(res.data.Beta * 100)/100,
          'P/B': Math.round(res.data.PriceToBookRatio * 100)/100,
          'PEG': Math.round(res.data.PEGRatio * 100)/100,
          // 'Free Cash Flow': null,
        })
      })
      .catch(err => console.log(err));
  }
 
  render() {

  const rawStats = {...this.state};
  
    const outputDetails = [
                          <p>Earnings per share is an indicator of a
                            company's profitability calculated
                            by dividing net profit by common shares outstanding.
                          </p>,
                          <p>
                            The price-to-earnings ratio reflects investors' assessments of those future earnings. The share price of the 
                            company's stock is divided by its' EPS to obtain the P/E ratio.
                          </p>,
                          <p>
                            The beta is a measure of a stock's volatility in comparison to the overall market. A beta
                            greater than 1 shows that the stock is more volatile than the market
                          </p>,
                          <p>
                            The price-to-book ratio or P/B ratio measures whether a stock is over or undervalued 
                            by comparing the net value (assets - liabilities) of a company to its market 
                            capitalization. Essentially, the P/B ratio divides a stock's share price by its 
                            book value per share (BVPS). 
                          </p>,
                          <p>
                            The PEG ratio measures the relationship between the price/earnings ratio and 
                            earnings growth. The PEG ratio provides a more complete picture of whether a 
                            stock's price is overvalued or undervalued by analyzing both today's earnings and 
                            the expected growth rate.
                          </p>
                          ];

    
    // how to link up the detail with the stat?

    const outputStats = [];
    let index = 0;
    for (let key in rawStats) {
      outputStats.push(
          <li key={index}>
          {key}: {rawStats[key]}
          </li>)
      index += 1;
    };

    return (
      <div id='fin-data'>
        Investment Metrics
        <ul>
          {outputStats}
        </ul>
      </div>
    )
  }
}

export default FinancialAnalysis;