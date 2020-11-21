// // 1. then方法指定的回调函数，在所有同步任务执行完之后才会执行
// let promise = new Promise(function(resolve, reject) {
//     console.log("Promise");
//     resolve();
// });

// // 下面的回调是一个回调函数，会在所有函数执行完之后再执行
// promise.then(function() {
//     console.log("resolved");
// })

// console.log("hi!");

// // Promise 
// // hi!     
// // resolved

// // 2. 用promise模仿ajax
// const getJSON = function(url) {
//     return new Promise(function(resolve, reject) {
//         const client = new XMLHttpRequest();
//         client.onreadystatechange = function() {
//             if (this.readyState == 4) {
//                 if (this.status == 200) {
//                     // this.response 代表相应http报文的body
//                     resolve(this.response)
//                 } else {
//                     reject(new Error(this.statusText));
//                 }
//             }
//         };
//         client.open("GET", url, true);
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();
//     });
// }

// getJSON("/posts.json").then(function(json) {
//     console.log(json);
// }, function(error) {
//     console.log("error!");
// });

// 3. 一个promise对象可以作为另一个promise对象回调的参数
// resolve和reject都只接受一个参数，并且如果这个参数是promise对象，便立即返回这个对象
// p1传入p2，p2必须等到p1不为pending状态才能返回p1，并且之后的then都只能针对p1，因为将promise对象传入resolve会直接返回
// const p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(10000), 3000);
// });

// const p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(p1), 10000);
// });

// p2
//   .then(result => console.log(result)); // 3秒的时候p1是resolve状态，10秒的时候直接返回p1，所以then调用的是p1

// 4. 一般在调用resolve或者reject之后，new Promise的使命就完成了，所以最好是return resolve/reject

// // 5. then方法定义在Promise的原型上可以返回新的Promise对象
// getJSON("/post/1.json").then(
//     post => getJSON(post.commentURL)
// ).then(
//     comments => console.log("resolved: ", comments),
//     err => console.log("error!")
// );


// 6. catch用于捕获在new构造函数中的错误以及then回调函数中的错误
// catch只会处理reject状态下的回调，如果是new构造函数出错，则会转变为reject进而被捕获
// 下面两种写法等价

// // 写法一
// const promise = new Promise(function(resolve, reject) {
//     try {
//         throw new Error("test");
//     } catch(e) {
//         reject(e);
//     }
// });
// promise.catch(function(error) {
//     console.log(error);
// });

// // 写法二
// const promise = new Promise(function(resolve, reject) {
//     reject(new Error("test"));
// });
// promise.catch(function(error) {
//     console.log(error);
// });

// // 如果promise已经变成resolve，则抛出错误是无效的
// // 但是then里面的异常照样捕获
// // 一般来说，我们不要在then里面定义reject的回调函数，即第二个参数；最好使用catch方法
// const promise = new Promise(function(resolve, reject) {
//     resolve("ok");
//     throw new Error("test"); // invalid
// });
// promise.then(value => {
//     console.log(value);
//     throw new Error("test");
// }).catch(() => console.log("error")); // ok \n error

// // 7. 如果Promise有异常没有被捕获也不会传到外面的代码，即不会退出进程，后面的代码照常执行

// // 8. catch和then都有返回值，根据其回调函数的返回值类型的不同来决定，也就是说，catch后面还可以继续添加then

// // 9. catch也能继续抛出错误
// const someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         resolve(x + 2);
//     });
// };

// someAsyncThing().then(function() {
//     return someOtherAsyncThing();
// }).catch(function(err) {
//     console.log("oh, no!", error);
//     y + 2;
// }).then(function() {
//     console.log("carry on");
// });

// 10. finally在最后会执行，这个方法不接受任何参数，即与promise状态无关

// // 11. 理解then的返回值
// Promise.reject('a error')
// .then(res => console.log('res'), err => console.log('err'))
// .then(() => console.log("haha"), err => console.log('err'));

// 12. Promise.all()
// // 在任何情况下，Promise.all返回的promise的完成状态的结构都是一个数组，它包含所有的传入迭代参数对象的值
// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
//   })
//   .then(result => console.log(result))
//   .catch(e => console.log(e.message));

// const p2 = new Promise((resolve, reject) => {
//     throw new Error("error!");
// }).then(result => console.log(result)).catch(err => console.log(err.message));

// // 此时，p1和p2都是resolved状态，且传入的参数都是undefined
// Promise.all([p1, p2]).then(result => console.log(result)) // [ undefined, undefined ]
// 如果传入对象的promise本身带有catch，那么all的catch不会被调用，反之会被调用
const p1 = new Promise((resolve, reject) => {
    resolve('hello');
  })
  .then(result => console.log(result))
  .catch(e => console.log(e.message));

const p2 = new Promise((resolve, reject) => {
    throw new Error("error!");
}).then(result => console.log(result));

// 此时，p1和p2都是resolved状态，且传入的参数都是undefined
Promise.all([p1, p2]).then(result => console.log(result)).catch(e => console.log(e.message)) // error!