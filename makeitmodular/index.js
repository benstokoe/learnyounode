var dir = process.argv[2];
var ext = process.argv[3];
var filter = require('./filter');

filter(dir, ext, function(err, data) {
    if (err) throw err;

    data.forEach(function(file) {
        console.log(file);
    });
});
