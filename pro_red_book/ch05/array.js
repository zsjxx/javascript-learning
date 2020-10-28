var arr = new Array();
console.log(arr); // []

var arr = new Array(3);
console.log(arr[0]); // undefined
console.log(arr); // [ <3 empty items> ]
console.log(arr.length); // 3

var arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]

var arr = [1, 2, 3];
console.log(arr); // [1 ,2 ,3]
arr.length--;
console.log(arr); // [1, 2]
arr.pop();
console.log(arr); // [1]

var arr = [1]
arr.length = 5;
console.log(arr); // [ 1, <4 empty items> ]
console.log(arr[4]); // undefined

var arr = [2];
arr[arr.length] = 3;
console.log(arr); // [2 ,3]

arr = [1, 2, 3];
console.log("in dad, compared with Array: " + (arr instanceof Array).toString()); // true;
console.log("in dad, using Array.isArray " + (Array.isArray(arr)).toString()); // true

const myIsArray = (something) => {
    return Object.prototype.toString.call(something) === '[object Array]';
}
console.log("in dad, using Object.prototype.toString.call(): " + (myIsArray(arr)).toString()); // true;

arr = [1, 2, 3];
num = 1;
str = "haha";
obj = {};
boo = true;
nul = null;
undef = undefined;
console.log(arr.toString()); // "1, 2, 3"
console.log(num.toString()); // "1"
console.log(str.toString()); // haha
console.log(obj.toString()); // [object Object]
console.log(boo.toString()); // "true"
console.log(String(nul)); // "null"
console.log(String(undef)); // "undefined"
console.log(arr.toString); // [Function: toString]
console.log(Object.prototype.toString.call(arr)); // [object Array] this is what we want

arr = [1, 2, 3, "haha"];
console.log(arr.toString()); // 1,2,3,haha
console.log(arr.valueOf()); // [ 1, 2, 3, 'haha' ]
console.log(arr.join()); // 1,2,3,haha
console.log(arr.join("#")); // 1#2#3#haha
console.log(typeof arr.toString()); // string
console.log(typeof arr.valueOf()); // object

arr = [1, 2, 3];
arr.push(5);
arr.push(5, 6);
arr.push([7, 8]);
console.log(arr); // [ 1, 2, 3, 5, 5, 6, [ 7, 8 ] ]
top = arr.pop();
console.log(top); // [7, 8]

arr = [1, 2, 3];
head = arr.shift();
console.log(arr); // [2, 3]
arr.unshift(100); 
console.log(arr); // [100, 2, 3]
rear = arr.pop();
console.log(arr); // [100, 2]

arr = [7, 5, 3, 11, 10];
arr.sort((a, b) => {
    return a - b;
});
console.log(arr); // [ 3, 5, 7, 10, 11 ]
arr.reverse();
console.log(arr); // [ 11, 10, 7, 5, 3 ]

arr = [7, 5, 3, 11, 10];
console.log(arr.slice(0, -1)); // [ 7, 5, 3, 11 ]
console.log(arr); // [ 7, 5, 3, 11, 10 ]

arr = [1, 2, 3, 4, 5];
console.log(arr.splice(0, 2)); // [1, 2]
console.log(arr); // [3, 4, 5]

arr = [1, 2, 3, 4, 5];
console.log(arr.splice(arr.length, 0, 6)); // []
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.splice(arr.length - 1, 0, 7));
console.log(arr); // [1, 2, 3, 4, 5, 7, 6]
console.log(arr.splice(arr.length, 0, 6, 7, 8, 9));
console.log(arr); // [1, 2, 3, 4, 5, 7, 6, 6 7, 8, 9]
console.log(arr.splice(arr.length, 0, [10, 11]));
console.log(arr); // [ 1, 2, 3, 4, 5, 7, 6, 6, 7, 8, 9, [ 10, 11 ] ]

arr = [1, 2, 3, 4];
console.log(arr.splice(1, 2, 100, 101)); // [2, 3]
console.log(arr); // [1, 100, 101, 4]

arr = [100, 101, 103, 103, 105];
console.log(arr.indexOf(103)); // 2
console.log(arr.lastIndexOf(103)); // 3

arr = [1, 2, 3, 4];
console.log(arr.concat(5)); // [ 1, 2, 3, 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.concat(6, 7)); // [ 1, 2, 3, 4, 6, 7 ]
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.concat([8, 9])); // [ 1, 2, 3, 4, 8, 9 ]
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.concat([10, 11], 12)); // [1,  2,  3, 4, 10, 11, 12]
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.concat(13, [14, 15], 16)); // [1, 2, 3, 4, 13, 14, 15, 16]
console.log(arr); // [ 1, 2, 3, 4 ]

arr2 = [[1]];
console.log(arr2.concat([2])); // [ [ 1 ], 2 ]
console.log(arr2.concat([[2]])); // [[1], [2]]

arr = [1, 2, 63, 5, 6];
console.log(arr.every((element, index, array) => {
    return element > 50;
})); // false;
console.log(arr); // [ 1, 2, 63, 5, 6 ]

arr = [1, 2, 63, 5, 6];
console.log(arr.filter((element, index, array) => {
    return element > 50;
})); // [63]
console.log(arr.filter((element, index, array) => {
    return element > 100;
})); // []
console.log(arr);

arr = [1, 2, 63, 5, 6];
console.log(arr.map((element, index, array) => {
    return element  * index;
})); // [ 0, 2, 126, 15, 24 ]
console.log(arr);

arr = [1, 2, 63, 5, 63, 6];
arr.forEach((element, index, array) => {
    if (element == 63) {
        console.log('I love you.'); // output * 2
        // break; // error!
    }
});
console.log(arr); // [ 1, 2, 63, 5, 63, 6 ]

arr = [1, 2, 3, 4];
console.log(arr.reduce((acc, curValue, index, array) => {
    return acc + curValue;
})); // 10
console.log(arr); // [ 1, 2, 3, 4 ]

arr = [1, 2, 3, 4];
console.log(arr.reduce((acc, curValue, index, array) => {
    return acc + curValue;
}, 100)); // 110
console.log(arr); // [ 1, 2, 3, 4 ]

arr = [];
console.log(arr.reduce((acc, curValue, index, array) => {
    return acc + curValue;
}, 11)); // 11
console.log(arr); // []

var ob = new Object();
ob.name = "zsj";
ob.age = 23;
console.log(ob.name, ob.age); // "zsj", 23

var ob = {
    name: "zsj",
    age: 23
};
console.log(ob.name, ob.age); // "zsj", 23

function sum(a, b) {
    return a + b;
}

sum2 = sum;
sum2 = null;
console.log(sum(1, 2)); // 3


// understanding the copy machanism thoroughly
var ob1 = {name: "zsj"};
ob2 = ob1;
ob2 = null;
console.log(ob1.name); // zsj
ob2 = ob1;
ob2.age = 23;
console.log(ob1.age); // 23

function compareByPropertyName(propertyName) {
    return (ob1, ob2) => {
        if (ob1[propertyName] < ob2[propertyName]) {
            return -1;
        }
        else if (ob1[propertyName] == ob2[propertyName]) {
            return 0;
        }
        else {
            return 1;
        }
    };
}

var arr = [{name: "zsj", score: 100}, {name: "abc", score: 99}];
arr.sort(compareByPropertyName("name"));
console.log(arr); // [ { name: 'abc', score: 99 }, { name: 'zsj', score: 100 } ]
arr.sort(compareByPropertyName("score"));
console.log(arr); // [ { name: 'abc', score: 99 }, { name: 'zsj', score: 100 } ]

var ob = {};
ob.name = "zsj";
var myName = "name";
console.log(ob.myName); // undefined
console.log(ob[myName]); // "zsj"


console.log([1, 2, 3, 4, 5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
})); // named function expression is allowed, otherwise there is no solution to recurse

var global = this;

var sillyFunction = function(recursed) {
    if (!recursed) { return arguments.callee(true); } // when using function name both true and false outputs global
    if (this !== global) {
        console.log('This is: ' + this);
    } else {
        console.log('This is the global');
    }
};

sillyFunction(false);  // This is: [object Arguments], in recursiving stage, the environment becomes the arguments
sillyFunction(true); // This is: [object global]

// The following code should be executed inside browser
var global = this;
function test(flag) {
    if (!flag) test(true);
    else console.log(this === global);
}
test(false); // true
test(true); // true

// The following code should be executed inside browser
function test(flag) {
    if (!flag) arguments.callee(true);
    else console.log(this);
}
test(false); // [object Arguments], in recursiving stage, the environment becomes the arguments
test(true); // [object global]

function fun1() {
    fun2();
}
function fun2() {
    console.log(fun2.caller);
}
fun1();

// The following code should be executed inside browser
var global = this;
console.log(this === global);
console.log(this);
console.log(global);
console.log('#####');
function test() {
    console.log(this === global);
    console.log(this);
    console.log(global);
}
test();

var value = "25";
var obj = new Number(value);
console.log(typeof obj); // object
console.log(obj); // [Number: 25]

// obtaining current time automatically
var now = new Date();
console.log(now); // 2020-10-27T06:07:42.647Z
console.log(typeof now); // object

// return the millisecond from 1970 up to now
var now = Date.now();
console.log(now); // 1603778959702

// set the specific date
var someDate1 = new Date("5/26/1997");
console.log(someDate1); // 1997-05-25T16:00:00.000Z
var someDate2 = new Date("May 27, 1997");
console.log(someDate2); // 1997-05-25T16:00:00.000Z

// invoke valueOf method when comparing
console.log(someDate1 < someDate2); // true

function fun(a, b) {
    return a + b;
}

console.log(fun.length); // 2

// The following code should be executed insides browser
var color = "red";
var ob = {color: "pink"};
function showColor() {
    console.log(this.color);
}
showColor.apply(this); // "red"
showColor.apply(ob); // "pink"

function add1(...theArgs) {
    return theArgs.reduce((acc, curValue, index, array) => {
        return acc + curValue;
    });
}

function add2(...theArgs) {
    return add1.apply(this, theArgs);
}

console.log(add2(1, 2, 3, 4, 5, 6)); // 21

function add(a, b, c) {
    console.log(a + b + c);
}
add.call(this, 1, 2, 3); // 6

function showProperty(propertyName) {
    console.log(this[propertyName]);
}
var stu = {name: "zsj"};
name = "zzz";
showProperty.bind(stu)("name"); // "zsj"

console.log(typeof Number("23")); // number
console.log(typeof new Number("23")); // object
console.log(typeof new Number("23").valueOf()); // number

var num = 23;
console.log(num.toString(8)); // 27
console.log(typeof num.toString(8)); // string
console.log(typeof num.toString(8).valueOf()); // string

var str = "abc";
console.log(str.charAt(1)); // "b"
console.log(typeof str.charAt(1)); // string
console.log(str[1]); // "b"

var str = "abc";
console.log(str.concat("d", "e")); // abcde
console.log(str); // abc

var str = "abcdefg";
console.log(str.slice(-3)); // efg
console.log(str.substr(4, 3)); //efg
console.log(str.substring(4, 5 + 3)); // efg

var str = "    abcde  fg   ";
console.log(str.trim()); // "abcde  fg"

var str = "1Ab";
console.log(str.toLowerCase()); // 1ab
console.log(str.toUpperCase()); // 1AB

var url = "https://talent.baidu.com/external/baidu/campus.html#/jobDetail/all/1/170111"
console.log(encodeURI(url)); // https://talent.baidu.com/external/baidu/campus.html#/jobDetail/all/1/170111
console.log(encodeURIComponent(url)); // https%3A%2F%2Ftalent.baidu.com%2Fexternal%2Fbaidu%2Fcampus.html%23%2FjobDetail%2Fall%2F1%2F170111

var url = "https%3A%2F%2Ftalent.baidu.com%2Fexternal%2Fbaidu%2Fcampus.html%23%2FjobDetail%2Fall%2F1%2F170111"
console.log(decodeURI(url)); // https%3A%2F%2Ftalent.baidu.com%2Fexternal%2Fbaidu%2Fcampus.html%23%2FjobDetail%2Fall%2F1%2F170111
console.log(decodeURIComponent(url)); // https://talent.baidu.com/external/baidu/campus.html#/jobDetail/all/1/170111

eval("console.log(\"I love you\")"); // I love you

console.log(Math.max(4, 2, 6, 8)); // 8
console.log(Math.min(4, 2, 6, 8)); // 2

function selectFrom(lowerBounce, upperBounce) {
    return Math.floor(Math.random() * (upperBounce - lowerBounce + 1) + lowerBounce); 
}
var colorList = ["red", "black", "blue", "grey", "purple"];
console.log(colorList[selectFrom.call(this, 0, colorList.length)]);
