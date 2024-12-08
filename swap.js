let a = 5;
let b = 3;

//using a 3rd variable
let temp = a;
a = b;
b = temp;
console.log(a,b);

//using array destructuring
[a, b] = [b, a];
console.log(a,b);

//using bitwise operators
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a,b);

//using arithmetic operators
a = a + b;
b = a - b;
a = a - b;

console.log(a,b);