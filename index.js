// Load in the main postcss module
var postcss = require( 'postcss' );

// Wrapper
module.exports = postcss.plugin( 'postcss-table-of-contents', function () {
	return function ( css ) {

		var i = []; // Variable for match counting
		var tocPlaceholder = /\(#\)/; // Placeholder for table of contents: (#)
		var noPlaceholder = '#)'; // Placeholder for numberings: #)

		// Traverses the container’s descendant nodes
		css.walkComments( function ( comment ) {

			var String = comment.toString(); // Get comments as string

			// Check, if table of contents placholder is in string
			var isInString = tocPlaceholder.test( String );
			if ( isInString === false ) {

				// Reset old numberings with numbering placholder #)
				var StringMatchTmp = String.replace( /(\S+)\)/, noPlaceholder );

				// Replace numbering placeholders with increment number
				var StringMatch = StringMatchTmp.replace( noPlaceholder,
					function ( m, p1 ) {
						i[ p1 ] = ( i[ p1 ] || 0 ) + 1;
						return i[ p1 ].toString() + ')';
					} );

				// Replace all comments with our new string
				comment.replaceWith( StringMatch );

			} else {
				// Get array of #) comments

				// Cum back later ;-)
			}
		} );
	};
} );
