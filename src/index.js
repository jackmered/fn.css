const gr8 = require('gr8');
const csso = require('csso');
const css = gr8(require('./config'));

require('./rules').map(rule => { for (key in rule) css.add(rule[key]) });

const cssString = css.toString();
const cssStringMinified = csso.minify(cssString).css;

require('./save').write([
	{ 
		name: 'fn.css',
		content: cssString
	},
	{ 
		name: 'fn.min.css',
		content: cssStringMinified
	},
]);