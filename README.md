# PostCSS Table Of Contents [![Build Status][ci-img]][ci]

[PostCSS] plugin automatically create a table of contents from certain comments inside CSS file.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/HeikoMamerow/postcss-table-of-contents.svg
[ci]:      https://travis-ci.org/HeikoMamerow/postcss-table-of-contents

## WTF
### Before
Write the numbering placeholder **#)** in your comments.
```css
/* #) Navigation */
some rules...

/* ##) Links */
some rules...

/* ##) Menus */
some rules...

/* #) Accessibility */
some rules...
```

### After
This plugin will replace the placeholder with increment number.
```css
/* 1) Navigation */
some rules...

/* 1.1) Links */
some rules...

/* 1.2) Menus */
some rules...

/* 2) Accessibility */
some rules...
```

## Features
* Automated numbering
* Supports indexing up to three levels

## Please note
* Write your heading in regular css comment syntax.
* Write your heading in one single line.
* The numbering placeholder **#)** must come first in your heading.

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
