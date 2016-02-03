/**
 * Created by claysissing on 03/02/2016.
 */
( function( legoQuotes ) {
    var btn     = document.getElementById( "btnMore" );
    var quote   = document.getElementById( "quote" );

    function writeQuoteToDom() {
        quote.innerHTML = legoQuotes.getRandomQuote();
    }

    btn.addEventListener( "click", writeQuoteToDom );
    writeQuoteToDom();
} )( legoQuotes );