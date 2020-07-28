const express = require('express');
require('dotenv').config();

const app = express();

const router = express.Router();
const path = require('path');
const axios = require('axios');

const URL = process.env.AAURL;
const KEY = process.env.AAAPI;
const func = 'SYMBOL_SEARCH';

// Build consumable AlphaAdvantage url
const request_payload = (name) => `${URL}function=${func}&keywords=${name}&apikey=${KEY}`;

router.get("/search", (req, res, next) => {

  let searchFor = request_payload(req.query.companyname);
  
  console.log(`Search For: ${searchFor}`)

  axios.get(searchFor)
    .then((response) => {      
      console.log( response.data.bestMatches[0], response.data.bestMatches[1]);
      res.status(200).send(response.data)
      next();
    })
    .catch(err => {
      console.log(`Company lookup error: ${err}`)
      next(err)
    })

})

module.exports = router;