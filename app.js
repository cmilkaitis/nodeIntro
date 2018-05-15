var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    response.writeHead(200, {'Content-Type': 'text/html'});
    myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');