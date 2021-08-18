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

// Short Hand
const variable2 = variable1 || 'new';

// Specifically for null and undefined we can use
// nullish coalescing operator
const name = username ?? 'Guest';

// Using && operator
// Longhand
if (isLoggedin) {
  goToHomepage();
}

// Shorthand
isLoggedin && goToHomepage();

// Optional Chaining
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
