import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HealthData extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

    // to use for the quarterly/annual data request
  // componentDidMount() {
  //   axios.get('/api/overview/?symbol=AAPL')
  //     .then(res => {
  //       console.log('res.data', res.data);
  //       this.setState({
  //         'EPS': Math.round(res.data.EPS * 100)/100,
  //         'P/E': Math.round(res.data.PERatio * 100)/100,
  //         'Beta': Math.round(res.data.Beta * 100)/100,
  //         'P/B': Math.round(res.data.PriceToBookRatio * 100)/100,
  //         'PEG': Math.round(res.data.PEGRatio * 100)/100,
  //         // 'Free Cash Flow': null,
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    // fallback chart to look at in case its too difficult to compare statistics
  const healthGraph = 'https://www.investopedia.com/thmb/CWct8L8vv8se9h5ORIc3pE4af70=/801x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/epidemics2-c071df1870534f29846f620590567eeb.png';
    // refer to state for values to target during certain time periods
    // look at quarterly values throughout that year
    // determine a variance over that year

    // 2016 - Zika Virus - pandemic in Feb 2016

    // 2014 - Ebola Virus - oubreak in March 2014

    // 2012 - Fungal Meningitis - outbreak Sept 2012

    // 2009 - H1N1 flu - april 2009

    // 2003 - SARS - Nov 2002 thru May 2004


    

    return (
      <div>
        <center><img src={healthGraph} /></center>
        <p>IMG Source: Investopedia</p>
      </div>
    )
  }
}

export default HealthData
