var postcss = require('postcss');

module.exports = postcss.plugin('postcss-table-of-contents', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here

    };
});
