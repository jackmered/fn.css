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