var Ballot = require('./models/ballot.js');
var crypto = require("crypto-js");
var helpers = require('./helpers.js');


module.exports = {

  renderNewPoll: function (req, res, next) {
    res.send('hit');
  }
   ,

  createPoll: function (req, res, next) {
    var options = req.body.options; //string of ballot options
    var emailAddresses = req.body.emails;
    for(var i = 0; i < emailAddresses.length; i++){
      var id = crypto.randomBytes(20).toString('hex');
      var ballot = new Ballot({user:id,rankings:options});
      ballot.save();
      helpers.sendEmail(emailAddresses[i],ballot[user]);
    }
    res.redirect('/results');

    //create a ballot for each option with a random SHA as username
    //call send emails    
  },

  renderBallot: function (req, res, next) {
  },

  submitBallot: function  (req,res,next){

  },

  renderResults: function (req,res,next){

  }

};

