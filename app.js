var http = require('http');

var server = http.createServer(function(request, response){
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hey ninjazzz'); 
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');


//Lesson 13 - Streams and Buffers

/*

The example given of streaming a movie shows the concept of 
streams (the path data take to get to the user) and buffers (the chuncks or slices of 
accumlating data coming from the larger source) shows how breaking up data and 
moving it in pieces is a preformance enhancer, over moving a file all at once

*/