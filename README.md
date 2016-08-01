# PostCSS Table Of Contents [![Build Status][ci-img]][ci]

[PostCSS] plugin automatically create a table of contents from certain comments inside CSS file.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/HeikoMamerow/postcss-table-of-contents.svg
[ci]:      https://travis-ci.org/HeikoMamerow/postcss-table-of-contents

## Howto

Write the placeholder #) in your comments. This plugin will replace the placeholder with increment number.

## Before / After

```css
/* #) Normalize */
some rules...

/* #) Typography */
some rules...

/* #) Elements */
some rules...
```

```css
/* 1) Normalize */
some rules...

/* 2) Typography */
some rules...

/* 3) Elements */
some rules...
```

## Usage: CLI
Use with [postcss-cli]:

```js
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
--------------------------------------------------------------*/

/* 1) Normalize */
some rules...

/* 2) Typography */
some rules...

/* 3) Elements */
some rules...
```