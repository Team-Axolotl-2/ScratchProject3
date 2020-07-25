// setting up express Server
const express = require('express');
const app = express();

const path = require('path')

const cors = require('cors');
const Mongoose = require('mongoose');

// Connect to the MongoDB Database
app.use(cors());


// ! Connecting to the MongoDB Database
const db = 'mongodb+srv://user:user@cluster0.ykk7s.mongodb.net/<dbname>?retryWrites=true&w=majority'

const connectDB = async () => {
  try{
    await Mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    console.log("MongoDB Connected...")
  } catch(err){
    console.error(err.message)
  }
}

connectDB();

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



//! Define Routes

app.use('/api/users', require('./routes/api/users'))





// Setting up the port
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))




























