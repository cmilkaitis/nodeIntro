//function statement
function sayHi(){
    console.log('hi');
}

sayHi();

//function expression
var sayBye = function(){
    console.log("Bye")
}

sayBye();


//passing a function as a variable
function callFunction(func){
    func();
}

callFunction(sayBye);

var time = 0; 

setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000);