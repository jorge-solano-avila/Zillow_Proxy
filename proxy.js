"use strict";

var express = require( "express" );
var requestAPI = require( "request" );

var app = express();

app.use( function( request, response, next ) 
{ 
	response.header( "Access-Control-Allow-Origin", "*" ); 
	response.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" ); 
	next();
} );

app.get( "/zillow-api", function( request, response )
{
	var requestZillow = request.query.url + "?";
	for( var parameter in request.query )
	{
		if( parameter === "url" )
			continue;
		requestZillow += parameter + "=" + request.query[parameter] + "&";
	}
	requestZillow = requestZillow.substring( 0, requestZillow.length - 1 );
	//requestAPI.get( { url:  } )
	response.send( {} );
} );

var port = process.env.PORT || 3000;
console.log( "Running in port " + port );
app.listen( port );