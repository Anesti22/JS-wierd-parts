function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("This function is Invoked");

}

var john = new Person('Jonh', 'Doe');
console.log(john);


var jane = new Person('Jane', 'Doe');
console.log(jane);

