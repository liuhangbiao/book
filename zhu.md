### 常用辅助API


* 移动端网页调试工具（Eruda）

```
<script>
;(function () {
var src = 'https://cdn.bootcss.com/eruda/1.5.4/eruda.min.js';
if (!/debug=1/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
</script>



方式一，默认引入：
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>

方式二，动态加载：

__DEBUG__ && loadJS('http://cdn.jsdelivr.net/eruda/1.0.5/eruda.min.js', ()=>{
  eruda.init();
});//苏南的专栏 交流：912594095、公众号：honeyBadger8

方式三 ，指定场景加载：
//比如线上 给自己留一个后门，
//我们一般的做法是喜欢给某个不起眼的元素，添加一个点击事件，要点它十次、八次以后才开启 debug 模式；
;(function () {
    var src = 'http://cdn.jsdelivr.net/eruda/1.0.5/eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();

方式四 ，npm：
 npm install eruda --save

 
https://github.com/liriliri/eruda.git
```