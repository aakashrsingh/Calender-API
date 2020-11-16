const mongoose = require("mongoose");


// const eventSchema = new mongoose.Schema({
//     email: String,
//     task: String,
//     date: String,
//     time: String,
//     isDone: Boolean
// });

const userSchema = new mongoose.Schema({
  fname:String,
  lname:String,
  email:String,
  password:String
});

module.exports = mongoose.model("User", userSchema);

