// // Reflect有13个和Proxy一一对应的静态方法
// var ob = {
//     name: "zsj"
// };
// console.log(Reflect.get(ob, "name")); // "zsj"

// 使用proxy和reflect实现观察者模式
const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn); // 添加触发相应
const observable = obj => new Proxy(obj, { // 返回proxy实例
    set(target, key, value, receiver) {
        const res = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(fn => fn());
        return res;
    }
});

const person = observable({
    name: "zsj",
    age: 23
});
observe(function() {
    console.log(person.name, person.age);
});
person.name = "abc"; // "abc 23"