const User = require("../dataBase/models/users.js");
const jwt = require("jsonwebtoken") ;
require("dotenv").config();
const MY_SECRET_KEY = process.env.SECRET_KEY ;

const signUp = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    const token = jwt.sign({userId : user._id },MY_SECRET_KEY);
    res.status(201).json({token});
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

module.exports = {
  signUp,
};
