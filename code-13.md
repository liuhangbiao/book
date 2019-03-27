### JS常用片段

* 判断是否是移动端

```
 var bs = {
     versions: function() {
         var u = navigator.userAgent,
             app = navigator.appVersion;
         return {
             windowsPhone: u.indexOf('IEMobile') > -1,
             trident: u.indexOf('Trident') > -1,
             presto: u.indexOf('Presto') > -1,
             webKit: u.indexOf('AppleWebKit') > -1,
             gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
             mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) || !!u.match(/IEMobile/),
             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
             android: u.indexOf('Android') > -1 || u.indexOf('UCBrowser') > -1,
             iPhone: u.indexOf('iPhone') > -1,
             iPad: u.indexOf('iPad') > -1,
             webApp: u.indexOf('Safari') === -1
         };
     }(),
     language: (navigator.browserLanguage || navigator.language).toLowerCase()
 };
 if (bs.versions.mobile) {
     if (bs.versions.android || bs.versions.iPhone || bs.versions.iPad || bs.versions.windowsPhone) {
            console.log("手机端")
     }
 }
```

* 将彻底屏蔽鼠标右键 

```
oncontextmenu="window.event.returnValue=false"

# 可用于Table
<table border oncontextmenu=return(false)> <td>no </table>

```

* 取消选取、防止复制

```
<body onselectstart="return false">
```

* 不准粘贴

```
onpaste="return false"
```

* 防止复制

```
 oncopy="return false;" oncut="return false;"
```

* IE地址栏前换成自己的图标

```
<link rel="Shortcut Icon" href="favicon.ico">
```

* 以在收藏夹中显示出你的图标

```
<link rel="Bookmark" href="favicon.ico"> 
```

*  关闭输入法

```
<input style="ime-mode:disabled">
```

* 永远都会带着框架 

```
<script language="JavaScript">
if (window == top)top.location.href = "frames.htm"; //frames.htm为框架网页 
</script>
```

* 防止被人frame 

```
<script language="JavaScript">
if (top.location != self.location)top.location=self.location; 
</script>
```

* 网页将不能被另存为 

```
<noscript> <*** src="/*.html>"; </***> </noscript>
```

* 查看网页源代码 

```
onclick="window.location = "view-source:"+ "http://www.baidu.com"">
```

* 删除时确认 

```
<a href=""javascript :if(confirm("确实要删除吗?"))location="books/list?&areyou=删除&page=1"">删除 </a>
```

* 取得控件的绝对位置 

```
function getIE(e){ 
    var t=e.offsetTop; 
    var l=e.offsetLeft; 
    while(e=e.offsetParent){ 
        t+=e.offsetTop; 
        l+=e.offsetLeft; 
    } 
    alert("top="+t+"/nleft="+l); 
} 
```

* 光标是停在文本框文字的最后 

```
function cc() { 
    var e = event.srcElement; 
    var r =e.createTextRange(); 
    r.moveStart("character",e.value.length); 
    r.collapse(true); 
    r.select(); 
} 

//<input type=text name=text1 value="123" onfocus="cc()">
```

* 判断上一页的来源 

```
javascript：document.referrer
```

* 屏蔽功能键Shift,Alt,Ctrl 

```
function look(){ 
if(event.shiftKey) 
    alert("禁止按Shift键!"); //可以换成ALTCTRL 
} 
document.onkeydown=look; 
```

* 网页不会被缓存 

```
<META HTTP-EQUIV="pragma" CONTENT="no-cache"> 
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate"> 
<META HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1997 08:21:57 GMT"> 
或者 <META HTTP-EQUIV="expires" CONTENT="0">
```

* 让弹出窗口总是在最上面

```
<body onblur="this.focus();">
```

* 不要滚动条

```
让竖条没有: 
<body style="overflow:scroll;overflow-y:hidden"> 
</body> 
让横条没有: 
<body style="overflow:scroll;overflow-x:hidden"> 
</body> 
两个都去掉？更简单了 
<body scroll="no"> 
</body>
```

* 怎样去掉图片链接点击后，图片周围的虚线？ 

```
<a href="#" onFocus="this.blur()"> <img src="/logo.jpg" border=0> </a>
```

* 电子邮件处理提交表单 

```
<form name="form1" method="post" action=mailto:****@***.com 
enctype="text/plain"> 
<input type=submit> 
</form>
```

* 在打开的子窗口刷新父窗口的代码里如何写？ 

```
window.opener.location.reload()
```

* 如何设定打开页面的大小 

```
<body onload="top.resizeTo(300,200);"> 
打开页面的位置 <body onload="top.moveBy(300,200);">
```

* 在页面中如何加入不是满铺的背景图片,拉动页面时背景图不动 

```
body{background-p_w_picpath:url(/logo.gif); background-repeat:no-repeat; 
background-position:center;background-p_w_upload: fixed} 
```

* 脚本永不出错 

```
function killErrors() { 
return true; 
} 
window.onerror = killErrors; 
```