var express = require( 'express' ); // call express
var app = express(); // define our app using express
var bodyParser = require( 'body-parser' );

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use( bodyParser.urlencoded( {
    extended: true
} ) );
app.use( bodyParser.json() );

var port = process.env.PORT || 3000; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get( '/', function ( req, res ) {
    res.json( {
        response: [
            {
                artist: 'Rage Against The Machine',
                album: 'Evil Empire',
                cover: './images/rageagainstthemachine.jepg',
                tracklist: [
                'People of the Sun',
                'Bulls on Parade',
                'Vietnow',
                'Revolver',
                'Snakecharmer',
                'Tire Me',
                'Down Rodeo',
                'Without a Face',
                'Wind Below',
                'Roll Right',
                'Year of the Boomerang'
              ]
            },
            {
                artist: 'Sound Garden',
                album: 'Superunknown',
                cover: './images/soundgarden.jpeg',
                tracklist: [
                'Let Me Down',
                'My Wave',
                'Fell On Black Days',
                'Mailman',
                'Superunknown',
                'Head Down',
                'Black Hole Sun',
                'Spoonman',
                'Limo Wreck',
                'The Day I Tried To Live',
                'Kickstand',
                'Fresh Tendrills',
                '4th of July',
                'Half',
                'Like Suicide',
                'She Likes Suprises'
              ]
            }
    ]
    } );
} );

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use( '/api', router );

// START THE SERVER
// =============================================================================
app.listen( port );
console.log( 'Magic happens on port ' + port );