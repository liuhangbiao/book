## 常用代码片断(代码库) - js常用经典算法

### 线性查找 - [时间复杂度O(n)]

```
//线性搜索(入门HelloWorld)
//A为数组，x为要搜索的值
function linearSearch(A, x) {
    for (var i = 0; i < A.length; i++) {
        if (A[i] == x) {
            return i;
        }
    }
    return -1;
}
```

### 二分查找(又称折半查找) - [适用于已排好序的线性结构 - 时间复杂度O(logN)]

```
//二分搜索
//A为已按"升序排列"的数组，x为要查询的元素
//返回目标元素的下标
function binarySearch(A, x) {
    var low = 0,
        high = A.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2); //下取整   
        if (x == A[mid]) {
            return mid;
        }
        if (x < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
```

### 冒泡排序 - [时间复杂度O(n^2)]

```
//冒泡排序一
function BubbleSort(array) {
  var length = array.length;
  for (var i = length - 1; i > 0; i--) { //用于缩小范围
    for (var j = 0; j < i; j++) { //在范围内进行冒泡，在此范围内最大的一个将冒到最后面
      if (array[j] > array[j+1]) { 
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
 
var arr = [10,9,8,7,7,6,5,11,3];
var result = BubbleSort(arr);
console.log(result); 
/*
[ 9, 8, 7, 7, 6, 5, 10, 3, 11 ]
-----------------------------
[ 8, 7, 7, 6, 5, 9, 3, 10, 11 ]
-----------------------------
[ 7, 7, 6, 5, 8, 3, 9, 10, 11 ]
-----------------------------
[ 7, 6, 5, 7, 3, 8, 9, 10, 11 ]
-----------------------------
[ 6, 5, 7, 3, 7, 8, 9, 10, 11 ]
-----------------------------
[ 5, 6, 3, 7, 7, 8, 9, 10, 11 ]
-----------------------------
[ 5, 3, 6, 7, 7, 8, 9, 10, 11 ]
-----------------------------
[ 3, 5, 6, 7, 7, 8, 9, 10, 11 ]
-----------------------------
[ 3, 5, 6, 7, 7, 8, 9, 10, 11 ]
*/



//冒泡排序二
function swap(A, i, j) {
    var t = A[i];
    A[i] = A[j];
    A[j] = t;
}
function bubbleSort(A) {
    for (var i = 0; i < A.length; i++) {
        var sorted = true;
        //注意：内循环是倒着来的
        for (var j = A.length - 1; j > i; j--) {
            if (A[j] < A[j - 1]) {
                swap(A, j, j - 1);
                sorted = false;
            }
        }
        if (sorted) {
            return;
        }
    }
} 
```

### 选择排序 - [时间复杂度O(n^2)]

```
//选择排序一
function SelectionSort(array) {
    var length = array.length;
    for (var i = 0; i < length; i++) { //缩小选择的范围
        var min = array[i]; //假定范围内第一个为最小值
        var index = i; //记录最小值的下标
        for (var j = i + 1; j < length; j++) { //在范围内选取最小值
            if (array[j] < min) {
                min = array[j];
                index = j;
            }
        }
        if (index != i) { //把范围内最小值交换到范围内第一个
            var temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    }
    return array;
}
var arr = [1, 10, 100, 90, 65, 5, 4, 10, 2, 4];
var result = SelectionSort(arr);
console.log(result);
/*
[ 1, 10, 100, 90, 65, 5, 4, 10, 2, 4 ]
---------------------
[ 1, 2, 100, 90, 65, 5, 4, 10, 10, 4 ]
---------------------
[ 1, 2, 4, 90, 65, 5, 100, 10, 10, 4 ]
---------------------
[ 1, 2, 4, 4, 65, 5, 100, 10, 10, 90 ]
---------------------
[ 1, 2, 4, 4, 5, 65, 100, 10, 10, 90 ]
---------------------
[ 1, 2, 4, 4, 5, 10, 100, 65, 10, 90 ]
---------------------
[ 1, 2, 4, 4, 5, 10, 10, 65, 100, 90 ]
---------------------
[ 1, 2, 4, 4, 5, 10, 10, 65, 100, 90 ]
---------------------
[ 1, 2, 4, 4, 5, 10, 10, 65, 90, 100 ]
---------------------
[ 1, 2, 4, 4, 5, 10, 10, 65, 90, 100 ]
---------------------
[ 1, 2, 4, 4, 5, 10, 10, 65, 90, 100 ]
*/

//选择排序二
//思路：找到最小值的下标记下来，再交换
function selectionSort(A) {
    for (var i = 0; i < A.length - 1; i++) {
        var k = i;
        for (var j = i + 1; j < A.length; j++) {
            if (A[j] < A[k]) {
                k = j;
            }
        }
        if (k != i) {
            var t = A[k];
            A[k] = A[i];
            A[i] = t;
            println(A);
        }
    }
    return A;
}
```

### 插入排序 - [时间复杂度O(n^2)]

```
//插入排序一
function InsertionSort(array) {
    var length = array.length;
    for (var i = 0; i < length - 1; i++) {
        //i代表已经排序好的序列最后一项下标
        var insert = array[i + 1];
        var index = i + 1; //记录要被插入的下标
        for (var j = i; j >= 0; j--) {
            if (insert < array[j]) {
                //要插入的项比它小，往后移动
                array[j + 1] = array[j];
                index = j;
            }
        }
        array[index] = insert;
    }
    return array;
}
var arr = [100, 90, 80, 62, 80, 8, 1, 2, 39];
var result = InsertionSort(arr);
console.log(result);
/*
[ 90, 100, 80, 62, 80, 8, 1, 2, 39 ]
-----------------------
[ 80, 90, 100, 62, 80, 8, 1, 2, 39 ]
-----------------------
[ 62, 80, 90, 100, 80, 8, 1, 2, 39 ]
-----------------------
[ 62, 80, 80, 90, 100, 8, 1, 2, 39 ]
-----------------------
[ 8, 62, 80, 80, 90, 100, 1, 2, 39 ]
-----------------------
[ 1, 8, 62, 80, 80, 90, 100, 2, 39 ]
-----------------------
[ 1, 2, 8, 62, 80, 80, 90, 100, 39 ]
-----------------------
[ 1, 2, 8, 39, 62, 80, 80, 90, 100 ]
-----------------------
[ 1, 2, 8, 39, 62, 80, 80, 90, 100 ]
*/

//插入排序二
//假定当前元素之前的元素已经排好序，先把自己的位置空出来，
//然后前面比自己大的元素依次向后移，直到空出一个"坑"，
//然后把目标元素插入"坑"中
function insertSort(A) {
    for (var i = 1; i < A.length; i++) {
        var x = A[i];
        for (var j = i - 1; j >= 0 && A[j] > x; j--) {
            A[j + 1] = A[j];
        }
        if (A[j + 1] != x) {
            A[j + 1] = x;
            println(A);
        }
    }
    return A;
}
```

### 希尔排序

```
function ShellSort(array) {
    var length = array.length;
    var gap = Math.round(length / 2);
    while (gap > 0) {
        for (var i = gap; i < length; i++) {
            var insert = array[i];
            var index = i;
            for (var j = i; j >= 0; j -= gap) {
                if (insert < array[j]) {
                    array[j + gap] = array[j];
                    index = j;
                }
            }
            array[index] = insert;
        }
        gap = Math.round(gap / 2 - 0.1);
    }
    return array;
}
var arr = [13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
var result = ShellSort(arr);
console.log(result);
/*
[ 13, 14, 45, 27, 73, 25, 39, 10, 65, 23, 94, 33, 82, 25, 59, 94 ]
-----------------------
[ 13, 14, 39, 10, 65, 23, 45, 27, 73, 25, 59, 33, 82, 25, 94, 94 ]
-----------------------
[ 13, 10, 39, 14, 45, 23, 59, 25, 65, 25, 73, 27, 82, 33, 94, 94 ]
-----------------------
[ 10, 13, 14, 23, 25, 25, 27, 33, 39, 45, 59, 65, 73, 82, 94, 94 ]
-----------------------
[ 10, 13, 14, 23, 25, 25, 27, 33, 39, 45, 59, 65, 73, 82, 94, 94 ]
*/
```

### 归并排序

```
function MergeSort(array) {
    var length = array.length;
    if (length <= 1) {
        return array;
    } else {
        var num = Math.ceil(length / 2);
        var left = MergeSort(array.slice(0, num));
        var right = MergeSort(array.slice(num, length));
        return merge(left, right);
    }
}

function merge(left, right) {
    console.log(left);
    console.log(right);
    var a = new Array();
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            var temp = left.shift();
            a.push(temp);
        } else {
            var temp = right.shift();
            a.push(temp);
        }
    }
    if (left.length > 0) {
        a = a.concat(left);
    }
    if (right.length > 0) {
        a = a.concat(right);
    }
    return a;
}
var arr = [13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10];
var result = MergeSort(arr);
console.log(result);
/*
[ 13 ]
[ 14 ]
[ 13, 14 ]
-----------------------------
[ 94 ]
[ 33 ]
[ 33, 94 ]
-----------------------------
[ 13, 14 ]
[ 33, 94 ]
[ 13, 14, 33, 94 ]
-----------------------------
[ 82 ]
[ 25 ]
[ 25, 82 ]
-----------------------------
[ 59 ]
[ 94 ]
[ 59, 94 ]
-----------------------------
[ 25, 82 ]
[ 59, 94 ]
[ 25, 59, 82, 94 ]
-----------------------------
[ 13, 14, 33, 94 ]
[ 25, 59, 82, 94 ]
[ 13, 14, 25, 33, 59, 82, 94, 94 ]
-----------------------------
[ 65 ]
[ 23 ]
[ 23, 65 ]
-----------------------------
[ 45 ]
[ 27 ]
[ 27, 45 ]
-----------------------------
[ 23, 65 ]
[ 27, 45 ]
[ 23, 27, 45, 65 ]
-----------------------------
[ 73 ]
[ 25 ]
[ 25, 73 ]
-----------------------------
[ 39 ]
[ 10 ]
[ 10, 39 ]
-----------------------------
[ 25, 73 ]
[ 10, 39 ]
[ 10, 25, 39, 73 ]
-----------------------------
[ 23, 27, 45, 65 ]
[ 10, 25, 39, 73 ]
[ 10, 23, 25, 27, 39, 45, 65, 73 ]
-----------------------------
[ 13, 14, 25, 33, 59, 82, 94, 94 ]
[ 10, 23, 25, 27, 39, 45, 65, 73 ]
[ 10, 13, 14, 23, 25, 25, 27, 33, 39, 45, 59, 65, 73, 82, 94, 94 ]
-----------------------------
[ 10, 13, 14, 23, 25, 25, 27, 33, 39, 45, 59, 65, 73, 82, 94, 94 ]
*/
```

### 快速排序

```
function QuickSort(array) {
    var length = array.length;
    if (length <= 1) {
        return array;
    } else {
        var smaller = [];
        var bigger = [];
        var base = [array[0]];
        for (var i = 1; i < length; i++) {
            if (array[i] <= base[0]) {
                smaller.push(array[i]);
            } else {
                bigger.push(array[i]);
            }
        }
        <!-- console.log(smaller.concat(base.concat(bigger))); -->
        return QuickSort(smaller).concat(base.concat(QuickSort(bigger)));
    }
}
var arr = [8, 10, 100, 90, 65, 5, 4, 10, 2, 4];
var result = QuickSort(arr);
console.log(result);
/*
[ 5, 4, 2, 4, 8, 10, 100, 90, 65, 10 ]
-----------------------
[ 4, 2, 4, 5 ]
-----------------------
[ 2, 4, 4 ]
-----------------------
[ 2, 4 ]
-----------------------
[ 10, 10, 100, 90, 65 ]
-----------------------
[ 90, 65, 100 ]
-----------------------
[ 65, 90 ]
-----------------------
[ 2, 4, 4, 5, 8, 10, 10, 65, 90, 100 ]
*/
```

###  判断一个单词是否是回文

回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比如 mamam redivider .

很多人拿到这样的题目非常容易想到用for 将字符串颠倒字母顺序然后匹配就行了。其实重要的考察的就是对于reverse的实现。其实我们可以利用现成的函数，将字符串转换成数组，这个思路很重要，我们可以拥有更多的自由度去进行字符串的一些操作。

```
function checkPalindrom(str) {  
    return str == str.split('').reverse().join('');
}
```

### 去掉一组整型数组重复的值

比如 输入: [1,13,24,11,11,14,1,2]，  输出: [1,13,24,11,14,2] ，需要去掉重复的11 和 1 这两个元素。

主要考察个人对Object的使用，利用key来进行筛选。

```

function unique(arr) {  
  let hashTable = {};
  let data = [];
  for(let i=0,l=arr.length;i<l;i++) {
    if(!hashTable[arr[i]]) {
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data
}
```

### 统计一个字符串出现最多的字母

给出一段英文连续的英文字符窜，找出重复出现次数最多的字母
比如： 输入：afjghdfraaaasdenas  输出 ： a
前面出现过去重的算法，这里需要是统计重复次数。

```
function findMaxDuplicateChar(str) {
    if (str.length == 1) {
        return str;
    }
    let charObj = {};
    for (let i = 0; i < str.length; i++) {
        if (!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        } else {
            charObj[str.charAt(i)] += 1;
        }
    }
    let maxChar = '',
    maxValue = 1;
    for (var k in charObj) {
        if (charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar;
}
```


### 字符串反转 - [时间复杂度O(logN)]

```
//字符串反转(比如：ABC -> CBA)
function inverse(s) {
    var arr = s.split('');
    var i = 0,
        j = arr.length - 1;
    while (i < j) {
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
        i++;
        j--;
    }
    return arr.join('');
}
```

* 稳定性排序：基于比较的简单排序算法，即时间复杂度为O(N^2)的排序算法，通常可认为均是稳定排序
其它先进的排序算法，比如归并排序、堆排序、桶排序之类（通常这类算法的时间复杂度可优化为n*LogN），通常可认为均是不稳定排序。

###  不借助临时变量，进行两个整数的交换

```
function swap(a , b) {  
  b = b - a;
  a = a + b;
  b = a - b;
  return [a,b];
}
//module.exports = swap;
```


### 斐波那契数列

斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列主要考察递归的调用。我们一般都知道定义
`fibo[i] = fibo[i-1]+fibo[i-2];  `

```
# 生成斐波那契数组的方法
function getFibonacci(n) {  
  var fibarr = [];
  var i = 0;
  while(i<n) {
    if(i<=1) {
      fibarr.push(i);
    }else{
      fibarr.push(fibarr[i-1] + fibarr[i-2])
    }
    i++;
  }

  return fibarr;
}
```


### 正数组的最大差值

比如： 输入 [10,5,11,7,8,9]  输出 6

通过一道题目去测试对于基本的数组的最大值的查找，很明显我们知道，最大差值肯定是一个数组中最大值与最小值的差。

```
function getMaxProfit(arr) {
    var minPrice = arr[0];
    var maxProfit = 0;
    for (var i = 0; i < arr.length; i++) {
        var currentPrice = arr[i];
        minPrice = Math.min(minPrice, currentPrice);
        var potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }
    return maxProfit;
}
```

### 随机生成指定长度的字符串

```
function randomString(n) {  
  let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
  let tmp = '',
      i = 0,
      l = str.length;
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}

//module.exports = randomString;
```

###  实现类似getElementsByClassName 的功能

自己实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点？不允许使用原生提供的 getElementsByClassName querySelectorAll 等原生提供DOM查找函数。

```
function queryClassName(node, name) {  
  var starts = '(^|[ \n\r\t\f])',
       ends = '([ \n\r\t\f]|$)';
  var array = [],
        regex = new RegExp(starts + name + ends),
        elements = node.getElementsByTagName("*"),
        length = elements.length,
        i = 0,
        element;
    while (i < length) {
        element = elements[i];
        if (regex.test(element.className)) {
            array.push(element);
        }
        i += 1;
    }
    return array;
}
```

### 单链表实现

```
function print(msg) {
    document.write(msg);
}

function println(msg) {
    print(msg + "<br/>");
}
//节点类
var Node = function(v) {
    this.data = v; //节点值
    this.next = null; //后继节点
}
//单链表
var SingleLink = function() {
    this.head = new Node(null); //约定头节点仅占位，不存值
    //插入节点
    this.insert = function(v) {
        var p = this.head;
        while (p.next != null) {
            p = p.next;
        }
        p.next = new Node(v);
    }
    //删除指定位置的节点
    this.removeAt = function(n) {
        if (n <= 0) {
            return;
        }
        var preNode = this.getNodeByIndex(n - 1);
        preNode.next = preNode.next.next;
    }
    //取第N个位置的节点(约定头节点为第0个位置)
    //N大于链表元素个数时，返回最后一个元素
    this.getNodeByIndex = function(n) {
        var p = this.head;
        var i = 0;
        while (p.next != null && i < n) {
            p = p.next;
            i++;
        }
        return p;
    }
    //查询值为V的节点，
    //如果链表中有多个相同值的节点，
    //返回第一个找到的
    this.getNodeByValue = function(v) {
        var p = this.head;
        while (p.next != null) {
            p = p.next;
            if (p.data == v) {
                return p;
            }
        }
        return null;
    }
    //打印输出所有节点
    this.print = function() {
        var p = this.head;
        while (p.next != null) {
            p = p.next;
            print(p.data + " ");
        }
        println("");
    }
}
//测试单链表L中是否有重复元素
function hasSameValueNode(singleLink) {
    var i = singleLink.head;
    while (i.next != null) {
        i = i.next;
        var j = i;
        while (j.next != null) {
            j = j.next;
            if (i.data == j.data) {
                return true;
            }
        }
    }
    return false;
}
//单链表元素反转
function reverseSingleLink(singleLink) {
    var arr = new Array();
    var p = singleLink.head;
    //先跑一遍，把所有节点放入数组
    while (p.next != null) {
        p = p.next;
        arr.push(p.data);
    }
    var newLink = new SingleLink();
    //再从后向前遍历数组,加入新链表
    for (var i = arr.length - 1; i >= 0; i--) {
        newLink.insert(arr[i]);
    }
    return newLink;
}
var linkTest = new SingleLink();
linkTest.insert('A');
linkTest.insert('B');
linkTest.insert('C');
linkTest.insert('D');
linkTest.print(); //A B C D
var newLink = reverseSingleLink(linkTest);
newLink.print(); //D C B A
```


关于邻接矩阵、邻接表的选择：

邻接矩阵、邻接表都是图的基本存储方式，稀松图情况下（即边远小于顶点情况下），用邻接表存储比较适合（相对矩阵N*N而言，邻接表只存储有值的边、顶点，不存储空值，存储效率更高）。稠密图情况下（即边远大地顶点情况下），用邻接矩阵存储比较适合（数据较多的情况下，要对较做遍历，如果用链表存储，要经常跳来跳去，效率较低）。

堆：本身是一颗几乎完全的二叉树，而且父节点的值不小于子节点的值。
(几乎完全的二叉树：除了最右边位置上的一个或几个叶子可能缺少的二叉树。在物理存储上，可以用数组来存储，如果A[j]的顶点有左、右子节点，则左节点为A[2j]、右节点为A[2j+1]，A[j]的父顶点存储在A[j/2]中)

应用场景：优先队列，寻找最大或次最大值；以及把一个新元素插入优先队列。

注：以下所有讨论的堆，约定索引0处的元素仅占位，有效元素从下标1开始根据堆的定义。

### 测试数组H是否为堆
```
//测试数组H是否为堆
//(约定有效元素从下标1开始)
//时间复杂度O(n)
function isHeap(H) {
    if (H.length <= 1) {
        return false;
    }
    var half = Math.floor(H.length / 2); //根据堆的性质，循环上限只取一半就够了
    for (var i = 1; i <= half; i++) {
        //如果父节点，比任何一个子节点 小，即违反堆定义
        if (H[i] < H[2 * i] || H[i] < H[2 * i + 1]) {
            return false;
        }
    }
    return true;
}
```

### 节点向上调整siftUp

某些情况下，如果堆中的某个元素值改变后(比如 10,8,9,7 变成 10,8,9,20 后，20需要向上调整 )，不再满足堆的定义，需要向上调整时，可以用以下代码实现

```
//堆中的节点上移
//(约定有效元素从下标1开始)
function siftUp(H, i) {
    if (i <= 1) {
        return;
    }
    for (var j = i; j > 1; j = Math.floor(j / 2)) {
        var k = Math.floor(j / 2);
        //发现 子节点 比 父节点大，则与父节点交换位置
        if (H[j] > H[k]) {
            var t = H[j];
            H[j] = H[k];
            H[k] = t;
        } else {
            //说明已经符合堆定义，调整结束，退出
            return;
        }
    }
}
```

### 节点向下调整siftDown (既然有向上调整，自然也有向下调整)

```
//堆中的节点下移
//(约定有效元素从下标1开始)
//时间复杂度O(logN)
function siftDown(H, i) {
    if (2 * i > H.length) { //叶子节点，就不用再向下移了
        return;
    }
    for (var j = 2 * i; j < H.length; j = 2 * j) {
        //将j定位到 二个子节点中较大的那个上(很巧妙的做法)
        if (H[j + 1] > H[j]) {
            j++;
        }
        var k = Math.floor(j / 2);
        if (H[k] < H[j]) {
            var t = H[k];
            H[k] = H[j];
            H[j] = t;
        } else {
            return;
        }
    }
}
```

### 向堆中添加新元素

```
//向堆H中添加元素x
//时间复杂度O(logN)
function insert(H, x) {
    //思路：先在数组最后加入目标元素x
    H.push(x);
    //然后向上推
    siftUp(H, H.length - 1);
}
```

### 从堆中删除元素

```
//删除堆H中指定位置i的元素
//时间复杂度O(logN)
function remove(H, i) {
    //思路：先把位置i的元素与最后位置的元素n交换
    //然后数据长度减1(这样就把i位置的元素给干掉了，但是整个堆就被破坏了)
    //需要做一个决定：最后一个元素n需要向上调整，还是向下调整
    //依据：比如比原来该位置的元素大，则向上调整，反之向下调整
    var x = H[i]; //先把原来i位置的元素保护起来
    //把最后一个元素放到i位置
    //同时删除最后一个元素(js语言的优越性体现!)
    H[i] = H.pop();
    var n = H.length - 1;
    if (i == n + 1) {
        //如果去掉的正好是最后二个元素之一，
        //无需再调整
        return;
    }
    if (H[i] > x) {
        siftUp(H, i);
    } else {
        siftDown(H, i);
    }
}
//从堆中删除最大项
//返回最大值
//时间复杂度O(logN)
function deleteMax(H) {
    var x = H[1];
    remove(H, 1);
    return x;
}
```

### 堆排序

这是一种思路非常巧妙的排序算法，精华在于充分利用了“堆”这种数据结构本身的特点（首元素必然最大），而且每个元素的上移、下调，时间复试度又比较低，仅为O(logN)，空间上，也无需借助额外的存储空间，仅在数组自身内部交换元素即可。

#### 思路

* 先将首元素(即最大元素)最末尾的元素对调---目的在于，把最大值沉底，下一轮重就不再管它了

* 经过1后，剩下的元素通常已经不再是一个堆了。这时，只要把新的首元素用siftDown下调，调整完以后，新的最大值元素自然又上升到了首元素的位置

* 反复1、2，大的元素逐一沉底，最后整个数组就有序了。

* 时间复杂度分析：创建堆需要O(n)的代价，每次siftDown代价为O(logN)，最多调整n-1个元素，所以总代价为 O(N) + (N-1)O(logN)，最终时间复杂度为O(NLogN)

```
//堆中的节点下移
//(约定有效元素从下标1开始)
//i为要调整的元素索引
//n为待处理的有效元素下标范围上限值
//时间复杂度O(logN)
function siftDown(H, i, n) {
    if (n >= H.length) {
        n = H.length;
    }
    if (2 * i > n) { //叶子节点，就不用再向下移了
        return;
    }
    for (var j = 2 * i; j < n; j = 2 * j) {
        //将j定位到 二个子节点中较大的那个上(很巧妙的做法)
        if (H[j + 1] > H[j]) {
            j++;
        }
        var k = Math.floor(j / 2);
        if (H[k] < H[j]) {
            var t = H[k];
            H[k] = H[j];
            H[j] = t;
        } else {
            return;
        }
    }
}
//对数组的前n个元素进行创建堆的操作
function makeHeap(A, n) {
    if (n >= A.length) {
        n = A.length;
    }
    for (var i = Math.floor(n / 2); i >= 1; i--) {
        siftDown(A, i, n);
    }
}
//堆排序(非降序排列)
//时间复杂度O(nlogN)
function heapSort(H) {
    //先建堆
    makeHeap(H, H.length);
    for (var j = H.length - 1; j >= 2; j--) {
        //首元素必然是最大的
        //将最大元素与最后一个元素互换，
        //即将最大元素沉底，下一轮不再考虑
        var x = H[1];
        H[1] = H[j];
        H[j] = x;
        //互换后，剩下的元素不再满足堆定义，
        //把新的首元素下调(以便继续维持堆的"形状")
        //调整完后，剩下元素中的最大值必须又浮到了第一位
        //进入下一轮循环
        siftDown(H, 1, j - 1);
    }
    return H;
}
```

* 关于建堆，如果明白其中的原理后，也可以逆向思路，反过来做

```
function makeHeap2(A, n) {
  if (n >= A.length) {
    n = A.length;
  }
  for (var i = Math.floor(n / 2); i <= n; i++) {
    siftUp(A, i);
  }
}
```

### 不相交集合查找、合并

```
//定义节点Node类
var Node = function(v, p) {
    this.value = v; //节点的值
    this.parent = p; //节点的父节点
    this.rank = 0; //节点的秩(默认为0)    
}
//查找包含节点x的树根节点 
var find = function(x) {
    var y = x;
    while (y.parent != null) {
        y = y.parent;
    }
    var root = y;
    y = x;
    //沿x到根进行“路径压缩”
    while (y.parent != null) {
        //先把父节点保存起来，否则下一行调整后，就弄丢了
        var w = y.parent;
        //将目标节点挂到根下
        y.parent = root;
        //再将工作指针，还原到 目标节点原来的父节点上，
        //继续向上逐层压缩
        y = w
    }
    return root;
}
//合并节点x，y对应的两个树
//时间复杂度O(m) - m为待合并的子集合数量
var union = function(x, y) {
    //先找到x所属集合的根
    var u = find(x);
    //再找到y所属集合的根
    var v = find(y);
    //把rank小的集合挂到rank大的集合上
    if (u.rank <= v.rank) {
        u.parent = v;
        if (u.rank == v.rank) {
            //二个集合的rank不分伯仲时
            //给"胜"出方一点奖励，rank+1
            v.rank += 1;
        }
    } else {
        v.parent = u;
    }
}
```

### 归纳法

* 选择排序的递归实现

```
//选择排序的递归实现
//调用示例: selectionSort([3,2,1],0)
function selectionSortRec(A, i) {
  var n = A.length - 1;
  if (i < n) {
    var k = i;
    for (var j = i + 1; j <= n; j++) {
      if (A[j] < A[k]) {
        k = j
      }
    }
    if (k != i) {
      var t = A[k];
      A[k] = A[i];
      A[i] = t;
    }
    selectionSortRec(A, i + 1);
  }
}
```

* 插入排序递归实现

```
//插入排序递归实现
//调用示例:insertSortRec([4,3,2,1],3);
function insertSortRec(A, i) {
  if (i > 0) {
    var x = A[i];
    insertSortRec(A, i - 1);
    var j = i - 1;
    while (j >= 0 && A[j] > x) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = x;
  }
}
```

* eg1:数组中找出最大值

```
//在数组中找最大值(递归实现)
function findMax(A, i) {
    if (i == 0) {
        return A[0];
    }
    var y = findMax(A, i - 1);
    var x = A[i - 1];
    return y > x ? y : x;
}
var A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var test = findMax(A, A.length);
console.log(test); //返回9
```

* eg2:检查数组中是否存在二个数

```
//非递归实现
function sumX2(A, x) {
    var i = 0,
        j = A.length - 1;
    while (i < j) {
        if (A[i] + A[j] == x) {
            return true;
        } else if (A[i] + A[j] < x) {
            //i后移
            i++;
        } else {
            //j前移
            j--;
        }
    }
    return false;
}
var A = [1, 2, 3, 4, 5, 6, 7, 8];
var test2 = sumX2(A, 9);
console.log(test2); //返回true
```

* 算x的m次幂

```
//计算x的m次幂（递归实现）
// 时间复杂度O(logn)
function expRec(x, m) {
    if (m == 0) {
        return 1;
    }
    var y = expRec(x, Math.floor(m / 2));
    y = y * y;
    if (m % 2 != 0) {
        y = x * y
    }
    return y;
}
//println(expRec(2, 5));

//另一种方式：
//根据数学常识： x^m = [x^(m/2)]^2
//非递归解法
//将10进制数转化成2进制
function toBin(dec) {
    var bits = [];
    var dividend = dec;
    var remainder = 0;
    while (dividend >= 2) {
        remainder = dividend % 2;
        bits.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    bits.push(dividend);
    bits.reverse();
    return bits.join("");
}
//计算x的m次幂（非递归实现）
//很独特的一种解法
function exp(x, m) {
    var y = 1;
    var bin = toBin(m).split('');
    //先将m转化成2进制形式
    for (var j = 0; j < bin.length; j++) {
        y = y * 2;
        //如果2进制的第j位是1，则再*x
        if (bin[j] == "1") {
            y = x * y
        }
    }
    return y;
}
//println(exp(2, 5));
```

### 多项式求值

```
//多项式求值
//N次乘法+N次加法搞定，伟大的改进！
function horner(A, x) {
    var n = A.length - 1
    var p = A[n];
    for (var j = 0; j < n; j++) {
        p = x * p + A[n - j - 1];
    }
    return p;
}
//计算: y(2) = 3x^3 + 2x^2 + x -1;
var A = [-1, 1, 2, 3];
var y = horner(A, 2);
console.log(y); //33
```

### 多数问题

一个元素个数为n的数组，希望快速找出其中大于出现次数>n/2的元素（该元素也称为多数元素）。通常可用于选票系统，快速判定某个候选人的票数是否过半。最优算法如下：

```
//找出数组A中“可能存在”的多数元素
function candidate(A, m) {
    var count = 1,
        c = A[m],
        n = A.length - 1;
    while (m < n && count > 0) {
        m++;
        if (A[m] == c) {
            count++;
        } else {
            count--;
        }
    }
    if (m == n) {
        return c;
    } else {
        return candidate(A, m + 1);
    }
}
//寻找多数元素
//时间复杂度O(n)
function majority(A) {
    var c = candidate(A, 0);
    var count = 0;
    //找出的c，可能是多数元素，也可能不是，
    //必须再数一遍，以确保结果正确
    for (var i = 0; i < A.length; i++) {
        if (A[i] == c) {
            count++;
        }
    }
    //如果过半，则确定为多数元素
    if (count > Math.floor(A.length / 2)) {
        return c;
    }
    return null;
}
var m = majority([3, 2, 3, 3, 4, 3]);
console.log(m);
```

以上算法基于这样一个结论：在原序列中去除两个不同的元素后，那么在原序列中的多数元素在新序列中还是多数元素

证明如下：如果原序列的元素个数为n，多数元素出现的次数为x，则 x/n > 1/2
去掉二个不同的元素后：

* 如果去掉的元素中不包括多数元素，则新序列中 ，原先的多数元素个数/新序列元素总数 = x/(n-2) ，因为x/n > 1/2 ，所以 x/(n-2) 也必然>1/2

* 如果去掉的元素中包含多数元素，则新序列中 ，原先的多数元素个数/新序列元素总数 = (x-1)/(n-2) ，因为x/n > 1/2  =》 x>n/2 代入 (x-1)/(n-2) 中，
有`(x-1)/(n-2) > (n/2 -1)/(n-2) = 2(n-2)/(n-2) = 1/2`

### 全排列

```
function swap(A, i, j) {
    var t = A[i];
    A[i] = A[j];
    A[j] = t;
}

function println(msg) {
    document.write(msg + "<br/>");
}
//全排列算法
function perm(P, m) {
    var n = P.length - 1;
    if (m == n) {
        //完成一个新排列时，输出
        println(P);
        return;
    }
    for (var j = m; j <= n; j++) {
        //将起始元素与后面的每个元素交换
        swap(P, j, m);
        //在前m个元素已经排好的基础上
        //再加一个元素进行新排列
        perm(P, m + 1);
        //把j与m换回来，恢复递归调用前的“现场"，
        //否则因为递归调用前，swap已经将原顺序破坏了，
        //导致后面生成排序时，可能生成重复
        swap(P, j, m);
    }
}
perm([1, 2, 3], 0);
//1,2,3
//1,3,2
//2,1,3
//2,3,1
//3,2,1
//3,1,2
```


### 分治法

将问题划分成二个子问题时，尽量让子问题的规模大致相等。这样才能最大程度的体现一分为二，将问题规模以对数折半缩小的优势。

```
//打印输出(调试用)
function println(msg) {
    document.write(msg + "<br/>");
}
//数组中i,j位置的元素交换(辅助函数)
function swap(A, i, j) {
    var t = A[i];
    A[i] = A[j];
    A[j] = t;
}
//寻找数组A中的最大、最小值(分治法实现)
function findMinMaxDiv(A, low, high) {
    //最小规模子问题的解
    if (high - low == 1) {
        if (A[low] < A[high]) {
            return [A[low], A[high]];
        } else {
            return [A[high], A[low]];
        }
    }
    var mid = Math.floor((low + high) / 2);
    //在前一半元素中寻找子问题的解
    var r1 = findMinMaxDiv(A, low, mid);
    //在后一半元素中寻找子问题的解
    var r2 = findMinMaxDiv(A, mid + 1, high);
    //把二部分的解合并
    var x = r1[0] > r2[0] ? r2[0] : r1[0];
    var y = r1[1] > r2[1] ? r1[1] : r2[1];
    return [x, y];
}
var r = findMinMaxDiv([1, 2, 3, 4, 5, 6, 7, 8], 0, 7);
println(r); //1,8

//二分搜索(分治法实现)
//输入：A为已按非降序排列的数组
//x 为要搜索的值
//low,high搜索的起、止索引范围
//返回：如果找到，返回下标，否则返回-1
function binarySearchDiv(A, x, low, high) {
    if (low > high) {
        return -1;
    }
    var mid = Math.floor((low + high) / 2);
    if (x == A[mid]) {
        return mid;
    } else if (x < A[mid]) {
        return binarySearchDiv(A, x, low, mid - 1);
    } else {
        return binarySearchDiv(A, x, mid + 1, high);
    }
}
var f = binarySearchDiv([1, 2, 3, 4, 5, 6, 7], 4, 0, 6);
println(f); //3

//将数组A，以low位置的元素为界，划分为前后二半
//n为待处理的索引范围上限
function split(A, low, n) {
    if (n >= A.length - 1) {
        n = A.length - 1;
    }
    var i = low;
    var x = A[low];
    //二个指针一前一后“跟随”，
    //最前面的指针发现有元素比分界元素小时，换到前半部
    //后面的指针再紧跟上，“夫唱妇随”一路到头
    for (var j = low + 1; j <= n; j++) {
        if (A[j] <= x) {
            i++;
            if (i != j) {
                swap(A, i, j);
            }
        }
    }
    //经过上面的折腾后，除low元素外，其它的元素均以就位
    //最后需要把low与最后一个比low位置小的元素交换，
    //以便把low放在分水岭位置上
    swap(A, low, i);
    return [A, i];
}
var A = [5, 1, 2, 6, 3];
var b = split(A, 0, A.length - 1);
println(b[0]); //3,1,2,5,6

//快速排序 
function quickSort(A, low, high) {
    var w = high;
    if (low < high) {
        var t = split(A, low, w); //分治思路，先分成二半
        w = t[1];
        //在前一半求解
        quickSort(A, low, w - 1);
        //在后一半求解
        quickSort(A, w + 1, high);
    }
}
var A = [5, 6, 4, 7, 3];
quickSort(A, 0, A.length - 1);
println(A); //3,4,5,6,7
```


### split算法的思想应用

设A[1..n]是一个整数集，给出一算法重排数组A中元素，使得所有的负整数放到所有非负整数的左边，你的算法的运行时间应当为Θ(n)

```
function sort1(A) {
    var i = 0,
        j = A.length - 1;
    while (i < j) {
        if (A[i] >= 0 && A[j] >= 0) {
            j--;
        } else if (A[i] < 0 && A[j] < 0) {
            i++;
        } else if (A[i] > 0 && A[j] < 0) {
            swap(A, i, j);
            i++;
            j--;
        } else {
            i++;
            j--;
        }
    }
}

function sort2(A) {
    if (A.length <= 1) {
        return;
    }
    var i = 0;
    for (var j = i + 1; j < A.length; j++) {
        if (A[j] < 0 && A[i] >= 0) {
            swap(A, i, j);
            i++;
        }
    }
}
var a = [1, -2, 3, -4, 5, -6, 0];
sort1(a);
println(a); //-6,-2,-4,3,5,1,0
var b = [1, -2, 3, -4, 5, -6, 0];
sort2(b);
println(b); //-2,-4,-6,1,5,3,0
```


### 年龄计算器
```
const years = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    年:Math.floor(ms/365/86400000),
    天: Math.floor(ms / 86400000)%365,
    时: Math.floor(ms / 3600000) % 24,
    分: Math.floor(ms / 60000) % 60,
    秒: Math.floor(ms / 1000) % 60,
    毫秒: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val}${key}${val !== 1 ? '' : ''}`)
    .join('');
};

years(new Date("1993-11-01")-new Date()) //25年109天6时6分6秒934毫秒
```


* DOM事件绑定

```
<!-- 声明函数时就指定适当的函数 -->
var addEvent = (function() {
    if (document.addEventListener) {
        return function(type, element, fun) {
            element.addEventListener(type, fun, false);
        }
    } else if (document.attachEvent) {
        return function(type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    } else {
        return function(type, element, fun) {
            element['on' + type] = fun;
        }
    }
})();


<!-- 惰性载入重写 （缺点：函数名称有所改变比较麻烦）-->
function addEvent(type, element, fun) {
    if (element.addEventListener) {
        addEvent = function(type, element, fun) {
            element.addEventListener(type, fun, false);
        }
    } else if (element.attachEvent) {
        addEvent = function(type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    } else {
        addEvent = function(type, element, fun) {
            element['on' + type] = fun;
        }
    }
    return addEvent(type, element, fun);
}

```