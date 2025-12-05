const user: {
  name: string;
  gender: string;
  age: number;
} = {
  name: 'etranger2268',
  gender: 'man',
  age: 21,
};

console.log(user.name);
console.log(user.gender);
console.log(user.age);

console.log(user['name']);
console.log(user['gender']);
console.log(user['age']);

user.age = 22;
console.log(user.age);

user.age = 22;
console.log(user['age']);

console.log(Object.keys(user).length);
console.log(Object.keys(user));

// user.age = '20'
// user.from = 'Tokyo';

interface UserObj {
  name: string;
  gender: string;
  age?: number;
}

const newUser: UserObj = {
  name: 'etranger2268',
  gender: 'man',
  // age: 21,
};

console.log(newUser);
