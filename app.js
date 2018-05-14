var fs = require('fs');

/*
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');
*/

/*
Async creation of a folder called stuff, 
then in the callback read the data from readme 
and write it to a new file inside the folder stuff

fs.mkdir('stuff', function(){
    fs.readFile('readme.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    })
});
*/

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});


