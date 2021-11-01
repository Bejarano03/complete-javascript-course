/* 
A variable is a box where we can insert information to be held there (a value).
let js = 'amazing';

// Console.log lets you show the output in the web console.
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

// Make sure to use camo case for variable declaration.
// Variables cannot start with a number or have symbols within it.
// Using JS reserved words cannot be set as variables either. 
// Try not to just use name as a variable, but rather firstName.
let firstName = 'Matilda';
let first = 'jonas';
let firstNamePerson = 'jonas';
let first_name_person = 'jonas';

console.log(firstName);

// Variables should be very descriptive and easy to read.
let myFirstJob = 'Programmer';
let myCurrentJOb = 'Teacher';

Number - floating point numbers -> used for decimals and integers
String - sequence of characters -> used for text 
Boolean - logical type that can only be true or false -> used for making decisions
Undefined - value taken by a variable that is not yet defined (empty value)
Null - also means empty value
Symbol - value that is unique and cannot be changed 
BigInt - larger integers that number cannot hold
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof gives you the description of the value ei: boolean, number or string
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// You can change the value of a variable by calling the variable and then changing it. 
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
// let can be declared and mutated later to a different value
let age = 30;
age = 31;

// const cannot change
const birthYear = 1991;
// birthYear = 1990;

// const job;

// legacy way of declaring variables, and not recommended to use
var job = 'programmer';
job = 'teacher'
*/

// Mathematical Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' +lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100 
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 1
// console.log(x);

// Comparison Operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);