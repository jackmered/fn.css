# fn.css
## Functional shorthand CSS utilities

### What is fn.css?

`fn.css` is a collection of small abbreviated CSS class names written in PostCSS. The class names are composed in such a way to make their meaning obvious, avoiding the need to learn *another* CSS framework.

For example:

`.db { display: block }`

`.mt1-5 { margin-top: 1.5rem }`

`.fs1-2 { font-size: 1.2rem }`

### Installation

`npm i fn.css`

### Usage

To use `fn.css` as it comes just add it to the bottom of your styles.

`@import 'fn.css'`

### Customizing

A selection of variables can be changed in `fn.css/src/_variables.css` including media query sizes and spacing values.

### Acknowledgments

`fn.css` is heavily inspired by [gr8](https://github.com/jongacnik/gr8) by [jongacnik](https://github.com/jongacnik) which was initially used to build the project.
