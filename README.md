# PostCSS Table Of Contents [![Build Status][ci-img]][ci]

[PostCSS] plugin automatically create a table of contents from certain comments in a CSS file..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/HeikoMamerow/postcss-table-of-contents.svg
[ci]:      https://travis-ci.org/HeikoMamerow/postcss-table-of-contents

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-table-of-contents') ])
```

See [PostCSS] docs for examples for your environment.
