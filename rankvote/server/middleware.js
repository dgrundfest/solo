var morgan      = require('morgan');
var bodyParser  = require('body-parser');
//var routes = require('./routes.js');
var ct = require('./controller.js');


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  
 // app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));



  app.get('/poll', ct.renderNewPoll);
  
  app.post('/poll', ct.createPoll);


  app.get('/ballot:id', ct.renderBallot);
  app.post('/ballot:id', ct.submitBallot);


  app.get('/ballot:id', ct.renderBallot);


  app.get('/results', ct.renderResults);

};