// Reverse a String - Functionality
const stringReverse = (str) => str.split('').reverse().join('');
const outputStringReversed = stringReverse('Welcome to the session :D');
console.log(outputStringReversed);

// Capitalize a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const capitalizedOuput = capitalize('javascript one-liners are fun');
console.log(capitalizedOuput);

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

// Declare Variables
// Long Hand
let x;
let y;
let z = 3;

// Short Hand
let x,
  y,
  z = 3;

// Smart Way to check parameters
mandatory = () => {
  throw new Error('Missing parameter!');
};

foo = (bar = mandatory()) => {
  return bar;
};

// Exponential
// Long Hand
Math.pow(2, 3); // 8
Math.pow(2, 2); // 4
Math.pow(4, 3); // 64

// Short Hand
2 ** 3; // 8
2 ** 4; // 4
4 ** 3; // 64

// String to Number
// Long Hand
const num1 = parseInt('100');
const num2 = parseFloat('100.01');

// Short Hand
const num1 = +'100'; // converts to int data type
const num2 = +'100.01'; // converts to float data type

// Assigning Values to multiple variables
//Longhand
let a, b, c;
a = 5;
b = 8;
c = 12;

//Shorthand
let [a, b, c] = [5, 8, 12];

// Swap Two Variables
let x = 'Hello';
let y = 55;

//Longhand
const temp = x;
x = y;
y = temp;

//Shorthand
[x, y] = [y, x];

// Repeat n times
//Longhand
let str = '';
for (let i = 0; i < 5; i++) {
  str += 'Hello ';
}
console.log(str); // Hello Hello Hello Hello Hello

// Shorthand
'Hello '.repeat(5);
