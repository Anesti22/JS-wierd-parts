var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// You should NEVER use in real dev envi
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

// Extend
var jane = {
    address: 'Selvia, 22 123',
    getFormalFullName: function () {
        return this.firstname + ' ' + this.lastname;

    }
}

var jim = {
    getFirstName: function () {
        return firstname;

    }
}

_.extend(john, jane, jim)
console.log(john);