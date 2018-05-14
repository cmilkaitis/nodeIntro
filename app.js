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