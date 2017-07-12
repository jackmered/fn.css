var fs = require('fs');
var gr8 = require('gr8');
var csso = require('csso');

var css = gr8({
  spacing: [0, 0.25, 0.5, 1, 2, 3, 4],
	responsive: true,
	attribute: false,
	max: false,
	breakpoints: {
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '576px'
  }
});

// Border
css.add({
  prefix: 'bd',
  declaration: '\
    border-style:solid;\
    border-width:1px\
  '
});

// Border top
css.add({
  prefix: 'bdt',
  declaration: '\
    border-top-style:solid;\
    border-top-width:1px\
  '
});

// Border right
css.add({
  prefix: 'bdr',
  declaration: '\
    border-right-style:solid;\
    border-right-width:1px\
  '
});

// Border bottom
css.add({
  prefix: 'bdb',
  declaration: '\
    border-bottom-style:solid;\
    border-bottom-width:1px\
  '
});

// Border left
css.add({
  prefix: 'bdl',
  declaration: '\
    border-left-style:solid;\
    border-left-width:1px\
  '
});

// Border widths
css.add({
  option: 'spacing',
  prefix: 'bdw',
  prop: 'border-width',
  unit: true,
  transform: function (val) {
    return val / 4
  }
});

// Border radius
css.add({
  prefix: 'bdrd',
  prop: 'border-radius',
  unit: true,
  vals: [
    '0.125',
    '0.25',
    '0.5',
    '0.75',
    '1'
  ]
});

css.add({
  prefix: 'bdrd',
  prop: 'border-radius',
  unit: '%',
  vals: [
    '100'
  ]
});

// Margin auto
css.add({
  prefix: 'mr',
  prop: 'margin-right',
  unit: false,
  vals: [
    'auto'
  ]
});

css.add({
  prefix: 'ml',
  prop: 'margin-left',
  unit: false,
  vals: [
    'auto'
  ]
});

// Screen reader
css.add({
  prefix: 'sr',
  declaration: '\
    position:absolute;\
    width:1px;\
    height:1px;\
    padding:0;\
    overflow:hidden;\
    clip: rect(0, 0, 0, 0);\
    white-space:nowrap;\
    -webkit-clip-path:inset(50%);\
    clip-path:inset(50%);\
    border:0\
  '
});

// Screen focus
css.add({
  prefix: 'srf:active,.srf:focus',
  declaration: '\
    position:static;\
    width:auto;\
    height:auto;\
    overflow:visible;\
    overflow: hidden;\
    clip:auto;\
    white-space:normal;\
    -webkit-clip-path:none;\
    clip-path:none\
  '
});

css.remove('dev');

var cssString = css.toString();
var minifiedCss = csso.minify(cssString).css;

var writeFile = function(fileName, content) {
  fs.writeFile('./dist/' + fileName, content, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(fileName + ' written successfully.');
  });
};

writeFile('fn.css', cssString);
writeFile('fn.min.css', minifiedCss);