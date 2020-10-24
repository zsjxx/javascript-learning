## 编程艺术笔记（2020.10.24-）

1. 局部变量和全局变量

   ```javascript
   function square(num) {
       total = num * num;
       return total;
   }
   var total = 50;
   var number = square(20);
   alert(total);
   ```

   输出的是400，因为函数后于var total这一行，而alert中的total的作用域是全局，即整个脚本，所以得到的是全局变量的total。

   ```javascript
   function square(num) {
       total = num * num;
       return total;
   }
   var number = square(20);
   var total = 50;
   alert(total);
   ```

   上面将两行对调，输出就是50，因为var total = 50;的作用域也是整个脚本，覆盖了上面的400。

   ```javascript
   function square(num) {
       var total = num * num;
       return total;
   }
   var total = 50;
   var number = square(20);
   alert(total);
   ```

   最保险的做法还是所有变量一律加var，则上面输出的total就是脚本作用域中的total，不会受函数中的影响。

2. DOM中的节点分为三种：元素节点、文本节点和属性节点。

   - 获取元素的三种方法：

     1）getElementById：返回对象，**必须是document调用**

     2）getElementsByTagName：返回对象数组，若传入"*"则返回旗下所有的元素，**必须是对象来调用**

     3）getElementByClassName：返回具有相同类名的对象数组，**必须是对象来调用**

   - 获取属性的方法：object.getAttribute()，**只能用于元素节点**
   - 设置属性的方法：object.setAttribute()，**只能用于元素节点**
   - element.childNodes，返回全部子元素的数组（不仅是元素节点，所以这个数可能很大）
   - element.nodeType，1对应元素节点，2对应属性节点，3对应文本节点
   - node.nodeValue，返回**文本节点**的值，即node一定要是文本节点，一般用.childNodes[xx]获取元素节点的“文本节点子元素”
   - firstChild等价于 childNodes[0]，lastChild等价于childNodes[node.childNodes.length - 1]
   - element.nodeName：返回**元素节点**的大写值，如P、IMG等

