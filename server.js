require('dotenv').config();
// setting up express Server
const express = require('express');
const path = require('path');
const axios = require("axios");
const overview = require("./routes/a-overview");
const income = require("./routes/a-income");
const balanace = require("./routes/a-balance");
const cashflow = require("./routes/a-cashflow");
const health = require("./routes/a-sectorhealth");
const crypto = require("./routes/a-crypto-exchange");
const cors = require('cors');
const Mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connect to the MongoDB Database
app.use(cors());


// Connect to the MongoDB Database
/* const db = process.env.MONGO_URL'

const connectDB = async () => {
  try{
    await Mongoose.connect(db)
  } catch(err){
    console.error(err.message)
  }
}

connectDB(); */

// Initialize universal middleware
app.use(express.json({ extended: false}))


// to avoid cors error, give permission ot front end
app.use(
  cors({
    origin: 'http://localhost:8080',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETEGET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);


// Define Routes
app.use("/api/",
  overview,
  income,
  balanace,
  cashflow,
  health,
  crypto
)

app.use((req, res, next, err) => {
  if(err){
    console.log(`ERROR at use: ` )
  }
});


// Setting up the port
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
