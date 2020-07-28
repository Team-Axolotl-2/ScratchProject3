const express = require('express');
require('dotenv').config();

const app = express();

const router = express.Router();
const path = require('path');
const axios = require('axios');

const URL = process.env.AAURL;
const KEY = process.env.AAAPI;
//const func = 'SYMBOL_SEARCH';

let timeFrame = {
  daily: "TIME_SERIES_DAILY_ADJUSTED", 
  weekly: "TIME_SERIES_WEEKLY_ADJUSTED", 
  monthly:"TIME_SERIES_MONTHLY_ADJUSTED"
}

//Daily
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=demo

//Weekly
//https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=demo

//Monthly
//https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo

// Build consumable AlphaAdvantage url
const request_payload = (t, s) => `${URL}function=${t}&symbol=${s}&apikey=${KEY}`;

router.get('/chart-data', (req, res, next) => {
  let time = timeFrame[req.query.interval];
  let symbol = req.query.symbol;
  let searchFor = request_payload(time, symbol);

  axios.get(searchFor)
    .then((response) => {
      //console.log(response.data.bestMatches[0], response.data.bestMatches[1]);
      res.status(200).send(response.data);
      next();
    })
    .catch(err => {
      console.log(`Company lookup error: ${err}`)
      next(err);
    });
});

module.exports = router;