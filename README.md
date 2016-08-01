# PostCSS Table Of Contents [![Build Status][ci-img]][ci]

[PostCSS] plugin automatically create a table of contents from certain comments inside CSS file.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/HeikoMamerow/postcss-table-of-contents.svg
[ci]:      https://travis-ci.org/HeikoMamerow/postcss-table-of-contents

## Howto
### Before
Write the placeholder **#)** in your comments.
```css
/* #) Normalize */
some rules...

/* #) Typography */
some rules...

/* #) Elements */
some rules...
```
### After
This plugin will replace the placeholder with increment number.
```css
/* 1) Normalize */
some rules...

/* 2) Typography */
some rules...

/* 3) Elements */
some rules...
```

## Usage: npm run / CLI
Use with [postcss-cli](https://github.com/postcss/postcss-cli).

```sh
postcss --use postcss-table-of-contents
```
See [PostCSS] docs for examples for your environment.

## Next steps
In the next version it will make an table of content in the css head - like this:

```css
/*------------------------------------------------------------------------------
TABLE OF CONTENTS:
1) Normalize
2) Typography
3) Elements
------------------------------------------------------------------------------*/


/* 1) Normalize */
some rules...

/* 2) Typography */
some rules...

/* 3) Elements */
some rules...
```