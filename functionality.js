// Exponent Power
// Long Hand
// Math.pow(2, 3); // 8
// Math.pow(2, 2); // 4
// Math.pow(4, 3); // 64

// Short Hand
// 2 ** 3; // 8
// 2 ** 4; // 4
// 4 ** 3; // 64

// Double NOT bitwise operator (~~)
//Longhand
// const floor = Math.floor(6.8); // 6

// Shorthand
// const floor = ~~6.8; // 6
// only works for 32 bit integers (2**31) - 1

// String to Number
// Long Hand
// const num1 = parseInt('100');
// const num2 = parseFloat('100.01');

// Short Hand
// const num1 = +'100'; // converts to int data type
// const num2 = +'100.01'; // converts to float data type

// Deep cloning of multi-level object
// let obj = {x: 20, y: {z: 30}};

//Longhand
// const makeDeepClone = (obj) => {
//   let newObject = {};
//   Object.keys(obj).map(key => {
//     if(typeof obj[key] === 'object'){
//       newObject[key] = makeDeepClone(obj[key]);
//     } else {
//       newObject[key] = obj[key];
//     }
//   });
//  return newObject;
// }
// const cloneObj = makeDeepClone(obj);

//Shorthand
// const cloneObj = JSON.parse(JSON.stringify(obj));
// doesn’t work if your object property contains function, undefined or NaN as value.

// Swap Two Variables
// let x = 'Hello';
// let y = 55;

//Longhand
// const temp = x;
// x = y;
// y = temp;

//Shorthand
// [x, y] = [y, x];

// Reverse a String - Functionality
// const stringReverse = (str) => str.split('').reverse().join('');
// const outputStringReversed = stringReverse('Welcome to the session :D');
// console.log(outputStringReversed);

// Capitalize a string
// const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
// const capitalizedOuput = capitalize('javascript one-liners are fun');
// console.log(capitalizedOuput);

// Repeat n times
//Longhand
// let str = '';
// for (let i = 0; i < 5; i++) {
//   str += 'Hello ';
// }
// console.log(str); // Hello Hello Hello Hello Hello

// Shorthand
// 'Hello '.repeat(5);

// Min and Max
// Longhand
// function max(arr) {
//     arr.reduce((acc, a) => a > acc ? a : acc ,arr[0]) // use < for min
// }

// Shorthand
// const arr = [2, 8, 15, 4];
// Math.max(...arr); // 15
// Math.min(...arr); // 2

// Generate a random id
// const randomID = Math.random().toString(16).slice(2);
// console.log(randomID);

// Generate a randome hex color
// const hexColor = () => '#' + (~~(Math.random() * 0xffffff)).toString(16);
// console.log(hexColor());

// Difference between two days
// const dayDif = (date1, date2) =>
//   Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));

// const numDays = dayDif(new Date('2020-09-23'), new Date('2020-10-01'));

// Mandatory Parameter
// Longhand
// function foo(bar) {
//     if(bar === undefined) {
//       throw new Error('Missing parameter!');
//     }
//     return bar;
// }

// Shorthand
// mandatory = () => { // Common function
//     throw new Error('Missing parameter!');
// };

// foo = (bar = mandatory()) => {
//     return bar;
// };
