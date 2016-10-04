// Load in the main postcss module
var postcss = require('postcss');

// Wrapper
module.exports = postcss.plugin('postcss-table-of-contents', function () {
    return function (css) {

        var i = []; // Variable for match counting
        var ii = []; // Variable for match counting
        var iii = []; // Variable for match counting

        // This must be revised:
        // Placeholder for table of contents: (#)
        // var tocPlaceholder = /\(#\)/;

        // Function for replace placeholders below
        function replacer(match, p1, p3, p5) {
            if (match === '#)') {
                // Replace for first level
                i[p1] = ( i[p1] || 0 ) + 1;
                return i[p1] + ')';
            } else if (match === '##)') {
                // Replace for second level
                i[p1] = i[p1] || 0;
                ii[p3] = ( ii[p3] || 0 ) + 1;
                return i[p1] + '.' + ii[p3] + ')';
            } else {
                // Replace for third level
                i[p1] = i[p1] || 0;
                ii[p3] = ii[p3] || 0;
                iii[p5] = ( iii[p5] || 0 ) + 1;
                return i[p1] + '.' + ii[p3] + '.' + iii[p5] + ')';
            }
        }

        // Traverses the container’s descendant nodes
        css.walkComments(function (comment) {

            var String = comment.toString(); // Get comments as string

            // Check, if table of contents placeholder is in string
            // This must be revised:
            // var isInString = tocPlaceholder.test(String);
            // if (isInString === false) {

            // Reset old numberings with numbering placeholder #)
            // This must be revised:
            // var StringMatchTmp = String.replace(/(\S)\)/, '#');

            // Replace numbering placeholders with increment number
            var StringMatch = String.replace(/(#)(\)?)(#?)(\)?)(#?\)?)/,
                replacer);

            // Replace all comments with our new string
            comment.replaceWith(StringMatch);

            // } else {
            // Get array of #) comments

            // Cum back later ;-)
            // }
        });
    };
});
