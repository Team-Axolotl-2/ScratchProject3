// setting up express Server
const express = require('express');
require('dotenv').config();

const app = express();

const router = express.Router();
const path = require('path');
const axios = require('axios');

const URL = process.env.AAURL;
const KEY = process.env.AAAPI;
const func = 'CURRENCY_EXCHANGE_RATE';
let cur_from = "USD"; 
let cur_to = "BTC"
// Build consumable AlphaAdvantage url
// For Exchange rates the order does matter
// Crypto first fiat currency second
const request_payload = () => `${URL}function=${func}&from_currency=${cur_to}&to_currency=${cur_from}&apikey=${KEY}`;

router.get('/crypto/exchange', (req, res, next) => {
  // we need to capture query parameters to pass to the API;
  const query = req.query;
  const finalRequest = request_payload();
  axios.get(finalRequest)
    .then(
      (response) => {
        // log api request for testing
        console.log(`AA API response ${response.data}`);

        console.log(" res.locals ", res.locals.overview);
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
