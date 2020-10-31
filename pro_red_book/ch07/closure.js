// var factorial = (function f(num) {
//     if (num < 2) return 1;
//     return f(num - 1) * num;
// });

// console.log(factorial(5)); // 120

// var factorial2 = factorial;
// factorial = null;
// console.log(factorial2(3)); // 6

// function createAge(age) {
//     return function() {
//         console.log(age * age);
//     };
// } 

// var getAgeSquare = createAge(5); // 执行完后createAge的执行环境被销毁了，但是createAge的活动对象还没被销毁
// getAgeSquare(); // 25
// getAgeSquare = null; // 现在createAge的活动对象才会被销毁

// function createFunctions(num) {
//     var ans = new Array(num);
//     for (var i = 0; i < num; i++) {
//         ans[i] = function() {
//             return i;
//         }
//     }
//     return ans;
// }

// var ans = createFunctions(5);
// for (var i = 0; i < 5; i++) {
//     console.log(ans[i]());
// } // 5 5 5 5 5

// function createFunctions(num) {
//     var ans = new Array(num);
//     for (var i = 0; i < num; i++) {
//         ans[i] = function(number) {
//             return function() {
//                 return number;
//             }
//         }(i);
//     }
//     return ans;
// }

// var ans = createFunctions(5);
// for (var i = 0; i < 5; i++) {
//     console.log(ans[i]());
// } // 0, 1, 2, 3, 4


// var factorial = (function f(num) {
//     if (num < 2) return 1;
//     return f(num - 1) * num;
// });

// console.log(function(num) {
//     return num;
// }(10)); // 10

// console.log(factorial(6)); // 720

// global = (() => {return this;})();
// (function() {
//     var that = this;
//     return function() {
//         console.log(this === global); // true
//         console.log(this === that); // true
//         console.log(global === that); // true
//     };
// })()();

// function fun() {
//     console.log(this == global);
// }

// fun();

// (function() {
//    console.log("haha");
// })(); // "haha"

// var name = "zsj";
// var ob = {
//     name: "haha",
//     getNameFunction: function() {
//         return function() {
//             console.log(this.name);
//         };
//     }
// };

// ob.getNameFunction()(); // "zsj"

(function() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})();
console.log(i); // 报错