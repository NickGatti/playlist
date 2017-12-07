window.addEventListener( 'load', function () {
    function randomNumber() {
        return Math.floor( Math.random() * 5 )
    }

    let displayAlbums = []
    let generator
    let pass

    while ( displayAlbums.length != 3 ) {
        generator = randomNumber()
        pass = true
        for ( let i = 0; i < displayAlbums.length; i++ ) {
            if ( generator === displayAlbums[ i ] ) {
                pass = false
            }
        }
        if ( pass ) displayAlbums.push( generator )
    }

    let xhr = new XMLHttpRequest()

    xhr.addEventListener( 'load', selectFirstThreeAlbums )

    xhr.open( 'GET', 'https://lit-fortress-6467.herokuapp.com/object' )
    xhr.send()



} )

function selectFirstThreeAlbums() {
    console.log( JSON.parse( this.responseText ) );
}