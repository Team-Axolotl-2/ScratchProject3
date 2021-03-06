// Router for user registrations
const express = require("express");
const router = express.Router();

const User = require("../../models/User"); // bringing in the user model

// ! Post request to send to MongoDB Database. Implement BCRYPT, possibly auth etc..
router.post("/", async (req, res) => {
  const {
    name,
    email,
    password,
    favorites,
    beginner,
    intermediate,
    advanced,
  } = req.body;
  try {
    // checking if the user already exists
    let user = await User.findOne({ email }); // don't need to do email: email since the email is the same name
    // if user already exists, return an error
    if (user) {
      return res.status(400).json({ errors: [{ msg: "user already exists" }] });
    }

    // Else add the user to the database
    user = new User({
      name,
      email,
      password,
      favorites
    });

    console.log("in users " + user)
    user.save(); // throwing an error here right now
    res.json(req.body);
  } catch (err) {
    console.log("error");
  }
});





//! Get request to get all the users
router.get("/", async (req, res) => {
  try {
    // should populate profiles with the name
    const users = await User.find().populate("user", ["name"]);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


// ! Get an individual user
router.get("/:email", async (req, res) => {
  try {
    // should populate profiles with the name
    const users = await User.findOne({email: req.params.email}) // this works
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



// ! Update an individual user
router.post("/:email", async (req, res) => {
  // Destructuring from req.body
  console.log("this is the body " + req.body)
 

  const profileFields = {};
  profileFields.favorites = req.body; // setting favorites equal to favorites

  try {
    // should populate profiles with the name. We need to get the update working
    let update = await User.findOneAndUpdate({email: req.params.email}, {$set: profileFields}) // this works
    res.json(update);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



// Create a request to update the user


module.exports = router;
