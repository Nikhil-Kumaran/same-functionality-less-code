// Reverse a String
const stringReverse = (str) => str.split('').reverse().join('');
const outputStringReversed = stringReverse('Welcome to the session :D');
console.log(outputStringReversed);

// Average of an array
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
const arrayAverage = average([21, 56, 23, 122, 67]);
console.log(arrayAverage);

// Capitalize a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizedOuput = capitalize('javascript one-liners are fun');
console.log(capitalizedOuput);

// Remove duplicates from an array
const removeDuplicates = (arr) => [...new Set(arr)];
const uniqueArray = removeDuplicates([31, 56, 12, 31, 45, 12, 31]);
console.log(uniqueArray);

// Generate a random id
const randomID = Math.random().toString(36).substring(2);
console.log(randomID);

// Generate a randome hex color
const hexColor = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0');
console.log(hexColor());

// Difference between two days
const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const numDays = dayDif(new Date('2020-09-23'), new Date('2020-10-01'));
console.log(numDays);

// Clear All Cookies
const clearCookies = document.cookie
  .split(';')
  .forEach(
    (cookie) =>
      (document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  );

// Ternary
// Long Hand
const x = 20;
let answer;

if (x > 10) {
  answer = 'greater than 10';
} else {
  answer = 'less than 10';
}

// Short Hand
const answer = x > 10 ? 'greater than 10' : 'less than 10';

// Conditional
// Long Hand
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
  let variable2 = variable1;
}

// Short Hand
const variable2 = variable1 || 'new';

// Declare Variables
// Long Hand
let x;
let y;
let z = 3;

// Short Hand
let x,
  y,
  z = 3;


// For Loop
// Long Hand
const fruits = ['mango', 'peach', 'banana'];
for (let i = 0; i < fruits.length; i++)

// Short Hand
for (let fruit of fruits)
// Just Index
for (let index in fruits)

const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}
for (let key in obj)
  console.log(key) // output: continent, country, city


// Evaluation
// Long Hand
let dbHost;
if (process.env.DB_HOST) {
  dbHost = process.env.DB_HOST;
} else {
  dbHost = 'localhost';
}

// Short Hand
const dbHost = process.env.DB_HOST || 'localhost';


// Long Hand
const x = 1920, y = 1080;
const obj = { x:x, y:y };

// Short Hand
const obj = { x, y };


// Long Hand
// Normal Functions
function sayHello(name) {
    console.log('Hello', name);
  }
  
  setTimeout(function() {
    console.log('Loaded')
  }, 2000);
  
  list.forEach(function(item) {
    console.log(item);
  });


// Arrow Functions 
sayHello = name => console.log('Hello', name);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach(item => console.log(item));


// Default Values
// Long Hand
function volume(l, w, h) {
    if (w === undefined)
      w = 3;
    if (h === undefined)
      h = 4;
    return l * w * h;
  }

// Short Hand
volume = (l, w = 3, h = 4 ) => (l * w * h);

volume(2) //output: 24


// Smart Way to check parameters
mandatory = () => {
    throw new Error('Missing parameter!');
  }
  
  foo = (bar = mandatory()) => {
    return bar;
  }

// Exponential
// Long Hand
Math.pow(2,3); // 8
Math.pow(2,2); // 4
Math.pow(4,3); // 64

// Short Hand
2**3 // 8
2**4 // 4
4**3 // 64

// String to Number
// Long Hand
const num1 = parseInt("100");
const num2 =  parseFloat("100.01");

// Short Hand
const num1 = +"100"; // converts to int data type
const num2 =  +"100.01"; // converts to float data type


// Assigning Values to multiple variables 
//Longhand 
let a, b, c; 
a = 5; 
b = 8; 
c = 12;
 
//Shorthand 
let [a, b, c] = [5, 8, 12];


// Using && operator
// Longhand 
if (isLoggedin) {
    goToHomepage(); 
   } 

// Shorthand 
isLoggedin && goToHomepage();

// Swap Two Variables
let x = 'Hello', y = 55; 
//Longhand 
const temp = x; 
x = y; 
y = temp; 

//Shorthand 
[x, y] = [y, x];


//Checking multiple values
//Longhand 
if (value === 1 || value === 'one' || value === 2 || value === 'two') { 
    // Execute some code 
} 

// Shorthand 1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) { 
   // Execute some code 
}
// Shorthand 2
if ([1, 'one', 2, 'two'].includes(value)) { 
   // Execute some code 
}

// Repeat n times
//Longhand 
let str = ''; 
for(let i = 0; i < 5; i ++) { 
  str += 'Hello '; 
} 
console.log(str); // Hello Hello Hello Hello Hello 

// Shorthand 
'Hello '.repeat(5);