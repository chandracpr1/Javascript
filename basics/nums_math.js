const score = 400;
const balance = new Number(100)

console.log(typeof score.toString());
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

let num1 = 23.8966;
let num2 = 123.8966;
let num3 = 1123.8966;
let num4 = 123.8966;

console.log(num1.toPrecision(3));
console.log(num2.toPrecision(3));
console.log(num3.toPrecision(3));
console.log(num4.toPrecision(4));

const num5 = 10000000;
console.log(num5.toLocaleString());
console.log(num5.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/*Maths */

console.log(Math);

console.log(Math.abs(-40));

console.log(Math.round(4.675));//ceil , floor also available

console.log(Math.max(1, 2, 3, 5, 8));

console.log(Math.random());

console.log(((Math.random() * 10) + 1))

const left = 10, right = 20;//(included )

console.log(Math.floor(Math.random() * (right - left + 1)) + left);

