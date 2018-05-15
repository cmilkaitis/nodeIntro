var http = require('http');
/*
var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hey ninjazzz'); 
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');

*/

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk recieved.');
    myWriteStream.write(chunk);
   
});

