"use strict";

var express = require( "express" );
var request = require( "request" );

var app = express();

app.use( function( request, response, next ) 
{ 
	response.header( "Access-Control-Allow-Origin", "*" ); 
	response.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" ); 
	next();
} );