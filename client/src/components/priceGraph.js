import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import axios from 'axios'

class PriceGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      chartData: {
        labels: [
          '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
          '11', '12', '13', '14', '15', '16', '17', '18', '19',
          '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
        ],
        datasets: [
          {
            label: 'Book Price',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            data: [120, 135, 140, 145]
          }
        ]
      }
    }
  }
    // for adding the graph when the api route is set up
  componentDidMount() {
    axios.get('/company/chart-data?interval=daily&symbol=' + this.state.name)
      .then(response => {
        // console.log('response.data in price graph', response.data);
        console.log(Object.values(response.data['Time Series (Daily)']));
        // return response.json()
      })
      .catch(err=>console.log(err));
  }

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
        Historical Price Trend (Monthly)
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