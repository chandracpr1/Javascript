/* Singleton 
//let ob = Object.create();

//object Literals
*/

let sym = Symbol("key123456");
const obj = {
    name: "chandra",
    "full name": "Chandra Prakash Rai",
    age: 22,
    location: "Noida",
    email: 'abc@example.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'],
    [sym]: "abc@12345",
};

console.log(obj);

// using above syntax we can create symbol and use that as a key (instead of strings)

console.log(obj.name);
console.log(obj["full name"]);
console.log(obj["lastLoginDays"]);

console.log(obj.sym); // undefined , cannot be accessed this way symbol 
console.log(obj[sym]);

obj.email = "Chandra@kloud.com";
console.log(obj); //email changed
//Object.freeze(obj);
obj.email = "chandra@microsoft.com";
console.log(obj); // email did not change

console.clear();

obj.greeting = function () {
    console.log("Hello world");
}
obj.greeting2 = function () {
    console.log(`Hello user with name = ${this["full name"]} and age = ${this.age}`);
}

console.log(obj.greeting());
obj.greeting2();

console.clear();

const obj1 = new Object(); // singleton object 
obj1.id = "123abc";
obj1.name = " Bhaiya rai ";
console.log(obj1);

const obj2 = {
    email: "Something@example.com",
    fullname: {
        userFullName: {
            firstName: "Chandra",
            middleName: "Prakash",
            lastName: "Rai",
        }
    }
}

console.log(obj2?.fullname?.userFullName?.firstName);

const obj3 = { 1: "a", 2: "b" };
const obj4 = { 3: "a", 4: "b" };

//const obj5 = Object.assign({}, obj3, obj4);
Object.assign(obj3, obj4); //(target , ...sources);
console.log(obj3);

const obj5 = { ...obj3, ...obj4 };
console.log(obj5);

console.clear();

const users = [
    {
        id: 1,
        email: "abc@example.com",
    },
    {
        id: 2,
        email: "abc@example.com",
    },
    {
        id: 3,
        email: "abc@example.com",
    },
    {
        id: 4,
        email: "abc@example.com",
    }

]

console.log(users[0].email);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty('namesdas'));

console.clear();

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Chandra",
}

const { courseInstructor: instructor } = course;

//console.log(courseInstructor);
console.log(instructor);

