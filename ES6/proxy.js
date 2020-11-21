// var proxy = new Proxy({}, {
//     get: function(target, propKey) {
//         return 35;
//     }
// });
// console.log(proxy.name); // 35

// // object.proxy属性可以为一个Proxy实例
// var ob = {proxy: new Proxy(, {
//     get: function(target, propKey) {
//         return propKey;
//     }
// })};
// console.log(ob.name);

// // 可以自定义一个handler函数，拦截多种操作
// var handler = {
//     get: function(target, name) {
//         if (name === "prototype") {
//             return Object.prototype;
//         }
//         return "Hello, " + name;
//     },
    
//     apply: function(target, thisBinding, args) {
//         return args[0];
//     },

//     construct: function(target, args) {
//         return {
//             value: args[1]
//         };
//     }
// };

// var fproxy = new Proxy(function(x, y) {
//     return x + y;
// }, handler);

// console.log(fproxy(1, 2));
// console.log(new fproxy(1, 2)); // { value: 2 }
// console.log(fproxy.prototype === Object.prototype); // true
// console.log(fproxy.foo) // Hello, foo

// Proxy的拦截函数有13个，下面只讲最主要的几个
// Proxy的拦截函数可以通过__proto__继承

// // get，传入三个参数：目标对象、属性名和代理本身
// var proxy = new Proxy({
//     name: "zsj"
// }, {
//     get: function(target, propertyName) {
//         if (target[propertyName]) {
//             return target[propertyName] + "!";
//         } else {
//             return "Not existing!";
//         }
//     }
// });
// console.log(proxy["name"]); // "zsj!"
// console.log(proxy["other"]); // Not existing!
// var ob = Object.create(proxy);
// console.log(ob.no); // Not existing!

// handle的get还可以返回自己.
//  var ob = new Proxy({}, {
//      get: function() {
//          return ob;
//      }
//  });

// var pipe = function (value) {
//     var funcStack = [];
//     var oproxy = new Proxy({} , {
//       get : function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//                 return fn(val); // 如果调用的是get，就对reduce进行连续调用
//           },value);
//         } else {
//             funcStack.push(window[fnName]);
//         }
//         return oproxy; // 对初始的oproxy调用一个非get的方法，返回这个oproxy自己，但是oproxy自己引用了函数表达式里面的funcStack，这个funcStack变了
//       }
//     });
//     return oproxy; // 函数表达式调用之后返回一个初始的oproxy
//   }
  
//   var double = n => n * 2;
//   var pow    = n => n * n;
//   var reverseInt = n => n.toString().split("").reverse().join("") | 0;
//   pipe(3).double.pow.reverseInt.get;

// // set传入四个参数
// var proxy = new Proxy({}, {
//     set: function(target, propertyName, value) {
//         target[propertyName] = value + "!";
//         return true;
//     }
// });
// proxy.name = "zsj";
// console.log(proxy.name); // zsj!

// // apply是当proxy拦截的对象是一个函数的时候
// // apply拦截调用、call和apply操作
// // 传入三个参数，分别是目标对象（即函数）， this和形参
// var proxy = new Proxy(function() {
//     console.log(1);
// }, {
//     apply: function(target, ctx, args) {
//         console.log(2);
//     }
// });
// proxy(); // 2

// var proxy2 = new Proxy(function(a, b) {
//     return a + b;
// }, {
//     apply: function(target, thisArgs, argsList) {
//         return Reflect.apply(...arguments) * 2;
//     }
// });

// console.log(proxy2(1, 2)); // 6

// proxy代理的如果是个函数，则函数里面的this指向proxy，这个问题比较严重
var proxy = new Proxy(target = function() {
    console.log(this === target); // false
    console.log(this === proxy); // false
    console.log(this === (() => this)()); // true
}, {});
proxy();

var proxy3 = new Proxy({
    fun: function() {
        console.log(this === proxy3);
    }
}, {});
proxy3.fun(); // true