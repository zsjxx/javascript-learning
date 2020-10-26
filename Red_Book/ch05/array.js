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
