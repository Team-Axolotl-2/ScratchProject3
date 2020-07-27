// setting up express Server
const express = require('express');
require('dotenv').config();

const app = express();

const router = express.Router();
const path = require('path');
const axios = require('axios');

const URL = process.env.AAURL;
const KEY = process.env.AAAPI;
const func = 'OVERVIEW';

// Build consumable AlphaAdvantage url
const request_payload = (symbol) => `${URL}function=${func}&symbol=${symbol}&apikey=${KEY}`;

// https://www.alphavantage.co/query?function=SECTOR&apikey=${APIKEYHERE}

router.get('/overview', (req, res, next) => {
  // we need to capture query parameters to pass to the API;
  const query = req.query;
  const finalRequest = request_payload(query.symbol);

  axios.get(finalRequest)
    .then(
      (response) => {
      // log api request for testing
        // console.log(`AA API response ${response.data}`);
        const desired = {Symbol, Name, SharesShort, ProfitMargin, Industry, EPS, Beta, BookValue} = response.data;
        res.locals.overview = desired;

        // console.log(" res.locals ", res.locals.overview);
        res.status(200).send(response.data);
      },
      (err) => {
        console.log(`ERROR: api request to ${func} failed with; ERR ${err}`);
        next(err);
      },
    )
    .catch((err) => console.error('ERROR LOG BODY: ', err));
});

module.exports = router;
