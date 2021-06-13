let a = 20;
let b = 30;
function divide(a, b) {
    if (b == 0) {
        throw 'Division by zero can not be done'
    }
    return a / b;
}
console.log(divide(100, 10));