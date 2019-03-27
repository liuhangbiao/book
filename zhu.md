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
```