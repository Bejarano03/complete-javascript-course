// let country = 'USA';
// let continent = 'America';
let population = 368;

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = false;
let language;

// typeof returns the type of data such as string, integer or boolean.
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// Variables are global available while const can only be used once.
language = 'English';
const country = 'USA';
const continent = 'America';
const isIsland = false;

// Operations work like simple math: addition, subtraction, division and multiplication.
// Adding the ++ at the end of a variable of value increases it by one.
// Greater than or less than symbols return boolean answers. 
// You can create a description using the variables and linking them together with + signs. 
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ' , and its ' + population + ' million people speak ' + language;
console.log(description1);

