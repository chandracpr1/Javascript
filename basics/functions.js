function sayMyName() {
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");

}
sayMyName()

function addnum(number1, number2) {
    console.log(number1 + number2);
    return number1 + number2;
}

addnum("chandra ", "Prakash");

function Loginmessage(username) {
    if (!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} loggen in successfully`;
}

console.log(Loginmessage(""));//null or undefined also results in false 

function Loginmessage1(username = "frodo") {//default parameter
    if (!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} loggen in successfully`;
}

console.log(Loginmessage1());

console.clear();

function calculateCartPrice(val1, val2, ...num) //rest operator
{
    console.log("val1", val1);
    console.log("val2", val2);
    return num;
}

console.log(calculateCartPrice(200, 400, 600, 1000, 2000));

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices} `);
}

const user = {
    username: "chandra",
    prices: 199,
}
handleObject(user);
handleObject({
    username: "xyz",
    prices: 500,
})

