const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    email:String,
    task: String,
    date: String,
    time: String,
    isDone: Boolean
});

module.exports = mongoose.model("Event", eventSchema);