const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpInc = new Schema({
  Type: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
  Categories: {
    type: String,
    required: true,
  },
  Divisions: {
    type: String,
    required: true,
  },
  Cash: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Data", ExpInc);
