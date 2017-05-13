var fs = require('fs');
var gr8 = require('gr8');
var csso = require('csso');

var css = gr8({
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