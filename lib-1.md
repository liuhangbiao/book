### 背景介绍

目前，随着移动设备的普及和4G网络的普及，web在移动端的占比已经远远超过PC端，各种H5页面推广页面，H5小游戏热度火爆。以前简单的使用px单位（没有弹性）的时代已经无法满足各位设计师和用户了。如何100%还原UI设计师的设计图，一直困扰着前端工程师。

### css单位学习

首先我们简单了解下css目前都支持哪些单位:

* px: 设置固定的布局或者元素大小，缺点是没有弹性
* em: 参考父元素的font-size，em会继承父级元素的字体大小，em的值并不是固定的
* rem: 相对根元素html的font-size
* %: 相对父元素，对于position: absolute;的元素是相对于已定位的父元素，对于position: fixed;的元素是相对于ViewPort（可视窗口）
* vw: view width的简写, 是指可视窗口的宽度，浏览器宽度1200px, 1 vw = 1200px/100 = 12 px
* vh: view height的简写，是指可视窗口的高度，浏览器高度900px, 1 vh = 900px/100 = 9 px
* vm: 相对于视口的宽度或高度中较小的那个, 其中最小的那个被均分为100单位的vm，浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px
* in: 寸
* cm: 厘米
* mm: 毫米
* pt: point, 大约1/72寸
* pc: pica, 大约6pt, 1/6寸

具有弹性布局能力的单位：

* em，%: 相对于父元素
* rem: 相对于html
* vw, vh, vm: 相对于可视窗口

从上可以看出，要做页面整体弹窗缩放的话，使用rem, vm, vw,vh更适合，因为任何内容都可以找到同一个基准。

### HTML viewport基础

#### 概念

viewport 是用户网页的可视区域。

手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。

#### 用法

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 属性说明

* width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
* height：和 width 相对应，指定高度。
* initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例，默认值1。
* maximum-scale：允许用户缩放到的最大比例。
* minimum-scale：允许用户缩放到的最小比例。
* user-scalable：用户是否可以手动缩放。

### 弹性布局方案

通过以上可以看出，使用弹性布局的css单位配合设置html viewport元信息，就可以实现整体页面的弹性布局（包含字体大小）。


#### 先弄明白介个概念：

* 设备分辨率：一个物理像素是显示器(手机屏幕)上最小的物理显示单元，在操作系统的调度下，每一个设备像素都有自己的颜色值和亮度值；
* 设备屏幕宽度：设备显示器的实际宽度；
* DPR：设备上物理像素和设备独立像素(device-independent pixels (dips))的比例，DPR = 设备分辨率/设备屏幕宽度；
* 300ppi：每英寸300个像素点

#### 思路

根据以上的概念，那么，我们知道

```
window.devicePixelRatio = document.body.clientWidth / window.screen.width;
```

如果屏幕分辨率宽是1080px，屏幕宽度为360px，那么DPR=1080/360=3。

如果现在UI设计图也是1080px，那么前端工程师不想丢失任何细节的使用代码如何还原呢？

可以设置屏幕宽度为1080px, 设置viewport属性initial-scale = 1/3;

这样360px的屏幕就可以容纳1080px宽的内容了。

但是每个手机的分辨率都不一样，那么如何来设置这个这个initial-scale呢？我们可以通过以下方式：

```
var scale = 1 / window.devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content', 'user-scalable=no,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale);
```

将user-scalable设置为no, 不允许缩放，有缩放需要的，可以不设置

之后如何设置某一个区块的宽，高，或者字体大小呢？

我们还需要设置html标签，字体的大小，我习惯于使用设计图的宽/20来获取元素的rem数值。比如

* UI设计图文字大小30px, 那么我习惯使用 font-size: 1.5rem;
* UI设计图图片宽100px, 我习惯使用 width: 5rem;

那么我会设置html的font-size为 deviceWidht / (UI设计图宽/20);

```
base = 720 / 20; // 720为UI设计稿的宽
var fontSize = deviceWidth / base;
document.documentElement.style.fontSize = fontSize + 'px';
```

### 结合以上，完整代码为：

```
<script type="text/javascript">
    var scale = 1 / window.devicePixelRatio;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'user-scalable=no,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale);
    window.onresize = function (base) {
        var deviceWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
        var screenWidth = window.screen.width;
        if (deviceWidth / screenWidth != window.devicePixelRatio) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            deviceWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
        }
        var fontSize = deviceWidth / base;
        document.documentElement.style.fontSize = fontSize + 'px';
    };
    window.onresize(720);
</script>
```


以上代码我放在里面，在html标签渲染前就开始设置。
一开始就根据DPR设置initial-scale，之后在onresize里面设置html字体大小。
大家会注意到onresize里面有这样一段代码：

```
var deviceWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
var screenWidth = window.screen.width;
if (deviceWidth / screenWidth != window.devicePixelRatio) {
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    deviceWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth : document.documentElement.clientWidth;
}
```

这一段代码是为了兼容一部分旧款机器，这些机器无法正常的获取到DPR值，那么我们就只能设置屏幕页面内容宽度为设备宽度。