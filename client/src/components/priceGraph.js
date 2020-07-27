import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';

class PriceGraph extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            label: 'Book Price',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [120, 115, 140, 125]
          }
        ]
      }
    }
  }
    // for adding the graph when the api route is set up
  // componentDidMount() {
  //   axios.get('/api/overview/?symbol=AAPL')
  //     .then(res => {
  //       console.log('res.data', res.data);
  //       this.setState({
         
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }

  // get chart data from the response object
  // getChartData() {
  //   const data = this.state.data;
  //   if (data.datasets) {

  //   }
  //   return data
  // }

  render() {
    return (
      <div>
        Historical Price Trend (Annual)
          <Line
          options={{
            responsive: true
          }} 
          data={this.state.chartData}
          />
      </div>
    )
  }
}

export default PriceGraph