var mongoose = require('mongoose');

var Ballot = new mongoose.Schema({
  user: String,
  complete : { type: Boolean, default: false },
  rankings : [String]
});