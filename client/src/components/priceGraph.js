import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import axios from 'axios'

class PriceGraph extends Component {
  // used to let react know components won't unmount
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      chartData: {
        labels: [],
        dataSets: {
            label: '',
            backgroundColor: '',
            data: []
        }
      }
    }
  }
    // for adding the graph when the api route is set up
  componentDidMount() {
    this._isMounted = true;
    const dataArr = [];
    const editLabelsArr = []
    axios.get('/company/chart-data?interval=daily&symbol=' + this.state.name)
      .then(response => {
        const rawLabelsArr = Object.keys(response.data['Time Series (Daily)']);
        const respArr = Object.values(response.data['Time Series (Daily)']);
        // mold the data to make it easier to setState
        for (let i = 0; i < 30; i += 1) {
          const currentClose = respArr[i];
          const currentDay = rawLabelsArr[i];
          dataArr.push(currentClose['4. close']);
          editLabelsArr.unshift(currentDay);
        }
        // reassign values to use in setState
        const dataObj = {
          labels: editLabelsArr,
          datasets: [{
              label: ['Closing Price'],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              data: dataArr,
          }],
        }
        this.setState({ 
          chartData: dataObj
        })
      })
      .catch(err=>console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        Historical Price Trend (Daily)
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