/**
 * difference between parameters and arguments
 * parameters refer to the declaration time and argument refer to calling time
 * by default js method return undefined object [with no explicit return statement]
 */

function functionName(parameter1) {
    console.log("Hello, there");
}
functionName("random");

/**
 * Arguments object, in js, the argument list passed to a function is like an array
 */
function demoArgumentsObject() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
demoArgumentsObject("a", "b");
demoArgumentsObject("a", "b", "c");

/**
 * function hoisting, in js we can call a function before declaration,
 * because js engine automatically moves all the function declarations to the top of the
 * scope.
 */
