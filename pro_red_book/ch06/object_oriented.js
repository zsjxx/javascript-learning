var ob = {
    name: "zsj",
    sayHi: function() {
        console.log("hi")
    }
}

var descriptorOfName = Object.getOwnPropertyDescriptor(ob, "name");
console.log(descriptorOfName.configurable); // true
console.log(descriptorOfName.enumerable); // true
console.log(descriptorOfName.writable); // true
console.log(descriptorOfName.value); // "zsj"

var descriptorOfFuncion = Object.getOwnPropertyDescriptor(ob, "sayHi");
console.log(descriptorOfFuncion.configurable); // true
console.log(descriptorOfFuncion.enumerable); // true
console.log(descriptorOfFuncion.writable); // true
console.log(descriptorOfFuncion.value); // [Function: sayHi]

// 哪怕不是在对象字面量里面创造的属性，他们的内部特性也是true
ob.age = 23;
var descriptorOfAge = Object.getOwnPropertyDescriptor(ob, "age");
console.log(descriptorOfAge.configurable); // true
console.log(descriptorOfAge.enumerable); // true
console.log(descriptorOfAge.writable); // true
console.log(descriptorOfAge.value); // 23

ob = new Object();
ob.name = "zsj";
ob.sayHi = function() {
            console.log("hi")
        }

var descriptorOfName = Object.getOwnPropertyDescriptor(ob, "name");
console.log(descriptorOfName.configurable); // true
console.log(descriptorOfName.enumerable); // true
console.log(descriptorOfName.writable); // true
console.log(descriptorOfName.value); // "zsj"

var descriptorOfFuncion = Object.getOwnPropertyDescriptor(ob, "sayHi");
console.log(descriptorOfFuncion.configurable); // true
console.log(descriptorOfFuncion.enumerable); // true
console.log(descriptorOfFuncion.writable); // true
console.log(descriptorOfFuncion.value); // [Function: sayHi]

// 哪怕不是在对象字面量里面创造的属性，他们的内部特性也是true
ob.age = 23;
var descriptorOfAge = Object.getOwnPropertyDescriptor(ob, "age");
console.log(descriptorOfAge.configurable); // true
console.log(descriptorOfAge.enumerable); // true
console.log(descriptorOfAge.writable); // true
console.log(descriptorOfAge.value); // 23

Object.defineProperty(ob, "height", {
    value: 188
});
var descriptorOfHeight = Object.getOwnPropertyDescriptor(ob, "height");
console.log(descriptorOfHeight.configurable); // false
console.log(descriptorOfHeight.enumerable); // false
console.log(descriptorOfHeight.writable); // false
console.log(descriptorOfHeight.value); // 188

ob.height = 187;
console.log(ob.height);

Object.defineProperty(ob, "height", {
    height:186
});

var ob = new Object();
ob.stuList = [];
Object.defineProperties(ob, {
    _name: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: undefined
    },
    
   name: {
       get: function() {
           return "Hello, " + this._name + "!";
       },
       set: function(newValue) {
           this._name = newValue;
           this.stuList.push(newValue);
       }
   } 
});
ob.name = "zsj";
console.log(ob.stuList); // [ 'zsj' ]
ob.name = "zzz";
console.log(ob.stuList); // [ 'zsj', 'zzz' ]
console.log(ob.name); // Hello, zzz!

var ob = {
    _name: "zsj"
};
Object.defineProperty(ob, "name", {
    get: function() {
        return this._name;
    }
})
ob.name = "a";
console.log(ob.name); // still "zsj", cuz set function is not defined

function createPerson(name, age) {
    var ob = new Object();
    ob.name = name;
    ob.age = age;
    ob.sayName = function() {
        console.log(this.name);
    }
    return ob;
}

var instance = createPerson("zsj", 23);
instance.sayName(); // "zsj"

function Person(name, age) {
    this.name = name;
    this.age= age;
    this.sayName = function() {
        console.log(this.name);
    }
}

var instance = new Person("zsj", 23);
instance.sayName(); // "zsj"
console.log(instance instanceof Person); // true
console.log(instance.constructor === Person); // true

var ob = new Object();
Person.call(ob, "hj", 24);
ob.sayName(); // "hj"

function Person() {}

Person.prototype.name = "zsj";
Person.prototype.age = 23;
Person.prototype.sayName = function() {
    console.log(this.name);
}

var instance = new Person();
instance.sayName(); // "zsj"
console.log(instance instanceof Person); // true
console.log(Person.prototype.isPrototypeOf(instance)); // true


console.log(Object.getPrototypeOf(instance)); // Person { name: 'zsj', age: 23, sayName: [Function] }
console.log(Object.getPrototypeOf(instance) === Person.prototype); // true

console.log(instance.constructor === Person); // true
console.log(instance.hasOwnProperty("constructor")); // false
console.log(Person.prototype.hasOwnProperty("constructor")); // true

instance.name = "buaa";
instance.sayName(); // "buaa"
instance.name = null;
instance.sayName(); // null
delete instance.name;
instance.sayName(); // "zsj"

instance.sayName = function() {
    console.log("hah");
};
instance.sayName(); // "hah"
instance.sayName = null;;
if (instance.sayName) {
    instance.sayName(); // not executed
}
delete instance.sayName;
instance.sayName(); // "zsj"

function Person() {}
Person.prototype.name = "zsj";
var ob = new Person();
ob.age = 23;
console.log("name" in ob); // true
console.log("age" in ob); // true

// Object.keys() returns an array whose elements are strings
// corresponding to the enumerable properties found directly upon object
keys = Object.keys(ob);
console.log(keys); // [ 'age' ]
console.log(Array.isArray(keys)); // true

keys = Object.getOwnPropertyNames(ob);
console.log(keys); // [ 'age' ]
console.log(Array.isArray(keys)); // true

// returns an array of all properties (including non-enumerable
// properties except for those which use Symbol) found directly in a given object.
keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys); // [ 'constructor', 'name' ]

function isInstanceAttribute(object, name) {
    return name in object && object.hasOwnProperty(name);
}

console.log(isInstanceAttribute(ob, "name")); // false
console.log(isInstanceAttribute(ob, "age")); // true

function Person() {}
Person.prototype = {
    name: "zsj"
};
Object.defineProperty(Person.prototype, "constructor", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: Person
});
var ob = new Person();
ob.age = 23;
ob.sayName = function () {
    console.log(this.name);
}
ob.sayName(); // "zsj"

console.log(typeof Object.prototype.hasOwnProperty === "function"); // true

function Color() {}
Color.prototype.arr = ["pink"];
var ob1 = new Color();
ob1.arr.push("red");
var ob2 = new Color();
console.log(ob2.arr); // [ 'pink', 'red' ]

function Person(name, age) {
    this.name = name;
    this.age = age;
    if (typeof Person.prototype.sayName !== "function") {
        Person.prototype.sayName = function() {
            console.log(this.name);
        }
    }
}

var ob = new Person("zsj", 23);
ob.sayName(); // "zsj"

function Dad(name, age) {
    this.name = name;
    this.age = age;
    if (typeof Dad.prototype.sayName !== "function") {
        Dad.prototype.sayName = function() {
            console.log(this.name);
        };
        console.log("Dad: This is my first but the last output");
    }
}

function Son(name, age, sex) {
    // 第二次调用构造函数
    Dad.call(this, name, age);
    this.sex = sex;
    if (typeof Son.prototype.saySex !== "function") {
        Son.prototype.saySex = function() {
            console.log(this.sex);
        };
        console.log("Son: This is my first but the last output");
    }
}

// 第一次调用构造函数
Son.prototype = new Dad(); // Dad: This is my first but the last output
console.log("####"); // ####

// 虽然在new Son的时候也会第二次调用父类，但是父类原型内部的函数已经构造完毕了，没必要再创建一遍咯
// 这里只用构造子类的内部函数即可
var son = new Son("zsj", 23, "male"); // Son: This is my first but the last output
son.sayName(); // "zsj"
son.saySex(); // "male"

var son2 = new Son("zzz", 26, "female");
son2.sayName(); // "zzz"
son2.saySex(); // "female"

function A() {
    A.prototype.name = "haha";
}

function B() {
    B.prototype = {
        name: "haha"
    };
}

var ob = new A();
console.log(ob.name); // haha
var proto = Object.getPrototypeOf(ob);
console.log(proto); // A { name: 'haha' }
console.log(proto.constructor === A); // true

var ob = new B();
console.log(ob.name); // undefined
var proto = Object.getPrototypeOf(ob);
console.log(proto); // B {}
console.log(proto.constructor === B); // true

var ob2 = new B();
console.log(ob2.name); // "haha"
var proto = Object.getPrototypeOf(ob2);
console.log(proto); // { name: 'haha' }
console.log(proto.constructor === B); // false

function Dad(name, age) {
    this.name = name;
    this.age = age;
    if (typeof Dad.prototype.sayName !== "function") {
        Dad.prototype.sayName = function() {
            console.log(this.name);
        };
        console.log("Dad: This is my first but the last output");
    }
}

function Son(name, age, sex) {
    Dad.call(this, name, age);
    this.sex = sex;
    if (typeof Son.prototype.saySex !== "function") {
        Son.prototype.saySex = function() {
            console.log(this.sex);
        };
        console.log("Son: This is my first but the last output");
    }
}

// 避免了调用父类的构造函数
Son.prototype = Object.create(Dad.prototype);

console.log("####"); // ####

// 子类调用的过程中，只调用一次父类的构造函数
var son = new Son("zsj", 23, "male"); // Dad: This is my first but the last output; Son: This is my first but the last output
son.sayName(); // "zsj"
son.saySex(); // "male"

var son2 = new Son("zzz", 26, "female");
son2.sayName(); // "zzz"
son2.saySex(); // "female"

function A() {}
A.prototype.age = 23;

var ob1 = new A();
var ob2 = new A();
ob1.age = 25; // ob1的age已经变成了实例属性而不是原型属性
console.log(ob1.age); // 25
console.log(ob2.age); // 23
console.log(ob1.age === A.prototype.age); // false
console.log(ob2.age === A.prototype.age); // true，ob2的age仍然是原型属性

function A() {}
A.prototype.age = 23;

var ob1 = new A();
var ob2 = new A();
// 哪怕是++，也相当于先+1，再赋值，还是相当于定义了自己的实例属性
ob1.age++; // ob1的age已经变成了实例属性而不是原型属性
console.log(ob1.age); // 24
console.log(ob2.age); // 23
console.log(ob1.age === A.prototype.age); // false
console.log(ob2.age === A.prototype.age); // true，ob2的age仍然是原型属性

function A() {}
A.prototype.arr = [1, 2, 3];

var ob1 = new A();
var ob2 = new A();
ob1.arr = ["ha"];
console.log(ob1.arr); // [ 'ha' ]
console.log(ob2.arr); // [ 1, 2, 3 ]
console.log(ob1.arr === A.prototype.arr); // false
console.log(ob2.arr === A.prototype.arr); // true
