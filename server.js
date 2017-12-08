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
        results: [
            {
                id: 0,
                artist: 'Rage Against The Machine',
                album: 'Evil Empire',
                cover: './images/rage.jpeg',
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
                id: 1,
                artist: 'Sound Garden',
                album: 'Superunknown',
                cover: './images/garden.jpeg',
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
            }, {
                id: 2,
                artist: 'Tool',
                album: 'Undertow',
                cover: './images/tool.jpeg',
                tracklist: [
                  'Intolerance',
                  'Prison Sex',
                  'Sober',
                  'Bottom',
                  'Crawl Away',
                  'Swamp Song',
                  'Undertow',
                  '4 degrees',
                  'Flood',
                  'Silence'
                ]
            },
            {
                id: 3,
                artist: 'Live',
                album: 'Throwing Copper',
                cover: './images/live.jpeg',
                tracklist: [
                'The Dam at Otter Creek',
                'Selling The Drama',
                'I Alone',
                'Iris',
                'Lightning Crashes',
                'Top',
                'All Over You',
                'Shit Towne',
                'T.B.D.',
                'Stage',
                'Waitress',
                'Pillar of Davidson',
                'White,Discussion',
                'Horse'
              ]
            },
            {
                id: 4,
                artist: 'Nirvana',
                album: 'Nevermind',
                cover: './images/nirvana.jpeg',
                tracklist: [
                'Smells Like Teen Spirit',
                'In Bloom',
                'Come as You Are',
                'Breed',
                'Lthium',
                'Polly',
                'Territorial Pissings',
                'Drain You',
                'Loung Act',
                'Stay Away',
                'On a Plain',
                'Something in the Way'
              ]
            },
            {
                id: 5,
                artist: 'Stone Temple Pilots',
                album: 'Core',
                cover: './images/stp.jpeg',
                tracklist: [
                'Dead and Bloated',
                'Sex Type Thing',
                'Wicked Garden',
                'No Memory',
                'Sin',
                'Naked Sunday',
                'Creep',
                'Piece of Pie',
                'Plush',
                'Wet My Bed',
                'Cracker Man',
                'Where the River Goes'
              ]
            },
            {
                id: 6,
                artist: 'Alice in Chains',
                album: 'Dirt',
                cover: 'images/alice.jpeg',
                tracklist: [
                'Them Bones',
                'Dam the River',
                'Rain Where I Die',
                'Down in a Hole',
                'Stick Man',
                'Rooster',
                'Junkhead',
                'Dirt',
                'God Smack',
                'Iron Gland',
                'Hate to Feel',
                'Angry Chair',
                'Would?'
              ]
            },
            {
                id: 7,
                artist: 'Pearl Jam',
                album: 'Ten',
                cover: './images/pearl.jpeg',
                tracklist: [
                'Once',
                'Evenflow',
                'Alive',
                'Why Go',
                'Black',
                'Jeremy',
                'Oceans',
                'Pouch',
                'Garden',
                'Deep',
                'Release'
              ]
            },
            {
                id: 8,
                artist: 'Radio Head',
                album: 'OK Computer',
                cover: './images/radiohead.jpeg',
                tracklist: [
                'Airbag',
                'Paranoid Andriod',
                'Subterranean Homesick Allen',
                'Exit Music (For a Film)',
                'Let Down',
                'Karma Police',
                'Fitter Happier',
                'Electioneering',
                'Climbing Up the Walls',
                'No Surprises',
                'Lucky',
                'The Tourist'
              ]
            },
            {
                id: 9,
                artist: 'Smashing Pumpkins',
                album: 'Mellon Collie and the Infinite Sadness',
                cover: './images/pumpkins.jpeg',
                tracklist: [
                'Mellon Collie and the Infinite Sadness',
                'Tonight, Tonight',
                'Jellybelly',
                'Zero',
                'Here is No Why',
                'Bullet With Butterfly Wings',
                'To Forgive',
                'Fuck You (and an Ode to No One)',
                'Love',
                'Cupid de Locke',
                'Galapogos',
                'Muzzle',
                'Porcellina of the Vast Oceans',
                'Take Me Down',
                'Where Boys Fear to Tread',
                'Bodies',
                'Thirty Three',
                '1979',
                'Tales of the Scorched Earth',
                'Thru the Eyes of a Ruby',
                'Stumbline',
                'X.Y.U.',
                'We Only Come Out At Night',
                'Beautiful',
                'Lily (My One and Only)',
                'By Starlight',
                'Farewell and Goodnight'
              ]
            },
            {
                id: 10,
                artist: 'Green Day',
                album: 'Dookie',
                cover: './images/green.jpeg',
                tracklist: [
                'Burnout',
                'Having a Blast',
                'Chump',
                'Longview',
                'Welcome to Paradise',
                'Pullng Teeth',
                'Basket Case',
                'She',
                'Sassafras Roots',
                'When I Come Around',
                'Coming Clean',
                'Enemius Sleepus',
                'In The End',
                'F.O.D / All by Myself'
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