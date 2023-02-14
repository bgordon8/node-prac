const fs = require("fs");

// fs.writeFileSync saves to hard drive, takes two arguments, the new filename, and content

fs.writeFileSync("hello.txt", "Hello from node.js");

// core js features

const name = "Brian";
let age = 38;
const hasHobbies = true;

age = 39;

console.log(name);

function userInfo(userName, userAge, userHasHobby) {
  return (
    "Name: " + userName + ", Age: " + userAge + ", Has Hobbies: " + userHasHobby
  );
}

console.log(userInfo(name, age, hasHobbies));

// arrow functions

const userInfoupdated = (userName, userAge, userHasHobby) => {
  return (
    "Name: " + userName + ", Age: " + userAge + ", Has Hobbies: " + userHasHobby
  );
};

console.log(userInfoupdated(name, age, hasHobbies));

const addOne = (a) => a + 1;

console.log(addOne(1));

// objects

const person = {
  name: "Brian",
  age: 38,
  greet() {
    console.log("Hi, I am " + this.name + " I am " + this.age + " years old.");
  },
  // for destructuring
  destructName: "Brian Destruct ",
  destructAge: 38,
};

console.log(person);
person.greet();

// arrays

const hobbies = ["golf", "guitar"];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies);
console.log(hobbies.map((item) => item + " is awesome"));

// reference types vs primitve types

hobbies.push("programming");
console.log(hobbies);

// operators

const copiedArray = hobbies.slice();
console.log(copiedArray);

// spread operator
const copiedArrayWithSpread = [...hobbies];
console.log(copiedArrayWithSpread);

const copiePerson = { ...person };
console.log(copiePerson);

// rest operator

const toAray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(toAray(1, 2, 3));

const toArrayWithRest = (...args) => {
  return args;
};
console.log(toArrayWithRest(1, 2, 3, 4));

// destructuring

const printName = (personData) => {
  console.log(personData.name);
};
printName(person);

const printNameWithDestucturing = ({ name, age }) => {
  console.log(name, age);
};
printNameWithDestucturing(person);

const { destructName, destructAge } = person;
console.log(destructName, destructAge);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
