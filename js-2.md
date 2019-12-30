### JS代码片段

#### 防抖

浏览器的 resize、scroll、keypress、mousemove 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制。作用是在短时间内多次触发同一个函数，只执行最后一次，或者只在开始时执行。
以用户拖拽改变窗口大小，触发 resize 事件为例，在这过程中窗口的大小一直在改变，所以如果我们在 resize 事件中绑定函数，这个函数将会一直触发，而这种情况大多数情况下是无意义的，还会造成资源的大量浪费。


```js
function debounce(fn, delay, immediate) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (timer) clearTimeout(timer)
        if (immediate) {
            var doNow = !timer;
            timer = setTimeout(function() {
                timer = null;
            }, delay)
            if (doNow) {
                fn.apply(context, args)
            }
        } else {
            timer = setTimeout(function() {
                fn.apply(context, args)
            }, delay)
        }
    }
}

// 实例
var run =function(){console.log('I am run')}
window.addEventListener('resize',debounce(run,2000))
```


#### 节流

节流是指在一段时间内只允许函数执行一次
应用场景如： 输入框的联想、可以限定用户在输入时，只在每两秒钟响应一次联想(或是两秒钟发送一次搜索请求)

```js
# 方法一：
var throttle = function(fn, delay) {
  var timer=null;
  return function(){
    var context=this;
    var args=arguments;
    if(!timer){
      timer=setTimeout(function(){
        fn.apply(context,args);
        timer=null;
      },delay)
    }
  }
}
# 方法二：
var throttle = function(fn, interval) {
    var timer, firstTime = true;
    return function() {
        var args = arguments;
        var _me = this;
        if (firstTime) {
            fn.apply(_me, args)
            return firstTime = false;
        }
        if (timer) {
            return false
        }
        timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
            fn.apply(_me, args)
        }, interval || 500)
    }
}

// 实例
window.onresize = throttle(function() {
    console.log(1)
}, 500)

```

#### 数组扁平化

```js
function flattenDepth(array, depth = 1) {
    let result = [];
    array.forEach(item => {
        let d = depth;
        if (Array.isArray(item) && d > 0) {
            result.push(...(flattenDepth(item, --d)))
        } else {
            result.push(item);
        }
    })
    return result;
}
// 实例
console.log(flattenDepth([1,[2,[3,[4]],5]])) // [1, 2, Array(2), 5]
console.log(flattenDepth([1,[2,[3,[4]],5]],3)) // [1, 2, 3, 4, 5]
```

#### 对象拷贝

```js
function clone(value, isDeep) {
    if (value === null) return null;
    if (typeof value !== 'object') return value;
    if (Array.isArray(value)) {
        if (isDeep) {
            return value.map(item => clone(item, true))
        }
        return [].concat(value)
    } else {
        if (isDeep) {
            var obj = {};
            Object.keys(value).forEach(item => {
                obj[item] = clone(value[item], true)
            })
            return obj;
        }
        return { ...value }
    }
}

// 实例
var a={a:123}
var b=a.clone(b)
```

#### 浅拷贝

拷贝就是把父对像的属性，全部拷贝给子对象。

```js
var Chinese = {
　　nation:'中国'
}
var Doctor = {
　　career:'医生'
}　　
# 方法一：
function extendCopy(p) {
    var c = {};
    for (var i in p) {　　
        c[i] = p[i];
    }
    c.uber = p;
    return c;　
}

# 方法二：
function copy(obj){
    var newobj = {};
    for ( var attr in obj) {
        newobj[attr] = obj[attr];
    }
    return newobj;
}
//实例
var Doctor = extendCopy(Chinese);
　　Doctor.career = '医生';
    console.log(Doctor.nation); // 中国
//注意：这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。

//例如：现在给Chinese添加一个"出生地"属性，它的值是一个数组。
Chinese.birthPlaces = ['北京','上海','香港'];
//通过extendCopy()函数，Doctor继承了Chinese。
var Doctor = extendCopy(Chinese);
//然后，我们为Doctor的"出生地"添加一个城市：
Doctor.birthPlaces.push('厦门');
//输出结果
console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港, 厦门

结果是两个的出生地都被改了。
所以，extendCopy() 只是拷贝了基本类型的数据，我们把这种拷贝叫做“浅拷贝”。
```

#### 深拷贝

因为浅深拷有如此弊端所以我们接下来看一下深拷贝,所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了。

```js
var Chinese = {
　　nation:'中国'
}
var Doctor = {
　　career:'医生'
}　　
# 方法一：
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if (typeof p[i] === 'object') {　　
            c[i] = (p[i].constructor === Array) ? [] : {};　　
            deepCopy(p[i], c[i]);
        } else {　　　
            c[i] = p[i];
        }
    }
    return c;
}

# 方法二：
function deepCopy(obj){
    if(typeof obj != 'object'){
        return obj;
    }
    var newobj = {};
    for ( var attr in obj) {
        newobj[attr] = deepCopy(obj[attr]);
    }
    return newobj;
}

// 实例
var Doctor = deepCopy(Chinese);

// 给父对象加一个属性，值为数组。然后，在子对象上修改这个属性
Chinese.birthPlaces = ['北京','上海','香港'];
Doctor.birthPlaces.push('厦门');

console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港

```

#### 柯里化

函数柯里化又叫函数求值，一个currying 函数接受到参数时并不会求值，而是返回另外一个函数。刚才传入的参数在函数形成的闭包中被保留下来。待到函数真正需要求值的时候，之前传入的参数都会被一次性求值。

```js
# 方法一：
function curry(fn) {
  var len = fn.length;
  return function curried() {
      var args = [].slice.call(arguments);
      if (args.length < len) {
          return function() {
              var argsInner = [].slice.call(arguments);
              return curried.apply(this, args.concat(argsInner))
          }
      } else {
          return fn.apply(this, args)
      }
  }
}

# 方法二：
var currying = function(fn) {
  var args = []; //传入的数据都被缓存在这里，在符合条件时一并传给计算函数
  return function() {
      if (arguments.length == 0) {
          return fn.apply(this, args)
      } else {
          [].push.apply(args, arguments)
          return arguments.callee // （这句可不要）返回自身，在后面可以这样用 cost(100)(200)
      }
  }
}


// 实例
var f = function(a, b, c) {
  return console.log([a, b, c])
}
var curried = curry(f);
curried(1)(2)(3)

var curried2=currying(f)
curried(1)(2)(3)()
```

#### 分时函数

在渲染列表时，如果一次性渲染的列表数目过多，短时间添加大量 DOM节点会让浏览器吃不消，我们看到的结果往往是浏览器卡顿甚至假死

```js
/**
 * { 分时函数 }
 *
 * @param      {<type>}    arr           要被渲染到浏览器的数组
 * @param      {Function}  fn            具体怎么生成到浏览器的方法
 * @param      {<type>}    count         每个时间段生成到浏览器的数目
 * @param      {<type>}    intervalTime  时间段间隔时间
 * @return     {<type>}    { description_of_the_return_value }
 */
var timeChunk = function(arr, fn, count, intervalTime) {
    var obj, t;
    var len = arr.length;
    //在这里处理数据，每生成一个就从数组中去掉一个
    var start = function() {
        for (var i = 0; i < Math.min(count || i, len); i++) {
            var obj = arr.shift(); //每添加一项就去掉一项
            fn(obj); //执行插入方法
        }
    }
    //  返回一个渲染数据的周期函数
    return function() {
        t = setInterval(function() {
            if (arr.length == 0) {
                return clearInterval(t) //插入完毕之后清除周期函数
            }
            start() //执行生成函数
        }, intervalTime)
    }
}

// 实例
// 生成要被渲染的数据列表
var arr = [],
    i = 1;
while (i < 1001) { arr.push(i);
    i++ } //[1,2,3.......1000]
//传入参数，获得数据渲染周期函数
var renderFriendList = timeChunk(arr, function(n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div)
}, 8, 200) //每200毫秒执行8次插入dom函数
// 执行渲染: (思路： 每指定时间内（ intervalTime） 生成指定数目的节点（ count）， 这样就可以避免因短时间生成大量dom节点导致浏览器卡顿)
renderFriendList()

```

#### 面地址参数 

```js
/**
 * 获取Url参数
 *
 * @param      {string}  paraName  参数名称
 * @return     {<type>}  The url para.
 */
function getUrlPara(paraName) {
    var sUrl = location.href;
    var sReg = "(?://?|&){1}" + paraName + "=([^&]*)"
    var re = new RegExp(sReg, "gi");
    re.exec(sUrl);
    return RegExp.$1;
}
//实例
//https://www.abc.com/user/?id=001&username=张先生
getUrlPara('username')//张先生
```

#### 千分位

```js
/**
 * { 千分位  }
 *
 * @param      {string}  money   传入数字
 * @return     {string}  { description_of_the_return_value }
 */
function Convert(money) {
    var s = money; //获取小数型数据 
    s += "";
    if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00 
    if (/\.\d$/.test(s)) s += "0"; //正则判断 
    while (/\d{4}(\.|,)/.test(s)) //符合条件则进行替换 
        s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); //每隔3位添加一个 
    return s;
}
//实例
Convert(1)//"1.00"
Convert(1.11)//"1.11"
Convert(1.111)//"1.111"
Convert(1.1111)//"1.1111"

```

#### 判断是否数字

```js
/**
 * 判断是否是数字
 *
 * @class      IsNumeric (name)
 * @param      {string}   txt     The text
 * @return     {boolean}  True if numeric, False otherwise.
 */
function IsNumeric(txt) {
    if (txt == "") {
        return false;
    }
    if ((txt+'').indexOf(",") > 0) {
        txt = txt.replace(",", "");
    }
    if (isNaN(txt)) {
        return false;
    } else {
        return true;
    }
}
//实例
IsNumeric() //false
IsNumeric(null) //true
IsNumeric(undefined) //false
IsNumeric('') //false
IsNumeric('123') //true
IsNumeric('123.2') //true
IsNumeric('123.2,2') //true
IsNumeric('123.2,2a') //false
```
#### 格式化两位小数

```
/**
 * { 两位小数的格式化 }
 *
 * @param      {<type>}                    x       { 传入值 }
 * @return     {(Function|number|string)}  { description_of_the_return_value }
 */
function changeTwoDecimal_f(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        // console.log('function:changeTwoDecimal->parameter error');
        // return false;
        return 0;
    }
    f_x = Math.round(f_x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}

// 实例
changeTwoDecimal_f(0) //"0.00"
changeTwoDecimal_f(1) //"1.00"
changeTwoDecimal_f(1.1) //"1.10"
changeTwoDecimal_f(1.11) //"1.11"
changeTwoDecimal_f(1.111) //"1.11"
changeTwoDecimal_f() //0
changeTwoDecimal_f(null) //0
changeTwoDecimal_f(undefined) //0
changeTwoDecimal_f('') //0
changeTwoDecimal_f('abc') //0
```

#### Proxy

Proxy 来替换原本的 Object.defineProperty 来实现数据响应式。 Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。`let p = new Proxy(target, handler)`
`target` 代表需要添加代理的对象 ，`handler` 用来自定义对象中的操作，比如可以用来自定义 `set` 或者 `get` 函数。

```js
# 通过 Proxy 来实现一个数据响应式
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

// 实例
let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
)
p.a = 2 // 监听到属性a改变
p.a // 'a' = 2
```

#### reduce

对于 reduce 来说，它接受两个参数，分别是回调函数和初始值

```js
const arr = [1, 2, 3]
const sum = arr.reduce((acc, current) => acc + current, 0)
console.log(sum)  //6

# 通过 reduce 来实现 map和filter 函数
const numbers = [10, 20, 30, 40];
const go = numbers.reduce((finalList, num) => {
  //实现map方法，映射的作用
    num = num * 2;
    if (num > 50) {
        //实现filter方法过滤
        finalList.push(num);
    }
    return finalList;
}, []);
console.log(go); // [60, 80]
```

#### setInterval

这个函数作用和 setTimeout 基本一致，只是该函数是每隔一段时间执行一次回调函数。

```js
# 如果你有循环定时器的需求，其实完全可以通过 requestAnimationFrame 来实现
function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}

// 实例
let a = 0
setInterval(timer => {
  console.log(1)
  a++
  if (a === 3) cancelAnimationFrame(timer)
}, 1000)

//首先 requestAnimationFrame 自带函数节流功能，基本可以保证在 16.6 毫秒内只执行一次（不掉帧的情况下），并且该函数的延时效果是精确的，没有其他定时器时间不准的问题，当然你也可以通过该函数来实现 setTimeout。
```


