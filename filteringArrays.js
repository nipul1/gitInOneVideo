/**
 * we can add our custom fitler function to filter out 
 * certain kind of elements from the array
 * say we want all cities  with more then 2 millipn people
 */

let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

let bigCities = cities.filter(function (city) {
    return city.population > 2000000;
});

console.log(bigCities);
/**
 * Es-6 version of above code is even more simpler 
 */
let smallCity = cities.filter(city => city.population < 2000000);
console.log(smallCity);

/**
 * we pass a callback function to the filter method of Array class
 * and this callback function should return boolean values, if true then that
 * array element for which callback function was called will be added to the returning
 * object. There are some other optional parameters of callback function
 * which are the index of current element, and the array being traversed.
 */

