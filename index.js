window.addEventListener( 'load', function () {
    let xhr = new XMLHttpRequest()

    xhr.addEventListener( 'load', selectFirstThreeAlbums )

    xhr.open( 'GET', 'https://lit-fortress-6467.herokuapp.com/object' )
    xhr.send()
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
    let data = JSON.parse( this.responseText )
    let albumArray = randomNumbersInArray()
    for ( let i = 0; i < albumArray.length; i++ ) {
        addCoverArt( data.results[ albumArray[ i ] ].cover_art )
    }
}

function addCoverArt( argSrc ) {
    // let node = document.createElement( 'img' )
    // node.src = './images/' + argSrc
    // document.querySelector( '.selectList' ).appendChild( node )
    $( '.selectList' ).append( `<img class='coverArt' src='./images/${argSrc}'>` )
}