## 面试被考到的题目

1. js对象的深拷贝，用递归，含数组和嵌套的对象

2. https的ssl理解，证书的理解，加密算法有哪些？ssl如何保证数据完整性？http1.0、1.1和2.0区别；ssl和tsl区别？

3. 三次握手快传机制，即第三次握手可以发包；三次握手如何保证数据一致性和有序性

4. [] == [] 是true还是false

5. 对象类型和其他基本数据类型的差别？

6. event loop机制？

7. 什么是事件代理？

8. 浏览器拿到页面如何进行渲染？

9. 传送到服务器的http报文如何到达服务器的应用程序，这个细节是什么？（面试官提示ngnix）

10. node.js为何能脱离浏览器？解决了什么问题？

11. Symbol关键字

12. ES5、ES6this指针区别

13. 为什么引入箭头函数？

14. 利用ES5写一个单例，要求含私有静态属性。

15. DNS解析过程

16. js防抖和节流

17. 抓包软件能够抓到https的包吗？这个包是明文还是暗文？

18. promise和async/await区别

19. 下面的代码的输出结果？（undefined）

    ```javascript
    var ob = {
        name: "nihao",
        funA: function() {
            console.log(this.name);
        }
    };
    var funB = ob.funA;
    funB();
    ```

20. 检测数组的方法：Object.prototype.toString.call()、typeof、instanceof、isArray()优缺点比较？

21. class关键字的理解？class里面有什么？解决了什么问题？

22. cookie、session、token和Webstorage区别

    - cookie、session和token都是服务器生成的，分别保存在客户端、服务器和数据库。

    - token：签名（利用私钥对用户名进行加密后的生成签名）+数据；服务器不保存token，第一次登陆会把token发送给客户端，第二次客户端把token发过来的时候服务端再用同样的私钥对数据进行加密，并判断是否和发过来的签名一致。
    - cookie：浏览器实现的一种数据存储功能，是键值对，由服务器生成，但是存储于客户端。
    - session：一般用来标志用户名，时长30min
    - cookie是ascii，session是任意数据类型；两者时间也不同；存储位置不同；安全性不同；存储大小也不同；cookie 4K，后者更高。
    - session ID是二者之间的桥梁。cookie和session是相互配合的关系，第一次请求，返回唯一的session ID，浏览器将此id存入cookie；第二次请求发送cookie，服务器获取seesion ID并以此找到对应的session信息。
    - 如果禁止cookie怎么样，两种方法，一是通过get或者post传参，另一个是通过token

23. css清除浮动

24. Site Isolation

25. 进程间通信方式

26. 死锁条件

27. 进程和线程之间的组织方式；fork原理

28. jsonp

29. N叉树，每个节点位移，给定id，找到从根节点到id的唯一路径，没有输出空

30. websocket详解

31. jsv8：gc机制，新生代，老生代

32. 构造函数的\_\_Proto\_\_，顶级的\_\_Proto\_\_；Object.prototype.\_\_Proto\_\_

33. 宏任务队列和微任务队列的放入队列的触发时机？哪些任务是宏任务哪些是微任务？

34. arr.groupBy(function)进行分组

35. 函数柯里化，连续调用

36. 递归时能访问外部变量吗？

37. 解决跨域问题手段？

38. 如何理解同步、异步、阻塞、非阻塞？阻塞了什么？ajax请求阻塞了吗？ajax是阻塞时间还是非阻塞事件？

39. 用es5实现promise的then和all （小米）

40. 小数字符串，转成新的字符串，整数位每隔三位加一个逗号

    ```javascript
    const value = '11411223450.46';
    function convert(value) {
        if (typeof value === "number") {
            value = value.toString();
        }
        var index = value.indexOf(".") === -1 ? value.length : value.indexOf(".");
        var head = "";
        var tail = "";
        tail = index === value.length ? "" : value.slice(index + 1, value.length);
        var tailIndex = index;
        for (var i = index - 3; i > 0; i -= 3) {
            head = "," + value.slice(i, tailIndex) + head;
            tailIndex = i;
        }
        i += 3;
        head = value.slice(0, i) + head;
        return tail === "" ? head : head + "." + tail;
    }
    console.log(convert(value)); // 11,411,223,450.46
    ```

    

41. 三个div，左右固定，中间占满剩余屏幕，不让用flex

42. BFC知道吗？

43. 不同第三方变量交换两个变量，变量的属性可能是数组，函数，对象，字符串，数值。

44. 多个class，覆盖，优先顺序

    ```css
    <style>
      .classA {
        color: blue;
      }
      .classB {
        color: red;
      }
    </style>
    <p class="classB classA">123</p>
    ```

45. box-sizing？

46. 两种盒模型

47. 如何取消float，clear的取消原理？

48. flatten函数，数组去除括号

    ```javascript
    const arr = [[1, 2, [3], [[]]], 4];
    function flatten(arr) {
        if (typeof arr === "number") {
            return [arr];
        }
        if (Array.isArray(arr)) {
            if (arr.length === 0) {
                return [];
            } else {
                return arr.reduce((acc, cur, index, array) => {
                    return flatten(acc).concat(flatten(cur));
                }, []);
            }
        }
    }
    
    console.log(flatten([[[[[[]], 2], 6], 7], 8, 9,[111, [[12, 3, 1]]], 8, [1]]));
    /*[
        2,  6, 7, 8, 9,
      111, 12, 3, 1, 8,
        1
    ]*/
    ```

    

49. \=\=和\=\=\=

    ```javascript
    console.log([] == []); // false
    console.log([] === []); // false
    console.log([1] == [1]); // false
    console.log([1] === [1]); // false
    console.log(0.1 + 0.2 == 0.3); // false
    console.log(0.1 + 0.2 === 0.3); // false
    console.log(0.1 + 0.2) // 0.30000000000000004
    ```

50. 作用域，变量提升，临时死区的考察

    ```javascript
    var a = 1;
    (() => {
        console.log(a);
        a = 2;
    })(); // 1
    
    var a = 1;
    (() => {
        console.log(a);
        var a = 2;
    })(); // undefined
    
    var a = 1;
    (() => {
        console.log(a);
        let a = 2;
    })(); // error
    
    var a = 1;
    (function() {
        console.log(a);
        a = 2;
    })(); // 1
    
    var a = 1;
    (function() {
        console.log(a);
        var a = 2;
    })(); // undefined
    
    var a = 1;
    (function() {
        console.log(a);
        let a = 2;
    })(); // error
    ```

51. this和函数赋值的理解

    ```javascript
    var user = {
        count: 1,
        getCount: function() {
            return this.count;
        }
    };
    console.log(user.getCount()); // 1
    var func = user.getCount;
    console.log(func()); // undefined
    ```

52. 闭包模仿块级作用域

    ```javascript
    var data = []
    for (var i = 0; i < 3; i++) {
      data[i] = (function(i) {
          return function() {
              console.log(i);
          }
      })(i);
    }
    
    data[0]();
    data[1]();
    data[2]();
    ```

53. 原生js实现reduce方法

    ```javascript
    Array.prototype.myReduce = function(callback, initialValue) {
        var arr = this;
        if (!Array.isArray(arr)) {
            throw new Error("This is not array type!");
        }
        if (arr.length === 0 && initialValue === undefined) {
            throw new Error("Empty array without initial value!");
        }
        var index = initialValue ? 0 : 1;
        var acc = initialValue ? initialValue : arr[0];
        while (index < arr.length) {
            acc = callback(acc, arr[index], index, arr);
            index++;
        }
        return acc;
    }
    ```

54. obj.groupBy(callback)

    ```javascript
    Array.prototype.groupBy = function groupBy(callback) {
        var arr = this;
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            var key = callback(arr[i]);
            if (obj[key]) {
                obj[key].push(arr[i]);
            } else {
                obj[key] = [arr[i]];
            }
        }
        return obj;
    }
    
    let arr = ["addasfa", "asd", "dsfdf", "fff", "dff", "fs", "s"];
    console.log(arr.groupBy((str) => str[0]));
    
    // {
    //     a: [ 'addasfa', 'asd' ],
    //     d: [ 'dsfdf', 'dff' ],  
    //     f: [ 'fff', 'fs' ],     
    //     s: [ 's' ]
    // }
    ```

55. 原型链理解

    ```javascript
    // 都是true
    console.log(Object.__proto__ === Function.prototype);
    console.log(Object.prototype.__proto__ === null);
    console.log(Function.__proto__=== Function.prototype);
    console.log(Function.prototype.__proto__ === Object.prototype);
    console.log(Array.__proto__=== Function.prototype);
    console.log(Array.prototype.__proto__ === Object.prototype);
    ```

56. var声明多次不报错，let声明多次报错

57.  service worker 

58. CSSOM树先于js，js先于DOM树

59. 重构回流，改变宽高出发回流，看代码回流几次？

60. 拓扑排序

61. 洗牌算法

62. 稳定的快排

63. http2多路复用

64. 实现bind函数

65. domcontentloaded vs load

66. 执行顺序

    ```javascript
    Promise.resolve().then(value => {
        return Promise.reject(new Error("cao!"));
    }).catch(err => {
        console.log(err.message); // cao!
    });
    
    Promise.reject(new Error("oh no!"))
    .catch(err => {
        console.log(err.message); // oh no!
    });
    ```

67. 栅格布局
68. IFC

69. 下面的catch会被触发吗？（不会）

    ```javascript
    new Promise(function(resolve, reject) {
      setTimeout(() => {
        throw new Error("Whoops!");
      }, 1000);
    }).catch(alert);
    ```

    在构造函数和handler里面都会有一层隐式的try...catch，但是try...catch只能捕获同步的error，由于是异步的，真正执行的时候已经脱离了try...catch结构，因此这个错误要由兜底的事件处理程序来完成。

    ```javascript
    window.onunhandledrejection = function(event) {
        console.log(event.reason.message);
    } // Whoops!
    ```

70. 输出结果

    ```javascript
    let promise = Promise.reject(new Error("Promise Failed!"));
    setTimeout(() => promise.catch(err => alert('caught')), 1000); // 后
    
    // Error: Promise Failed!
    window.addEventListener('unhandledrejection', event => alert(event.reason)); // 先
    ```

71. setTimeout, setInterval
72. 我在js树里面改样式，js的执行是先于cssom还是后于？（后于）

73. then的返回值，到底选择返回新的promise还是一个值，很重要

    比如我要等几秒再去改变状态，即我想让下一个then能够经过几秒再去执行我的函数，此时就必须返回一个promise，如下。

    ```javascript
    Promise.resolve()
    .then(value => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(100);
            }, 1000);
        });
    })
    .then(value => {
        console.log(value);
    });
    ```

    但是，直接返回就不行，因为我的return是同步的，不会等到setTimeout这个宏任务执行完就去执行

    下面的代码是错的，下面的then拿到的是undefined，原因是下，下面的then不会等到setTimeout去执行完，此时没有返回值，即返回一个resolve的，值为undefined的promise...很绕噢

    ```javascript
    Promise.resolve()
    .then(value => {
        setTimeout(() => {
            return 100;
        }, 1000);
    })
    .then(value => {
        console.log(value);
    });
    ```

    除了返回一个new Promise，还有没有其他招呀？有哇，用await呀！await可以阻断后面的所有代码，直到他对应的promise变为settled。下面的代码也实现啦我们想要的效果，非要等1s再输出嘻嘻，+1s

    ```javascript
    (async () => {
        let value = await new Promise(resolve => {
            setTimeout(() => {
                resolve(100);
            }, 1000);
        });
        console.log(value);
    })();
    ```

74. 作用域的理解（快手）

    ```javascript
    function f(x) {
        console.log(x);
        var x = 5; // 换成var或者啥也不加，结果都是10，如果是let就会报错
    }
    
    f(10); // 10
    ```

    ```javascript
    var x = 100;
    function f(x) {
        console.log(x);
        var x = 99;
    }
    
    f(10); // 10
    console.log(x); // 100
    ```

    ```javascript
    var x = 100;
    function f(x) {
        console.log(x);
        var x = 99;
        console.log(x); // 99，这里的x指向的是函数内部的x
    }
    
    f(10); // 10
    console.log(x); // 100，这里的x指向的是全局的x
    ```

    ```javascript
    // 返回的对象的add函数是个闭包，这个闭包引用了函数fn里面的对象n，所以fn里面的对象n不会被销毁
    // 每调用一次同一对象的add函数，这个闭包引用的n就会自增
    // 但是不同的对象，他们的闭包引用的fn是不一样的，分别为t1和t2，且互不干扰
    // 然而，对象本身的属性n是一个定值，永远是9
    function fn(){
        var n = 9;
        function add(){
            console.log(n++);
        }
        return {
            n: n,
            add: add
        }
    }
    var t1 = fn();
    var t2= fn();
    
    t1.add(); // 9
    t1.add(); // 10
    t1.add(); // 11
    console.log(t1.n); // 9
    
    t2.add(); // 9
    console.log(t2.n); // 9
    ```

    当构造函数和原型有重名函数或者属性时，优先选用构造函数的，回想this原理，this对应的作用域是最近的。

    ```javascript
    function Person() {
        this.name = "zsj";
    }
    
    Person.prototype.name = "aaa";
    
    let p = new Person();
    let q = new Person();
    console.log(p.name); // "zsj"
    console.log(q.name); // "zsj"
    console.log(p.__proto__.name); // aaa
    ```

75. promise理解（图森未来）

    promise构造函数中只有resolve和reject是异步的，其他是同步的，所以3和4在7前面

    ```javascript
    console.log ('1');
    
    setTimeout(function(){
      console.log('2');
    }, 0);
    
    new Promise(resolve => {
      console.log('3');
      resolve()
      console.log('4');
    })
    .then(function() {
      console.log('5');
    })
    .then(function() {
      console.log('6');
    });
    
    console.log('7');
    
    // 1 3 4 7 5 6 2
    ```

    下面这题是我自己想的

    ```javascript
    new Promise(resolve => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            resolve();
            console.log(3);
        }, 0);
    })
    .then(value => {
        console.log(4);
    });
    
    console.log(5);
    
    // 1 5 2 3 4
    ```

    setTimeout回调这个整体是作为宏任务的，然而setTimeout里面的代码也是分同步、微任务和宏任务的。一旦开始执行setTimeout里面的代码，表明此时宏任务开始执行，里面的代码应该继续遵守同步 -> 微任务 -> 宏任务这样的准则。就比如下面这道题，promise构造函数里面的同步代码先执行，所以先输出1，然后碰到setTImeout，就送入宏任务队列，此时then方法不用管，因为setTimeout里面的resolve还没有settled，然后碰到下面的then，发现已经settled了，就送入微任务队列，然后执行同步代码输出5。此时同步代码输出完毕，取微任务队列队首，输出100，然后同步队列和微任务队列都是空的，就取宏任务队列队首，并执行相应回调，过程同上，先输出同步代码2和3，然后执行微任务4。

    ```javascript
    new Promise(resolve => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            resolve();
            console.log(3);
        }, 0);
    })
    .then(value => {
        console.log(4);
    });
    
    Promise.resolve().then(value => {
        console.log(100);
    });
    
    console.log(5);
    
    // 1 5 100 2 3 4
    ```

    多个宏任务（图森未来）

    如果有多个宏任务，后面的宏任务一定会等到前面的宏任务执行完毕再执行自己，哪怕自己里面含有同步代码。

    ```javascript
    setTimeout(() => {
        console.log('timer1')
        Promise.resolve().then(function() {
            console.log('promise1')
        });
    }, 0);
      
    setTimeout(() => {
        console.log('timer2')
        Promise.resolve().then(function() {
            console.log('promise2')
        });
    }, 0);
    
    // timer1 promise1 timer2  promise2
    ```

    下面这个题是我自己想的，碰到async和await，async里面的代码当做是Promise的构造函数，await看做是then。await后面接的promise，一样的，如果这个promiuse是构造函数，则遵循同样的规则。

    ```javascript
    (async () => {
      setTimeout(() => {
        console.log(100);
      }, 0);
      console.log(1);
      let value = await new Promise(resolve => {
        console.log(2);
        resolve(3);
        console.log(4);
      });
      console.log(value);
    })();
    
    (async () => {
      console.log(5);
    })();
    
    console.log(6);
    
    // 1 2 4 5 6 3 100
    ```

    下面这个题是我自己想的，await会阻断后面的所有代码，即使await后面接的是一个已经resolved的promise。有一点需要注意的是，如果await后面接的promise通过构造函数来构建，那么构造函数里面的代码也会遵循事件队列的机制来运行，

    ```javascript
    (async () => {
      await Promise.resolve();
      await new Promise(resolve => {
        resolve();
        console.log(3);
        setTimeout(() => {
          console.log(4);
        }, 0);
      });
      console.log(1);
    })();
    console.log(2);
    
    // 2 3 1 4
    ```

    await new Promise和new Promise的区别，仔细地看下面三段代码的异同！我们知道，await会阻塞后面的所有代码，但是更细节的呢？现在让我们来一探究竟！await后面接一个promise，可以理解为await是then的语法糖，await的返回值就是promise里面resolve或者reject的值，所以凡是碰到await的地方，我们一律想成then操作即可，我们知道，then是异步的，await相当于是这么一个操作：.then(value => {let value = value}); 那么这个value就是我们await的返回值咯。看下面三个代码块，前两个输出都是1 2，道理很简单，第一个是因为构造函数里面的输出1是同步的，所以在2前面；第二个代码块的await想成是then操作，即可以转化为一个new Promise().then(XXX)这种格式，那么构造函数里面的1当然也是同步的，所以直接输出。切记，then是永远异步的。下面来到第三个代码块，碰到第一个await，马上将resolve放到微任务队列，后面的await没机会执行咯。接着执行后面的输出2，此时同步代码输出完了，然后取微任务队列队首执行，虽然第一个放入微任务队列的回调啥也没干。然后执行下面的await，因此答案是21

    ```javascript
    new Promise(resolve => {
      console.log(1);
    });
    console.log(2);
    
    // 1 2
    
    (async () => {
      await new Promise(resolve => {
        console.log(1);
      });
    })();
    console.log(2);
    
    // 1 2
    
    (async () => {
      await Promise.resolve();
      await new Promise(resolve => {
        console.log(1);
      });
    })();
    console.log(2);
    
    // 2 1
    ```

    下面这个题也是我自己想的，上面说过，async里面可以看做是Promise的构造函数，await后面接的是一个新的promise，所以如果这个新的promise也使用构造函数的话，那么还是一样的套路。千言万语，就是await后面接的

    ```javascript
    
    ```

    下面这个题证明了，await后面的代码只有等到await后面接的promise的状态settled才会执行~

    第一段代码。第一个await迟迟不肯settle，导致后面的代码永远没机会运行。

    第二段代码，在第一个构造函数里面先输出1和4，然后中间的resolve放进微任务队列，然后去执行下面的3，此时同步代码执行完毕，从微任务队列里面取队首执行resolve，虽然这段代码啥也不输出，接着就是执行后面的代码，执行构造函数里面的2。

    ```javascript
    (async () => {
      await new Promise(resolve => {
        console.log(1);
      });
      await new Promise(resolve => {
        console.log(2);
      });
    })();
    
    console.log(3);
    
    // 1 3
    
    (async () => {
      await new Promise(resolve => {
        console.log(1);
        resolve();
        console.log(4);
      });
      await new Promise(resolve => {
        console.log(2);
      });
    })();
    
    console.log(3);
    
    // 1 4 3 2
    ```

    （难）继续看...下面这个也是我想出来哒~第一行await放入微任务队列，然后直接先输出2，然后第一行await结束，到第二行await，首先看第二个await能不能settle，发现可以，说明后面的代码还有救，然后resolve(5)放入微任务，紧接着输出3，然后宏任务加入setTimeout，此时在等一个res settle，好的，那么执行resolve(5)并赋值给res，这下settle啦，后面的代码可以执行咯。然后顺着输出5、1和4。

    ```javascript
    (async () => {
      await Promise.resolve();
      let res = await new Promise(resolve => {
        resolve(5);
        console.log(3);
        setTimeout(() => {
          console.log(4);
        }, 0);
      });
      console.log(res);
      console.log(1);
    })();
    console.log(2);
    
    // 2 3 5 1 4
    ```

    ```javascript
    // 始终坚持一个原则，那就是await必须settle才会执行后面的代码!
    (async () => {
      await Promise.resolve();
      let res = await new Promise(resolve => {
        console.log(3);
        setTimeout(() => {
          console.log(4);
          resolve(5);
        }, 0);
      });
      console.log(res);
      console.log(1);
    })();
    console.log(2);
    
    // 2 3 4 5 1
    ```

    继续...下面这个应该是最难的咯，在上面的基础上把setTimeout里面的代码颠倒了一下。首先输出23是没毛病的，然后setTimeout的回调送入宏任务队列，然而此时await还没settle，所以必须等到settle，那没办法，去执行宏任务队列的回调吧！第一行是resolve，赶紧送入微任务队列，然后输出4。现在好啦，取微任务队列的队首并将5赋值给res，此时res为5，并且此时这个promise已经成功settle！所以我们可以执行后面的代码啦，输出5和1

    **醒目！await后面的promise的settle时机很重要，这个时机永远是resolve从微任务队列里面拿出来并赋值给res完毕之后~**。

    ```javascript
    (async () => {
      await Promise.resolve();
      let res = await new Promise(resolve => {
        console.log(3);
        setTimeout(() => {
          resolve(5);
          console.log(4);
        }, 0);
      });
      console.log(res);
      console.log(1);
    })();
    console.log(2);
    
    // 2 3 4 5 1
    ```

    下面这道题是小米一面原题，还挺难的？

    下面分析一波，走起~

    script start，之后将setTimeout放入宏任务队列，接着执行async1，输出async1 start，发现第二行是个await，这里就得小心，首先判断后面这个promise有没有机会settle，因为后面这个也是一个aysnc函数，所以一定会返回一个settle的promise，所以我们要先执行这个async2，输出async2，并返回一个值为undefined的resolved的promise，然后把这个赋值的回调放入微任务队列，此时还未settle，所以第三行不能输出。接着输出后面promise构造函数的promise1，resolve()也送入微任务队列。还有最后一行同步代码script end，输出。现在同步代码没了，去拿微任务，是async1里面的第二行，虽然这个啥也不做，不过我们可以继续顺着执行咯，因为又发现了一行同步代码，输出async1 end，接着是第二个微任务promise2和最后的宏任务setTimeout。

    ```javascript
    async function async1() {
      console.log('async1 start');
      await async2();
      console.log('async1 end');
    }
    
    async function async2() {
      console.log('async2');
    }
    
    console.log('script start');
    
    setTimeout(function() {
      console.log('setTimeout');
    },0);
    
    async1();
    
    new Promise(function(resolve){
      console.log('promise1');
      resolve();
    }).then(function() {
      console.log('promise2');
    });
    
    console.log('script end');
    
    // script start
    // async1 start
    // async2
    // promise1
    // script end
    // async1 end
    // promise2
    // setTimeout
    ```

    进一步体会事件队列，体会一下微任务是怎么排队的。下面的代码有三个微任务，第一个是第一行await，他的微任务指的是取到resolve里面的undefined，这个是then的工作，是异步的；第二个是await后面的Promise的then，第三个是函数外部的then，先输出3，然后取队首，第一个微任务啥也没做，第二个微任务是函数外面的微任务，因为内部的第二个微任务被卡住了，第一个微任务结束后，内部的第二个微任务才被加入到队列，担任“第三个微任务”。

    ```javascript
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
    ```

74. 实现一个自定义event事件，包括on ,off,trigger,once