var ct = require('./controller.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.get('/poll', ct.renderNewPoll);
  
  app.post('/poll', ct.createPoll);


  app.get('/ballot:id', ct.renderBallot);
  app.post('/ballot:id', ct.submitBallot);


  app.get('/ballot:id', ct.renderBallot);


  app.get('/results', ct.renderResults);

};