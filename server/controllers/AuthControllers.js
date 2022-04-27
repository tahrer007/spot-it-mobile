const User = require("../dataBase/models/users.js");
const jwt = require("jsonwebtoken") ;

const signUp = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const user = await newUser.save();
    const token = jwt.sign({userId : user._id },"MY SECRET KEY !!");
    res.status(201).json({token});
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

module.exports = {
  signUp,
};
