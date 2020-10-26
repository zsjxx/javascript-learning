const myIsArray = (something) => {
    return Object.prototype.toString.call(something) === '[object Array]';
}

console.log("in son, compared with Array: " + (window.parent.arr instanceof Array).toString()); // false
console.log("in son, compared with window.parent.Array: " + (window.parent.arr instanceof window.parent.Array).toString()); // true
console.log("in son, compared with window.parent.Array.constructor: " + (window.parent.arr.constructor === window.parent.Array).toString()); // true
console.log("in son, compared with Array.constructor: " + (window.parent.arr.constructor === Array).toString()); // false
console.log("in son, using Array.isArray " + (Array.isArray(window.parent.arr)).toString()); // true
console.log("in son, using Object.prototype.toString.call(): " + (myIsArray(window.parent.arr)).toString()); // true;

