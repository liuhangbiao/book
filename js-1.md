## js命名规范

### js函数命名规范
- 命名方法： 小驼峰命名法
- 命名规则： 前缀因该为动词
- 命名建议： 常用动词约定
    +  can
    +  has
    +  is
    +  get
    +  set
    +  load



### 名词全部大写
- 使用大写字母和下划线来组合命名，下划线用来分割单词

### 变量
- 前缀为形容词
- 小驼峰命名法

### 类构造函数
- 大驼峰命名法，首字母大写
- 前缀为名词

### 类成员
- 公共属性和方法
- 私有属性和方法
    + 前缀为下划线，后面跟公共属性和方法命名方法一样

### 注释规范
- 单行注释
    + // 这是一个单行注释
- 多行注释
    + /**
    + * 代码执行到这里后会调用setParams()函数
    + * setParams(): 设置自定义参数
    + */
- 函数&方法注释 (如：tab1)
    + 函数说明/@关键字
        * /**
        * * 函数说明
        * * @关键字
        * */
    + 常用关键字注释
        * @param
        * @return
        * @author
        * @example


#### tab1

|注释名|语法|含义|示例|
|-|-|-|-|
| @param |  @param {参数类型} 描述信息 | 描述参数 |  @param {String} name 传入名称 |
| @return |  @return {参数类型} 描述信息 | 描述返回值 |  @return {Boolean} true；可执行 false;不可执行 |
| @author |  @author 描述信息 | 描述作者 |  @author xxx 2019/03/18|
| @example |  @example 示例代码 | 演示函数作用 |  @example setParams({'title':'订单生产'})|



### 模块化

- UMD  [UMD是AMD和CommonJS的糅合]

```
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('b'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.b);
    }
}(this, function (b) {
    //use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));

//UMD
(function (window, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.eventUtil = factory();
    }
})(this, function () {
    // module ...
});
```

- AMD [AMD模块以浏览器第一的原则发展，异步加载模块。]

```
define(id?, dependencies?, function factory(){

    return moduleContent;

});


//AMD
define(['./a','./b'], function (a, b) {
    //依赖一开始就写好
    a.test();
    b.test();
});
```

- Common.js / CMD
    + Common.js模块定义和使用： [CommonJS模块以服务器第一原则发展，选择同步加载，它的模块无需包装(unwrapped modules)]

    ```
    var dependency = require('xxx');
    // 模块定义
    exports.xxx = xxx;
    // 或者
    module.exports = moduleContent;
    ```

    + CMD模块定义和使用：

    ```
    define(function(require, exports, module) {
        var a = require('./a')
        var b = require('./b') // 依赖可以就近书写
    })

    //CMD
    define(function (requie, exports, module) {
        //依赖可以就近书写
        var a = require('./a');
        a.test();
        ...
        //软依赖
        if (status) {  
            var b = requie('./b');
            b.test();
        }
    });
    ```

- AMD、CMD、UMD 模块的写法
    + AMD [随着RequireJS成为最流行的实现方式，异步模块规范（AMD）在前端界已经被广泛认同]

        ```
        # 下面是只依赖jquery的模块foo的代码：
        //文件名: foo.js
        define(['jquery'], function ($) {
            // 方法
            function myFunc(){};
            //  暴露公共方法
            return myFunc;
        });

        # 还有稍微复杂点的例子，下面的代码依赖了多个组件并且暴露多个方法:
        // 文件名: foo.js
        define(['jquery', 'underscore'], function ($, _) {
        // 方法
        function a(){}; // 私有方法，因为没有被返回(见下面)
        function b(){}; // 公共方法，因为被返回了
        function c(){}; // 公共方法，因为被返回了
             //    暴露公共方法
            return {
                b: b,
                c: c
            }
        });
        定义的第一个部分是一个依赖数组，第二个部分是回调函数，只有当依赖的组件可用时（像RequireJS这样的脚本加载器会负责这一部分，包括找到文件路径）回调函数才被执行。

        注意，依赖组件和变量的顺序是一一对应的（例如，jquery->$, underscore->_）。

        同时注意，我们可以用任意的变量名来表示依赖组件。假如我们把$改成$$，在函数体里面的所有对jQuery的引用都由$变成了$$。

        还要注意，最重要的是你不能在回调函数外面引用变量$和_，因为它相对其它代码是独立的。这正是模块化的目的所在！
        ```
    
    + CommonJS/CMD
        * 就像前面的格式一样，下面是用CommonJS规范实现的foo模块的写法：
        
        ```
         //文件名: foo.js
        //依赖
        var $ = require('jquery');
        //方法
        function myFunc(){};
        //暴露公共方法（一个）
        module.exports = myFunc;
        ```

        * 还有更复杂的例子，下面的代码依赖了多个组件并且暴露多个方法：

        ```
         //文件名: foo.js
        var $ = require('jquery');
        var _ = require('underscore');
        //methods
        function a(){};    //私有方法，因为它没在module.exports中 (见下面)
        function b(){};    //公共方法，因为它在module.exports中定义了
        function c(){};    //公共方法，因为它在module.exports中定义了
        //暴露公共方法
        module.exports = {
            b: b,
            c: c
        };
        ```

    + UMD: 通用模块规范
    既然CommonJs和AMD风格一样流行，似乎缺少一个统一的规范。所以人们产生了这样的需求，希望有支持两种风格的“通用”模式，于是通用模块规范（UMD）诞生了。
    
        ```
        # 兼容了AMD和CommonJS，同时还支持老式的“全局”变量规范：
        (function (root, factory) {
            if (typeof define === 'function' && define.amd) {
                // AMD
                define(['jquery'], factory);
            } else if (typeof exports === 'object') {
                // Node, CommonJS之类的
                module.exports = factory(require('jquery'));
            } else {
                // 浏览器全局变量(root 即 window)
                root.returnExports = factory(root.jQuery);
            }
        }(this, function ($) {
            //    方法
            function myFunc(){};
         
            //    暴露公共方法
            return myFunc;
        }));

        # 保持跟上面例子一样的模式，下面是更复杂的例子，它依赖了多个组件并且暴露多个方法:
        (function (root, factory) {
            if (typeof define === 'function' && define.amd) {
                // AMD
                define(['jquery', 'underscore'], factory);
            } else if (typeof exports === 'object') {
                // Node, CommonJS之类的
                module.exports = factory(require('jquery'), require('underscore'));
            } else {
                // 浏览器全局变量(root 即 window)
                root.returnExports = factory(root.jQuery, root._);
            }
        }(this, function ($, _) {
            //    方法
            function a(){};    //    私有方法，因为它没被返回 (见下面)
            function b(){};    //    公共方法，因为被返回了
            function c(){};    //    公共方法，因为被返回了
            //    暴露公共方法
            return {
                b: b,
                c: c
            }
        }));
        ```

对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行（根据写法不同，处理方式不通过）。

CMD推崇依赖就近，AMD推崇依赖前置