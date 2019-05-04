var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // what is this
console.log(Object.prototype.toString.call(d)); // This is better!


function Person(name) {
    this.name  =  name;
}

var e  = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);


console.log(typeof undefined); // makes Sense
console.log(typeof null); // A bug

var z = function() {};

console.log(typeof z);
