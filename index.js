var postcss = require( 'postcss' );
    module.exports = postcss.plugin( 'postcss-table-of-contents', function ( opts ) {
    opts = opts || { };
        // Work with options here

        return function ( css, result ) {

        // I) Get all texts in comments with this pattern: #) [some-comment-text]
        // e.g.: #) Typography
        //
        // Beware:
        // [some-comment-text] must be in one line!
        // If you have a multline comment, you will only get the first line.



        css.walkComments( function {
        var comments = [ ];
        } );
//
//
//        str.match( /\w(#\)(.*))/g );
//        comments.push( '' );

        };
        } );
