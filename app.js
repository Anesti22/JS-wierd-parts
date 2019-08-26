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

var objectLitersal = {
    firstname: 'Nesti',
    isAProgrammer: true
}

console.table(JSON.stringify(objectLitersal));

var jsomValue = JSON.parse('{ "firstname" : "Nesti", "isAProgrammer" : true }')

console.log(jsomValue);
