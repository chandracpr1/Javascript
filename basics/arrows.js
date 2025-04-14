const user = {
    username: "chandra",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
    }
}

user.welcomeMessage();
user.username = "prakash";
user.welcomeMessage();

console.log(this);

function func1() {
    console.log(this);
}
func1();
func2();// using this syntax of function , function can be called before initailization
function func2() {
    let username = "abc";
    console.log(this.username);
}


const func3 = function () {
    let username = "abc";
    console.log(this.username);
}
func3();

const func4 = () => {
    let username = "abc";
    console.log(this.username);
}
func4();
console.clear();

// const addTwo = (num1, num2) => {
//     return num1 + num2; //explicit return
// }
//const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => (num1 + num2);
//implicit return syntax , when only one line is there


console.log(addTwo(3, 5));

const addTwo1 = (num1, num2) => ({ user: "jfdskjflskd" });
//implicit return syntax , when only one line is there


console.log(addTwo1(3, 5));
