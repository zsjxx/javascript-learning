// var s = Symbol();
// console.log(typeof s); // symbol

// let s = Symbol("abc");
// console.log(s); // Symbol(abc)
// console.log(s.toString()); // "Symbol(abc)"

// //  如果是传入的是对象，会调用对象的toString方法
// console.log(Symbol({
//     toString() {
//         return "abc";
//     }
// }));

// // Symbol的参数只是对当前Symbol值的描述，同参数是不等的
// console.log(Symbol() === Symbol()); // false
// console.log(Symbol("a") === Symbol("a")); // false

// // Symbol不能和字符串直接进行相加
// console.log("aa" + Symbol("hahaha").toString()); // "aaSymbol(hahaha)"

// // Symbol可以转成布尔值
// console.log(Boolean(Symbol())) // true

// // Symbol.prototype.description
// console.log(Symbol("haha").description); // "haha", ES2019

// // 作为属性名的Symbol
// var a = {};
// const sym = Symbol("hehe");
// a[sym] = "hehehe";
// console.log(a[sym]);

// var b = {
//     [sym]: "hhh"
// };
// console.log(b[sym]); // hh
// b["hehe"] = "zzz";
// console.log(b["hehe"]); // zzz
// b[sym] = "xixi";
// console.log(b[sym]); // xixi，对于类型是Symbol的属性还是可以改的

// // 只能用方括号来指定Symbol类型作为属性值
// let mySym = Symbol();
// var a = new Object();
// a[mySym] = "a";
// console.log(a[mySym]); // a

// // 用Symbol作为属性指定一个方法
// var ob = {
//     [mySym]() {
//         console.log("lala");
//     }
// };
// ob[mySym](); // lala

// // Symbol可以定义一组常量
// const COLOR_RED = Symbol();
// const COLOR_GREEN = Symbol();
// function func(color) {
//     switch (color) {
//         case COLOR_GREEN:
//             return COLOR_RED;
//         case COLOR_RED:
//             return COLOR_GREEN;
//     }
// }

// // 用于枚举
// const shapeType = {
//     triangle: Symbol(),
//     rectangular: Symbol()
// };
// let myShape = shapeType.triangle;
// if (myShape === shapeType.triangle) {
//     console.log("yes!"); // yes!
// }

// // Symbol是共有属性，但是不能被for枚举，也不能被Object.keys()枚举
// // 只有Object.getOwnPropertySymbols()返回一个数组
// var o = {
//     [Symbol("nihao")]: "nihao",
//     [Symbol("wobuhao")]: "wobuhao"
// };
// console.log(Object.getOwnPropertySymbols(o)); // [ Symbol(nihao), Symbol(wobuhao) ]

// // Reflect.ownKeys() 可以返回所有键名，包括Symbol
// console.log(Reflect.ownKeys(o)); // [ Symbol(nihao), Symbol(wobuhao) ]

// // 可以利用Symbol为对象定义一些非私有，但是只用于内部的方法
// let size = Symbol("size");
// class Collection {
//     constructor() {
//         this[size] = 0;
//     }

//     add(item) {
//         this[this[size]] = item;
//         this[size]++;
//     }

//     static sizeOf(instance) {
//         return instance[size];
//     }
// }

// let x = new Collection();
// x.add("halo");
// console.log(Collection.sizeOf(x)); // 1
// console.log(x[0]); // halo

// console.log(Object.keys(x)); // [ '0' ]
// console.log(Object.getOwnPropertyNames(x)); // [ '0' ]
// console.log(Reflect.ownKeys(x)); // [ '0', Symbol(size) ]

// // Symbol.for()用于返回已存在的symbol，不存在就新建
// let s1 = Symbol.for("haha");
// let s2 = Symbol.for("haha");
// console.log(s1 === s2); // true

// Symbol.keyFor()返回一个已经登记的Symbol类型的key
let s1 = Symbol.for("nihao");
console.log(Symbol.keyFor(s1)); // "nihao"

