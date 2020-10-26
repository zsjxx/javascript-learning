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
      console.log(String(nul)); // "null"
      console.log(String(undef)); // "undefined"
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

    ![dad.html](C:\Users\HP\Desktop\frontend\figure\check_array.jpg)

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

      ![reduce](C:\Users\HP\Desktop\frontend\figure\reduce.jpg)

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

      