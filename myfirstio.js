var fs = require('fs');
var filePath = process.argv[2];

var fileContents = fs.readFileSync(filePath);
var lines = fileContents.toString().split('\n').length - 1;

console.log(lines);
