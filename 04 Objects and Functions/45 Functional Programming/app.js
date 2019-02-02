// #1-st method

// console.log(arr2);


// var arr1 = [1, 2, 3, 4];
// console.log(arr1);

// var arr2 = [];
// for (i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);
// }

// console.log(arr2);



// #2-nd method
function mapForEach(arr, fn) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr
}



var arr1 = [1, 2, 3, 4];
console.log(arr1);

var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
})

console.log(arr2);

var arr3 = mapForEach(arr1, function (item) {
    return item > 2;
});

console.log(arr3);


var checkPassLimit = function (limiter, item) {
    return item > limiter;
}
var arr4 = mapForEach(arr1, checkPassLimit.bind(this, 1));

console.log(arr4);

var checkPassLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPassLimitSimplified(2));

console.log(arr5);