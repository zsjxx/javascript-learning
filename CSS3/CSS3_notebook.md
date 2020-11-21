## CSS3 学习笔记

1. 文件的引入格式为外部CSS、内部CSS和内联CSS。如果外部CSS和内部CSS定义了相同的属性，则看外部CSS和内部CSS谁是最后定义的，以最后定义的为准，因为这两者都是定义在head部分的。优先级如下，从高到低：
   - 内联样式
   - 外部样式和内部样式（同名属性取决于谁最后定义）
   - 浏览器默认样式

2. border属性有三个值，如border: 2px solid red
3. background包括padding但是不包括margin；border包围的是padding而不是margin；background和border的边界是重合的，但是background的颜色是不包括border的，因为border有自己的颜色。
4. margin如果是四个都写，为上右下左；如果只写三个，则上(右左)下；如果只写两个，则(上下)(右左)；如果margin写成auto，则代表自动水平居中；inherit属性表示继承其父容器的margin属性；margin collapse只发生在上下margin上，两个元素之间的margin将取决于上面的margin-bottom和下面的margin-top中**最大值**。
5. padding不允许负值，但是margin可以
6. 元素的总width会加上padding的长度，因此最终的总width会是指定对的width加padding的长度；如果一定要求width固定，并且padding固定，那么可以使用box-sizing: border-box，让内容宽度自适应伸缩。
7. width和height属性不包括padding、borders和margins，它在上面这些属性的内部；max-width属性会覆盖width属性，当浏览器宽度大于max-width时等效于width，如果小于，不会出现滚动栏而是自适应浏览器宽度。
8. outline属性在border外边，目的是为了突出。但是最终的总长度不包括outline。
9. 两端对齐用text-align: justify
10. display: none是真的拿走了，不再占空间；visibility:hidden是隐藏，但是仍占空间
11. position有五个属性
    - static：默认就是static，无需特定指定，因此它所在的位置就是默认位置
    - relative：相对于默认位置进行偏移，其他元素不受影响。注意，对于left，如果是正数则向右偏移，如果是right且为正数则向左偏移。可以理解为坐标轴都是朝向里面的。
    - fixed：针对窗口，不会因为滚动条滑动而改变。
    - absolute：相对于他所有**定位过的**父节点中最近的哪一个，定位过的节点指的是position指定为除了static的所有元素，如果找不到，就用body元素代替，可以随滚动条滑动而移动。因此经常要对其父容器赋值为relative便于使用absolute进行定位。
    - sticky：和fixed基本一样，除了它的基准是默认位置，而不是窗口。

12. z-index用于指定重叠元素的优先展示顺序，越大越在上面。如果没有指定，则越后指定的越上面。

13. overflow属性，当内容（如文字太多时），会指定是溢出还是加个滚动条。

    - visible：溢出
    - hidden：裁剪
    - scroll：滚动条
    - auto：只在必要时加滚动条，一般用于处理float图片过大的情况，此时这个属性设置在被挡住的元素（如div）上

14. float元素可以让图片被文字包裹

    - left
    - right
    - none：default
    - inherit

    clear元素用于指定某元素不能包裹其他float的元素，指定后该元素会出现在float元素的下面。

    - none
    - left
    - right
    - both
    - inherit

15. 内联、块状以及内联-块状元素区别

    - inline：不能设置宽高、top/bottom margin和padding
    - block：单独占一行
    - inline-block：可以和其他元素同一行，可以设置宽高以及top/bottom margin和padding

    记住，只有块状元素可以设置左右的margin和padding；只有内联元素不能设置上下的margin和padding

16. 图片水平居中

    ```css
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    ```

17. 文字垂直居中：vertical-align
    - top
    - middle
    - bottom
18. inline-height
    - 对于block：指定block里面inline-block和inline的最小高度（不是行间距）
    - 对于inline-block和inline，指定行间距
    - value为数字、百分数、定值（如1px）等，建议用数字表示多少倍行距，默认为normal，为1.2倍行距
    - 如果这个值不设置就会从父容器继承！
    - inline-height可以让div中的文字垂直居中！
19. 要让文字垂直水平居中，假设p在div里面，则：

- 设置p为inline-block，因为要用到vertical-align

- 设置p的vertical-align为middle

- 设置p的text-align为center

- 设置p的inline-height，必须指定，不然从div继承了200px

- 设置div的line-height，因为要让p的高度最大不超过自己高度

- 设置div的overflow: auto，处理溢出情况

- 设置div的高度

  ```css
  .center {
    line-height: 200px;
    height: 200px;
    border: 3px solid green;
    overflow: auto;
  }
  
  .center p {
    line-height: 1.5;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
  }
  ```

20. transform沿着卡迪尔坐标系进行移动，如果是百分数，则移动距离为百分数 \* 自身宽高 

