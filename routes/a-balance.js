// setting up express Server
const express = require('express');
require('dotenv').config();

const app = express();

const router = express.Router();
const path = require('path');
const axios = require('axios');

const URL = process.env.AAURL;
const KEY = process.env.AAAPI;
const func = 'BALANCE_SHEET';

// Build consumable AlphaAdvantage url
const request_payload = (symbol) => `${URL}function=${func}&symbol=${symbol}&apikey=${KEY}`;

// https://www.alphavantage.co/query?function=SECTOR&apikey=${APIKEYHERE}

router.get('/balance', (req, res, next) => {
  // we need to capture query parameters to pass to the API;
  const query = req.query;
  const finalRequest = request_payload(query.symbol);

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
