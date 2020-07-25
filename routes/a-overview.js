// setting up express Server
const express = require('express');
require('dotenv').config()
const app = express();

const router = express.Router();
const path = require('path');
const axios = require("axios");

const URL = process.env.AAURL;
const KEY = process.env.AAKEY;
const func = "OVERVIEW";

//Build consumable AlphaAdvantage url
const request_payload = (symbol) => `${URL}function=${func}&symbol=${symbol}&apikey=${KEY}`;

//https://www.alphavantage.co/query?function=SECTOR&apikey=${APIKEYHERE}

router.get("/overview", (req, res, next) => {

  //we need to capture query parameters to pass to the API;
  const query = req.params;

  console.log(`Query params ${query}; symbol ${query.symbol}`);

  const finalRequest = request_payload(query.symbol);
  
  console.log(`finalRequest: ${finalRequest}`);
  
  axios.get(finalRequest)
  .then(
    (resp) => {
      //log api request for testing
      console.log(`AA API response ${resp}`);
      res.status(200).send(resp.body); 
    },
    (err) => {
      console.log(`ERROR: api request to ${func} failed with; ERR ${err}`);
      next(err);
    }
  );

})

module.exports = router;
