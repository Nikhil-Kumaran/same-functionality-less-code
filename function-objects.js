// Object Freeze
// const obj = {
//   prop: 42,
// };

// Object.freeze(obj);

// obj.prop = 33;
// Throws an error in strict mode

// console.log(obj.prop);
// expected output: 42

// const newObj = {}; // new Object();
// const newObj = new Object();

// Object Create
// const dictionary = Object.create(null);
// Lightweight key value pair etc

// Create a new reference of an Object
// Single Level Objects
// const newObject = { ...oldObject };

// Defining Properties on Objects
// Long Hand
// const x = 1920,
//   y = 1080;
// const obj = { x: x, y: y };

// Short Hand
// const obj = { x, y, z };

// Long Hand
// Normal Functions
// function sayHello(name) {
//   console.log('Hello', name);
// }

// setTimeout(function () {
//   console.log('Loaded');
// }, 2000);

// list.forEach(function (item) {
//   console.log(item);
// });

// Short Hand
// Arrow Functions
// sayHello = (name) => console.log('Hello', name);

// setTimeout(() => console.log('Loaded'), 2000);

// list.forEach((item) => console.log(item));

// Default Values
// Long Hand
// function volume(l, w, h) {
//   if (l === undefined) w = 2;
//   if (w === undefined) w = 3;
//   if (h === undefined) h = 4;
//   return l * w * h;
// }

// Short Hand
// volume = (l = 2, w = 3, h = 4) => l * w * h;

// volume(2); //output: 24

// Long Hand
// use switch case to find fruits in color
// function test(color) {

//   switch (color) {
//     case 'red':
//       return ['apple', 'strawberry'];
//     case 'yellow':
//       return ['banana', 'pineapple'];
//     case 'purple':
//       return ['grape', 'plum'];
//     default:
//       return [];
//   }
// }

//test results
// test(null); // []
// test('yellow'); // ['banana', 'pineapple']

// use object literal to find fruits in color
// const fruitColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pineapple'],
//   purple: ['grape', 'plum'],
// };

// function test(color) {
//   return fruitColor[color] || [];
// }
