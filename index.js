// Load in the main postcss module
var postcss = require( 'postcss' );

// Wrapper
module.exports = postcss.plugin( 'postcss-table-of-contents', function () {
    return function ( css ) {

        // Variable for match counting
        var i = [ ];

        // Traverses the container’s descendant nodes
        css.walkComments( function ( comment ) {

            // Get all comments as string
            var String = comment.toString();

            // Replace pattern with one ore more charakters
            var StringMatchTmp = String.replace( /(\S+)\)/, '#)' );

            // Replace # with increment number
            var StringMatch = StringMatchTmp.replace( '#)', function ( m, p1 ) {
                i[p1] = ( i[p1] || 0 ) + 1;
                return i[p1].toString() + ')';
            } );

            // Replace all comments with our new string
            comment.replaceWith( StringMatch );

        } );

    };
} );
