//3. Using Spread operator
//The code can be simplified using the array spread syntax since the push() method can accept multiple parameters. Using the Spread syntax, you can expand the array expression inside the push() method, which expects zero or more arguments.

var first = [1, 2, 3];
var second = [4, 5];
 
first.push(...second);
console.log(first);
 
/*
    Output: [ 1, 2, 3, 4, 5 ]
*/
