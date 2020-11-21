// how about talking about this in Javascript?

// function fun(flag) {
//     if (!flag) {
//         arguments.callee(true);
//     } else {
//         console.log(this);
//     }
// }

// fun(true);
// fun(false);

// // recommended way
// const fun2 = (function(flag) {
//     if (!flag) {
//         fun2(true);
//     } else {
//         console.log(this);
//     }
// });
// fun2(true);
// fun2(false);

// in super key word

// let dad = {
//     sayHello() {
//         return "hello";
//     }
// };

// // let son = {
// //     sayHelloBySon() {
// //         return super.sayHello() + ", haha!";
// //     }
// // }

// let son = {
//     sayHelloBySon() {
//         return Object.getPrototypeOf(this).sayHello.call(this) + ", haha!";
//     }
// }

// Object.setPrototypeOf(son, dad);
// let grandSon = Object.create(son);
// console.log(grandSon.sayHelloBySon());

// // 寄生混合式继承
// function Dad(name, age) {
//     this.name = name;
//     this.age = age;
//     if (typeof Dad.prototype.sayHello !== "function") {
//         Dad.prototype.sayHello = function() {
//             console.log("hello!");
//         }
//     }
// }

// function Son(name, age, sex) {
//     Dad.call(this, name, age);
//     this.sex = sex;
//     if (typeof Son.prototype.sayHi !== "function") {
//         Son.prototype.sayHi = function() {
//             console.log("hi!");
//         }
//     }
// }

// Son.prototype = Object.create(Dad.prototype);

// let son = new Son("zsj", 23, "male");
// son.sayHello();
// son.sayHi();
// console.log(son.name, son.sex);

// // 为单例创建私有变量和特权方法
// function Person() {}
// let p = (function() {
//     let name = "haha";
//     const sayName = function() {
//         console.log(name);
//     }
//     let p = new Person();
//     p.getName = function() {
//         return name;
//     }
//     p.publicFun = function() {
//         sayName();
//     }
//     return p;
// })()

// p.publicFun();

var a = 1;
var ob = {
    a: 2,
    fun: () => {
        console.log(a);
    },
    fun2: function() {
        console.log(a);
    }
}

ob.fun2();