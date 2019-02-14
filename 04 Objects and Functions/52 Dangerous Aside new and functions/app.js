// More-on-Constructor-Functions.txt

function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("This function is Invoked");

}

// How we set the prototype
/*
    When you use a function construction it already sets
    the prototype for you!
*/

Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

// Make sure you have the 'new' operator when you are using a function as a function constructor!
var john = new Person('Jonh', 'Doe');
console.log(john);


var jane = new Person('Jane', 'Doe');
console.log(jane);

// I can add a getFormalFullName
Person.prototype.getFormalFullName = function () {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
