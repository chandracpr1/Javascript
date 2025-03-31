console.log(Date);

let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log("jspon String = ", myDate.toJSON());

console.log(`local string => ${myDate.toLocaleString()} and 
lcaldate string = ${myDate.toLocaleDateString()}
Localtime string = ${myDate.toTimeString()}`);

console.log(`Get time method => ${myDate.getTime()}`);

let createdDate = new Date(2025, 0, 23);
console.log(createdDate.toDateString());

let createdDate1 = new Date(2025, 0, 23, 15, 3, 12);
console.log(createdDate1.toLocaleString());

let createdDate2 = new Date("12-30-2025");// MM-DD-YYYY
console.log(createdDate2.toLocaleString());

// Timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);// in millisecond
console.log(createdDate.getTime()); // in millisecond for comparision .


// comparision in seconds 
console.log(Math.floor(Date.now() / 1000));


//getMonth +1 (0 indexed ), getDay()

console.log(myTimeStamp.toLocaleString());