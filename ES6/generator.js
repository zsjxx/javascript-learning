// function* hello() {
//     yield "hello";
//     yield "hi";
//     return "halo";
//     yield "ending";
// }

// // next()返回一个对象，这个对象具有donw和value两个值
// const h = hello(); // 这个函数的返回值赋给h，h是一个遍历器对象，这对象有一个next方法
// console.log(h.next()); // { value: 'hello', done: false }
// console.log(h.next()); // { value: 'hi', done: false } 
// console.log(h.next()); // { value: 'halo', done: true }
// console.log(h.next()); // { value: undefined, done: true }
// console.log(h.next()); // { value: undefined, done: true }

// // 可以没有yield语句
// // 但是还是要等到next()才会执行
// function* f() {
//     console.log('执行了！')
//   }
  
//   var generator = f(); // 不会立即执行
  
//   setTimeout(function () {
//     generator.next()
//   }, 2000);

// function* demo() {
//     console.log("hello" + (yield 123));
// }
// var d = demo();
// d.next(); // 啥也不输出

// // 可以将生成器输出赋值给Symbol.iterator接口
// // 本质原因就是因为Symbol.iterator是一个遍历器对象，这个遍历器对象有一个next方法
// // generator的生成的遍历器对象的next是默认的，取决于你写的yield
// let ob = {
//     [Symbol.iterator]: function* () {
//         yield 1;
//         yield 2;
//     }
// };
// for (let i of ob) {
//     console.log(i); // 1 2
// }

// // yield表达式永远返回undefined
// // next可以传入值，作为上一次yield的返回值
// // 第一次next传入值是无效的
// function* foo(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield(y / 3);
//     return x + y + z;
// }

// var ob = foo(5);
// console.log(ob.next().value); // 6
// console.log(ob.next(12).value); // 8
// console.log(ob.next(13).value); // 42

// function* dataConsumer() {
//     console.log('Started');
//     console.log(`1. ${yield}`);
//     console.log(`2. ${yield}`);
//     return 'result';
// }
  
// let genObj = dataConsumer();
// console.log(genObj.next()); // Started { value: undefined, done: false }
// console.log(genObj.next('a')); // 1. a { value: undefined, done: false }
// console.log(genObj.next('b')); // 2. b { value: 'result', done: true }
// console.log(genObj.next()); // { value: undefined, done: true }

// // return返回的遍历器对象的done是true，而yield为false
// function* foo() {
//     yield 1;
//     yield 2;
//     return 3;
// }
// let ob = foo();
// console.log(ob.next()); // { value: 1, done: false }
// console.log(ob.next()); // { value: 2, done: false }
// console.log(ob.next()); // { value: 3, done: true }

// // for...of智慧输出done为false的对象的value
// for (let i of foo()) {
//     console.log(i); // 1 2
// }

// // yield* 在generator函数内部调用另一个generator函数
// // 只要有Iterator接口，就能被yield*遍历
// function* foo() {
//     yield 1;
//     yield 2;
// }

// function* foo2() {
//     yield 3;
//     yield* foo();
//     yield 4;
// }

// for (let i of foo2()) {
//     console.log(i); // 3 1 2 4
// }

// // generator与原型链
// // 即使不用new，ob也是foo()的实例
// function* foo() {
//     this.a = 10;
//     yield 1;
// }

// foo.prototype.hello = function() {
//     console.log("hi");
// };

// let ob = foo();
// ob.next();
// console.log(Reflect.getPrototypeOf(ob) === foo.prototype); // true
// console.log(a); // 10
// console.log(ob.a); // undefined

// // generator函数返回一个遍历器对象，所以可以部署iterator接口
// function* iterEntries(obj) {
//     let keys = Object.keys(obj); // 是个数组
//     for (let key of keys) {
//         yield [key, obj[key]];
//     }
// }

// const ob = {
//     name: "zsj",
//     age: 23
// };
// for (let [k, v] of iterEntries(ob)) {
//     console.log(k, v);
// }

