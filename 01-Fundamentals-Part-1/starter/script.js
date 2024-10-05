let js = 'amazing';
console.log(40 + 60);
console.log(js);


let firstName = 'Cassidy';
let lastName = 'James';
console.log(firstName + lastName);

// Assignments
/*
Declare variables called country, continent and population and assign their values according to your own country (population in millions).
Log their values to the console.
*/

let country = 'Thailand';
let continent = 'Asia';
let population = 70;

console.log('Country: ' + country);
console.log('Continent: ' + continent);
console.log('Population: ' + population);

// Data types

let isWeatherCold = true;

console.log(isWeatherCold);
console.log(typeof isWeatherCold);
console.log(typeof country);
console.log(typeof population);

isWeatherCold = 'a bit';

/*
Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

Log the types of isIsland, population, country and language to the console.
*/

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let nullVar = null;
console.log(typeof nullVar)

/*
Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.
*/

language = 'Cantonese';

// Changed `isIsland` declaration to const

// isIsland = true;

// TypeError is thrown.


// Coding Challenge 1
// Instructions

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

function calcBMI(mass, height) {
    return mass / (height ** 2);
}

let massMark, massJohn, heightMark, heightJohn;
let bmiMark, bmiJohn, markHigherBMI;

// Data 1
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

bmiMark = calcBMI(massMark, heightMark);
bmiJohn = calcBMI(massJohn, heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log('Data 1: ', bmiMark, bmiJohn, markHigherBMI)

// Data 2
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

bmiMark = calcBMI(massMark, heightMark);
bmiJohn = calcBMI(massJohn, heightJohn);

markHigherBMI = bmiMark > bmiJohn;

console.log('Data 2: ', bmiMark, bmiJohn, markHigherBMI)


// Template literals

const myName = 'Kit';
const age = 31;

const introduction = `I'm ${myName} and I'm ${age} years old!`

console.log(introduction)