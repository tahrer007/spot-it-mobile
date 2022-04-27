const User = require("../dataBase/models/users.js");
const jwt = require("jsonwebtoken") ;

const signUp = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const addUser = await newUser.save();
    res.status(201).json(addUser);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

module.exports = {
  signUp,
};
