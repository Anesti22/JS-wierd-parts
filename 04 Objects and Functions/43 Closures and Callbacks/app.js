function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function () {
        console.log(greeting);
    }, 3000);
}


sayHiLater();

//## jQuery uses first-class functions and function expressions

// $("button").click(function () {

// });



//## Let's buid a function that acepts a calback!
function tellMeWhenDone(callback) {

    var a = 1000; //some work
    var b = 2000; //some work

    callback(); // The 'callback' it runs the functiion I give it!
}


tellMeWhenDone(function () {
    console.log("Hello There")
});

tellMeWhenDone(function () {
    console.log("Hello There Again")
});
