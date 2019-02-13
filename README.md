# web开发规范   

### 基本原则

> 结构、样式、行为分离
 
尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。

> 缩进

统一两个空格缩进（总之缩进统一即可），不要使用 Tab 或者 Tab、空格混搭。 

> 文件编码

使用不带 BOM 的 UTF-8 编码。

* 在 HTML中指定编码 `<meta charset="utf-8">`；
* 无需使用 `@charset` 指定样式表的编码，它默认为 UTF-8 （参考 `@charset`）；

> 一律使用小写字母

```
<!-- Recommended -->
<img src="google.png" alt="Google">
<!-- Not recommended -->
<A HREF="/">Home</A>

/* Not recommended */
color: #E5E5E5;
/* Recommended */
color: #e5e5e5;
```

> 省略外链资源 URL 协议部分

省略外链资源（图片及其它媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免Mixed Content 问题，减小文件字节数。

其它协议（ftp 等）的 URL 不省略

```
<!-- Recommended -->
<script src="//www.jsgu.net/statics/js/autotrack.js"></script>
<!-- Not recommended -->
<script src="http://www.jsgu.net/statics/js/autotrack.js"></script>

/* Not recommended */
.example {
  background: url(http://www.jsgu.net/images/example);
}
/* Recommended */
.example {
  background: url(//www.jsgu.net/images/example);
}
```

> 统一注释

通过配置编辑器，可以提供快捷键来输出一致认可的注释模式。

> HTML 注释

* 模块注释

```
<!-- 文章列表列表模块 -->
<div class="article-list">
...
</div>
```

* 区块注释

```
<!--
@name: Drop Down Menu
@description: Style of top bar drop down menu.
@author: Ashu(Aaaaaashu@gmail.com)
-->
```

> CSS 注释

组件块和子组件块以及声明块之间使用一空行分隔，子组件块之间三空行分隔；

```
/* ==========================================================================
   组件块
 ============================================================================ */
/* 子组件块
 ============================================================================ */
.selector {
  padding: 15px;
  margin-bottom: 15px;
}
/* 子组件块
 ============================================================================ */
.selector-secondary {
  display: block; /* 注释*/
}
.selector-three {
  display: span;
}
```

> JavaScript 注释

* 单行注释: 必须独占一行。`//` 后跟一个空格，缩进与下一行被注释说明的代码一致。
* 多行注释: 避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，使用多个单行注释。
* 函数/方法注释
* 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。；
* 参数和返回值注释必须包含类型信息和说明；
* 当函数是内部函数，外部不可访问时，可以使用 @inner 标识；

```
/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
    var p3 = p3 || 10;
    return {
        p1: p1,
        p2: p2,
        p3: p3
    };
}
```

* 文件注释

文件注释用于告诉不熟悉这段代码的读者这个文件中包含哪些东西。 应该提供文件的大体内容, 它的作者, 依赖关系和兼容性信息。如下:

```
/**
 * @fileoverview Description of file, its uses and information
 * about its dependencies.
 * @author user@meizu.com (Firstname Lastname)
 * Copyright 2015 Meizu Inc. All Rights Reserved.
 */
```


> 代码验证

* 使用 [W3C HTML Validator](http://validator.w3.org/) 来验证你的HTML代码有效性；
* 使用 [W3C CSS Validator](jigsaw.w3.org/css-validator/validator.html.zh-cn) 来验证你的CSS代码有效性；

代码验证不是最终目的，真的目的在于让开发者在经过多次的这种验证过程后，能够深刻理解到怎样的语法或写法是非标准和不推荐的，即使在某些场景下被迫要使用非标准写法，也可以做到心中有数。


### HTML篇

> 标签

* 自闭合（self-closing）标签，无需闭合 ( 例如： img input br hr 等 )；

* 可选的闭合标签（closing tag），需闭合 ( 例如：</li> 或 </body> )；

* 尽量减少标签数量；

> Class 与 ID

* class 应以功能或内容命名，不以表现形式命名；

* class 与 id 单词字母小写，多个单词组成时，采用中划线-分隔；

* 使用唯一的 id 作为 Javascript hook, 同时避免创建无样式信息的 class；


> 属性顺序

HTML 属性应该按照特定的顺序出现以保证易读性。

* id
* class
* name
* data-xxx
* src, for, type, href
* title, alt
* aria-xxx, role


> 引号

属性的定义，统一使用双引号。

```
<div id='xxx'></div>
<div id="xxx"></div>
```

> 嵌套

a 不允许嵌套 div这种约束属于语义嵌套约束，与之区别的约束还有严格嵌套约束，比如a 不允许嵌套 a。

严格嵌套约束在所有的浏览器下都不被允许；而语义嵌套约束，浏览器大多会容错处理，生成的文档树可能相互不太一样。

```
# 语义嵌套约束
<li> 用于 <ul> 或 <ol> 下；

<dd>, <dt> 用于 <dl> 下；

<thead>, <tbody>, <tfoot>, <tr>, <td> 用于 <table> 下；

# 严格嵌套约束
inline-Level 元素，仅可以包含文本或其它 inline-Level 元素;

<a>里不可以嵌套交互式元素<a>、<button>、<select>等;

<p>里不可以嵌套块级元素<div>、<h1>~<h6>、<p>、<ul>/<ol>/<li>、<dl>/<dt>/<dd>、<form>等。
```

更多详情，参考WEB标准系列-HTML元素嵌套

> 布尔值属性

HTML5 规范中 disabled、checked、selected 等属性不用设置值。

```
<input type="text" name="username" id="" disabled>
```

> 语义化

没有 CSS 的 HTML 是一个语义系统而不是 UI 系统。

通常情况下，每个标签都是有语义的，所谓语义就是你的衣服分为外套， 裤子，裙子，内裤等，各自有对应的功能和含义。所以你总不能把内裤套在脖子上吧。– 一丝

此外语义化的 HTML 结构，有助于机器（搜索引擎）理解，另一方面多人协作时，能迅速了解开发者意图

> HEAD

文档类型: 为每个 HTML 页面的第一行添加标准模式（standard mode）的声明， 这样能够确保在每个浏览器中拥有一致的表现。

```
<!DOCTYPE html>
```

> 语言属性

lang属性的取值应该遵循 BCP 47 - Tags for Identifying Languages。

```
<html lang="zh-cn"></html>
<html lang="en"></html>
```

> 字符编码

以无 BOM 的 utf-8 编码作为文件格式;
指定字符编码的 meta 必须是 head 的第一个直接子元素；

```
<html>
    <head>
        <meta charset="utf-8">
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

> IE 兼容模式

优先使用最新版本的IE 和 Chrome 内核

```
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

> SEO 优化

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!-- SEO -->
    <title>税务信用云</title>
    <meta name="keywords" content="税务信用云、税务云、信用云、税务大数据" />
    <meta name="description" content="“税务信用云”围绕共享开放、融合创新的产品理念，以税务数据为核心，融合工商、银行、政府、企业等多部门数据，通过对海量数据进行采集、预处理、分析，畅通政银、政企、政府部门之间的数据共享渠道，实现平台整合。并根据不同应用场景的需求，实现对用户的精准画像，以数据模型定制、数据应用推送、数据与产业融合等方式，分别为企业、金融机构、政府和社会公众提供个性化大数据服务。" />
    <meta name="author" content="name,liuhangbiaoo@gmail.com"/>
</head>
<body>
...
</body>
</html>
```

> viewport

viewport: 一般指的是浏览器窗口内容区的大小，不包含工具条、选项卡等内容；
width: 浏览器宽度，输出设备中的页面可见区域宽度；
device-width: 设备分辨率宽度，输出设备的屏幕可见宽度；
initial-scale: 初始缩放比例；
maximum-scale: 最大缩放比例；

为移动端设备优化，设置可见区域的宽度和初始缩放比例。

```
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

> iOS 图标

apple-touch-icon 图片自动处理成圆角和高光等效果;
apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图;

```
<link rel="apple-touch-icon-precomposed" href="..." sizes="72*72">
...
<link rel="apple-touch-icon-precomposed" href="..." sizes="114*114">
```

> avicon

在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证 favicon 可访问，避免404，必须遵循以下两种方法之一：

* 在 Web Server 根目录放置 favicon.ico 文件；
* 使用 link 指定 favicon；

```
 <link rel="shortcut icon" href="<%= BASE_URL %>favicon.ico">
```
