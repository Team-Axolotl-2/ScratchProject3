const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: True
  },
  email: {
    type: String,
    required: True
  },
  favorites:[
    {

    }
  ]

})