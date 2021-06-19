/**
 * array length is a property of Array object, which is a 32 bit unsigned integer
 * depending upon the array (dense or sparse (in js blanks are allowed in array) )
 */

arr = [1, 2, 3, 4];
console.log(arr.length);

arr1 = [1, 2, , 3, 4];
console.log(arr1.length);

/**
 * since array  length is a property instead of  a method of array object
 * it can be used to manipulate the array. 
 * if set with value lesser then the actual size of array, it can reduce the array size, 
 * and similary it can make an array sparse array also. 
 */

let fruits = [
    "apple", "mango", "banana"
]
console.log(fruits);
fruits.length = 2;
console.log(fruits);
fruits.length = 5;
console.log(fruits);
