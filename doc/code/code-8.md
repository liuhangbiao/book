## 常用代码片断(代码库) -模块

### 概述

提供各种常见的网页内容模块，比如导航、菜单、幻灯、图文列表等

### 代码展示

#### 文本型圆角背景导航 [ 兼容 ]

可自定义使文本左对齐，依赖于[reset](code-1.md)

```
/* 文本型圆角背景导航 */
.m-nav,.m-nav li,.m-nav li a,.m-nav .corner{height:40px;line-height:40px;}
.m-nav,.m-nav li,.m-nav .corner{background:url(nav.png) no-repeat -9999px -9999px;}
.m-nav{position:relative;margin:0 6px;text-align:center;font-size:0;letter-spacing:-0.307em;*letter-spacing:normal;*word-spacing:-1px;color:#fff;background-repeat:repeat-x;background-position:0 0;}
.m-nav li,.m-nav li a{display:inline-block;*display:inline;*zoom:1;}
.m-nav li{padding:0 0 0 1px;font-size:14px;letter-spacing:normal;word-spacing:normal;background-position:0 -150px;}
.m-nav li.first{background:none;}
.m-nav li a,.m-nav li a:hover{text-decoration:none;color:#fff;}
.m-nav li a{padding:0 20px;font-weight:bold;}
.m-nav .corner{position:absolute;top:0;width:6px;overflow:hidden;}
.m-nav .corner-l{left:-6px;background-position:0 -50px;}
.m-nav .corner-r{left:100%;background-position:0 -100px;}
/* 文本型圆角背景导航-居左 */
.m-nav-1{text-align:left;}
/* 文本型圆角背景导航-居右 */
.m-nav-2{text-align:right;}


<div class="m-nav">
    <ul>
        <li class="first"><a href="#">首页</a></li>
        <li><a href="#">栏目1</a></li>
        <li><a href="#">栏目2</a></li>
        <li><a href="#">栏目3</a></li>
    </ul>
    <span class="corner corner-l"></span><span class="corner corner-r"></span>
</div>
<div class="m-nav m-nav-1">
    <ul>
        <li class="first"><a href="#">首页</a></li>
        <li><a href="#">栏目1</a></li>
        <li><a href="#">栏目2</a></li>
        <li><a href="#">栏目3</a></li>
    </ul>
    <span class="corner corner-l"></span><span class="corner corner-r"></span>
</div>
<div class="m-nav m-nav-2">
    <ul>
        <li class="first"><a href="#">首页</a></li>
        <li><a href="#">栏目1</a></li>
        <li><a href="#">栏目2</a></li>
        <li><a href="#">栏目3</a></li>
    </ul>
    <span class="corner corner-l"></span><span class="corner corner-r"></span>
</div>

```


#### 多行式面包屑导航 [ 兼容 ]

```
/* 多行式面包屑导航 */
.m-crumb{overflow:hidden;line-height:1.5;zoom:1;}
.m-crumb ul{margin-left:-20px;}
.m-crumb li{float:left;word-wrap:normal;white-space:nowrap;}
.m-crumb li i{display:inline-block;*display:inline;*zoom:1;width:20px;text-align:center;font-size:12px;color:#ccc;font-family:\5b8b\4f53;}
/* 空白分隔 */
.m-crumb-blank ul{margin-left:-10px;}
.m-crumb-blank li{display:inline;margin-left:10px;}


<div class="m-crumb">
    <ul class="f-cb">
        <li><i>|</i><a href="#">面包屑导航，竖线分隔</a></li>
        <li><i>|</i><a href="#">面包屑，可多行</a></li>
        <li><i>|</i><a href="#">面包屑</a></li>
        <li><i>|</i>文字</li>
    </ul>
</div>
<div class="m-crumb">
    <ul class="f-cb">
        <li><i>&gt;</i><a href="#">面包屑导航，箭头分隔</a></li>
        <li><i>&gt;</i><a href="#">面包屑，可多行</a></li>
        <li><i>&gt;</i><a href="#">面包屑</a></li>
        <li><i>&gt;</i>文字</li>
    </ul>
</div>
<div class="m-crumb m-crumb-blank">
    <ul class="f-cb">
        <li><a href="#">面包屑导航，空白分隔</a></li>
        <li><a href="#">面包屑，可多行</a></li>
        <li><a href="#">面包屑</a></li>
        <li>文字</li>
    </ul>
</div>

```


#### 简易文字链接列表 [ 兼容 ]

纵向排列的纯文字列表，依赖于[reset](code-1.md)

```
/* 简易文字链接列表 */
.m-list{line-height:21px;}
.m-list a,.m-list a:hover{text-decoration:none;color:#777;}

<ul class="m-list">
    <li><a href="#">列表项文字</a></li>
    <li><a href="#">列表项文字或链接</a></li>
    <li><a href="#">列表项文字</a></li>
    <li><a href="#">列表项列表项列表项文字</a></li>
</ul>
```


#### 水平文字链接列表 [ 兼容 ]

横向排列的文字列表，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 水平文字链接列表 */
.m-list1{line-height:23px;}
.m-list1 ul{margin-left:-10px;}
.m-list1 li{float:left;padding-left:10px;}
.m-list1 a,.m-list1 a:hover{text-decoration:none;color:#333;}
/* 水平文字链接列表-颜色1 */
.m-list1-c1 a,.m-list1-c1 a:hover{color:#3891eb;}

<div class="m-list1">
    <ul class="f-cb">
        <li><a href="#">列表文字</a></li>
        <li><a href="#">文字或链接</a></li>
        <li><a href="#">文字或链接</a></li>
        <li><a href="#">文字</a></li>
    </ul>
</div>
<div class="m-list1 m-list1-c1">
    <ul class="f-cb">
        <li><a href="#">文字</a></li>
        <li><a href="#">文字或链接</a></li>
        <li><a href="#">文字或链接</a></li>
        <li><a href="#">文字</a></li>
    </ul>
</div>

```

#### 带点文字链接列表 [ 兼容 ]

点的颜色继承文字色，依赖于[reset](code-1.md)

```
/* 带点文字链接列表-默认方点 */
.m-list2{padding-top:1px;line-height:1.5;}
.m-list2 ul{margin-top:-6px;}
.m-list2 li{position:relative;padding-left:10px;margin-top:5px;zoom:1;}
.m-list2 li i.dot{position:absolute;top:0.75em;left:0;width:0;height:0;overflow:hidden;margin-top:-3px;border:2px solid;}
/* 固定文字较大 */
.m-list2-lg{font-size:14px;}


<div class="m-list2">
    <ul>
        <li><a href="#">带点文字链接列表，方点，颜色继承文字</a><i class="dot"></i></li>
        <li><a href="#">列表项文字</a><i class="dot"></i></li>
        <li><a href="#">列表项文字</a><i class="dot"></i></li>
        <li><a href="#">列表项文字</a><i class="dot"></i></li>
    </ul>
</div>
<div class="m-list2 m-list2-lg">
    <ul>
        <li><a href="#">带点文字链接列表，方点，颜色继承文字,固定文字较大</a><i class="dot"></i></li>
        <li><a href="#">列表项文字</a><i class="dot"></i></li>
        <li><a href="#">列表项文字</a><i class="dot"></i></li>
        <li><a href="#">列表项文字</a><i class="dot"></i></li>
    </ul>
</div>
```


#### 左图右文图文列表 [ 兼容 ]

四周无缝，文字溢出隐藏，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 左图右文图文列表-默认竖排 */
.m-list3{padding:1px 0 0;zoom:1;}
.m-list3 ul{margin:-11px 0 0;}
.m-list3 li{display:inline;float:left;width:100%;margin:10px 0 0;}
.m-list3 .txt{float:right;width:100%;height:95px;overflow:hidden;margin-left:-110px;}
.m-list3 h3,.m-list3 p{margin-left:110px;overflow:hidden;line-height:18px;}
.m-list3 h3{margin-bottom:5px;}
.m-list3 h3 a,.m-list3 h3 a:hover{color:#333;}
.m-list3 .u-img{float:left;width:100px;height:100px;}
.m-list3 .u-img2{float:left;width:94px;height:94px;}
/* 横排 */
.m-list3-x ul{margin:-11px 0 0 -10px;}
.m-list3-x li{width:230px;margin:10px 0 0 10px;}


<div class="m-list3">
    <ul class="f-cb">
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <div class="txt">
                <h3><a href="#">标题</a></h3>
                <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
            </div>
        </li>
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <div class="txt">
                <h3><a href="#">标题</a></h3>
                <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
            </div>
        </li>
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <div class="txt">
                <h3><a href="#">标题</a></h3>
                <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
            </div>
        </li>
    </ul>
</div>
<div class="m-list3 m-list3-x">
    <ul class="f-cb">
        <li>
            <div class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <div class="txt">
                <h3><a href="#">标题</a></h3>
                <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
            </div>
        </li>
        <li>
            <div class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <div class="txt">
                <h3><a href="#">标题</a></h3>
                <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
            </div>
        </li>
        <li>
            <div class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <div class="txt">
                <h3><a href="#">标题标题标题标题标题标题标题</a></h3>
                <p>内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
            </div>
        </li>
    </ul>
</div>
```

#### 上图下文图文列表 [ 兼容 ]

四周无缝，文字溢出隐藏，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 上图下文图文列表 */
.m-list4{padding:1px 0 0;zoom:1;}
.m-list4 ul{margin:-11px 0 0 -10px;}
.m-list4 li{display:inline;float:left;width:150px;margin:10px 0 0 10px;}
.m-list4 h3,.m-list4 p {width:100%;height:18px;overflow:hidden;margin:5px 0 0;line-height:18px;}
.m-list4 h3 a,.m-list4 h3 a:hover{color:#333;}
.m-list4 .u-img,.m-list4 .u-img2{width:auto;height:120px;}


<div class="m-list4">
    <ul class="f-cb">
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <h3><a href="#">有标题</a></h3>
            <p class="f-toe">有内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
        </li>
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <h3><a href="#">有标题</a></h3>
            <p class="f-toe">有内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
        </li>
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg" alt="" /></a></div>
            <h3><a href="#">有标题</a></h3>
            <p class="f-toe">有内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述</p>
        </li>
    </ul>
</div>
<div class="m-list4">
    <ul class="f-cb">
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/2.jpg" alt="" /></a></div>
            <h3><a href="#">有标题</a></h3>
        </li>
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/2.jpg" alt="" /></a></div>
            <h3><a href="#">有标题</a></h3>
        </li>
        <li>
            <div class="u-img"><a href="#"><img src="http://nec.netease.com/img/s/2.jpg" alt="" /></a></div>
            <h3><a href="#">有标题</a></h3>
        </li>
    </ul>
</div>
<div class="m-list4">
    <ul class="f-cb">
        <li>
            <div class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></div>
        </li>
        <li>
            <div class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></div>
        </li>
        <li>
            <div class="u-img2"><a href="#"><img src="http://nec.netease.com/img/s/1.jpg" alt="" /></a></div>
        </li>
    </ul>
</div>
```


#### 含标题和Tab的模块头部 [ 兼容 ] 

默认居左，Tab不定宽， “标题”和“更多”可删，扩展类可以自由组合，依赖于[reset](code-1.md)

```
/* 含标题和Tab的模块头部-默认不定宽 */
.m-hd{height:35px;line-height:35px;padding:1px 0 0;border-bottom:1px solid #ddd;}
.m-hd h2,.m-hd ul,.m-hd li{float:left;display:inline;}
.m-hd h2{margin:0 20px 0 0;font-size:16px;}
.m-hd ul{margin-left:-2px;}
.m-hd li{position:relative;margin:-1px 0 0 2px;}
.m-hd li a,.m-hd li a:hover{text-decoration:none;color:#666;}
.m-hd li a{float:left;padding:0 15px;border:1px solid #ddd;border-bottom:0;text-align:center;font-size:14px;background:#f8f8f8;}
.m-hd li a:hover{background:#fff;}
.m-hd li.z-crt a{position:relative;padding-bottom:1px;margin-bottom:-1px;background:#fff;}
.m-hd .more{float:right;margin-left:10px;}
/* 有背景 */
.m-hd-bg{padding:11px 10px 0;background:#f7f7f7;}
/* tab无缝 */
.m-hd-sl li{margin-left:-1px;}
.m-hd-sl li a{border-radius:0;}
/* tab居右 */
.m-hd-rt h2{margin-right:0;}
.m-hd-rt ul{float:right;}
/* tab较小 */
.m-hd-sm{height:25px;line-height:25px;}
.m-hd-sm h2{font-size:14px;}
.m-hd-sm li a{padding:0 10px;font-size:12px;}
/* tab定宽 */
.m-hd-fw li a{width:78px;padding:0;}


<div class="m-hd">
    <h2 class="u-tt">标题</h2>
    <div class="more"><a href="#">更多&raquo;</a></div>
    <ul>
        <li class="z-crt"><a href="#">默认：居左，不定宽</a></li>
        <li><a href="#">“标题”和“更多”可删</a></li>
        <li><a href="#">扩展类可以自由组合</a></li>
        <li><a href="#">标签标签</a></li>
    </ul>
</div>
<div class="m-hd m-hd-bg">
    <h2 class="u-tt">标题</h2>
    <div class="more"><a href="#">更多&raquo;</a></div>
    <ul>
        <li class="z-crt"><a href="#">有背景</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签标签</a></li>
    </ul>
</div>
<div class="m-hd m-hd-rt m-hd-sl">
    <h2 class="u-tt">标题</h2>
    <div class="more"><a href="#">更多&raquo;</a></div>
    <ul>
        <li class="z-crt"><a href="#">居右，无缝</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签标签</a></li>
    </ul>
</div>
<div class="m-hd m-hd-sm">
    <div class="more"><a href="#">更多&raquo;</a></div>
    <ul>
        <li class="z-crt"><a href="#">较小</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签标签</a></li>
    </ul>
</div>
<div class="m-hd m-hd-rt m-hd-sm">
    <h2 class="u-tt">标题</h2>
    <ul>
        <li class="z-crt"><a href="#">居右，较小</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签标签</a></li>
    </ul>
</div>
<div class="m-hd m-hd-fw">
    <div class="more"><a href="#">更多&raquo;</a></div>
    <ul>
        <li class="z-crt"><a href="#">定宽</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签</a></li>
        <li><a href="#">标签标签</a></li>
    </ul>
</div>
```


#### 简易表单 [ 兼容 ]

简易表单，依赖于[reset](code-1.md)、[function](code-2.md)

```
/* 简易表单 */
.m-form{line-height:29px;color:#555;}
.m-form legend{font-size:14px;font-weight:bold;}
.m-form .formitm{padding:20px 0 0;line-height:30px;}
.m-form .formitm-1{padding-left:100px;}
.m-form .lab{float:left;width:90px;margin-right:-90px;text-align:right;font-weight:bold;}
.m-form .ipt{margin-left:100px;}
.m-form .ipt *{vertical-align:middle;}
.m-form .ipt a,.m-form .ipt a:hover{text-decoration:none;color:#3891eb;}
.m-form .ipt img{height:32px;margin:0 15px 0 5px;}
.m-form .ipt .domain{margin:0 0 0 5px;font-weight:bold;color:#777;}
.m-form .ipt p{height:22px;line-height:22px;color:#999;}
.m-form .tip{padding-top:10px;}
.m-form .tip input{margin:0 5px 3px 0;}


<div class="m-form">
    <form name="" action="#" method="get">
        <fieldset>
            <legend>欢迎注册账户</legend>
            <div class="formitm">
                <label class="lab">账号：</label>
                <div class="ipt">
                    <input type="text" class="u-ipt"/><span class="domain">@163.com</span>
                    <p>6~8个字符，包括字母，数字，下划线以字母开头，字母或数字结尾</p>
                </div>
            </div>
            <div class="formitm">
                <label class="lab">初始密码：</label>
                <div class="ipt">
                    <input type="text" class="u-ipt"/>
                    <p>6~8个字符，区分大小写</p>
                </div>
            </div>
            <div class="formitm">
                <label class="lab">确认密码：</label>
                <div class="ipt">
                    <input type="text" class="u-ipt"/>
                    <p>再次输入密码</p>
                </div>
            </div>
            <div class="formitm">
                <label class="lab">验证码：</label>
                <div class="ipt">
                    <input type="text" class="u-ipt"/><img class="code-img" src="http://reg.email.163.com/mailregAll/regvf1/verifyCodeImgF.jsp?env=488381217144&type=en&t=1333003692444" alt="验证码"/><a href="#" class="f-ib">换一张</a>
                    <p class="tip"><input type="checkbox" id="agree"/><label for="agree">同意“服务条款”和“隐私权保护和个人信息利用政策”</label></p>
                </div>
            </div>
            <div class="formitm formitm-1"><button class="u-btn" type="button">立即注册</button></div>
        </fieldset>
    </form>
</div>
```


#### 简易数据表格 [ 兼容 ]

多种边框形式，区分奇偶行，依赖于[reset](code-1.md)

```
/* 简易数据表格-格边框 */
.m-table{table-layout:fixed;width:100%;line-height:1.5;}
.m-table th,.m-table td{padding:10px;border:1px solid #ddd;}
.m-table th{font-weight:bold;}
.m-table tbody tr.even{background:#fafafa;}
.m-table tbody tr:hover{background:#f0f0f0;}
.m-table .cola{width:100px;}
.m-table .colb{width:200px;}
/* 简易数据表格-行边框*/
.m-table-row th,.m-table-row td{border-width:0 0 1px;}

<table class="m-table">
    <thead>
        <tr><th class="cola">格边框</th><th>表头</th><th class="cola">表头</th><th class="cola">表头</th><th class="colb">表头</th></tr>
    </thead>
    <tbody>
        <tr><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr class="even"><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr class="even"><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
    </tbody>
</table>
<table class="m-table m-table-row">
    <thead>
        <tr><th class="cola">行边框</th><th>表头</th><th class="cola">表头</th><th class="cola">表头</th><th class="colb">表头</th></tr>
    </thead>
    <tbody>
        <tr><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr class="even"><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr class="even"><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
        <tr><td>内容</td><td>内容内容内容内容内容内容内容</td><td>内容内容</td><td>内容内容</td><td>内容内容内容</td></tr>
    </tbody>
</table>

```


#### 简易翻页器 [ 兼容 ]

可控制居中、居左、居右，可控制大小及是否分离，依赖于[reset](code-1.md)

```
/* 普通翻页器-默认居中 */
.m-page{margin:10px 0 0;text-align:center;line-height:32px;font-size:0;letter-spacing:-0.307em;*letter-spacing:normal;*word-spacing:-1px;word-wrap:normal;white-space:nowrap;color:#999;}
.m-page a,.m-page i{display:inline-block;*display:inline;*zoom:1;vertical-align:top;padding:0 12px;margin-left:-1px;border:1px solid #ddd;font-size:12px;letter-spacing:normal;word-spacing:normal;background:#fff;}
.m-page a,.m-page a:hover{text-decoration:none;color:#39c;}
.m-page a.first{margin-left:0;}
.m-page a.last{margin-right:0;}
.m-page a .pagearr{font-weight:bold;font-family:\5b8b\4f53;vertical-align:top;*vertical-align:middle;}
.m-page a.pageprv .pagearr{margin-right:3px;}
.m-page a.pagenxt .pagearr{margin-left:3px;}
.m-page a:hover{background:#f5f5f5;}
.m-page a:active{background:#f0f0f0;}
.m-page a.z-crt,.m-page a.z-crt:hover,.m-page a.z-crt:active{cursor:default;color:#999;background:#f5f5f5;}
.m-page a.z-dis,.m-page a.z-dis:hover,.m-page a.z-dis:active{cursor:default;color:#ccc;background:#fff;}
/* 居左 */
.m-page-lt{text-align:left;}
/* 居右 */
.m-page-rt{text-align:right;}
/* 较小 */
.m-page-sm{line-height:22px;}
.m-page-sm a,.m-page-sm i{padding:0 8px;}
/* 分离 */
.m-page-sr a,.m-page-sr i{margin:0 3px;}
.m-page-sr i{border:0;}


<div class="m-page">
    <a href="#" class="first pageprv z-dis"><span class="pagearr">&lt;</span></a>
    <a href="#">1</a>
    <a href="#" class="z-crt">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <i>...</i>
    <a href="#">10</a>
    <a href="#" class="last pagenxt"><span class="pagearr">&gt;</span></a>
</div>
<div class="m-page">
    <a href="#" class="first">1</a>
    <a href="#" class="z-crt">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <i>...</i>
    <a href="#" class="last">10</a>
</div>
<div class="m-page">
    <a href="#" class="first pageprv z-dis"><span class="pagearr">&lt;</span>上一页</a>
    <a href="#" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>
</div>
<div class="m-page m-page-lt">
    <a href="#" class="first pageprv"><span class="pagearr">&lt;</span>上一页</a>
    <a href="#">1</a>
    <a href="#" class="z-crt">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <i>...</i>
    <a href="#">10</a>
    <a href="#" class="last pagenxt z-dis">下一页<span class="pagearr">&gt;</span></a>
</div>
<div class="m-page m-page-rt">
    <a href="#" class="first pageprv z-dis"><span class="pagearr">&lt;</span>上一页</a>
    <a href="#">1</a>
    <a href="#" class="z-crt">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <i>...</i>
    <a href="#">10</a>
    <a href="#" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>
</div>
<div class="m-page m-page-rt m-page-sr">
    <a href="#" class="first pageprv z-dis"><span class="pagearr">&lt;</span>上一页</a>
    <a href="#">1</a>
    <a href="#" class="z-crt">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <i>...</i>
    <a href="#">10</a>
    <a href="#" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>
</div>
<div class="m-page m-page-sr m-page-sm">
    <a href="#" class="first pageprv z-dis"><span class="pagearr">&lt;</span>上一页</a>
    <a href="#">1</a>
    <a href="#" class="z-crt">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <i>...</i>
    <a href="#">10</a>
    <a href="#" class="last pagenxt">下一页<span class="pagearr">&gt;</span></a>
</div>
```


#### 单片式幻灯 [ 兼容 ]

依赖于[reset](code-1.md)

```
/* 单片式幻灯-默认淡入淡出  */
.m-slide{position:relative;width:400px;height:250px;overflow:hidden;}
.m-slide ol,.m-slide li{position:absolute;top:0;left:0;width:100%;height:100%;z-index:20;}
.m-slide li.z-crt{z-index:21;}

//** 指示器样式 ********//
/* 多点式幻灯指示控制器-默认底部居中 */
.u-pointer{position:absolute;bottom:10px;left:0;width:100%;z-index:50;text-align:center;line-height:0;}
.u-pointer i{display:inline-block;*display:inline;*zoom:1;width:10px;height:10px;overflow:hidden;margin:0 0 0 5px;cursor:pointer;background:#ccc;}
.u-pointer i.first{margin-left:0;}
.u-pointer i:hover{background:#999;}
.u-pointer i.z-crt{background:#40a1d9;}
/* 居右 */
.u-pointer-rt{right:10px;left:auto;width:auto;}
//** 指示器样式 ********//

<div class="m-slide">
    <ol>
        <li class="z-crt"><a href="#"><img src="http://nec.netease.com/img/m/1.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/2.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/3.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/4.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/5.jpg" alt=""/></a></li>
    </ol>
    <span class="u-pointer"><i class="first z-crt"></i><i></i><i></i><i></i><i></i></span>
</div>
<div class="m-slide">
    <ol>
        <li class="z-crt"><a href="#"><img src="http://nec.netease.com/img/m/1.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/2.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/3.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/4.jpg" alt=""/></a></li>
        <li><a href="#"><img src="http://nec.netease.com/img/m/5.jpg" alt=""/></a></li>
    </ol>
    <span class="u-pointer u-pointer-rt"><i class="first z-crt"></i><i></i><i></i><i></i><i></i></span>
</div>
<!-- JS只需改变className（以下示例仅作参考）： -->
<script type="text/javascript">
(function(_slides){
    each(_slides,function(_slide,i){
        var _ctrls = _slide.getElementsByTagName('i');
        var _lists = _slide.getElementsByTagName('li');
        each(_ctrls,function(_ctrl,i){
            _ctrl.onclick=function(){
                each(_lists,function(_list,i){
                    delClass(_list,"z-crt");
                });
                each(_ctrls,function(_ctrl,i){
                    delClass(_ctrl,"z-crt");
                });
                addClass(_lists[i],"z-crt");
                addClass(_ctrls[i],"z-crt");
            }
        });
    });
    function hasClass(_object,_clsname){
        var _clsname = _clsname.replace(".","");
        var _sCls = " "+(_object.className)+" ";
        return (_sCls.indexOf(" "+_clsname+" ") != -1) ? true : false;
    }
    function toClass(_str){
        var _str = _str.toString();
        _str = _str.replace(/(^\s*)|(\s*$)/g,"");
        _str = _str.replace(/\s{2,}/g," ");
        return _str;
    }
    function addClass(_object,_clsname){
        var _clsname = _clsname.replace(".","");
        if(!hasClass(_object,_clsname)){
            _object.className = toClass(_object.className+(" "+_clsname));
        }
    }
    function delClass(_object,_clsname){
        var _clsname = _clsname.replace(".","");
        if(hasClass(_object,_clsname)){
            _object.className = toClass(_object.className.replace(new RegExp("(?:^|\\s)"+_clsname+"(?=\\s|$)","g")," "));
        }
    }
    function each(_objects,_fn){
        for(var i=0,len=_objects.length;i<len;i++){
            _fn(_objects[i],i);
        }
    }
})(document.getElementsByTagName('div'));
</script>

```


#### 操作型弹出浮层 [ 兼容 ]

默认固定居中，有遮罩，按钮区标题区都可删，依赖于[reset](code-1.md)  u-btn/u-tt

```
/* 操作型弹出浮层-默认居中 */
.m-layer,.m-layer .lymask{top:0;left:0;width:100%;height:100%;}
.m-layer{display:none;position:fixed;_position:absolute;z-index:999;}
.m-layer .lymask{position:absolute;background:#000;opacity:0.6;filter:alpha(opacity=60);}
.m-layer .lytable{table-layout:fixed;width:100%;height:100%;}
.m-layer .lytd{width:100%;height:100%;vertical-align:middle;}
.m-layer .lywrap{position:relative;width:400px;margin:0 auto;border:5px solid #aaa;}
.m-layer .lytt{position:relative;padding:10px;height:20px;margin:0 0 -1px;line-height:20px;border-bottom:1px solid #ddd;background:#fafafa;}
.m-layer .lytt h2{float:left;font-size:16px;}
.m-layer .lyclose{float:right;font-weight:bold;font-family:arial;font-size:24px;_font-size:16px;color:#ccc;text-shadow:0 1px #fff;cursor:pointer;}
.m-layer .lyclose:hover{color:#aaa;}
.m-layer .lyct{padding:20px;background:#fff;}
.m-layer .lybt{height:30px;line-height:30px;padding:10px;margin:-1px 0 0;border-top:1px solid #ddd;background:#f7f7f7;}
.m-layer .lyother{float:left;color:#999;}
.m-layer .lybtns{float:right;}
.m-layer .lybtns button{float:left;margin-left:10px;}
/* 显示 */
.m-layer-show{display:block;}



<div class="m-layer m-layer-show">
    <div class="lymask"></div>
    <table class="lytable"><tbody><tr><td class="lytd">
    <div class="lywrap">
        <div class="lytt"><h2 class="u-tt">标题</h2><span class="lyclose">×</span></div>
        <div class="lyct">
            <p>默认固定居中，有遮罩，按钮区标题区都可删</p>
            <p>内容区：其他模块</p>
        </div>
        <div class="lybt">
            <div class="lyother">
                <p>其他信息，比如提示</p>
            </div>
            <div class="lybtns">
                <button type="button" class="u-btn">确定</button>
                <button type="button" class="u-btn u-btn-c4">取消</button>
            </div>
        </div>
    </div></td></tr></tbody></table>
</div>
```

#### 图片居中溢出隐藏 [ 兼容 ]

实现不同尺寸的图片水平垂直居中，且溢出隐藏

```
/* 图片居中溢出隐藏  */  
.m-demo{position:relative;width:300px;height:300px;overflow:hidden;border:1px solid #ddd;}
.m-demo p{position:absolute;top:50%;left:50%;margin:0;padding:0;}
.m-demo img{position:absolute;top:-50%;left:-50%;display:block;}
.m-demo img.hidden{visibility:hidden;position:static;}

<div class="m-demo">
    <p>
        <img src="http://nec.netease.com/img/s/1.jpg" class="hidden"/>
        <img src="http://nec.netease.com/img/s/1.jpg" alt=""/>
    </p>
</div>
<div class="m-demo">
    <p>
        <img src="http://nec.netease.com/img/m/1.jpg" class="hidden"/>
        <img src="http://nec.netease.com/img/m/1.jpg" alt=""/>
    </p>
</div>
<div class="m-demo">
    <p>
        <img src="http://nec.netease.com/img/l/1.jpg" class="hidden"/>
        <img src="http://nec.netease.com/img/l/1.jpg" alt=""/>
    </p>
</div>
```


#### 底部对齐列表 [ 兼容 ]

未知每项宽高的水平列表底部对齐，依赖于[reset](code-1.md)

```
/* 底部对齐列表 */  
.m-demo{width:510px;background:#dfedf0;margin:0;padding:0;font-size:0;letter-spacing:-0.307em;*letter-spacing:normal;*word-spacing:-1px;}
.m-demo li{display:inline-block;*zoom:1;*display:inline;margin:10px;vertical-align:bottom;font-size:12px;letter-spacing:normal;word-spacing:normal;color:#333;border:1px solid #ccc;}

<ul class="m-demo">
    <li>this is content</li>
    <li><img style="width:50px;height:50px;" src="http://nec.netease.com/img/s/1.jpg" /><br>title</li>
    <li><img style="width:70px;height:30px;" src="http://nec.netease.com/img/s/1.jpg" /><br>title</li>
    <li>aaaa</li>
    <li>bbbbb<br>cccccc</li>
    <li><img style="width:70px;height:80px;" src="http://nec.netease.com/img/s/1.jpg" /><br>title</li>
    <li><img style="width:60px;height:30px;" src="http://nec.netease.com/img/s/1.jpg" /><br>title</li>
    <li>aaaaaaaaaaaaaaaa</li>
    <li><img style="width:100px;height:70px;" src="http://nec.netease.com/img/s/1.jpg" /><br>title</li>
    <li>bbbbb<br>cccccc<br>dddddddddddd</li> 
</ul> 
```

#### 前自适应后跟随 [ 兼容 ]

文本自动换行，且不会把右边的时间挤掉，修改这段文字长度或改变窗口宽度试试，依赖于

```
/* 前自适应后跟随 */
.m-demo{padding:5px 0;border-bottom:1px dotted #ddd;font-size:12px;}
.m-demo .cnt{float:left;margin-right:80px;}
.m-demo .date{display:inline;float:left;margin-left:-70px;}

<div class="m-demo f-cb">
    <div class="cnt">这是一段长度未知的文本，自动换行，且不会把右边的时间挤掉，修改这段文字长度或改变窗口宽度试试。</div>
    <div class="date">2009-08-08</div>
</div>
```

#### 四周不留白列表 [ 兼容 ]

四周不留白列表，依赖于[reset](code-1.md)

```
/* 四周不留白列表  */    
.m-demo:after,.m-demo li .cnt:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";} 
.m-demo,.m-demo li .cnt{zoom:1;}
.m-demo{width:640px;margin:0 0 1em;overflow:hidden;background:#dfedf0;}
.m-demo ul{padding:0;margin:-11px 0 -10px;}
.m-demo li{padding:10px 0;border-top:1px dashed #999;}
.m-demo .img{float:left;width:100px;height:100px;padding:5px;border:1px solid #ccc;margin-right:-112px;background:#eee;}
.m-demo .img img,.m-demo .img a{display:block;width:100px;height:100px;}
.m-demo .txt{line-height:18px;color:#666;margin-left:122px;}
.m-demo .txt h3{margin:0 0 3px;font-size:14px;}
.m-demo .txt a,.m-demo .txt a:hover{color:#f60;}
.m-demo .txt p{font-size:12px;margin:0;}
/* 横向左图右文 */
.m-demo-1 ul{margin:-21px 0 0 -20px;}
.m-demo-1 li{float:left;display:inline;width:200px;overflow:hidden;margin:1px 0 -11px;padding:20px 0 10px 20px;border-top:none;border-bottom:1px dashed #999;}
/* 横向上图下文 */
.m-demo-2 ul{margin:-20px 0 0 -20px;}
.m-demo-2 li{float:left;display:inline;width:112px;padding:0;border:none;margin:20px 0 0 20px;overflow:hidden;}
.m-demo-2 .img{float:none;} 
.m-demo-2 .txt{margin:6px 0 0 0;}

<div class="m-demo">
    <ul>
       <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li> 
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
    </ul>
</div>
<div class="m-demo m-demo-1">
    <ul>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
    </ul>
</div>
<div class="m-demo m-demo-2">
    <ul>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
        <li>
            <div class="cnt">
                <div class="img"><a href="#"><img src="http://nec.netease.com/img/s/3.jpg"></a></div>
                <div class="txt">
                    <h3><a href="#">标题标题标题</a></h3>
                    <p>内容说明内容说明内容说明内容说明内容说明</p>
                </div>
            </div>
        </li>
    </ul>
</div>
```

#### 表头固定内容滚动的表格 [ 兼容 ]

无缝边框，仅内容区可滚动，最后列需宽度自动，依赖于[reset](code-1.md)

```
/* 表头固定内容滚动的表格  */
.m-demo{margin:0 0 20px;line-height:18px;}
.m-demo .scroll{max-height:116px;_height:116px;border:1px solid #ddd;border-top:0;overflow:hidden;overflow-y:auto;}
.m-demo table{width:100%;_width:auto;table-layout:fixed;}
.m-demo th,.m-demo td{width:100px;padding:10px;border:1px solid #ddd;}
.m-demo th{font-weight:bold;background:#eee;}
.m-demo th.last,.m-demo td.last{width:auto;}
.m-demo tbody tr.first td{border-top:0;}
.m-demo tbody tr.last td{border-bottom:0;}
.m-demo tbody tr td.first{border-left:0;}
.m-demo tbody tr td.last{border-right:0;}

<div class="m-demo">
    <table>
        <thead>
           <tr><th>定宽a</th><th>定宽b</th><th>定宽c</th><th class="last">最后列不定宽d</th></tr>
        </thead>
    </table>
    <div class="scroll">
        <table>
            <tbody>
                <tr class="first"><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr class="last"><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
            </tbody>
        </table>
    </div>
</div>
<div class="m-demo">
    <table>
        <thead>
           <tr><th>定宽a</th><th>定宽b</th><th>定宽c</th><th class="last">最后列不定宽d</th></tr>
        </thead>
    </table>
    <div class="scroll">
        <table>
            <tbody>
                <tr class="first"><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
                <tr class="last"><td class="first">定宽a</td><td>定宽b</td><td>定宽c</td><td class="last">最后列不定宽d</td></tr>
            </tbody>
        </table>
    </div>
</div>
```

#### 纯CSS3幻灯手风琴效果hover切换 [ 高级 ]

可选择是否初始展开某项，依赖于[reset](code-1.md)

```
/* 纯CSS3幻灯手风琴效果hover切换，默认初始收起  */
.m-demo{width:600px;height:250px;overflow:hidden;}
.m-demo li{float:left;width:120px;heihgt:100%;box-shadow:0 0 5px rgba(0,0,0,0.5);-webkit-transition:width 0.5s ease-out;-moz-transition:width 0.5s ease-out;-ms-transition:width 0.5s ease-out;transition:width 0.5s ease-out;}
.m-demo:hover li:not(:hover){width:50px;}
.m-demo li:hover{width:400px;}
/* 初始展开  */
.m-demo-1 li{width:50px;}
.m-demo-1 li:first-child{width:400px;}

<ul class="m-demo">
    <li><a href="#"><img src="http://nec.netease.com/img/m/1.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/2.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/3.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/4.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/5.jpg" alt=""/></a></li>
</ul>
<ul class="m-demo m-demo-1">
    <li><a href="#"><img src="http://nec.netease.com/img/m/1.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/2.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/3.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/4.jpg" alt=""/></a></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/5.jpg" alt=""/></a></li>
</ul>
```


#### 纯CSS3点控式幻灯hover切换 [ 高级 ]

通过点式控制器hover切换，依赖于[reset](code-1.md)

```
/* 纯CSS3点控式幻灯hover切换  */
.m-demo{position:relative;width:400px;height:250px;overflow:hidden;}
.m-demo li:nth-child(3n-1){position:absolute;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:transform 0.5s ease-out,opacity 0.5s ease-out;-moz-transition:transform 0.5s ease-out,opacity 0.5s ease-out;-ms-transition:transform 0.5s ease-out,opacity 0.5s ease-out;transition:transform 0.5s ease-out,opacity 0.5s ease-out;}
.m-demo:hover li:nth-child(3n-1){opacity:0;-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}
.m-demo li:nth-child(2),.m-demo li:nth-child(3n-1):hover,.m-demo li:nth-child(3n+1):hover + li{z-index:2;opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}
.m-demo li:nth-child(3n+1),.m-demo li:nth-child(3n){position:relative;z-index:5;float:left;width:10px;height:10px;margin:235px 0 0 5px;border-radius:50%;}
.m-demo li:nth-child(3n+1),.m-demo:hover li:nth-child(3n+1){box-shadow:inset 0 1px 1px rgba(0,0,0,0.5);background:rgba(0,0,0,0.2);}
.m-demo li:nth-child(3n){z-index:4;margin-left:-10px;}
.m-demo li:first-child{margin-left:325px;}
.m-demo li:first-child,.m-demo li:nth-child(3n+1):hover,.m-demo li:nth-child(3n-1):hover + li{box-shadow:inset 0 1px 1px rgba(0,0,0,0.5);background:rgba(255,255,0,0.8);}
.m-demo li:nth-child(3n-1):hover + li{z-index:6;}

<ul class="m-demo">
    <li></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/1.jpg" alt=""/></a></li>
    <li></li>
    <li></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/2.jpg" alt=""/></a></li>
    <li></li>
    <li></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/3.jpg" alt=""/></a></li>
    <li></li>
    <li></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/4.jpg" alt=""/></a></li>
    <li></li>
    <li></li>
    <li><a href="#"><img src="http://nec.netease.com/img/m/5.jpg" alt=""/></a></li>
    <li></li>
</ul>
```