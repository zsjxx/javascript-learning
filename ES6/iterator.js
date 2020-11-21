// // 默认的接口部署在Symbol.iterator属性上
// // 对象的Symbol.iterator获取的是一个函数，这个函数返回一个对象，这个对象有一个next方法
// // 下面是给obj添加遍历器属性
// const obj = {
//     [Symbol.iterator]() {
//         return {
//             next() {
//                 return {
//                     value: 1,
//                     done: true
//                 }
//             }
//         }
//     }
// };

// const iter = obj[Symbol.iterator](); // 先用Symbol.iterator获取遍历器函数，()再执行这个函数返回一个遍历器对象
// console.log(iter.next()); // { value: 1, done: true }，执行遍历器对象的next函数

// // 理解for...of.. Symbol.iterator以及next三者的关系
// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();
// let flag = true;
// while (flag) {
//     let res = iter.next();
//     let done = res.done;
//     let value = res.value;
//     if (!done) {
//         console.log(value); // a b c
//     } else {
//         flag = false;
//     }
// }
// for (let value of arr) {
//     console.log(value); // a b c
// }

// // 在class内部安装iterator接口
// class RangIterator {
//     constructor(start, stop) {
//         this.value = start;
//         this.stop = stop;
//     }
//     [Symbol.iterator]() { 
//         var that = this;
//         return {
//             next() {
//                 let value = that.value;
//                 if (value < that.stop) {
//                     that.value++;
//                     return {
//                         done: false,
//                         value: value
//                     };
//                 } else {
//                     return {
//                         done: true,
//                         value: undefined
//                     };
//                 }
//             }
//         }
//     }
// }

// function range(start, stop) {
//     return new RangIterator(start, stop);
// }

// for (let value of range(0, 3)) {
//     console.log(value);
// }

// // js实现链表
// function Obj(value) {
//     this.value = value;
//     this.next = null;
// }
// Object.prototype[Symbol.iterator] = function() {
//     var cur = this; // this指第一个对象，cur此时指向第一个对象
//     return {
//         next() {
//             if (cur) {
//                 let value = cur.value;
//                 cur = cur.next;
//                 return {
//                     done: false,
//                     value: value
//                 }
//             } else {
//                 return {
//                     done: true,
//                     value: undefined
//                 }
//             }
//         }
//     }
// }

// let one = new Obj(1);
// let two = new Obj(2);
// let three = new Obj(3);
// one.next = two;
// two.next = three;

// for (let i of one) {
//     console.log(i); // 1 2 3 顺着next去找下一个
// }

// 获取键值
const arr = [1, 2, 8, 9, 6];
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}
