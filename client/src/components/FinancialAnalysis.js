import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import data from './../../public/finStats.json';

class FinancialAnalysis extends Component {
  constructor() {
    super();
  }
  // for adding axios call later to databas
  
  componentDidMount() {
    axios.get('/api/overview?symbol=TSLA')
      .then(res => {
        console.log('res.data', res.data);
      })
  }
 
  render() {

  //  console.log('dat data', data);

  const rawStats = {
    'EPS': Math.round(data.EPS * 100)/100,
    'Beta': Math.round(data.Beta * 100)/100,
    'P/E': Math.round(data.PERatio * 100)/100,
  };
  
    // to display data on hover
    // const [isShown, setIsShown] = useState(false);

    const outputDetails = [<p>Earnings per share is an indicator of a
                            company's profitability calculated
                            by dividing net profit by common shares outstanding
                          </p>, 
                          <p>
                            A measure of a stock's volatility in comparison to the overall market. A beta
                            greater than 1 shows that the stock is more volatile than the market
                          </p>];

    
    // how to link up the detail with the stat?

    const outputStats = [];
    let index = 0;
    for (let key in rawStats) {
      outputStats.push(<li index={index}>
        {key}: {rawStats[key]}
        </li>)
        index += 1;
    };


    return (
      <div id='fin-data'>
        Performance Indicators
        <ul>
          {outputStats}
        </ul>
        {/* {isShown && (
        <div>
          {outputDetails}
        </div>
        )} */}
      </div>
    )
  }
}

export default FinancialAnalysis;