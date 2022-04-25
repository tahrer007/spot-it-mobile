const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: {
    type :String ,
    required: [true , "Please provide a user name "],
    default: "guest",
    
  },
  email: {
    type: Number,
    required: [true, "Please provide a email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const user = mongoose.model("users", usersSchema);

module.exports = user;
