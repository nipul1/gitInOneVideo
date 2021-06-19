/**
 * the below code is the way to create js array using new Array() constructor
 */

let scores = new Array();
console.log(scores);

let scores2 = new Array(10);
console.log(scores2);

let scores3 = new Array(10, 20, 30);
console.log(scores3);

let scores4 = new Array(3, 1, 2, 3);
console.log(scores4);

/**
 * the following code is used to create array traditionally
 */

let arr = ['red', 'blue'];
console.log(arr);

let arr2 = []
console.log(arr2);

/**
 * traversing a js array
 */
let fruits = [
    "apple",
    "mango",
    "banana",
    "pomegrenate"
]

for (var i = 0; i <= fruits.length; i++) {
    console.log("eat " + fruits[i]);
}

/**
 * Adding element to an array at end
 */

fruits.push("jamun");
console.log(fruits[fruits.length - 1]);

/**
 * adding element to an array at begining use unshift() method 
 */

fruits.unshift("kiwi");
console.log(fruits[0]);

/**
 * removing the last element from a list (poping like a stack) pop() method
 */

console.log(fruits[fruits.length - 1]);
console.log(fruits.pop())
console.log(fruits[fruits.length - 1]);

/**
 * removing first element from js array use shift() method 
 */

console.log(fruits[0]);
console.log(fruits.shift());
console.log(fruits[0]);

/**
 * finding index of an element (indexOf() method)
 */

console.log(fruits.indexOf("mango"));

/**
 * to check some object is an array or not use isArray() method of Array class
 */

console.log(Array.isArray(fruits));