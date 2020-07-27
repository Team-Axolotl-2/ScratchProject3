const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  favorites:[
    {
      type: String
    }
  ],
  beginner: {
    type: Boolean,
  },
  intermediate: {
    type: Boolean,
  },
  advanced: {
    type: Boolean,
  },

})


module.exports = User = mongoose.model('user', UserSchema)