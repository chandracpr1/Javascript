console.log(Date);

let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log("jspon String = ", myDate.toJSON());

console.log(`local string => ${myDate.toLocaleString()} and 
lcaldate string = ${myDate.toLocaleDateString()}
Localtime string = ${myDate.toTimeString()}`);

console.log(`Get time method => ${myDate.getTime()}`);