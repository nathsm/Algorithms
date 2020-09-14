// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

let a = 3;
let b = 4;
console.log('Cons is: ' + cons(a,b));
console.log('Car is: ' + car(cons(a,b)));
console.log('Cdr is: ' + cdr(cons(a,b)));

function cons(a,b) {
    let pair = [a,b];
    return pair;
}

function car(arr) {
    return arr[0];
}

function cdr(arr) {
    return arr[1];
}