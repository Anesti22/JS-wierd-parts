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

var Nesti = {
    firstname : "Nesti",
    lastname : "Gjikoka",
    address : {
        street: "Main Street"
    }
};


function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Nesti);


greet({
    firstname: 'Maria',
})
