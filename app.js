var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    
    if(request.url === '/home' || request.url === '/'){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else if (request.url === '/contact'){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    } else if (request.url === '/api/ninjas') {
        var ninjas = [{name: 'ryu', age : 29}, {name: 'yoshi', age : 32}];
        response.writeHead(200, {'Content-Type' : 'application/json'});
        response.end(JSON.stringify(ninjas));
    } else {
        response.writeHead(404, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');