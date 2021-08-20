// Declare Variables
// Long Hand
// let x;
// let y;
// let z = 3;

// Short Hand
// let x, y, z = 3;

// Assigning Values to multiple variables
//Longhand
// let a, b, c;
// a = 5;
// b = 8;
// c = 12;

//Shorthand
// let [a, b, c] = [5, 8, 12];

// Defining variables from objects
// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42,
//     education: {
//       degree: 'Masters',
//       fieldOfStudy: 'Computer Science'
//     }
// };
// Longhand
// const id = user.id;
// const degree = user.education.degree;

// Shorthand
// const {id, education: { degree, fieldOfStudy }} = user

// Alias
// const {id, education: { degree, fieldOfStudy: major }} = user

// default value

// user = {
//     id: 339,
//     name: 'Fred',
//     age: 42,
// };

// const { education: { degree } } = user // TypeError: Cannot match against 'undefined' or 'null'.

// const { education: { degree } = {} } = user

// const { education: { school: {name} } = {} } = user;  // TypeError: Cannot match against 'undefined' or 'null'.

// solution 1
// const { education: { school: {name} = {} } = {} } = user;

// solution 2
// const { education: { school: {name} } = { school: {} } } = user;

// Decimal base exponents
// const lotsOfZeros = 10000000

// const exponent = 1e7

/* 
1e1 === 10
1e2 === 100
1e3 === 1000
.
.
.
2e1 === 20
2e2 === 200
.
.
2e8 === 200000000
11e2 === 1100
*/

// Numeric separators

// const withoutSeparator = 25640353592

// const withSeparator = 25_640_353_592
