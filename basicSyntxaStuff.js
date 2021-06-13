// // js is loosely typed
// var message = "msg";
// console.log(message);
// message = 100;
// console.log(message);


// difference between undefined and undeclared 
// var message;
// console.log(message); // this will be undefined 
// console.log(counter) //  this will give the error 

//global variable and local variable and variable shadowing 
// var shadow = 990;
// var global = 99;
// function functionName() {
//     var local = 100;
//     var shadow = 1000;
//     console.log(shadow)
//     console.log(local);
//     console.log(global);
// }
// functionName();
// // console.log(local);

// NON STRICT MODE of js (variable not declared will be automatically declared in global scope)

// function fun() {
//     msg = "hi";
//     console.log(msg);
// }
// fun();
// console.log(msg);
// here msg will be created only if fun is called before referencing, otherwise it will
// throw  an error;

// STRICT MODE OF js

"use strict";
function fun() {
    msg = "hi"
    console.log(msg);
}
fun();
console.log(msg);
// the above code will give an error because we are using strict mode of js