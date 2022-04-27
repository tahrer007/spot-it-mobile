const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: {
    type :String ,
    required: [true , "Please provide a user name "],
    default: "guest",
    
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique : true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const User = mongoose.model("users", usersSchema);

module.exports = User;
