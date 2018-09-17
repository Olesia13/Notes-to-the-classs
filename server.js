const express = require( 'express' )
const path = require( 'path' )
const app = express()

app.use( express.static( path.join( __dirname ) ) )

app.listen( 3000, function () {
	console.log( "I'm at the port 3000" )
} )
