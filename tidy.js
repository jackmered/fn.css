/**
 * tidy.js
 *
 * Simple find and replace, used to remove invalid css variables
 * Need to move into own postcss plugin or cli tool
 */

const fs = require('fs');
const stylesheet = './dist/fn.css';

try {
  let data = fs.readFileSync(stylesheet, 'utf8');
  data = data.replace('\n  --fn-breakpoints: (xs, sm, md, lg, xl);', '');
  data = data.replace(
    '\n  --fn-colors: (primary, secondary, success, danger, warning, info, light, dark, white);',
    ''
  );

  try {
    fs.writeFileSync(stylesheet, data);
  } catch (e) {
    console.log('Error:', e.stack);
  }
} catch (e) {
  console.log('Error:', e.stack);
}
