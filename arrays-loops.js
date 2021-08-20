// Merge two arrays
// const a = [1, 2, 3, 4];
// const b = [5, 6, 7, 8];
// const mergedArray = [...a, ...b];
// console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

// Remove duplicates from an array
// const a = [1, 2, 3, 4, 1, 2, 3, 4];
// const uniqueArray = [...new Set(a)];
// console.log(uniqueArray); // [1, 2, 3, 4]

// Average of an array
// const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;
// const arrayAverage = average([21, 56, 23, 122, 67]);
// console.log(arrayAverage);

// Array Flat
// const arr1 = [1, 2, [3, 4]];
// arr1.flat();
// [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// [1, 2, 3, 4, [5, 6]]

// const arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Remove Empty Elements
// const arr5 = [1, 2, , 4, 5];
// arr5.flat();
// [1, 2, 4, 5]

//Checking multiple values
//Longhand
// if (value === 1 || value === 'one' || value === 2 || value === 'two') {
//     // Execute some code
//   }

// Shorthand 1
// if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
// // Execute some code
// }

// Shorthand 2
// if ([1, 'one', 2, 'two'].includes(value)) {
// // Execute some code
// }

// Find Index Method
// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// expected output: 3

// Fill Method
// const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
// console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

// console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// Mainly to get last, second last item
// array[array.length-1]

//for the last item, you can call
// array.at(-1)

// For Loop
// Long Hand
// const fruits = ['mango', 'peach', 'banana'];
// for (let i = 0; i < fruits.length; i++)

// Short Hand
// for (let fruit of fruits)
// Just Index
// for (let index in fruits)

// const obj = {continent: 'Africa', country: 'Kenya', city: 'Nairobi'}

// for (let key in obj)
//   console.log(key) // output: continent, country, city

// let friends = [13, 15, 16, 18] //ages of group of friends

// checking if at least one of them is 18 or above
// friends.some(val => val >= 18)

// let giftPrices = [300, 350, 399, 400]
// let budgetPerGift = 450

// let checkBudget = price => price <= budgetPerGift

// giftPrices.every(checkBudget) // true

// budgetPerGift = 300

// giftPrices.every(checkBudget) // false
