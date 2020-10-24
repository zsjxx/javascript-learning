## 红宝书笔记

1. 五种基本数据类型和一种复杂数据类型

   1）undefined

   2）null

   3）boolean

   4）number

   5）string

   复杂数据类型：object

2. 数值转换

   - Number()方法，可以转换任何变量，null -> 0，undefined -> NaN

   - parseInt(string, base)和parseFloat(string, base)，**只能**转换字符串

     ```javascript
     alert(parseInt("070", 8)); // 56
     alert(parseInt("070", 10)); // 70
     ```

   - toString()方法和String(base)方法，toString除了null和undefined都可以调用，当不清楚是否是null或undefined时用String，如果不是则调用toString，否则返回"null"或"undefined"。toString的base当且仅当对数字调用时有效。

3. Object类型，所有Object类型对象都含有一个属性和六个方法

- 一个属性：constructor

- hasOwnProperty(propertyName)：是否存在这个属性

- isPrototypeOf(object)，是否是另一个对象的原型

- toLocaleString()：与执行环境的地区相对应

- toString()

- valueOf()

  ```javascript
  var x = 123;
  alert(typeof x.toString()); // string "123"
  alert(typeof x.valueOf()); // number 123
  ```

3. 比较操作

   - 涉及NaN

     ```javascript
     // any operation about NaN is false
     alert(NaN > 1) // false
     alert(NaN <= 1) // false
     ```

   - $==$和$===$，前者先强制转换再比较，后者直接比较

     ```javascript
     alert("55" == 55); // true
     alert("55" === 55); // false
     ```

4. 解构赋值：一种表达式，用于将属性/值从对象/数组中取出，并赋给其他变量

   ```javascript
   var array = new Array(1, 2, 3, 4, 5);
   [a, b] = array;
   console.log(a, b); // only obtain the first two elements
   ```

   可以用于交换变量

   ```javascript
   a = 1;
   b = 2;
   [a, b] = [b, a];
   console.log(a, b); // 2, 1
   ```

   忽略不感兴趣的数

   ```javascript
   arr = [1, 2, 3, 4, 5, 6];
   [a, , b] = arr;
   [x, , , , , y] = arr;
   console.log(a, b); // 1, 3
   console.log(x, y); // 1, 6
   ```

   将剩余数组赋值给一个变量

   ```javascript
   var [a, ...theArgs] = [1, 2, 3, 4, 5, 6];
   console.log(a, theArgs); // 1 [ 2, 3, 4, 5, 6 ]
   ```

5. 函数的arguments对象

   - 命名的参数只是提供便利并不是必须的。因为参数在函数内部是用**arguments**数组来表示的

     ```javascript
     function sayHi() {
         alert(arguments[0] + arguments[1]);
     }
     sayHi(10, 10); // 20
     ```

   - arguments**像**数组，**但不是**数组，比如没有forEach和map，准确地说，除了有length属性之外没有任何Array属性

   - **默认参数**

     ```javascript
     function hi(num = 100) {
         alert(num);
     }
     
     hi(); // 100
     hi(10); // 10
     ```

   - **剩余参数**：**本质**是一个Array数组，也是Javascript表达式的一种。允许我们将一个不定数量的参数表示为一个数组，剩余参数是**真正的**数组，而arguments**不是**，且前者只包含没有对应形参的实参，后者包含了所有实参。书写方式为：最后一个命名函数**以...为前缀**，其之前的元素有实际参数提供。

     ```javascript
     function multi(multiplier, ...theArgs) {
         for (var i = 0; i < theArgs.length; i++) {
             alert(theArgs[i]);
         }
         return theArgs.map(function (element) {
             return multiplier * element;
         });
     }
     alert(multi(2, 1, 2, 3)); // 1, 2, 3 => 2 ,4, 6
     ```

     同时，也可以对剩余参数进行解构

     ```javascript
     function add(x, ...[a, b, c]) {
         alert(x * x + a + b + c);
     }
     add(1, 2, 3, 4); //10
     add(1, 2, 3); // NaN, due to the miss argument c
     add(1, 2, 3, 4, 5); // 5 is missed
     ```

   - 在严格模式下，默认参数、剩余参数和解构赋值参数都不会改变arguments的行为；在**非**严格模式下，如果存在默认参数、剩余参数或解构赋值参数，arguments**不会**跟踪实参的值；在**非**严格模式下，如果**不**存在默认参数、剩余参数或解构赋值参数，arguments**会**跟踪实参的值。

     **不**存在默认参数、剩余参数或解构赋值参数，会跟踪，即值会同步更新

     ```javascript
     // function
     function sayHi(num1) {
         alert(arguments[0]);
         num1 = 50;
         alert(arguments[0]);
         alert(num1);
     }
     sayHi(10); // 10, 50, 50
     ```

     存在默认参数、剩余参数或解构赋值参数，不会跟踪，即值不会同步更新，是独立关系

     ```javascript
     function sayHi(num1 = 1) {
         alert(arguments[0]);
         num1 = 50;
         alert(arguments[0]);
         alert(num1);
     }
     sayHi(10); // 10, 10, 50
     ```

   - 函数**没有重载**，本质是因为函数是对象，定义两次，后者会覆盖前者。