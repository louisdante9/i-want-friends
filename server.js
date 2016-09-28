//npm package
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//define express & define PORT
var app = express ();// Tells node that we are creating an "express" server
var PORT = process.env.PORT || 9999;

// body Parser standards. BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//ROUTER...
//These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//Listener
//The below code effectively "starts" our server 

app.listen(PORT,function(){
	console.log("app listening on PORT: " + PORT);

})