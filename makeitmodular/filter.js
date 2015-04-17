var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb) {
    var filtered = [];

    fs.readdir(dir, function(err, data) {
        if (err) return cb(err);

        data.forEach(function(file) {
            if (path.extname(file).indexOf(ext) > 0) {
                filtered.push(file);
            }
        });

        cb(null, filtered);
    });
};
