## 常用代码片断(代码库) - 布局


### 概述

提供各种常见的页面布局方法，比如定宽布局、自适应布局等

### 代码展示

####  两列右侧自适应布局 [ 兼容 ] 

左栏定宽，右栏自适应剩余宽度，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 两列右侧自适应布局 */
.g-bd1{margin:0 0 10px;}
.g-sd1{position:relative;float:left;width:190px;margin-right:-190px;}
.g-mn1{float:right;width:100%;}
.g-mn1c{margin-left:200px;}

<div class="g-bd1 f-cb">
    <div class="g-sd1">
        <p>左侧定宽</p>
    </div>
    <div class="g-mn1">
        <div class="g-mn1c">
            <p>右侧自适应</p>
        </div>
    </div>
</div>
```



#### 两列左侧自适应布局 [ 兼容 ]

右栏定宽，左栏自适应剩余宽度，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 两列左侧自适应布局 */
.g-bd2{margin:0 0 10px;}
.g-sd2{position:relative;float:right;width:230px;margin-left:-230px}
.g-mn2{float:left;width:100%;;}
.g-mn2c{margin-right:240px;}

<div class="g-bd2 f-cb">
    <div class="g-mn2">
        <div class="g-mn2c">
            <p>左侧自适应</p>
        </div>
    </div>
    <div class="g-sd2">
        <p>右侧定宽</p>
    </div>
</div>
```

#### 两列定宽布局 [ 兼容 ]

左右两列都固定宽度，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 两列定宽布局 */
.g-bd{width:950px;margin:0 auto;}
.g-sd{float:right;width:230px;}
.g-mn{float:left;width:710px;}

<div class="g-bd f-cb">
    <div class="g-mn">
        <p>左侧定宽</p>
    </div>
    <div class="g-sd">
        <p>右侧定宽</p>
    </div>
</div>
```


#### 三列中间自适应布局 [ 兼容 ]

左右两列固定宽度，中间一列自适应剩余宽度，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 三列中间自适应布局 */
.g-bd5{margin:0 0 10px;}
.g-sd51,.g-sd52{position:relative;float:left;width:230px;margin:0 -230px 0 0;}
.g-sd52{float:right;width:190px;margin:0 0 0 -190px;}
.g-mn5{float:left;width:100%;}
.g-mn5c{margin:0 200px 0 240px;}

<div class="g-bd5 f-cb">
    <div class="g-sd51">
        <p>左侧定宽</p>
    </div>
    <div class="g-mn5">
        <div class="g-mn5c">
            <p>中间自适应</p>
        </div>
    </div>
    <div class="g-sd52">
        <p>右侧定宽</p>
    </div>
</div>
```


#### 三列左侧自适应布局 [ 兼容 ]

右侧两列固定宽度，左侧一列自适应剩余宽度，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 三列左侧自适应布局 */
.g-bd4{margin:0 0 10px;}
.g-sd41,.g-sd42{position:relative;float:right;width:190px;}
.g-sd41{width:230px;margin-left:10px;}
.g-mn4{float:left;width:100%;margin-right:-430px;}
.g-mn4c{margin-right:440px;}

<div class="g-bd4 f-cb">
    <div class="g-mn4">
        <div class="g-mn4c">
            <p>左侧自适应</p>
        </div>
    </div>
    <div class="g-sd41">
        <p>右侧定宽</p>
    </div>
    <div class="g-sd42">
        <p>右侧定宽</p>
    </div>
</div>
```

#### 三列右侧自适应布局 [ 兼容 ]

左侧两列固定宽度，右侧一列自适应剩余宽度，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 三列右侧自适应布局 */
.g-bd3{margin:0 0 10px;}
.g-sd31,.g-sd32{position:relative;float:left;width:230px;}
.g-sd31{width:190px;margin-right:10px;}
.g-mn3{float:right;width:100%;margin-left:-430px;}
.g-mn3c{margin-left:440px;}

<div class="g-bd3 f-cb">
    <div class="g-sd31">
        <p>左侧定宽</p>
    </div>
    <div class="g-sd32">
        <p>左侧定宽</p>
    </div>
    <div class="g-mn3">
        <div class="g-mn3c">
            <p>右侧自适应</p>
        </div>
    </div>
</div>
```


#### 两栏三栏自适应布局 [ 兼容 ]

常见两栏三栏自适应布局

```
/* 两栏三栏自适应布局  */   

/* 两栏布局  主栏左 侧栏右 */
.g-mn1{float:left;width:100%;margin-right:-200px;}
.g-mnc1{margin-right:210px;}
.g-sd1{float:right;width:200px;}

/* 两栏布局  主栏右 侧栏左*/
.g-mn2{float:right;width:100%;margin-left:-200px;}
.g-mnc2{margin-left:210px;}
.g-sd2{float:left;width:200px;}

/* 三栏布局  主栏右 两侧栏左*/
.g-mn3{float:right;width:100%;margin-left:-520px;}
.g-mnc3{margin-left:520px;}
.g-sd3a{float:left;width:300px;margin-right:10px;}
.g-sd3b{float:left;width:200px;}

/* 三栏布局  主栏中 两侧栏分居左右*/
.g-mn4{float:right;width:100%;margin-left:-200px;}
.g-mnc4{margin-left:210px;}
.g-sd4{float:left;width:200px;}
.g-mn5{float:left;width:100%;margin-right:-200px;}
.g-mnc5{margin-right:210px;}
.g-sd5{float:right;width:200px;}


<div class="g-bd">
    <div class="g-mn1">
        <div class="g-mnc1">
            <p>主栏1内容区</p>
        </div>
    </div>
    <div class="g-sd1">
        <p>侧栏1内容区</p>
    </div>
</div>
<div class="g-bd">
    <div class="g-mn2">
        <div class="g-mnc2">
            <p>主栏2内容区</p>
        </div>
    </div>
    <div class="g-sd2">
        <p>侧栏2内容区</p>
    </div>
</div>
<div class="g-bd">
    <div class="g-mn4">
        <div class="g-mnc4">
            <div class="g-mn5">
                <div class="g-mnc5">
                    <p>主栏5内容区</p>
                </div>
            </div>
            <div class="g-sd5">
                <p>侧栏5内容区</p>
            </div>
        </div>
    </div>
    <div class="g-sd4">
        <p>侧栏4内容区</p>
    </div>
</div>
<div class="g-bd">
    <div class="g-mn3">
        <div class="g-mnc3">
            <p>主栏3内容区</p>
        </div>
    </div>
    <div class="g-sd3a">
        <p>侧栏a内容区</p>
    </div>
    <div class="g-sd3b">
        <p>侧栏b内容区</p>
    </div>
</div>
```

#### 全屏自适应布局 [ 兼容 ]

全屏自适应布局，适用于管理或工具类型页面

```
/* 全屏自适应布局  */
html,body{width:100%;height:100%;overflow:hidden;margin:0;}
html{_height:auto;_padding:100px 0 50px;}
.g-hd,.g-sd,.g-mn,.g-ft{position:absolute;left:0;}
.g-hd,.g-ft{width:100%;}
.g-sd,.g-mn{top:100px;bottom:50px;_height:100%;overflow:auto;}
.g-hd{top:0;height:100px;}
.g-sd{width:300px;}
.g-mn{_position:relative;left:300px;right:0;_top:0;_left:0;_margin-left:300px;}
.g-ft{bottom:0;height:50px;}

<div class="g-hd">
</div>
<div class="g-sd">
</div>
<div class="g-mn">
</div>
<div class="g-ft">
</div>
```


#### 底部自适应文档和窗口 [ 兼容 ]

当文档较长时底部跟随在文档末尾，当文档较短时在窗口底部

```
/* 底部自适应文档和窗口  */
html,body{width:100%;height:100%;margin:0;}
.g-doc{position:relative;min-height:100%;_height:100%;}
.g-bd{padding:0 0 60px;zoom:1;}
.g-ft{height:50px;margin:-50px 0 0;background:#ddd;}

<div class="g-doc">
    <div class="g-bd">
        <p>请增加或减少内容，或改变窗口大小，以便查看效果。</p>
        <p>请增加或减少内容，或改变窗口大小，以便查看效果。</p>
        <p>请增加或减少内容，或改变窗口大小，以便查看效果。</p>
        <p>请增加或减少内容，或改变窗口大小，以便查看效果。</p>
        <p>请增加或减少内容，或改变窗口大小，以便查看效果。</p>
    </div>
</div>
<div class="g-ft">
    <p>底部始终在文档末尾，当文档较长时跟随在文档末尾，当文档较短时在窗口底部。</p>
</div>
```












这里有各种常见布局、模块、技巧等代码，在这里找到她，或给你启发，或她就是你的。为满足产品对不同的平台和设备的要求，代码库中的代码开发使用了三种版本：兼容、优雅、高级，以下为对这三个版本的详细说明。

* 兼容[1]：支持包括IE6在内的所有主流浏览器和设备，UI效果可能有所退化。
* 优雅[2]：在高级浏览器中有“高级”效果，在低级浏览器中有“兼容”效果，是高级版的“优雅退化”，也是兼容版的“渐进增强”。
* 高级[3]：支持IE9+、Chrome、Safari、Firefox等主流浏览器，支持移动设备和所有智能系统，具有优越的UI效果。