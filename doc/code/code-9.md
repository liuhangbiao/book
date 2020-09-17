## 常用代码片断(代码库) - 元件

### 概述

提供各种常见的网页内容元件，比如按钮、标题、输入框等

### 代码展示

#### 通用自定义按钮 [ 兼容 ]

宽度适应文字，自定义颜色，可变大小，依赖于[reset](code-1.md)

```
/* 通用自定义按钮-默认蓝色 */
.u-btn{display:inline-block;*display:inline;*zoom:1;*overflow:visible;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;padding:0 12px;height:28px;line-height:28px;border:1px solid #2d88bf;font-size:12px;letter-spacing:1px;word-spacing:normal;text-align:center;vertical-align:middle;cursor:pointer;background:#54aede;}
button.u-btn{*height:30px;_line-height:25px;}
.u-btn,.u-btn:hover{color:#fff;text-decoration:none;}
.u-btn:hover,.u-btn:focus{background:#399dd8;}
.u-btn::-moz-focus-inner{padding:0;margin:0;border:0;}
.u-btn .btntxt{margin-right:3px;_vertical-align:middle;}
.u-btn .btnsel{display:inline-block;*display:inline;*zoom:1;width:0;height:0;overflow:hidden;vertical-align:middle;border-style:solid dashed dashed;border-width:4px 4px 0;border-color:#fff transparent transparent;}
/* 较大 */
.u-btn-lg{padding:0 15px;height:36px;line-height:36px;font-size:18px;}
button.u-btn-lg{*height:38px;_line-height:33px;}
.u-btn-lg .btnsel{border-width:5px 5px 0;}
/* 较小 */
.u-btn-sm{padding:0 10px;height:22px;line-height:22px;}
button.u-btn-sm{*height:24px;_line-height:19px;}
/* 红色 */
.u-btn-c1{border-color:#9f161b;background:#de2027;}
.u-btn-c1:hover,.u-btn-c1:focus{background:#cc1c23;}
/* 黄色 */
.u-btn-c2{border-color:#e1962d;background:#faa42b;}
.u-btn-c2:hover,.u-btn-c2:focus{background:#f8960a;}
/* 绿色 */
.u-btn-c3{border-color:#52a552;background:#5cbc5c;}
.u-btn-c3:hover,.u-btn-c3:focus{background:#50b150;}
/* 灰色 */
.u-btn-c4{border-color:#d0d0d0;background:#f3f3f3;}
.u-btn-c4,.u-btn-c4:hover{color:#333;}
.u-btn-c4:hover,.u-btn-c4:focus{background:#e7e7e7;}
.u-btn-c4 .btnsel{border-top-color:#555;}
.u-btn-c4:hover .btnsel,.u-btn-c4:focus .btnsel{border-top-color:#000;}




<button type="button" class="u-btn">蓝色</button>
<a href="#" class="u-btn">蓝色</a>
<button type="button" class="u-btn u-btn-c1">红色</button>
<button type="button" class="u-btn u-btn-c2">黄色</button>
<button type="button" class="u-btn u-btn-c3">绿色</button>
<button type="button" class="u-btn u-btn-c4">灰色</button>
<button type="button" class="u-btn"><span class="btntxt">下拉</span><span class="btnsel"></span></button>
<button type="button" class="u-btn u-btn-c4"><span class="btnsel"></span></button>
<button type="button" class="u-btn u-btn-c4"><span class="btntxt">灰色下拉</span><span class="btnsel"></span></button>
<button type="button" class="u-btn u-btn-lg"><span class="btntxt">较大的</span><span class="btnsel"></span></button>
<button type="button" class="u-btn u-btn-sm">较小的</button>

```

#### 通用自定义按钮组合 [ 兼容 ]

将按钮无缝拼接在一起，形成按钮组，并可实现下拉，依赖于[reset](code-1.md)

```
/* 通用自定义按钮组合 */
.u-btns{display:inline-block;*display:inline;*zoom:1;position:relative;padding-left:1px;}
.u-btns .u-btn{float:left;margin-left:-1px;border-radius:0;}


<span class="u-btns">
    <button type="button" class="u-btn">蓝色</button>
    <button type="button" class="u-btn"><span class="btnsel"></span></button>
    <ul class="u-menu u-menu-rt u-menu-gp u-menu-show">
        <li><a href="#">分组，右对齐</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li class="menusep"><span class="menuline"></span></li>
        <li><a href="#">下拉式菜单项</a></li>
    </ul>
</span>
<span class="u-btns">
    <button type="button" class="u-btn u-btn-c4">灰色</button>
    <button type="button" class="u-btn u-btn-c4">灰色</button>
    <button type="button" class="u-btn u-btn-c4">灰色</button>
    <button type="button" class="u-btn u-btn-c4">灰色</button>
</span>
<span class="u-btns">
    <button type="button" class="u-btn u-btn-c4">灰色</button>
    <button type="button" class="u-btn u-btn-c4"><span class="btnsel"></span></button>
    <ul class="u-menu u-menu-min u-menu-show">
        <li><a href="#">至少撑满</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
    </ul>
</span>
<span class="u-btns">
    <button type="button" class="u-btn"><span class="btntxt">蓝色下拉</span><span class="btnsel"></span></button>
    <ul class="u-menu u-menu-max u-menu-show">
        <li><a href="#">至多撑满</a></li>
        <li><a href="#">下拉式菜单菜单菜单菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
    </ul>
</span>
<span class="u-btns">
    <button type="button" class="u-btn u-btn-c4 u-btn-lg">较大灰色</button>
    <button type="button" class="u-btn u-btn-c4 u-btn-lg"><span class="btnsel"></span></button>
    <ul class="u-menu u-menu-rt u-menu-show">
        <li><a href="#">下拉式菜单</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
        <li><a href="#">下拉式菜单项</a></li>
    </ul>
</span>
```


#### 标题文本 [ 兼容 ]

定义字体及大小等，依赖于[reset](code-1.md)

```
/* 标题文本-默认大小继承 */
.u-tt{font-family:'microsoft yahei',sans-serif;}
/* 较小 */
.u-tt-sm{font-size:12px;}
/* 中等 */
.u-tt-md{font-size:14px;}
/* 较大 */
.u-tt-lg{font-size:16px;}
/* 很大 */
.u-tt-xl{font-size:18px;}


<h2 class="u-tt">不定大小的标题</h2>
<h2 class="u-tt u-tt-sm">固定较小的标题</h2>
<h2 class="u-tt u-tt-md">固定中等的标题</h2>
<h2 class="u-tt u-tt-lg">固定较大的标题</h2>
<h2 class="u-tt u-tt-xl">固定很大的标题</h2>
```


#### 简易单行文本输入框 [ 兼容 ]

简易单行文本输入框，依赖于[reset](code-1.md)

```
/* 文本输入框 */
.u-ipt{width:180px;padding:5px;height:17px;border:1px solid #D9D9D9;border-top-color:#c0c0c0;line-height:17px;font-size:14px;color:#777;background:#fff;}
/* 文本输入框-窄 */
.u-ipt-1{width:90px;}
/* 文本输入框-出错 */
.u-ipt-err{border-color:#c00 #e00 #e00;}


<input type="text" class="u-ipt"/>
<input type="text" class="u-ipt u-ipt-err"/>
<input type="text" class="u-ipt u-ipt-1"/>
<input type="text" class="u-ipt u-ipt-1 u-ipt-err"/>
```



#### 下拉式菜单 [ 兼容 ]

可自定义对齐方式，可以分组显示，多种宽度模式，依赖于[reset](code-1.md)

```
/* 下拉式菜单-默认左对齐 */
.u-menu{display:none;position:absolute;z-index:100;top:100%;left:0;*zoom:1;*width:100px;margin:1px 0 0;overflow:hidden;border:1px solid #d0d0d0;border-width:1px 0;line-height:1.5;font-size:12px;background:#fff;}
.u-menu li{border:1px solid #d0d0d0;border-width:0 1px;*vertical-align:top;}
.u-menu li a{display:block;*zoom:1;padding:7px 12px 6px;margin:-1px 0;border-top:1px solid #e8e8e8;overflow:hidden;*vertical-align:top;word-wrap:normal;white-space:nowrap;_white-space:normal;text-overflow:ellipsis;color:#333;}
.u-menu li a:hover{color:#333;background:#f7f7f7;}
.u-menu li a:active{background:#f0f0f0;}
/* 显示 */
.u-menu-show{display:block;}
/* 分组 */
.u-menu-gp li.menusep,.u-menu-gp li.menusep .menuline{height:0;line-height:0;font-size:0;overflow:hidden;}
.u-menu-gp li.menusep{padding:5px 0;}
.u-menu-gp li.menusep .menuline{display:block;border:0;border-top:1px solid #e8e8e8;}
.u-menu-gp li a{border:0;}
/* 宽度限制 */
.u-menu-min{min-width:100%;}
.u-menu-max{max-width:100%;}
/* 右对齐 */
.u-menu-rt{left:auto;right:0;}

<ul class="u-menu u-menu-show">
    <li><a href="#">下拉式菜单</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项</a></li>
</ul>
<ul class="u-menu u-menu-rt u-menu-gp u-menu-show">
    <li><a href="#">分组，右对齐</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li class="menusep"><span class="menuline"></span></li>
    <li><a href="#">下拉式菜单项</a></li>
</ul>
<ul class="u-menu u-menu-min u-menu-gp u-menu-show">
    <li><a href="#">至少撑满，分组</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项</a></li>
</ul>
<ul class="u-menu u-menu-max u-menu-show">
    <li><a href="#">最多撑满</a></li>
    <li><a href="#">下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项下拉式菜单项下拉式菜单项下拉式菜单项</a></li>
    <li><a href="#">下拉式菜单项</a></li>
</ul>
```


#### 水平进度条 [ 兼容 ]

可自定义颜色，附加动画效果

```
/* 水平进度条-默认蓝色 */
.u-progress{width:200px;height:12px;overflow:hidden;background:#f7f7f7;}
.u-progress .pgtrack,.u-progress .pgbar{display:block;overflow:hidden;}
.u-progress .pgtrack{height:10px;border-width:1px;border-style:solid;border-color:#ddd #eee #f5f5f5;}
.u-progress .pgbar{width:100%;height:100%;margin-top:-12px;background:#3a9ed8;}
/* 较佳，绿色 */
.u-progress-c1 .pgbar{background:#50b050;}
/* 中等，黄色 */
.u-progress-c2 .pgbar{background:#f8960b;}
/* 较差，红色 */
.u-progress-c3 .pgbar{background:#cc1c23;}



<div class="u-progress"><span class="pgtrack"></span><span class="pgbar" style="width:50%"></span></div>
<div class="u-progress u-progress-c1"><span class="pgtrack"></span><span class="pgbar" style="width:30%"></span></div>
<div class="u-progress u-progress-c2"><span class="pgtrack"></span><span class="pgbar" style="width:60%"></span></div>
<div class="u-progress u-progress-c3"><span class="pgtrack"></span><span class="pgbar" style="width:90%"></span></div>

```


#### 无边图片容器 [ 兼容 ]

可定宽定高、图片拉伸或高度自动等，依赖于[reset](code-1.md)

```
/* 无边图片容器-默认定宽定高、图片拉伸 */
.u-img{display:block;position:relative;width:110px;height:110px;}
.u-img img{display:block;width:100%;height:100%;}
/* 图片高适应 */
.u-img-ha,.u-img-ha img{height:auto;}

<span class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></span>
<a href="#" class="u-img"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a>
<span class="u-img u-img-ha"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></span>
```


#### 有边图片容器 [ 兼容 ]

可定宽定高、图片拉伸或高度自动等，依赖于[reset](code-1.md)

```
/* 有边图片容器-默认定宽定高、图片拉伸 */
.u-img2{display:block;position:relative;width:104px;height:104px;padding:2px;border:1px solid #ddd;}
.u-img2 img{display:block;width:100%;height:100%;}
/* 图片高适应 */
.u-img2-ha,.u-img2-ha img{height:auto;}

<span class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></span>
<a href="#" class="u-img2"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a>
<span class="u-img2 u-img2-ha"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></span>
```


#### 多点式幻灯指示器 [ 兼容 ]

默认底部居中，也可居右

```
/* 多点式幻灯指示控制器-默认底部居中 */
.u-pointer{position:absolute;bottom:10px;left:0;width:100%;z-index:50;text-align:center;line-height:0;}
.u-pointer i{display:inline-block;*display:inline;*zoom:1;width:10px;height:10px;overflow:hidden;margin:0 0 0 5px;cursor:pointer;background:#ccc;}
.u-pointer i.first{margin-left:0;}
.u-pointer i:hover{background:#999;}
.u-pointer i.z-crt{background:#40a1d9;}
/* 居右 */
.u-pointer-rt{right:10px;left:auto;width:auto;}

<span class="u-pointer"><i class="first z-crt"></i><i></i><i></i><i></i><i></i></span>
<span class="u-pointer u-pointer-rt"><i class="first z-crt"></i><i></i><i></i><i></i><i></i></span>
```

#### 选框与文本对齐 [ 兼容 ]

单选框radio和复选框checkbox与文本对齐

```
/* 选框与文本对齐   */
input{position:relative;*top:1px;margin:0 4px 0 0;*margin:0 0 0 -4px;}
 
<div style="margin-bottom:1em;line-height:18px;">
    <div style="background:#dfedf0;"><input type="radio">单选框line-height:18px;</div>
    <div style="background:#ddd;"><input type="checkbox">复选框line-height:18px;</div>
</div>
<div style="margin-bottom:1em;line-height:20px;">
    <div style="background:#dfedf0;"><input type="radio">单选框line-height:20px;</div>
    <div style="background:#ddd;"><input type="checkbox">复选框line-height:20px;</div>
</div>
<div style="margin-bottom:1em;line-height:30px;">
    <div style="background:#dfedf0;"><input type="radio">单选框line-height:30px;</div>
    <div style="background:#ddd;"><input type="checkbox">复选框line-height:30px;</div>
</div>  
<div style="margin-bottom:1em;line-height:18px;">
    <div style="background:#dfedf0;height:30px;"><input type="radio">单选框line-height:18px;height:30px;</div>
    <div style="background:#ddd;height:30px;"><input type="checkbox">复选框line-height:18px;height:30px;</div>
</div>
<div style="margin-bottom:1em;line-height:20px;">
    <div style="background:#dfedf0;height:30px;"><input type="radio">单选框line-height:20px;height:30px;</div>
    <div style="background:#ddd;height:30px;"><input type="checkbox">复选框line-height:20px;height:30px;</div>
</div>
<div style="margin-bottom:1em;line-height:30px;">
    <div style="background:#dfedf0;height:30px;"><input type="radio">单选框line-height:30px;height:30px;</div>
    <div style="background:#ddd;height:30px;"><input type="checkbox">复选框line-height:30px;height:30px;</div>
</div> 
<div style="margin-bottom:1em;line-height:18px;font-size:14px;">
    <div style="background:#dfedf0;"><input type="radio">单选框line-height:18px;font-size:14px;</div>
    <div style="background:#ddd;"><input type="checkbox">复选框line-height:18px;font-size:14px;;</div>
</div>
<div style="margin-bottom:1em;line-height:20px;font-size:16px;">
    <div style="background:#dfedf0;"><input type="radio">单选框line-height:20px;font-size:16px;</div>
    <div style="background:#ddd;"><input type="checkbox">复选框line-height:20px;font-size:16px;</div>
</div>
<div style="margin-bottom:1em;line-height:30px;font-size:16px;">
    <div style="background:#dfedf0;"><input type="radio">单选框line-height:30px;font-size:16px;</div>
    <div style="background:#ddd;"><input type="checkbox">复选框line-height:30px;font-size:16px;</div>
</div>  
```


#### 定制文件上传按钮 [ 兼容 ]

定制文件上传（type=file）按钮

```
/* 定制文件上传按钮  */
.u-upload{display:inline-block;*display:inline;*zoom:1;position:relative;overflow:hidden;}
.u-upload button{height:32px;padding:0 10px;border:1px solid #ccc;overflow:visible;font-size:14px;color:#666;background:#ddd;}
.u-upload input{position:absolute;top:0;right:-1px;font-size:100px;cursor:pointer;opacity:0;filter:alpha(opacity=0);}
.u-upload:hover button{border-color:#bbb;color:#333;background:#ccc;}
a.u-upload,a.u-upload:hover{text-decoration:none;}

<div class="u-upload">
    <button type="button">上传文件</button>
    <input type="file"/>
</div>
<span class="u-upload">
    <button type="button">上传文件</button>
    <input type="file"/>
</span>
<a href="#" class="u-upload">
    <button type="button">上传文件</button>
    <input type="file"/>
</a>
<a href="#" class="u-upload">
    <button type="button">上传</button>
    <input type="file"/>
</a>
```