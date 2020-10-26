var message;
alert(message); // undefined

alert(null == undefined); // true
alert(typeof null); // object, indicating null-object pointer

// all value can be converted into boolean type through Boolean()
alert(Boolean("hello")); // true

var num1 = 071; // octonary number system
alert(num1); //57 

alert(NaN == NaN); // false
alert(isNaN(NaN)); // true
alert(isNaN("hello")); // true, string can not be converted into number

alert(parseInt("070", 8)); // 56
alert(parseInt("070", 10)); // 70

alert("nihao".toString(10)); // nihao

var x = 123;
alert(typeof x.toString()); // string "123"
alert(typeof x.valueOf()); // number 123

// any operation about NaN is false
alert(NaN > 1) // false
alert(NaN <= 1) // false

alert("55" == 55); // true
alert("55" === 55); // false

// function
function sayHi(num1 = 1) {
    alert(arguments[0]);
    num1 = 50;
    alert(arguments[0]);
    alert(num1);
}
sayHi(10); // 10, 10, 50


function hi(num = 100) {
    alert(num);
}

hi(); // 100
hi(10); // 10

function multi(multiplier, ...theArgs) {
    for (var i = 0; i < theArgs.length; i++) {
        alert(theArgs[i]);
    }
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}
alert(multi(2, 1, 2, 3)); // 1, 2, 3 => 2 ,4, 6

function add(x, ...[a, b, c]) {
    alert(x * x + a + b + c);
}
add(1, 2, 3, 4); //10
add(1, 2, 3); // NaN, due to the miss argument c
add(1, 2, 3, 4, 5); // 5 is missed

var array = new Array(1, 2, 3, 4, 5);
[a, b] = array;
console.log(a, b); // only obtain the first two elements

a = 1;
b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

arr = [1, 2, 3, 4, 5, 6];
[a, , b] = arr;
[x, , , , , y] = arr;
console.log(a, b); // 1, 3
console.log(x, y); // 1, 6

var [a, ...theArgs] = [1, 2, 3, 4, 5, 6];
console.log(a, theArgs); // 1 [ 2, 3, 4, 5, 6 ]