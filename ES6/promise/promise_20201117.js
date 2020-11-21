// // 介绍回调
// // 假设现在有这么一个loadScript函数
// function loadScript(src) {
//     let script = document.createElement("script");
//     script.src = src;
//     document.head.append(script);
// }

// // 如果我们想在script标签加载完毕之后调用js里面的函数
// // 我们不能直接在loadScript的后面调用，因为加载是异步的
// // 我们必须确保scirpt加载完毕之后再调用我们的方法
// // 为此，我们可以向loadScript里面传入一个回调
// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(script); // 一定会等到脚本加载完再去执行
//     document.head.append(script);
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", script => {
//     console.log(`Cool, the script ${script.src} is loaded`);
// });

// // 如果在第一个脚本加载完毕之后想要加载第二个脚本，可以采用回调嵌套
// // 这一定可以保证有序，因为只有当js代码执行完毕之后，才会进入回调内部，而执行第二个回调之前，第一个js肯定已经加载完毕啦
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", script => {
//     console.log(`Cool, the first script ${script.src} is loaded`);
//     loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", script => {
//         console.log(`Cool, the second script ${script.src} is loaded`);
//     });
// });

// // 如果想要处理error呢？
// // callback传入两个参数，分别是err和script
// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(null, script); // 一定会等到脚本加载完再去执行
//     script.onerror = () => callback(new Error("error!"));
//     document.head.append(script);
// }

// // 调用时这样调用
// loadScript("myscript.js", function(err, script) {
//     if (err) {
//         // error
//     } else {
//         // success
//     }
// });

// // promise
// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
// });

// // promise.then(value => {
// //     console.log(value);
// // }); // 经过一秒之后输出done!


// // catch
// promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("oh!")), 1000);
// });

// promise.catch(err => {
//     console.log(err.message);
// })

// // then的返回值
// // 1. 如果返回一个值，then返回一个resolved的promise对象，且该对象的resolve回调函数的传入值就是那个值
// Promise.resolve().then(value => {
//     return 10;
// }).then(value => {
//     console.log(value + 1);
// }); // 11

// // 2. 啥也不返回，then返回一个resolved的promise对象，这个对象的resolve回调函数的传入值是undefined
// Promise.resolve().then(value => {
// }).then(value => {
//     console.log(value === undefined);
// }); // true

// // 3. 抛出异常，则then返回一个rejected的promise对象，这个对象的reject回调函数传入的就是这个异常
// Promise.resolve().then(value => {
//     throw new Error("I love you!");
// }).catch(err => {
//     console.log(err.message); // I love you!
// })

// // 4. 返回的是一个fulfilled状态的promise对象，则then返回一个resolved的promise对象，这个promise对象的resolve回调函数
// Promise.resolve().then(value => {
//     return Promise.resolve(100); // 返回一个fulfilled状态的promise，这个promise的result为100
//     // 于是这个then会返回一个resolved的promise，其resolve函数的value就是返回promise的内部result值
// }).then(value => {
//     console.log(value);
// }); // 100

// 5. 返回的是一个rejected状态的promise对象，则then返回一个rejected的promise对象，这个对象的rejected状态的传入值为那个返回的promise对象的result
// Promise.resolve().then(value => {
//     return Promise.reject(new Error("cao!")); // 这个then返回一个rejected状态的promise对象，这个对象的reject函数的传入值是"cao"
// }).catch(err => {
//     console.log(err.message); // cao!
// });

// // catch的返回值
// // catch的返回值可以看做是.then(undefined, onRejected)，所以和then是一样一样的
// Promise.reject(new Error("oh no!"))
// .catch(err => {
//     console.log(err.message); // oh no!
// }).then(value => {
//     console.log(value === undefined); // true
// });


// finally
// finally的函数不接受任何参数，相当于是一个透明的中间层
// finally会保留他上一步promise的resolved或者rejected状态的值
// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("result!"), 2000);
// }).finally(() => {
//     console.log("promise ready"); // 不管是成功还是失败，只要状态变为fulfilled或者reject就马上执行这个回调
// }).then(value => {
//     console.log(value); // result!
// })

// // 用promise重写loadScript函数
// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error);
//         document.head.append(script);
//     })
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
// promise.then(srcipt => {
//     console.log(`${srcipt.src} is loaded!`);
// }).catch(err => {
//     console.log(err.message);
// });

// finally里面有返回值怎么办？
// finally的返回值不会传到下一层then
// Promise.resolve("hii")
// .finally(() => {
//     return Promise.resolve("oooo");
// }).then(res => {
//     console.log(res); // hii
// })

// // 下面的catch会被触发吗？
// window.onunhandledrejection = function(event) {
//     console.log(event.reason.message);
// }

// new Promise(function(resolve, reject) {
// // setTimeout(() => {
// //   throw new Error("Whoops!");
// // }, 1000);
// throw new Error("Whoops!");
// }).catch(err => {
//     console.log(err.message);
// });

// Promise很多静态方法
// Promise.all返回一个新的promise，如果全部resolve，则这个新的promise也resolved，并且内部resolved的传参为数组所有子promise的结果构成的数组
// promise.all返回的是一个新的promise，这个promise的resolve接受一个数组，这个数组里面装的是每个子promise的最终状态
// Promise.all([
// new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
// new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
// new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(res => {
//     console.log(res); // [1, 2, 3]
// });

// // 只要任意一个带有error，立即返回rejected的promise，并带有这个error
// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).catch(err => {
//     console.log(err.message);
// }); // Whoops!

// Promise.allSettled表示当所有子promise都不为pending时将内置value转变为一个数组
// 这个数组的元素的格式如下
// {status:"fulfilled", value:result} 对于成功的响应，
// {status:"rejected", reason:error} 对于 error。
// Promise.allSettled([
//     Promise.resolve(1),
//     Promise.reject(new Error("no!"))
// ]).then(results => {
//     results.forEach(res => {
//         if (res.status === "fulfilled") {
//             console.log(res.value); // 1 
//         } else {
//             console.log(res.reason.message); // no!
//         }
//     })
// });

// Promise.race，只等待第一个settled的promise并获取其结果
// 如果同时又reject和resolve，则看谁先
// Promise.race([
//     Promise.reject(),
//     Promise.resolve(10),
//     new Promise(res => {
//         setTimeout(() => {
//             res(20);
//         }, 1000);
//     }),
// ]).then(res => {
//     console.log(res); // 10
// });

// unhandledrejection被触发的时机，指的是微任务队列为空但是检测到存在rejected状态的promise对象时会被触发

// let promise = Promise.reject(new Error("Promise Failed!"));
// setTimeout(() => promise.catch(err => alert('caught')), 1000);

// // Error: Promise Failed!
// window.addEventListener('unhandledrejection', event => alert(event.reason));

// 但我们在执行同步脚本的时候，我们无法修改dom，如果想要修改
// 可以将大任务拆分为若干个小任务，每个任务都是不可分的，但是每个任务中间会有“空气”
// 用setTimeout来做这件事情，用setTimeout来将每个小任务装进宏任务队列，以便我可以获取到其他的的ui事件
// 在script脚本中插入这些脚本
// let i = 0;
// function count() {
//     do {
//         i++;
//         document.getElementById("idName").innerHTML = i;
//     } while(i % 1e3 != 0);

//     if (i < 1e7) {
//         setTimeout(count);
//     }
// }
// count();

// queueMicrotask介绍
// 如果想要异步执行一个函数，但是又想唉渲染或者新事件被处理之前执行完，就可以用这个
// setTimeout是送入宏任务队列，queueMicrotask是送入微任务队列

// 事件被添加到事件队列的三个条件
// 1. 启动js，比如执行到<scirpt>或者打开了console
// 2. 事件被触发，将其回调添加到事件队列
// 3. setTimeout或者setInterval到时间了，将对应的回调添加到任务队列

// async指定的函数，返回的永远是一个promise，状态是resolved
// async function f() {
//     return 10;
// }
// f().then(res => {
//     console.log(res); // 10
// });

// await永远写在async函数的里面，作用是等待promise settled然后返回结果
// async function f() {
//     let promise = new Promise(resolve => {
//         setTimeout(() => resolve("done!"), 1000);
//     });
//     let result = await promise; // 直到promise改变才会拿到最终的结果
//     console.log(result);
// }

// f().then(value => {
//     console.log(value === undefined); // true
// });

// then到底是return一个value还是一个新的promise可以自己掌控，有很大区别
// Promise.resolve()
// .then(value => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(100);
//         }, 1000);
//     });
// })
// .then(value => {
//     console.log(value);
// });

// Promise.resolve()
// .then(value => {
//     setTimeout(() => {
//         return 100;
//     }, 1000);
// })
// .then(value => {
//     console.log(value);
// });

// (async () => {
//     let value = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(100);
//         }, 1000);
//     });
//     console.log(value);
// })();

// await相比于then更加优雅，并且支持thenable对象
// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }

//     then(resolve, reject) {
//         setTimeout(() => {
//             resolve(this.num * 2);
//         }, 2000);
//     }
// }

// // 尽管不是promise实例，但是有then方法，我们的then函数还是可以获取到thenable对象的
// new Thenable(1).then(value => {
//     console.log(value);
// });

// 下面这种方法也可以哟
// (async () => {
//     let result = await new Thenable(1);;
//     console.log(result);
// })();

// await碰到error会直接抛出异常，两种办法
// 1. 在async里面使用try...catch
// 2. async返回promise，在外面catch