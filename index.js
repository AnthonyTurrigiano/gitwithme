'use strict';


/*
	Application Configuration Variables
*/
const config = {
	host : process.env.IP || '0.0.0.0',
	port : process.env.PORT || 8080,
};

/*
	node.js core modues 
		@variable - http : creates an http server
*/	
const http = require("http");

/*
	express web framework
		@variable - express : imports the express framework
		@variable - app : iniciates an express applications
*/
const express = require("express");
const app = express();

/*
	point to static files
*/
app.use("/public", express.static("./public"));
app.use("/bower_components", express.static("./bower_components"));

/*
	index route
*/

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

/*
	-create server using the http module
	-have server listen to pre-definded host and port 
*/
http.createServer(app).listen(config.port, config.host, function(){
	console.log("Server listening at %s:%s", config.host, config.port);
});


