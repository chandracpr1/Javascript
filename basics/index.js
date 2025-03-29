console.log('chandra');

let name = "33";
let age = 22;
let isLoggedin = true;
console.table([name, age, isLoggedin]);
console.log(typeof name);
console.log(Number(name));
// 7 types primitive based on storage and call by value , String , Number , Boolean , null , undefined , BigInt , Symbol 

// non primitive call by reference Arrays , objects , functions .
const bignumber = 24214242342342n;
//Stack and heap two memeories (stack store primitive and heap stores not primitive returns reference )

let str1 = "chandra";
let str2 = str1;

str2 = "surya";
console.log("str1 =>", str1);
console.log("str2=>", str2);

let user1 = {
    email: "chandra@abc.com",
    age: 18,
}
//The reference of object is stored in heap and passed to variable 
let user2 = user1;
user2.email = "surya@abc.com";
console.log('User1=>', user1);
console.log('user2=>', user2);


//Strings 


