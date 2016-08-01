// Load in the main postcss module
var postcss = require( 'postcss' );

// Wrapper
module.exports = postcss.plugin( 'postcss-table-of-contents', function () {
    return function ( css ) {

        // Variable for match counting
        var i = [ ];

        // Traverses the container’s descendant nodes, calling callback for each comment node.
        css.walkComments( function ( comment ) {

            // Get all comments as string
            var comment_string = comment.toString();

            // Replace pattern with one ore more charakters with our standard pattern => #)
            var comment_string_replaced_tmp = comment_string.replace( /(\S+)\)/, "#)" );

            // Replace # with increment number
            var comment_string_replaced = comment_string_replaced_tmp.replace( "#)", function ( m, p1 ) {
                i[p1] = ( i[p1] || 0 ) + 1;
                return i[p1].toString() + ")";
            } );

            // Replace all comments with our new string
            comment.replaceWith( comment_string_replaced );

        } );

    };
} );
