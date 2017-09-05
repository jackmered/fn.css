const fs = require('fs');

const saveFile = (name, content) => {
  fs.writeFile(`./dist/${name}`, content, error => {
    if (error) {
      return console.log(error);
    }
    console.log(`${name} written successfully.`);
  });
};

exports.write = files => {
	files.map(file => saveFile(file.name, file.content))
}