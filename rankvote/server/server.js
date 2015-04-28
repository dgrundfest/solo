var express     = require('express');
var mongoose    = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/rankvote'); 

require('./middleware.js')(app, express);
console.log('rankvote is listening on 4568');

var server = app.listen(4568, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});





module.exports = app;


