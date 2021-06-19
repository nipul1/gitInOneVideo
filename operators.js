'use strict'
// unary operators
//+ converts an operand into a number 
// let a = 10;
// a = +a;
// console.log(a);
// a = -a;
// console.log(a);
// let b = '10';
// console.log(typeof (b));
// b = +b;
// console.log(typeof (b));
// console.log(+b);
// let c = '-10';
// console.log(c);
// let f = false;
// let t = true;
// console.log(+f);
// console.log(+t);
// console.log(-f);
// console.log(-t);
// console.log(typeof (-f), typeof (+f));
// if ((+f) == (    -f))
//     console.log("happy flow")

// let prod = {
//     a: 100,
//     b: 200,
//     valueOf: function () {
//         return 60;
//     },
//     toString: function () {
//         return "toString of Prod "
//     }
// }
// console.log(prod++);
// console.log(++prod);
// console.log(prod);
// //in above method valueOf method is used to evaluate the value of object before applying 
// // prefix increment/ prefix decrement to the object;
// console.log(prod);
// console.log(typeof (prod));
// // the prod object is now a number

//ASSIGNMENT OPERATOR 
// assignment operators are almost same as normal languages 
// the only different operator is <<= and <<<= the triple sign is right shift without 
// sign preservation 

function foo(bar) {
    bar = typeof (bar) !== 'undefined' ? 10 : 100;
    console.log(bar);
}
foo(19);