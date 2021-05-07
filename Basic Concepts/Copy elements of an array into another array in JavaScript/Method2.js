//2. Using Function.prototype.apply() function
//Alternatively, the apply() method can be used with the push() method in the following manner. The apply() method simplify calls the push() method for elements of the specified array.
var first = [1, 2, 3];
var second = [4, 5];
 
Array.prototype.push.apply(first, second);
console.log(first);
 
/*
    Output: [ 1, 2, 3, 4, 5 ]
*/
