var http = require('http');
var app = require('./config/express');
require('./config/database')('$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/alurapic');
http.createServer(app).listen(3000, function(){
	console.log("Ok, pode requerer algo, estou te ouvindo.");
});