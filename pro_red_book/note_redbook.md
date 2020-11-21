## 红宝书笔记

1. 五种基本数据类型和一种复杂数据类型

   1）undefined

   2）null

   3）boolean

   4）number

   5）string（只读）

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

6. 变量有两种，基本类型值（五种基本类型）和引用类型值（对象类型）。

7. **所有**函数的参数都是**按值传递**的。

   - 传递基本类型值时，被传递的值会被赋值给一个局部变量，即arguments对象中的某个元素。

   - 传递引用类型值时，这个**值在内存中的地址**会被赋值给一个局部变量，即arguments对象中的某个元素。这个局部变量本质为**地址/指针**，所以，当修改这个局部变量**内存中的值**时，会影响到外部实参；当修改这个局部变量**本身**时，外部实参不受影响。

     ```javascript
     function changeOb(obj) {
         obj.name = "nihao";
         obj = new Object();
         obj.name = "wobuhao";
     }
     
     var obj = new Object();
     changeOb(obj);
     console.log(obj.name); // nihao
     ```

8. 检测值的类型

   - 对于五大基本类型，用typeof

   - 对于对象，用instanceof

     ```javascript
     var a = 15;
     var b = new Object();
     console.log(typeof a); // number
     console.log(b instanceof Object); // true
     ```

9. 执行环境及作用域

   - 执行环境定义了变量或者函数有权访问的其他数据，决定了他们各自的行为。

   - 执行环境分为两种，一种是**全局执行环境**，一种是**函数局部环境**。

   - **每个**执行环境都有一个与之关联的**变量对象**，保存着执行环境中的所有变量和函数。对于全局执行环境，变量对象是**window对象**；对于函数局部环境，变量对象是**活动对象**，这个活动对象是在变化的，但始终只有一个。变化过程可以理解为是一种**沿着作用域链向上搜索**的过程。最坏情况下，从该函数局部环境的**作用域链**的**前端**（即arguments对象）开始，直至**window对象**。

   - 对于每个**变量对象**，都对应一个**作用域链**，作用是保证对执行环境有权访问的所有变量和函数的有序访问。作用域链**由里向外**把按序把所有**变量对象**都串起来，直至window对象。

   - 作用域链的前端（本质也是变量对象），指当前执行代码所处的执行环境的变量对象，解析的搜索过程始终从作用域链的前端开始。

   - 当执行流进入一个函数时，函数的环境会被推入一个**环境栈**。

     ```javascript
     var color = "blue";
     
     function changeColor() {
         var anotherColor = "red";
     
         function swapColor() {
             // can visit color, anotherColor, tempColor
             var tempColor = "grey";
             tempColor = color;
             color = anotherColor; // this color refers to the global color
             anotherColor = tempColor; // this anotherColor refers to the variable within changeColor scope
         }
         // can visit color, anotherColor
         swapColor(); 
         console.log(anotherColor); // blue
     }
     // can visit color
     changeColor();
     console.log(color); // red
     ```

     ```
     window
     ├─ color
     ├─ changeColor
        ├─ anotherColor
        ├─ swapColor
        	  ├─ tempColor
     ```

10. 使用var声明的变量会被自动添加到离它最近的执行环境中，如果没有使用var声明，先顺着作用域找，如果没找到，就会被自动添加到**全局执行环境**中去。

    ```javascript
    function add(x, y) {
        sum = x + y;
        return sum; // 加var会报错
    }
    
    add(10, 20);
    console.log(sum); // 30
    ```

11. Javascript没有块级作用域

    ```javascript
    for (var i = 0; i < 10; i++) {}
    console.log(i); // 10
    ```

12. 垃圾收集机制的两大策略：标记清除（最常用）和引用计数。

    - 标记清除法的原理是：将**无法使用的对象**定义为**无法到达的对象**，即从根部开始（全局对象window），定时扫描内存中的对象，凡是能从根部到达的对象都是还需要使用的，否则进行回收。具体操作是：垃圾收集器在运行时给所有在内存中的变量加上标记，接着去除还在环境中的变量**以及**被环境中的变量引用的变量的标记，那么仍被标记的所有变量将被回收。这种方式有效解决了循环引用的问题。

    - 有零引用的对象 => 不可获得的对象，反之不成立。
    - 在某个对象不再使用时，手动置null是个好习惯，目的是方便下次垃圾收集器将其回收。

13. Array——创建数组

    - 用new的方式

      ```javascript
      var arr = new Array();
      console.log(arr); // []
      
      var arr = new Array(3);
      console.log(arr[0]); // undefined
      console.log(arr); // [ <3 empty items> ]
      console.log(arr.length); // 3
      
      var arr = new Array(1, 2, 3);
      console.log(arr); // [1, 2, 3]-
      ```

    - 用**数组字面量**，该方式**不会**调用Array构造函数

      ```javascript
      var arr = [1, 2, 3];
      console.log(arr); // [1 ,2 ,3]
      ```

14. Array——length

    length是可写的，如果减少，真的会删除多余的项，其中length--等效于pop()

    ```javascript
    var arr = [1, 2, 3];
    console.log(arr); // [1 ,2 ,3]
    arr.length--;
    console.log(arr); // [1, 2]
    arr.pop();
    console.log(arr); // [1]
    ```

    如果增加length，数组会扩容，未定义的项为undefined

    ```javascript
    var arr = [1]
    arr.length = 5;
    console.log(arr); // [ 1, <4 empty items> ]
    console.log(arr[4]); // undefined
    ```

    利用arr[arr.length]可以模拟C++的push_back操作

    ```javascript
    var arr = [2];
    arr[arr.length] = 3;
    console.log(arr); // [2 ,3]
    ```

15. Array——检测数组

    - 在进行接下来的归纳之前，先了解一下toString()这个函数，**除了对象类型**，其他所有**五大基本类型**（除null和undefined）在调用toString()之后都会返回字符串；对象类型一律返回"[object Object]"或者"[object Array]"等；null和undefined用toString()会报错，必须用**转型函数**String()来转成对应的字符串。由此我们可知，我们可以用Object的toString()方法来检测数组！顺便一提，toString()一定要加括号，不加返回的是$[Function: toString]$这个函数类型。

    - **方法一**：利用Object.prototype.toString.call()，自己构造一个函数用于判断

      ```javascript
      const myIsArray = (something) => {
          return Object.prototype.toString.call(something) === '[object Array]';
      }
      ```

      我们来看一下实例

      ```javascript
      arr = [1, 2, 3];
      num = 1;
      str = "haha";
      obj = {};
      boo = true;
      nul = null;
      undef = undefined;
      console.log(arr.toString()); // "1, 2, 3"
      console.log(num.toString()); // "1"
      console.log(str.toString()); // haha
      console.log(obj.toString()); // [object Object]
      console.log(boo.toString()); // "true"
      console.log(String(null)); // "null"
      console.log(String(undefined)); // "undefined"
      console.log(arr.toString); // [Function: toString]
      console.log(Object.prototype.toString.call(arr)); // [object Array] this is what we want
      ```

    - **方法二**：利用instanceof。这种方法很好，适用于单一环境的情况，但是如果碰到多个全局执行环境，且涉及到不同环境之间共享参数的问题，就会出错。

      **首先**，Chrome不支持access a cross-origin frame，为此，我们要先在cmd里面输入：

      ```cmd
      chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
      ```

      这样打开的chrome就支持了，我们在这个新打开的浏览器里面调试。

      我们设计两个html，在父html中定义iframe，我们在子html检测父html定义的html是否是Array对象。

      - dad.html

        ```html
        <!DOCTYPE HTML>
        <html>
            <head></head>
            <body>
                <p>I am dad.</p>
                <iframe src="child.html" width="600px" height="600px"></iframe>
            </body>
            <script src = "dad.js"></script>
        </html>
        ```

      - dad.js

        ```javascript
        arr = [1, 2, 3];
        console.log("in dad, compared with Array: " + (arr instanceof Array).toString()); // true;
        ```

      - child.html

        ```html
        <!DOCTYPE HTML>
        <html>
            <head></head>
            <body>
                <p>I am son.</p>
            </body>
            <script src = "child.js"></script>
        </html>
        ```

      - child.js

        ```javasc
        console.log("in son, compared with Array: " + (window.parent.arr instanceof Array).toString()); // false
        ```

    **本质原因**：instanceof的本质就是，比如 obj instanceof Array，就是看Array的prototype是否出现在obj的原型链上。如果出现在不同的执行环境上，不同环境的Array的prototype不是一个东西，因为最终的Global都不一样，分属两个不同的window，所以不一致。

    - **方法三**：通过constructor，**不建议**，因为constructor可以改，而且碰到不同环境的问题也会返回false。

      ```javascript
      console.log("in son, compared with window.parent.Array.constructor: " + (window.parent.arr.constructor === window.parent.Array).toString()); // true
      console.log("in son, compared with Array.constructor: " + (window.parent.arr.constructor === Array).toString()); // false
      ```

    js代码如下：

    dad.js

    ```javascript
    arr = [1, 2, 3];
    console.log("in dad, compared with Array: " + (arr instanceof Array).toString()); // true;
    console.log("in dad, using Array.isArray " + (Array.isArray(arr)).toString()); // true
    
    const myIsArray = (something) => {
        return Object.prototype.toString.call(something) === '[object Array]';
    }
    console.log("in dad, using Object.prototype.toString.call(): " + (myIsArray(arr)).toString()); // true;
    ```

    child.js

    ```javascript
    const myIsArray = (something) => {
        return Object.prototype.toString.call(something) === '[object Array]';
    }
    
    console.log("in son, compared with Array: " + (window.parent.arr instanceof Array).toString()); // false
    console.log("in son, compared with window.parent.Array: " + (window.parent.arr instanceof window.parent.Array).toString()); // true
    console.log("in son, compared with window.parent.Array.constructor: " + (window.parent.arr.constructor === window.parent.Array).toString()); // true
    console.log("in son, compared with Array.constructor: " + (window.parent.arr.constructor === Array).toString()); // false
    console.log("in son, using Array.isArray " + (Array.isArray(window.parent.arr)).toString()); // true
    console.log("in son, using Object.prototype.toString.call(): " + (myIsArray(window.parent.arr)).toString()); // true;
    
    ```

    实验结果

    ![](https://i.loli.net/2020/10/26/AlOkmVaT34qsSwJ.jpg)

16. Array——toString()、valueOf()以及join()

    对Array对象使用toString()和valueOf()分别返回string和object

    join()默认为逗号分隔

    ```javascript
    arr = [1, 2, 3, "haha"];
    console.log(arr.toString()); // 1,2,3,haha
    console.log(arr.valueOf()); // [ 1, 2, 3, 'haha' ]
    console.log(arr.join()); // 1,2,3,haha
    console.log(arr.join("#")); // 1#2#3#haha
    console.log(typeof arr.toString()); // string
    console.log(typeof arr.valueOf()); // object
    ```

17. Array——栈和队列，pop、shift都有返回值

    - 栈方法，push可以传入多个

      ```javascript
      arr = [1, 2, 3];
      arr.push(5);
      arr.push(5, 6);
      arr.push([7, 8]);
      console.log(arr); // [ 1, 2, 3, 5, 5, 6, [ 7, 8 ] ]
      top = arr.pop();
      console.log(top); // [7, 8]
      ```

    - 队列方法

      ```javascript
      arr = [1, 2, 3];
      head = arr.shift();
      console.log(arr); // [2, 3]
      arr.unshift(100); 
      console.log(arr); // [100, 2, 3]
      rear = arr.pop();
      console.log(arr); // [100, 2]
      ```

18. Array——就地排序和逆置，sort和reverse**均无返回值**

    - sort(compare)默认对toString进行排序，因此要指定compare

    - compare(a, b)，**要让a在b前面，就返回一个负数**，因此升序是a-b，降序是b-a

      ```javascript
      arr = [7, 5, 3, 11, 10];
      arr.sort((a, b) => {
          return a - b;
      });
      console.log(arr); // [ 3, 5, 7, 10, 11 ]
      arr.reverse();
      console.log(arr); // [ 11, 10, 7, 5, 3 ]
      ```

19. Array——concat、slice和splice，**均有返回值**，concat返回连接后的副本，slice的返回值是切片，splice的返回值是被删除项组成的数组（没有删则为空数组）；concat和slice不会修改原数组，splice会修改原数组

    - concat有返回值，返回副本，不会修改原数组，传入参数不限，且可以是数字和数组，最后都会全部拼在一起，如果是想要二维，则传入的也得是二维，总之穿进去的都会解包一层。

      ```javascript
      arr = [1, 2, 3, 4];
      console.log(arr.concat(5)); // [ 1, 2, 3, 4, 5 ]
      console.log(arr); // [ 1, 2, 3, 4 ]
      console.log(arr.concat(6, 7)); // [ 1, 2, 3, 4, 6, 7 ]
      console.log(arr); // [ 1, 2, 3, 4 ]
      console.log(arr.concat([8, 9])); // [ 1, 2, 3, 4, 8, 9 ]
      console.log(arr); // [ 1, 2, 3, 4 ]
      console.log(arr.concat([10, 11], 12)); // [1,  2,  3, 4, 10, 11, 12]
      console.log(arr); // [ 1, 2, 3, 4 ]
      console.log(arr.concat(13, [14, 15], 16)); // [1, 2, 3, 4, 13, 14, 15, 16]
      console.log(arr); // [ 1, 2, 3, 4 ]
      
      arr2 = [[1]];
      console.log(arr2.concat([2])); // [ [ 1 ], 2 ]
      console.log(arr2.concat([[2]])); // [[1], [2]]
      ```

    - slice和python一样用，还可以有负数哟

      ```javascript
      arr = [7, 5, 3, 11, 10];
      console.log(arr.slice(0, -1)); // [ 7, 5, 3, 11 ]
      console.log(arr); // [ 7, 5, 3, 11, 10 ]
      ```

    - splice传入三个参数：起始位置、要删除/替换的项数，替换/插入的值（可以是多个参数）

      - 删除，只需要用到前两项

        ```javascript
        arr = [1, 2, 3, 4, 5];
        console.log(arr.splice(0, 2)); // [1, 2]
        console.log(arr); // [3, 4, 5]
        ```

      - 插入，用到前三项，其中**第二项是0**，注意哦，第一项起始位置如果有项，则会后挪给待插入的元素腾地方，如果没有项直接插进去

        ```javascript
        arr = [1, 2, 3, 4, 5];
        console.log(arr.splice(arr.length, 0, 6)); // []
        console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
        console.log(arr.splice(arr.length - 1, 0, 7));
        console.log(arr); // [1, 2, 3, 4, 5, 7, 6]
        console.log(arr.splice(arr.length, 0, 6, 7, 8, 9));
        console.log(arr); // [1, 2, 3, 4, 5, 7, 6, 6, 7, 8, 9]
        console.log(arr.splice(arr.length, 0, [10, 11]));
        console.log(arr); // [ 1, 2, 3, 4, 5, 7, 6, 6, 7, 8, 9, [ 10, 11 ] ]
        ```

      - 替换，用到三项，第二项不为0

        ```javascript
        arr = [1, 2, 3, 4];
        console.log(arr.splice(1, 2, 100, 101)); // [2, 3]
        console.log(arr); // [1, 100, 101, 4]
        ```

20. Array——indexOf和lastIndexOf，没找到返回-1，**有返回值**

    ```javascript
    arr = [100, 101, 103, 103, 105];
    console.log(arr.indexOf(103)); // 2
    console.log(arr.lastIndexOf(103)); // 3
    ```

21. Aarry——迭代方法：五个，every、some、filter、map、forEach。每个方法接受两个参数：在每一项上运行的函数以及运行该函数作用域的对象（thisArg，影响this），那个函数，传入三个参数：正在处理的数组项、正在处理的下标以及数组本身，即(element, index, array)，建议就这么写死。**除了forEach**都有返回值！**所有**操作都**不**改变原数组。

    - every，当且所有项满足测试返回true否则false

      ```javascript
      arr = [1, 2, 63, 5, 6];
      console.log(arr.every((element, index, array) => {
          return element > 50;
      })); // false;
      console.log(arr); // [ 1, 2, 63, 5, 6 ]
      ```

    - some，只要有一项满足测试就返回true

      ```javascript
      arr = [1, 2, 63, 5, 6];
      console.log(arr.some((element, index, array) => {
          return element > 50;
      })); // true
      console.log(arr); // [ 1, 2, 63, 5, 6 ]
      ```

    - filter，返回满足测试的项组成的数组，没有就为[]

      ```javascript
      arr = [1, 2, 63, 5, 6];
      console.log(arr.filter((element, index, array) => {
          return element > 50;
      })); // [63]
      console.log(arr.filter((element, index, array) => {
          return element > 100;
      })); // []
      console.log(arr); // [ 1, 2, 63, 5, 6 ]
      ```

    - map，返回新数组

      ```javascript
      arr = [1, 2, 63, 5, 6];
      console.log(arr.map((element, index, array) => {
          return element  * index;
      })); // [ 0, 2, 126, 15, 24 ]
      console.log(arr); // [ 1, 2, 63, 5, 6 ]
      ```

    - forEach，无返回值，也不修改数组。和for循环很像，但是**没有**break和continue！

      ```javascript
      arr = [1, 2, 63, 5, 63, 6];
      arr.forEach((element, index, array) => {
          if (element == 63) {
              console.log('I love you.'); // output * 2
              // break; // error!
          }
      });
      console.log(arr); // [ 1, 2, 63, 5, 63, 6 ]
      ```

22. Array——reduce和reduceRight，这两个函数都有返回值并且均为一个值，**不会**修改原数组。reduce传入两个参数，一个函数和一个初始值。这个函数有四个参数：累加器、当前值、当前索引和array本身。如果不指定初始值，则当前值和当前索引从0位置的下一个开始（如果存在的话），acc为0位置的值；如果指定初始值，则当前值从0位置开始遍历起。**对空数组不指定初始值会报错。**

    - 没有初始值

      ```javascript
      arr = [1, 2, 3, 4];
      console.log(arr.reduce((acc, curValue, index, array) => {
          return acc + curValue;
      })); // 10
      console.log(arr); // [ 1, 2, 3, 4 ]
      ```

      ![](https://i.loli.net/2020/10/26/p4Q3NlUSjiADcf7.jpg)

    - 有初始值

      ```javascript
      arr = [1, 2, 3, 4];
      console.log(arr.reduce((acc, curValue, index, array) => {
          return acc + curValue;
      }, 100)); // 110
      console.log(arr); // [ 1, 2, 3, 4 ]
      ```

    - 空数组不指定/指定初始值

      ```javascript
      arr = [];
      console.log(arr.reduce((acc, curValue, index, array) => {
          return acc + curValue;
      }, 11)); // 11, causing error if no initial value
      console.log(arr); // []
      ```

23. Object对象，构造方法有new和**对象字面量**，后者不会调用Object的构造函数。

    - new

      ```javascript
      var ob = new Object();
      ob.name = "zsj";
      ob.age = 23;
      console.log(ob.name, ob.age); // "zsj", 23
      ```

    - 对象字面量

      ```javascript
      var ob = {
          name: "zsj",
          age: 23
      };
      console.log(ob.name, ob.age); // "zsj", 23
      ```

    
    - 在使用**变量**来访问属性时，**只能使用方括号**。
    
      ```javascript
      var ob = {};
      ob.name = "zsj";
      var myName = "name";
      console.log(ob.myName); // undefined
      console.log(ob[myName]); // "zsj"
      ```
    
24. Date对象，用到再查

    ```javascript
    // obtaining current time automatically
    var now = new Date();
    console.log(now); // 2020-10-27T06:07:42.647Z
    console.log(typeof now); // object
    
    // return the millisecond from 1970 up to now
    var now = Date.now();
    console.log(now); // 1603778959702
    
    // set the specific date
    var someDate1 = new Date("5/26/1997");
    console.log(someDate1); // 1997-05-25T16:00:00.000Z
    var someDate2 = new Date("May 27, 1997");
    console.log(someDate2); // 1997-05-25T16:00:00.000Z
    
    // invoke valueOf() method when comparing
    console.log(someDate1 < someDate2); // true
    ```

25. Function对象

    - 函数声明和函数表达式只有**唯一一点区别**，即函数声明会在解释器执行任何代码之前率先读取，所以函数声明的位置可以任意，而函数表达式不行，要考虑执行的顺序。

    - 函数是对象，所以函数之间的赋值都是指针指来指去。

      ```javascript
      function sum(a, b) {
          return a + b;
      }
      
      sum2 = sum;
      sum2 = null;
      console.log(sum(1, 2)); // 3
      ```

      Object类型也是，两个变量的赋值仅仅说明两个指针指向同一内存，让其中一个变成null并不会影响内存中的值，置null的**唯一目的**是让GC识别出将要被回收的对象。但是，我们如果影响了内存中的值，其他变量也会受到影响。

      ```javascript
      // understanding the copy machanism thoroughly
      var ob1 = {name: "zsj"};
      ob2 = ob1;
      ob2 = null;
      console.log(ob1.name); // zsj
      ob2 = ob1;
      ob2.age = 23;
      console.log(ob1.age); // 23
      ```

    - 函数可以作为值返回，比如我们想根据对象中的某些属性进行排序。

      ```javascript
      function compareByPropertyName(propertyName) {
          return (ob1, ob2) => {
              if (ob1[propertyName] < ob2[propertyName]) {
                  return -1;
              }
              else if (ob1[propertyName] == ob2[propertyName]) {
                  return 0;
              }
              else {
                  return 1;
              }
          };
      }
      
      var arr = [{name: "zsj", score: 100}, {name: "abc", score: 99}];
      arr.sort(compareByPropertyName("name"));
      console.log(arr); // [ { name: 'abc', score: 99 }, { name: 'zsj', score: 100 } ]
      arr.sort(compareByPropertyName("score"));
      console.log(arr); // [ { name: 'abc', score: 99 }, { name: 'zsj', score: 100 } ]
      ```

    - 函数的内部对象（只能在函数的内部调用，函数外部不能用）：this、arguments（含一个**属性**arguments.callee，而不是方法）和caller

      - arguments.callee（**不推荐**，在ES5严格模式下不让用）

        这是个属性，指向拥有这个arguments的函数，但是递归中的函数和不递归的函数持有的**this是不一样的**！看下面的例子！

        ```javascript
        // The following code should be executed inside browser
        var global = this;
        function test(flag) {
            if (!flag) arguments.callee(true);
            else console.log(this === global);
        }
        test(false); // false
        test(true); // true
        ```

        如果换成函数名，就对了。

        ```javascript
        // The following code should be executed inside browser
        var global = this;
        function test(flag) {
            if (!flag) test(true);
            else console.log(this === global);
        }
        test(false); // true
        test(true); // true
        ```

        下面我们来输出一下递归中和没有在递归中的函数对应的this分别是什么

        ```javascript
        // The following code should be executed inside browser
        function test(flag) {
            if (!flag) arguments.callee(true);
            else console.log(this);
        }
        test(false); // [object Arguments], in recursiving stage, the environment becomes the arguments
        test(true); // [object global]
        ```

        ![](https://i.loli.net/2020/10/27/CviLA7UY46DmsEq.jpg)

      - caller（ES5严格模式禁用）

        指向调用当前**函数的函数**引用

        ```javascript
        function fun1() {
            fun2();
        }
        function fun2() {
            console.log(fun2.caller);
        }
        fun1(); // [Function: fun1]
        ```

    - 函数作为对象，其自身的属性和方法：**length和apply & call & bind**

      - length：返回函数希望接受的命名参数的个数

        ```javascript
        function fun(a, b) {
            return a + b;
        }
        console.log(fun.length); // 2
        ```

      - apply：传入两个参数：作用域（必选）和参数（可选，以数组形式）

        ```javascript
        // The following code should be executed insides browser
        var color = "red";
        var ob = {color: "pink"};
        function showColor() {
            console.log(this.color);
        }
        showColor.apply(this); // "red"
        showColor.apply(ob); // "pink"
        ```

        apply和call还可以传参，不过感觉没多大用处。

        ```javascript
        function add1(...theArgs) {
            return theArgs.reduce((acc, curValue, index, array) => {
                return acc + curValue;
            });
        }
        function add2(...theArgs) {
            return add1.apply(this, theArgs); // only one argument
        }
        console.log(add2(1, 2, 3, 4, 5, 6)); // 21
        ```

      - call，传参的个数可以不限

        ```javascript
        function add(a, b, c) {
            console.log(a + b + c);
        }
        add.call(this, 1, 2, 3); // 6
        ```

      - bind：返回函数实例，传入的参数为该函数绑定的执行环境this

        ```javascript
        function showProperty(propertyName) {
            console.log(this[propertyName]);
        }
        var stu = {name: "zsj"};
        name = "zzz";
        showProperty.bind(stu)("name"); // "zsj"
        ```

26. 基本包装类型——Boolean、Number和String

    需要说明的是，boolean、number和string这三个基本类型都有一个对应的**基本包装类型**，我们应该尽可能**避免**显式地去创建基本包装类型的实例，但是其机制需要了解。当我们调用基本类型的属性或者方法时，实则后台做了以下三件事。

    1）创建对应的基本包装类型实例

    2）在实例上调用相关方法

    3）销毁这个实例

    因为只有对象才有属性和方法，基本类型是没有的，所以之所以你能对基本类型调用属性和方法，就是因为后台偷偷创建了对应的基本包装类型的实例！

    - **转型函数**和**构造函数**：不加new是转型函数，比如用String()对null和undefined进行转型，加new是构造函数。

      ```javascript
      console.log(typeof Number("23")); // number
      console.log(typeof new Number("23")); // object
      console.log(typeof new Number("23").valueOf()); // number
      ```

    - Number类型

      这里只介绍toString(base)，顺便一提，字符串的valueOf()仍为字符串

      ```javascript
      var num = 23;
      console.log(num.toString(8)); // 27
      console.log(typeof num.toString(8)); // string
      console.log(typeof num.toString(8).valueOf()); // string
      ```

    - String类型

      ​	下面所有方法都有返回值，且不修改原字符串

      - charAt(index)，返回的仍为字符串，等效于[]

        ```javascript
        var str = "abc";
        console.log(str.charAt(1)); // "b"
        console.log(typeof str.charAt(1)); // string
        console.log(str[1]); // "b"
        ```

      - concat，接收参数为任意项

        ```javascript
        var str = "abc";
        console.log(str.concat("d", "e")); // abcde
        console.log(str); // abc
        ```

      - slice、substr和substring：slice和数组的一样返回切片，可以为负值；substr和C++一样，为起始下标和长度；substring和slice基本一样，就负值的情况不一样，这里不深究，很少用到。

        ```javascript
        console.log(str.slice(-3)); // efg
        console.log(str.substr(4, 3)); //efg
        console.log(str.substring(4, 5 + 3)); // efg
        ```

      - indexOf、lastIndexOf

        ```javascript
        var str = "abcdefg";
        console.log(str.indexOf("a")); // 0
        ```

      - trim，等价于Python里的split()，但是只能删除两旁空格，别的符号删不了，所以没参数

        ```javascript
        var str = "    abcde  fg   ";
        console.log(str.trim()); // "abcde  fg"
        ```

      - toLowerCase、toUpperCase，只关心字符串里面的字母

        ```javascript
        var str = "1Ab";
        console.log(str.toLowerCase()); // 1ab
        console.log(str.toUpperCase()); // 1AB
        ```

27. 单体内置对象

    单体内置对象指的是：由ECMAScript提供的、不依赖与宿主环境的对象，这些对象在程序员执行代码之前就已经存在了。如下：

    1）Object

    2）Global

    3）Array

    4）Date

    5）Function

    6）String

    7）Math

    8）Boolean

    9）Number

    等等...

    上面说的这些都是对象，别看首字母大写，他们是**实打实**的对象，而不是模板。他们在代码执行前就已经存在了。

    - Global对象：兜底对象，**除了null之外**，所有变量和函数都是局部的，不存在全局变量或全局函数这个概念。下面这些**原生构造函数**或**特殊值**（不包括null）都是Global对象的属性，如：

      1）undefined

      2）NaN

      3）Date

      4）String

      5）Number

      6）Boolean

      7）Function

      8）Object（是构造函数，也是对象，用typeof会返回"function"）

      9）Array

      10）Infinity

      等等...

      ```javascript
      global = (() => {return this})();
      global === window; // true
      global.hasOwnProperty(NaN) // true
      typeof global.Object == "function" // true
      typeof Object; // "function"
      ```

      Global对象还有一些方法，如parseInt()、isNaN()等。

      - URI编码方法：encodeURI()和encodeURIComponent()，前者传入完整URI但是不会处理特殊字符如#，后者一般传入URI的某一段，所有特殊字符都会处理。

        ```javascript
        var url = "https://talent.baidu.com/external/baidu/campus.html#/jobDetail/all/1/170111"
        console.log(encodeURI(url)); // https://talent.baidu.com/external/baidu/campus.html#/jobDetail/all/1/170111
        console.log(encodeURIComponent(url)); // https%3A%2F%2Ftalent.baidu.com%2Fexternal%2Fbaidu%2Fcampus.html%23%2FjobDetail%2Fall%2F1%2F170111
        ```

      - URI解码：decodeURI()和decodeURIComponent()，前者不会特殊字符转换后的字符进行解码，后者会。

        ```javascript
        var url = "https%3A%2F%2Ftalent.baidu.com%2Fexternal%2Fbaidu%2Fcampus.html%23%2FjobDetail%2Fall%2F1%2F170111"
        console.log(decodeURI(url)); // https%3A%2F%2Ftalent.baidu.com%2Fexternal%2Fbaidu%2Fcampus.html%23%2FjobDetail%2Fall%2F1%2F170111
        console.log(decodeURIComponent(url)); // https://talent.baidu.com/external/baidu/campus.html#/jobDetail/all/1/170111
        ```

      - eval()方法，执行传入字符串的代码

        ```javascript
        eval("console.log(\"I love you\")"); // I love you
        ```

    - Math对象

      - max、min

        ```javascript
        console.log(Math.max(4, 2, 6, 8)); // 8
        console.log(Math.min(4, 2, 6, 8)); // 2
        ```

      - ceil、round（四舍五入）、floor

      - random()，返回(0, 1)之间随机数

        从一个范围[*upperBounce*, *lowerBounce*]里面随机选一个值，公式如下：

        return Math.floor(Math.random() * (*upperBounce* - *lowerBounce* + 1) + *lowerBounce*);

        随机挑颜色代码：

        ```javascript
        function selectFrom(lowerBounce, upperBounce) {
            return Math.floor(Math.random() * (upperBounce - lowerBounce + 1) + lowerBounce); 
        }
        var colorList = ["red", "black", "blue", "grey", "purple"];
        console.log(colorList[selectFrom.call(this, 0, colorList.length)]);
        ```


28. 属性类型：属性类型分为两类，**数据属性**和**访问器属性**，每类属性都有四个**内部特性**。
    - 数据属性：可以是实例属性、对象或者函数，含有以下四个内部特性：
      - [[Configurable]]：表示能否通过delete删除该属性或者修改该属性的值。**一旦改为false，就不能改回true**。
      - [[Enumerable]]：表示能否通过for-in循环返回属性
      - [[Writable]]：表示能否修改属性的值
      - [[Value]]：包含该属性的值
    
    - 访问器属性：也是一个属性，这个属性有四个特性，即：
      - [[Configurable]]：表示能否通过delete删除该属性或者修改该属性的值。**一旦改为false，就不能改回true**。
      - [[Enumerable]]：表示能否通过for-in循环返回属性
      - [[Get]]：get方法，在读取时调用的函数，默认为undefined
      - [[Set]]：set方法，在写入时调用的函数，默认为undefined
    
    - 查看内部属性的方法：Object.getOwnPropertyDescriptor(对象, 要查看的属性)
    
      ```javascript
      var ob = {
          name: "zsj",
          sayHi: function() {
              console.log("hi")
          }
      }
      
      var descriptorOfName = Object.getOwnPropertyDescriptor(ob, "name");
      console.log(descriptorOfName.configurable); // true
      ```
    
    - configurable如果为false，则不能改回true，不然报错，并且false的时候不能修改值、不能删也不能变成其他属性，不然直接无视。
    
    - 除非用Object.defineProperty()方法，不论是new的对象还是对象字面量创建的对象，其属性的前三个内部特性都是true，[[Value]]为实际值。
    
      ```javascript
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
      ```
      
      用Object.defineProperty定义的属性，没有指定的值一律为false或者undefined（针对[[Value]]）。Object.defineProperty传入三个参数：对象名、属性名、内部特性/值键值对
      
      ```javascript
      Object.defineProperty(ob, "height", {
          value: 188
      });
      var descriptorOfHeight = Object.getOwnPropertyDescriptor(ob, "height");
      console.log(descriptorOfHeight.configurable); // false
      console.log(descriptorOfHeight.enumerable); // false
      console.log(descriptorOfHeight.writable); // false
      console.log(descriptorOfHeight.value); // 188
      ```
    
    - 定义多个属性用Object.defineProperties()，传入两个参数，对象名和一个键值对列表，key为属性名，value为内部特性/值键值对。下面举了set和get方法的例子，set方法常用于**设置一个属性会导致其他属性发生变化**。
    
      ```javascript
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
      ```
    
    - 访问器属性只能用Object.defineProperties()或者Object.defineProperty()定义，并且未定义set函数的访问器属性会忽略写操作。
    
      ```javascript
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
      ```
    
    29. 工厂模式
    
        优先：弥补了对象字面量和Object构造函数的重复代码
    
        缺点：无法识别对象的类型
    
        ```javascript
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
        ```
    
    30. 构造函数模式
    
        优点：可以识别对象
    
        缺点：不能共享函数和静态变量
    
        ```javascript
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
        ```
    
        - new的本质，new替我们做四件事
    
          1）创建一个临时对象，并将这个临时对象赋值给this，即this现在指向这个临时对象
    
          2）将这个临时对象的[[prototype]]内部指针指向父类即Person的prototype
    
          3）为这个临时对象添加属性，即执行构造函数中的代码（**永远在步骤二之后执行！**）
    
          4）返回这个临时对象
    
        - 为了深入理解new，深入理解构造函数中的代码永远在"临时对象的[[prototype]]内部指针指向父类"这件事之后执行。我们在构造函数中修改prototype，看看会发生什么。
    
          1）我们首先不使用对象字面量，此时this指向的prototype和执行代码中的prototype是同一片内存。new之后的prototype的constructor还是指向A，说明是**原生原型对象**。
    
          ```javascript
          function A() {
              A.prototype.name = "haha";
          }
          var ob = new A();
          console.log(ob.name); // haha
          var proto = Object.getPrototypeOf(ob);
          console.log(proto); // A { name: 'haha' }
          console.log(proto.constructor === A); // true
          ```
    
          2）接着我们用对象字面量去修改prototype，此时的prototype会被指向另一篇内存，但是我们看看new出来的对象的[[prototype]]到底指向的是老的还是新的呢？（答案是老的）。下面的代码说明了，我在new的时候，这个临时对象this的[[prototype]]是**先**指向老的prototype（从constructor === B 为true）可以得证；**然后**B的原型对象改了，所以这是有顺序的。即在new返回对象之后，我的对象虽然指向了老prototype，但是B的prototype已经更换。
    
          ```javascript
          function B() {
              B.prototype = {
                  name: "haha"
              };
          }
          var ob = new B();
          console.log(ob.name); // undefined
          var proto = Object.getPrototypeOf(ob);
          console.log(proto); // B {}
          console.log(proto.constructor === B); // true
          ```
    
          不信？看下面一段代码，我们接着调用new，看看第二次调用new得到的对象的[[prototype]]指向的是谁。下面的代码说明了第二次new的对象的[[prototype]]指向的是第一次生成的新的原型对象，但是很不幸，每调用一次构造函数，B的原型对象就会更新一次（本质为换一次内存），所以不建议这么玩哈。
    
          ```javascript
          var ob2 = new B();
          var ob2 = new B();
          console.log(ob2.name); // "haha"
          var proto = Object.getPrototypeOf(ob2);
          console.log(proto); // { name: 'haha' }
          console.log(proto.constructor === B); // false
          ```
    
          3）所以原则就是：永远在构造函数外部修改prototype；永远在new之前修改prototype
    
        - 使用call可以使构造函数在别的作用域中调用。**这个很有用**，后面在**组合继承**中，我们通过构造函数的模式来继承父类的实例属性，为此我们需要在子类的构造函数中调用父类的构造函数，并将作用域设成子类构造函数的this。
    
          ```javascript
          var ob = new Object();
          Person.call(ob, "hj", 24);
          ob.sayName(); // "hj"
          ```
    
    31. 原型模式
    
        优点：函数和实例可以共享
    
        缺点：1）引用类型的实例属性会强制共享；2）所有的实例在默认情况下都具有相同的值，因为不能用自己的参数初始化实例。
    
        ```javascript
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
        ```
    
        - 查看对象的原型，用Object.getPrototypeOf(对象)
    
          ```javascript
          console.log(Object.getPrototypeOf(instance)); // Person { name: 'zsj', age: 23, sayName: [Function] }
          console.log(Object.getPrototypeOf(instance) === Person.prototype); // true
          ```
    
        - 1）constructor，这是个棘手的属性。记住，每当定义一个函数，或者是已经存在的原生构造函数，那么这些函数都会有一个对应的原型对象，这个原型对象初始时只有一个属性，那就是constructor，是个指针，指向函数本身。我们姑且叫这个原型对象为**原生原型对象**（我自己起的哈），**constructor**只存在于原生原型对象里，所以我们自己创建的实例或者用面向字面量创建的prototype都是不含constructor的，他们的constructor只能顺着原型链往上找！上面的例子中，instance本身没有constructor，所以它的constructor一定是Person.prototype的constructor，指向Person本身。
    
          2）我们规定，实例本身拥有的属性叫实例属性，不在实例中但在其指向的原型中的属性称作原型属性。
    
          3）对象.hasOwnProperty(属性名)这个函数可以检测属性到底是在实例中还是在其上部的原型链上。下面的代码说明了，instance的constructor是原型属性，而不是实例属性。
    
          ```javascript
          console.log(instance.constructor === Person); // true
          console.log(instance.hasOwnProperty("constructor")); // false
          console.log(Person.prototype.hasOwnProperty("constructor")); // true
          ```
    
        - 实例如果重复定义了与原型的同名变量或**函数**，会**覆盖**原型的定义，但是**不会修改**。这里比较难的是如何判断我们的操作是重新定义还是修改，这么想，不论是属性名还是函数名，都只是一个指针，我如果用等号重新赋值，相当于改变了指针的指向，原来指针指向的内存内容并没有被修改。但是，如果我没有用等号赋值，说明我们并没有改变指针的指向，指针仍指向原型属性对应的那片内存，我们若修改内存，那么原型属性也会被修改。最常见的例子就是如果原型属性是引用类型的比如Array，我们对this.arr进行push操作，那么这个操作会对原型实例内存中的值进行修改，进而影响到所有子类实例。所以这就是原型模式很少单独使用的原因！
    
          ```javascript
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
          ```
    
        - in操作、Object.keys()以及Object.getOwnPropertyNames()
    
          - in操作返回布尔值，判断某个属性是否是对象的实例属性或者原型属性，只要在原型链上就行
    
            ```javascript
            function Person() {}
            Person.prototype.name = "zsj";
            var ob = new Person();
            ob.age = 23;
            console.log("name" in ob); // true
            console.log("age" in ob); // true
            ```
    
          - Object.keys()返回一个Array数组，装的是某个对象上的**可枚举的实例属性**，不能是原型属性
    
            ```javascript
            // Object.keys() returns an array whose elements are strings
            // corresponding to the enumerable properties found directly upon object
            keys = Object.keys(ob);
            console.log(keys); // [ 'age' ]
            console.log(Array.isArray(keys)); // true
            ```
    
          - Object.getOwnPropertyNames()返回一个Array，装的是某个对象上**所有实例属性**，不论可不可枚举，不能是原型属性
    
            ```javascript
            // returns an array of all properties (including non-enumerable
            // properties except for those which use Symbol) found directly in a given object.
            keys = Object.getOwnPropertyNames(ob);
            console.log(keys); // [ 'age' ]
            console.log(Array.isArray(keys)); // true
            
            keys = Object.getOwnPropertyNames(Person.prototype);
            console.log(keys); // [ 'constructor', 'name' ]
            ```
    
          - 判断是否是实例属性
    
            ```javascript
            function isInstanceAttribute(object, name) {
                return name in object && object.hasOwnProperty(name);
            }
            
            console.log(isInstanceAttribute(ob, "name")); // false
            console.log(isInstanceAttribute(ob, "age")); // true
            ```
    
        - 用对象字面量创建原型
    
          1）注意如果用对象字面量创建原型的时候，constructor需要重新**用Object.defineProperty()**指定，因为相当于对另一片内存空间进行了修改，原来的内存空间不再被引用。但是constructor的[[enumerable]]默认为false，你用对象字面量会让他变成true，所以用Object.defineProperty指定一下。
    
          2）一定要**先**用对象字面量，**再**创建对象！确保对象的[[prototype]]指向的一定是最新的原型对象。
    
        - 原生对象的原型属性，比如我们的hasOwnProperty()就是Object构造函数的原型对象里面的。
    
          ```javascript
          console.log(typeof Object.prototype.hasOwnProperty === "function"); // true
          ```
    
        - 判断一个对象有没有函数，用typeof，有没有某个属性，用hasOwnProperty（实例属性）或者in（只要在原型链上）
    
        - 原型模式缺点：对于引用类型的原型属性会强制共享，这个没啥好说的，学过C语言指针的都很好理解
    
          ```javascript
          function Color() {}
          Color.prototype.arr = ["pink"];
          var ob1 = new Color();
          ob1.arr.push("red");
          var ob2 = new Color();
          console.log(ob2.arr); // [ 'pink', 'red' ]
          ```
    
    32. 结合**构造函数模式**和**原型模式**（坠吼的面向对象模式）
    
        确保只在第一次创建对象时构造原型对象中的函数，所以用typeof来进行判断，判断该函数是否存在。
    
        ```javascript
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
        ```
    
    
    33. 组合继承
    
        要点：
    
        1）prototype永远在构造函数外部设置，并且要在new之前设置
    
        2）函数的设置可以在构造函数里面设置，不过要用typeof来确保只在第一次
    
        缺点：必定会调用两次父类的构造函数，并且完全没必要让父类的一个实例当做子类的原型对象，因为我们只想让原型对象存函数和静态变量，但是这样做会让子类的原型对象包含父类的实例属性，然而我却用不到，用的还是通过构造函数模式得到的实例属性，造成了内存浪费！
    
        ```javascript
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
        ```
    
    34. 寄生组合式继承——终极方法
    
        换掉一行即可，将`Son.prototype = new Dad();`换成`Son.prototype = Object.create(Dad.prototype);`。Object.create(父类的原型对象)返回一个对象，这个对象的原型是父类的原型对象，确保不含任何实例属性。
    
        ```javascript
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
        ```
    
    35. 原型属性分别是基本类型和引用类型时，当某个对象修改，另一个对象会受到影响吗？
    
        先说结论：只有一种情况，某个对象对原型属性的修改会影响到别的对象，那就是对引用类型指向的内存内容进行修改，即上面提到的对数组进行push操作。注意，任何利用等号的赋值操作都只是重新定义同名的实例属性，覆盖了父类的原型属性，并没有修改父类实例属性内存中的内容。我们来看三个例子，下面三个例子都不会影响别的对象。
    
        1）基本类型，利用赋值语句
    
        ```javascript
        function A() {}
        A.prototype.age = 23;
        
        var ob1 = new A();
        var ob2 = new A();
        ob1.age = 25; // ob1的age已经变成了实例属性而不是原型属性
        console.log(ob1.age); // 25
        console.log(ob2.age); // 23
        console.log(ob1.age === A.prototype.age); // false
        console.log(ob2.age === A.prototype.age); // true，ob2的age仍然是原型属性
        ```
    
        2）对数值类型进行++，本质还是赋值
    
        ```javascript
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
        ```
    
        3）引用类型，但是不修改内存中的值，而是通过等号改变指针
    
        ```javascript
        function A() {}
        A.prototype.arr = [1, 2, 3];
        
        var ob1 = new A();
        var ob2 = new A();
        ob1.arr = ["ha"];
        console.log(ob1.arr); // [ 'ha' ]
        console.log(ob2.arr); // [ 1, 2, 3 ]
        console.log(ob1.arr === A.prototype.arr); // false
        console.log(ob2.arr === A.prototype.arr); // true
        ```
    
    36. 正确的递归方式——利用**命名函数表达式**，记得加括号鸭！
    
        ```javascript
        var factorial = (function f(num) {
            if (num < 2) return 1;
            return f(num - 1) * num;
        });
        
        console.log(factorial(5)); // 120
        
        var factorial2 = factorial;
        factorial = null;
        console.log(factorial2(3)); // 6
        ```
    
    37. 闭包：闭包是有权访问另一个函数作用域中的变量的**函数**，本质是函数！
    
        1）对于每个函数或者闭包，都对应一个**执行环境**，每个环境对应一个**作用域链**，作用域链在函数内部用一个特殊的符号[[scope]]表示。作用域链的本质是**指针数组**，每个位置指向不同的**变量对象**（包含window对象和活动对象），变量对象包含this、arguments（实参）和其他命名参数（形参）。
    
        2）变量对象有很多个，其实是有优先级的。优先级最高的是最内层函数所在执行环境对应的活动对象，其次是次外层，优先级逐层递减。
    
        3）一般来说，活动对象会随执行环境的弹栈而被销毁。对于普通函数，当函数执行完毕，局部活动对象就会被销毁。然而对于闭包来说不一定，如果将闭包作为匿名函数，并且作为外层函数的返回值，那么除非销毁这个匿名闭包，不然这个闭包会一直持有其外层函数的活动对象。
    
        4）创建函数/将闭包作为返回值返回时，此时函数/闭包的作用域链的**初始值**为除自身外所有外层的变量对象；在调用该函数或者将返回的闭包返回给某一个变量时，会在函数/闭包的作用域链的前端插入当前函数/闭包的变量对象。
    
        5）闭包会携带包含它函数的作用域，所以会比其他函数更占内存。
    
        ```javascript
        function createAge(age) {
            return function() {
                console.log(age * age);
            };
        } 
        
        var getAgeSquare = createAge(5); // 执行完后createAge的执行环境被销毁了，但是createAge的活动对象还没被销毁
        getAgeSquare(); // 25
        getAgeSquare = null; // 现在createAge的活动对象才会被销毁
        ```
    
    38. 闭包只能取得包含函数中任何变量的最后一次值，所以，对于变化的值，尽量采用传参的方式来解决。
    
        1）先看个例子。i是外部函数createFuncitons的活动对象之一，所有闭包共享这一个变量对象i的最后一个值就是5，所以每个闭包里面的i都被更新为5。本质原因是因为，闭包中的i和外部的i是一起变化的，闭包中的i指向外部的i，所以外部变了，里面也跟着变。要想解决这个问题，可以用传参的方式来避免内外联动。
    
        ```javascript
        function createFunctions(num) {
            var ans = new Array(num);
            for (var i = 0; i < num; i++) {
                ans[i] = function() {
                    return i;
                }
            }
            return ans;
        }
        
        var ans = createFunctions(5);
        for (var i = 0; i < 5; i++) {
            console.log(ans[i]());
        } // 5 5 5 5 5
        ```
    
        2）解决方式，通过传参的方式，传给一个函数，这个函数为一个匿名函数，并立即执行，即返回最终的函数。
    
        ```javascript
        function createFunctions(num) {
            var ans = new Array(num);
            for (var i = 0; i < num; i++) {
                ans[i] = function(number) {
                    return function() {
                        return number;
                    }
                }(i);
            }
            return ans;
        }
        
        var ans = createFunctions(5);
        for (var i = 0; i < 5; i++) {
            console.log(ans[i]());
        } // 0, 1, 2, 3, 4
        ```
    
        3）注意区分**命名函数表达式**和**匿名函数并立即执行**。前者**最好**对整体加上大括号，表示是这个函数的整体是一个变量；后者在匿名函数后面加上()表示立即调用。
    
        ```javascript
        var factorial = (function f(num) {
            if (num < 2) return 1;
            return f(num - 1) * num;
        });
        
        console.log(function(num) {
            return num;
        }(10)); // 10
        
        console.log(factorial(6)); // 720
        ```
    
        4）命名函数和匿名函数都可以加括号立即执行，不过最好都为function整体部分加上括号，不然会报错。
    
        ```javascript
        (function fun() {
           console.log("haha");
        })(); // "haha"
        
        (function() {
           console.log("haha");
        })(); // "haha"
        ```
    
    39. 闭包的this永远指向global
    
        ```javascript
        // 下面的代码需要在浏览器中执行
        global = (() => {return this;})();
        (function() {
            var that = this;
            return function() {
                console.log(this === global); // true
                console.log(this === that); // true
                console.log(global === that); // true
            };
        })()();
        
        var name = "zsj";
        var ob = {
            name: "haha",
            getNameFunction: function() {
                return function() {
                    console.log(this.name);
                };
            }
        };
        
        ob.getNameFunction()(); // "zsj"
        ```
    
    40. 模仿**块级作用域**
    
        1）js没有块级作用域的概念，但是块级作用域很有用，因为当块级作用域执行完毕后就会被销毁，比闭包要省内存。而且很多时候我们只需要一些临时变量，比如循环语句的时候。
    
        2）块级作用域的语法就是之前提到的，将匿名函数用小括号括起来然后再加上小括号表示立即执行。
    
        ```javascript
        (function() {
            for (var i = 0; i < 10; i++) {
                console.log(i);
            }
        })();
        console.log(i); // 报错
        ```
    
    
    41. 静态私有变量
    
        1）静态私有变量指的是所有实例都可以共享的静态变量，不同于将实例放在原型中，这里说的是私有的，即无法通过直接获取变量，而必须通过**特权函数**才能获取。
    
        2）特权函数指的是 有权访问私有变量和私有函数的公有方法。
    
        3）主要思路：在块级作用域中定义私有变量和函数；定义全局的构造函数表达式（即不加var，且用函数表达式的形式）；为构造函数的原型定义特权方法。
    
        4）缺点：不加var会报错（严格模式下）
    
        5）Javascript没有私有成员的概念，但是有私有变量的概念。所有的对象属性都是共有的，但是，一般可以认为在函数中定义的变量叫做**私有变量**，因为不能在函数的外部访问到它们。私有变量包括：参数、局部变量和函数内部定义的其他函数（即闭包）。
    
        ```javascript
        (function() {
            var name = "";
            Person = function(value) {name = value};
            Person.prototype.getName = function() {
                return name;
            };
            Person.prototype.setName = function(newName) {
                name = newName;
            }
        })();
        
        var ob1 = new Person("zsj");
        console.log(ob1.getName()); // "zsj"
        var ob2 = new Person("aaa");
        console.log(ob1.getName()); // "aaa"
        console.log(ob2.getName()); // "aaa"
        ```
    
    42. 模块模式——为单例创建私有变量和特权方法
    
        核心思路：
    
        1）块级作用域本质是一个匿名函数并立即执行，因此可以有返回值
    
        2）在块级作用域里面定义好私有变量和私有函数，返回一个匿名的对象字面量去调用他
    
        - 不需要指定类型的单例，即类型为Object
    
          ```javascript
          var singleton = (function() {
              // define private variable
              var name = "";
              var privateFunction = function(newName) {
                  console.log("name has been changed! from %s to %s", name, newName);
              }
          
              return {
                  getName: function() {
                      return name;
                  },
                  setName: function(newName) {
                      privateFunction(newName);
                      name = newName;
                  }
              }
          })();
          
          singleton.setName("zsj"); // name has been changed! from  to zsj
          singleton.setName("hehe"); // name has been changed! from zsj to hehe
          console.log(singleton instanceof Object); // true
          ```
    
        - 需要指定类型的单例，很简单，在内部不是返回对象字面量，而是返回指定类型的变量即可。
    
          ```javascript
          function Person() {}
          var singleton = (function() {
              // define private variable
              var name = "";
              var privateFunction = function(newName) {
                  console.log("name has been changed! from %s to %s", name, newName);
              }
          
              var ob = new Person();
              ob.getName = function() {
                  return name;
              };
              ob.setName = function(newName) {
                  privateFunction(newName);
                  name = newName;
              };
              return ob;
          })();
          
          singleton.setName("zsj"); // name has been changed! from  to zsj
          singleton.setName("hehe"); // name has been changed! from zsj to hehe
          console.log(singleton instanceof Object); // true
          console.log(singleton instanceof Person); // true
          ```
    
          