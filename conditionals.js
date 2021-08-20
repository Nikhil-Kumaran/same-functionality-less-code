// Ternary
// Long Hand
const userType = 'SUPER_ADMIN';
let userAccess;

if (userType === 'SUPER_ADMIN') {
  userAccess = 'all';
} else {
  userAccess = 'restricted';
}

// Short Hand
const userAccess = userType === 'SUPER_ADMIN' ? 'all' : 'restricted';

// Conditional
// Long Hand
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
  let variable2 = variable1;
}

// Short Hand
const variable2 = variable1 || 'new';

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

const dom = isLoggedin ? '<span>Hello</span>' : null;

const dom = isLoggedin && '<span>Hello</span>';

// Optional Chaining
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name || '';

console.log(dogName);
