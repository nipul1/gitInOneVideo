/**
 * js functions essentially behave like an object, they can be stored, passed, returned from
 * other functions. 
 */
let add = function () {
    var ans = 0;
    for (var i = 0; i < arguments.length; i++) {
        ans += arguments[i];
    }
    return ans;
}
/**
 * assigning a function with another function
 */
let calculateSum = add;
console.log(calculateSum(12, 13, 15));

/**
 * passing function as an argument 
 */

let average = function (a, b, summationFunction) {
    return summationFunction(a, b) / 2;
}

console.log(average(12, 13, add));

/**
 * creating a single  comparator for mutliple situation using the power  
 * to return functions from js 
 */

mycomparator = function (comparisonParameter, a, b) {
    console.log(comparisonParameter);
    if (comparisonParameter == "name") {
        return function (a, b) {
            a.name < b.name;
        }
    } else {
        return function (a, b) {
            a.price < b.price;
        }
    }
}

itemList = [
    { name: "samsung", price: "1000" },
    { name: "iPhone", price: "10000" },
    { name: "mi", price: "100" }
]

console.log(itemList);
console.log(itemList.sort(mycomparator("name")));
console.log(itemList.sort(mycomparator("price")));

console.log(mycomparator("name"));
console.log(mycomparator("price"));
ans = itemList.sort(mycomparator("price"));
console.log(ans);

/**
 * the above code is not working as per expectation.
 */
