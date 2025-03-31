const arr1 = [0, 2, 3, 6, 2];
console.log(arr1);

const arr2 = new Array(1, 5, 8, "chandra");
console.log(arr2);

//arr methods
arr2.push("prakash");
arr2.push("rai");
console.log(arr2.pop());

arr2.unshift(9);

console.log(arr2.shift());

console.log(arr2.includes(11));
console.log(arr2.indexOf(11));

console.log(arr2.includes(1));
console.log(arr2.indexOf(5));

const arr3 = arr2.join();

console.log(arr3, " ", typeof arr3);

console.log(arr2);

console.log("original array before slice and splice ", arr1);
const abc1 = arr1.slice(1, 3);
console.log("Slice arr1.slice(1 , 3) => ", abc1);
console.log("original array after slice ", arr1);


const abc2 = arr1.splice(1, 3);
console.log("splice  arr1.splice(1 , 3) => ", abc2);
console.log("original array after splice ", arr1);

// The slice method doesn't includes till the right range and also doesn't changes the original array , while the splice method includes the right range and also removes elements from the original array .

console.clear();

const marvel_heros = ["thor ", "ironman", "spiderman"];
const dc_heros = ["Superman", "Batman", "Flash"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);

let all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

let all_new_heros = [...marvel_heros, ...dc_heros];

console.log(all_new_heros);

const arr4 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const arr5 = arr4.flat(Infinity);// how much nested , can use 1 2 3 or upto infinity
console.log(arr5);

console.clear();

console.log(Array.isArray("chandra"));

console.log(Array.from("chandra"));

console.log(Array.from({ name: "chandra" }));// empty as not specified array of keys or values .

let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3));