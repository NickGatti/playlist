let data;

window.addEventListener( 'load', function () {
    let xhr = new XMLHttpRequest()

    xhr.addEventListener( 'load', selectFirstThreeAlbums )

    xhr.open( 'GET', 'https://lit-fortress-6467.herokuapp.com/object' )
    xhr.send()

    $( '#chooseTracks' ).click( chooseTracks )
} )

function randomNumber() {
    return Math.floor( Math.random() * 5 )
}

function randomNumbersInArray() {
    let output = []
    let generator
    let pass

    while ( output.length != 3 ) {
        generator = randomNumber()
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
    let albumArray = randomNumbersInArray()
    for ( let i = 0; i < albumArray.length; i++ ) {
        addCoverArt( data.results[ albumArray[ i ] ].cover_art )
    }
}

function addCoverArt( argSrc ) {
    $( '.selectList' ).append( `<img class='coverArt' src='./images/${argSrc}'>` )
}

function chooseTracks() {
    $( 'main' ).empty()
    $( 'header' ).append( '<div class="copy">Click on an album to add its tracks</div>' )
    $( 'main' ).append( "<div class='mainTrackList'></div><div class='trackListBin'></div><button id='clearTracks' class='buttonStyle' type='button' name='button'>Clear Tracks</button><button id='submitBin' class='buttonStyle' type='button' name='button'>Submit Bin</button>" )
    for ( let i = 0; i < data.results.length; i++ ) {
        $( '.mainTrackList' ).append( `<img src='images/${data.results[i].cover_art}' class='trackListTile' id='${data.results[ i ].title}' >` )
    }
    $( 'main' ).css( 'padding', '4em' )
    $( 'button' ).css( 'margin-left', '3em' )
    $( 'main' ).css( 'min-height', '86vh' )
    $( '.trackListTile' ).click( function () {
        $( '.trackListTile' ).css( 'border', 'none' )
        $( this ).css( 'border', '3px solid skyblue' )
        $( '.trackListBin' ).append( `<p>${this.id}</p>` )
    } )
}