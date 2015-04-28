module.exports = {

  calculateResults: function(ballots){
  	var numChoices = ballots.length;
  	var results = tally(ballots);
  	var highestvotes = results[ballots[0][0]];
  	var lowestvotes = results[ballots[0][0]];
  	for(var option in results){
  		if(results[option] > results[highestvotes]){
  			highestvotes = option;
  		}
  		if(results[option] < results[lowestvotes]){
  			lowestvotes = option;
  		}
  	}
  	if(results[highestvotes]>numChoices/2){
  		return highestvotes;
  	} else{

  	}
  },

  sendEmail: function (address,link) {
    //go through each ballot in DB
    //send an email with link to ballot url to each
  },

  tally : function(ballots){
  	tallyResults = {};
  	for(var i = 0;i < ballots.length; i++){
  		if(tallyResults[ballots[i]][0] === undefined){tallyResults[ballots[i]][0] = 0;}
  		else{tallyResults[ballots[i]][0]++;}
  	}
  	return tallyResults;
  }

};
