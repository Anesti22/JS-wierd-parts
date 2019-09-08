// var person = new Object();

// person["firstname"] = "Nesti";
// person["lastname"] = "Gjikoka";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.address = "Main Street";
// person.address.city = "New York";


// console.log(person.address.address);



// Objects and Objects Literal

// var Nesti = {
//     firstname : "Nesti",
//     lastname : "Gjikoka",
//     address : {
//         street: "Main Street"
//     }
// };


// function greet(person) {
//     console.log('Hi ' + person.firstname);
// }

// greet(Nesti);


// greet({
//     firstname: 'Maria',
// })


// Faking Namespaces
// var greet = 'Hello';
// var greet = 'Hola';

// console.log(greet);


// var english = {};
// var spanish = {};

// english.greetings = {}

// english.greetings.greet = 'Hello';
// spanish.greet = 'Hola';

// console.log(english);
// console.log(spanish);


// JSON Javascript Object Notation and ObjectS Literal

// var objectLitersal = {
//     firstname: 'Nesti',
//     isAProgrammer: true
// }

// console.table(JSON.stringify(objectLitersal));

// var jsomValue = JSON.parse('{ "firstname" : "Nesti", "isAProgrammer" : true }')

// console.log(jsomValue);

//
// Functions are Objects
//
//
// First Class Fuctions: Everything you can do with other TYPES you can do with Functions
//

// function greet() {
//     console.log('Hi');
// }

// greet.language = 'english';
// console.log(greet.language);



//
// Function Statements and Function Expressions ..
//

// An Expression: Is a Unit of code That results in a value

// var a;
// a = 3;

// A Statement:

// if(a === 3) {

// }

/*
// Function Statement
greet();

function greet() {
     console.log('hi');
}

// Function Expression

var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();


function log(a) {
   a();
}

// log('Hello');

// log({
//     greetings : 'hi'
// });

log(function() {
    console.log('Hi');
}) */

//
//BY VALUE - BY REFERENCE
//

/*

// By value
var a = 3;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

// By Reference (All Objects, Includeing Functions)


var c  = { greeting: 'hi'};
var d;

d = c;

c.greeting = 'Hello'; // Mutate State


console.log(c);
console.log(d);


// By reference (even as parapeters)

function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(d)

console.log(c);
console.log(d);


// Equals Operator sets up a new memory space (new address)


c = {greeting: 'Howdy'};

console.log(c);
console.log(d);

*/


