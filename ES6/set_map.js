// const s = new Set();
// s.add(1);
// s.add(1);
// s.add(2);
// console.log(s);
// console.log(s.size); // 2 

// // 可以传入字符串
// const s1 = new Set("abcccda");
// console.log(s1); // Set(4) { 'a', 'b', 'c', 'd' }
// console.log([...s1]); // [ 'a', 'b', 'c', 'd' ] 这里指的是扩展运算符
// console.log([...s1].join('')); // "abcd"

// // add
// s.add(5);
// console.log(s);

// // delete
// s.delete(1);
// console.log(s);

// // has
// console.log(s.has(2)); // true

// // clear
// s.clear();
// console.log(s);

// // Array.from将Set转成Array
// const array = Array.from(new Set([1, 2, 3, 4, 5]));
// // 数组去重两种方式
// console.log(array); // [ 1, 2, 3, 4, 5 ]
// console.log([...new Set([1, 2, 3, 4, 5])]); // [ 1, 2, 3, 4, 5 ]

// // Set的遍历
// // keys和values一样，entries将k和v打包回来
// let set = new Set(["red", "green", "blue"]);
// for (let item of set.keys()) {
//     console.log(item); // "red", "green", "blue"
// }

// // 对象进行for...of循环时，会调用Symbol.iterator方法
// class Collection {
//     *[Symbol.iterator]() {
//         let i = 0;
//         while (this[i] !== undefined) {
//             yield this[i];
//             i++;
//         }
//     }
// }

// let mc = new Collection();
// mc[0] = 0;
// mc[1] = 1;
// for (let value of mc) {
//     console.log(value); // 0, 1
// }

// // Set的默认遍历器是Set.prototype.values，默认遍历器属性藏在对应的prototype里面
// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values); // true

// // forEach
// var s = new Set([1, 2, 3, 6, 7, 8]);
// s.forEach((item, index) => {
//     console.log(`${item} : ${index}`)
// });

// // union
// var a = [1, 2, 3];
// var b = [4, 2, 6, 3];
// let union = new Set([...a, ...b]);
// console.log(union); // Set(5) { 1, 2, 3, 4, 6 }

// // intersect
// let intersect = a.filter((item, index) => {
//     return (new Set(b)).has(item);
// });
// console.log(intersect); // [2, 3]

// // difference b - a
// let difference = b.filter(item => {
//     return !(new Set(a)).has(item);
// });
// console.log(difference); // [4, 6]

// // 想在遍历的同时改变set，两种方法
// // 方法一：Array.from
// var set = new Set([1, 2, 3]);
// console.log(Array.from(set, item => item * 2)); // [2, 4, 6]

// // 方法二：新new一个Set
// console.log(new Set([...set].map(item => item * 2))); // Set(3) { 2, 4, 6 }

// WeakSet的成员只能是对象，不然报错
// WeakSet的对象都是弱引用，即WeakSet本身不会引用对象
// 不可遍历，没有size
// add, delete. has

// var m = new Map();
// const o = {p: "hello"};
// m.set(o, "content");
// console.log(m.get(o)); // "content"

// // 也可以传入一个二维数组
// var mm = new Map([[o, "content"]]);
// console.log(m.has(o)); // true
// console.log(m.get(o)); // "content"

// // 传入二维数组是按如下算法进行的
// var items = [
//     [o, "content"],
//     ["haha", "lalal"]
// ];
// var mmm = new Map();
// items.forEach(
//     ([k, v]) => { // 解构赋值
//         mm.set(k, v);
//     }
// );
// console.log(mm.get("haha")); // "lalal"
// console.log(mm.get(o)); // "content"

// 任何具有Iterator接口，并且每个成员都是一个双元素的数组的数据结构，都可以当做Map的构造函数

// 如果是引用类型作为key，则必须地址一样才会相同，不然不同

// map的一些方法
// size
// set
// get
// has
// delete
// clear

// map 遍历方法
// keys
// values
// entries -> 默认遍历接口！
// forEach
// console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries) // true

var myMap = new Map([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
]);
// for (let [k, v] of myMap) {
//     console.log(k, v);
// }

// myMap.forEach(
//     (v, k) => {
//         console.log(k, v);
//     }
// );

// Map转数组
console.log([...myMap]); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log([...myMap.keys()]) // [ 1, 3, 5, 7, 9 ]

// 数组转map
console.log(new Map([[1, 2], [2, 3]])); // Map(2) { 1 => 2, 2 => 3 }

// map转object
Map.prototype.getCorrespondingObject = function() {
    const m = this;
    let obj = Object.create(null);
    m.forEach(
        (v, k) => {
            obj[k] = v;
        }
    );
    return obj;
}
console.log(myMap.getCorrespondingObject()); // [Object: null prototype] { '1': 2, '3': 4, '5': 6, '7': 8, '9': 10 }

// 对象转map
var ob ={"a": 1, "b": 2};
console.log(Object.entries(ob)); // [ [ 'a', 1 ], [ 'b', 2 ] ]
var m = new Map(Object.entries(ob));
console.log(m); // Map(2) { 'a' => 1, 'b' => 2 }

// weakMap只有四个方法：get set has delete