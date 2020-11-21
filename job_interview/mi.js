// async function async1() {
//   console.log('async1 start');
//   await async2();
//   // console.log('async1 end');
//   Promise.resolve().then(value => {
//     console.log("lalala");
//   });
// }

// async function async2() {
//   console.log('async2');
// }

// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// },0);

// async1();

// new Promise(function(resolve){
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');

// // script start
// // async1 start
// // async2
// // promise1
// // script end
// // async1 end
// // promise2
// // setTimeout




// // async1 end
// // promise1
// // script end
// // async2
// // promise2
// // setTimeout

// // (async () => {
// //   console.log(1);
// //   await new Promise(resolve => {
// //     console.log(3);
// //     resolve();
// //   });
// //   console.log(4);
// // })();

// // console.log(2);

// // // 1 3 2 4

// // (async () => {
// //   await Promise.resolve();
// //   await new Promise(resolve => {
// //     resolve();
// //     console.log(3);
// //     setTimeout(() => {
// //       console.log(4);
// //     }, 0);
// //   });
// //   console.log(1);
// // })();
// // console.log(2);

// // 2 3 1 4

// // new Promise(resolve => {
// //   console.log(1);
// // });
// // console.log(2);

// // // 1 2

// // (async () => {
// //   await Promise.resolve();
// //   await new Promise(resolve => {
// //     console.log(1);
// //   });
// // })();
// // console.log(2);

// // // 2 1

// // new Promise(resolve => {
// //   console.log(1);
// // });

// // new Promise(resolve => {
// //   console.log(2);
// // });

// // console.log(3);

// // // 1 2 3

// // (async () => {
// //   await new Promise(resolve => {
// //     console.log(1);
// //     resolve();
// //     console.log(4);
// //   });
// //   await new Promise(resolve => {
// //     console.log(2);
// //   });
// // })();

// // console.log(3);

// // // 1 4 3 2

// // (async () => {
// //   await Promise.resolve();
// //   let res = await new Promise(resolve => {
// //     resolve(5);
// //     console.log(3);
// //     setTimeout(() => {
// //       console.log(4);
// //     }, 0);
// //   });
// //   console.log(res);
// //   console.log(1);
// // })();
// // console.log(2);

// // // 2 3 5 1 4

// // (async () => {
// //   await Promise.resolve();
// //   let res = await new Promise(resolve => {
// //     console.log(3);
// //     setTimeout(() => {
// //       console.log(4);
// //       resolve(5);
// //     }, 0);
// //   });
// //   console.log(res);
// //   console.log(1);
// // })();
// // console.log(2);

// // // 2 3 4 5 1

(async () => {
  await Promise.resolve();
  Promise.resolve().then(value => {
    console.log(1);
  });
})();
Promise.resolve().then(value => {
  console.log(2);
});
console.log(3);

// 3 2 1