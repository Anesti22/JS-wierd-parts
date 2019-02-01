var person = {
    // Properties
    firstname: 'John',
    lastname: 'Doe',
    // Methods
    getFullName: function () {
        // Here the 'this' keyword will point to the 'person' Object!
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}

// Binding two objects logName & person
// Bind creates a copy of the function
var logPersonName = logName.bind(person);

logPersonName('en');


// Call
// Call executes the function
logName.call(person, 'En', 'Es');

// Apply is doing the same thing but... ||
// Apply executes the function, but with the difference you have to pass an array!
logName.apply(person, ['En', 'Es']);

// I'm creating a function on the fly then invoking it with '.apply()' 
(function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------------');
}).apply(person, ['En', 'Es']);


// #-> Function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
}


console.log(person.getFullName.apply(person2));


// #-> Function Currying
// This have to do with the '.bind()'

function multiply(a, b) {
    return a * b;
}

// The first parameter '2' it will be the same
var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(9));
