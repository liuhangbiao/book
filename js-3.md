### js兼容代码片段

*  bind 方法

```
if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
        var self = this,                        // 保存原函数
            context = [].shift.call(arguments), // 保存需要绑定的this上下文
            args = [].slice.call(arguments);    // 剩余的参数转为数组
        return function () {                    // 返回一个新函数
            self.apply(context, [].concat.call(args, [].slice.call(arguments)));
        }
    }
}

<!-- 实例 -->
function fn(a, b, c) {
    console.log(a, b, c);
}
var fn1 = fn.bind(null, 'Dot');
fn('A', 'B', 'C');            // A B C
fn1('A', 'B', 'C');           // Dot A B
fn1('B', 'C');                // Dot B C
fn.call(null, 'Dot');      // Dot undefined undefined
```
