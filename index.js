let data;

window.addEventListener( 'load', function () {
    let xhr = new XMLHttpRequest()

    xhr.addEventListener( 'load', selectFirstThreeAlbums )

    xhr.open( 'GET', 'http://localhost:3000/api' )
    xhr.send()

    $( '#chooseTracks' ).click( chooseTracks )
} )

function randomNumber( maxSize ) {
    return Math.floor( Math.random() * maxSize )
}

function randomNumbersInArray( maxSize ) {
    let output = []
    let generator
    let pass

    while ( output.length != 3 ) {
        generator = randomNumber( maxSize )
        pass = true
        for ( let i = 0; i < output.length; i++ ) {
            if ( generator === output[ i ] ) {
                pass = false
            }
        }
        if ( pass ) output.push( generator )
    }
    return output
}

function selectFirstThreeAlbums() {
    data = JSON.parse( this.responseText )
    let albumArray = randomNumbersInArray( data.results.length )
    for ( let i = 0; i < albumArray.length; i++ ) {
        addCoverArt( data.results[ albumArray[ i ] ].cover )
    }
}

function addCoverArt( argSrc ) {
    $( '.selectList' ).append( `<img class='coverArt' src='${argSrc}'>` )
}

function chooseTracks() {
    $( 'main' ).empty()
    $( 'header' ).append( '<div class="copy">Click on an album to add its tracks</div>' )
    $( 'main' ).append( "<div class='mainTrackList'></div><div class='trackListBin'></div><div class='songListBin'></div><div class='btnDiv'><button id='clearTracks' class='buttonStyle' type='button' name='button'>Clear Tracks</button><button id='submitBin' class='buttonStyle' type='button' name='button'>Submit Bin</button><button id='getSongs' class='buttonStyle' type='button' name='button'>Get Songs</button></div>" )
    for ( let i = 0; i < data.results.length; i++ ) {
        $( '.mainTrackList' ).append( `<img src='${data.results[i].cover}' class='trackListTile' id='${[i]}' >` )
    }
    $( 'main' ).css( 'padding', '4em' )
    $( 'button' ).css( 'margin-left', '3em' )
    $( 'main' ).css( 'min-height', '86vh' )


    let postObj = {}
    let tileClicked
    $( '.trackListTile' ).click( function () {
        tileClicked = this.id
        $( '.trackListTile' ).css( 'border', 'none' )
        $( this ).css( 'border', '3px solid skyblue' )
        $( '.trackListBin' ).append( `<p>${data.results[this.id].artist}: ${data.results[this.id].album}</p>` )
        postObj[ data.results[ this.id ].artist ] = data.results[ this.id ].album
    } )
    $( '#clearTracks' ).click( function () {
        $( '.trackListBin' ).empty()
    } )
    $( '#submitBin' ).click( () => {
        $.post( 'https://lit-fortress-6467.herokuapp.com/post', postObj ).done( function ( data ) {
            $( '.trackListBin' ).empty()
            $( '.trackListBin' ).append( `<p>${data}</p>` )
        } )
    } )
    $( '#getSongs' ).click( () => {
        $( '.songListBin' ).empty()
        for ( let i = 0; i < data.results[ tileClicked ].tracklist.length; i++ ) {
            $( '.songListBin' ).append( `<p>${data.results[ tileClicked ].tracklist[i]}</p>` )
        }
    } )
}