var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
    var chars = 0;
    var text = "";

    response.setEncoding('utf8');

    response.on("data", function(data) {
        chars += data.length;
        text += data;
    });

    response.on("end", function(data) {
        console.log(chars);
        console.log(text);
    });
});
