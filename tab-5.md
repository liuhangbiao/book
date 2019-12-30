### javascript速查表

- 数组
```
concat()    连接两个或更多的数组，并返回结果。
join()      把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
pop()       删除并返回数组的最后一个元素
push()      向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()   颠倒数组中元素的顺序。
shift()     删除并返回数组的第一个元素
slice()     从某个已有的数组返回选定的元素     
sort()      对数组的元素进行排序
splice()    删除元素，并向数组添加新元素。
toString()  把数组转换为字符串，并返回结果。
unshift()   向数组的开头添加一个或更多元素，并返回新的长度。
valueOf()   返回数组对象的原始值
```


- String 对象方法
```
concat()    连接字符串。。
indexOf()   检索字符串。
lastIndexOf()   从后向前搜索字符串。
slice()     提取字符串的片断，并在新的字符串中返回被提取的部分。
split()     把字符串分割为字符串数组。
toString()  返回字符串。
valueOf()   返回某个字符串对象的原始值。
length      字符串的长度
```

- History
```
back()  加载 history 列表中的前一个 URL。
forward()   加载 history 列表中的下一个 URL。
go()    加载 history 列表中的某个具体页面。
Location
hash    设置或返回从井号 (#) 开始的 URL（锚）。
host    设置或返回主机名和当前 URL 的端口号。
hostname    设置或返回当前 URL 的主机名。
href    设置或返回完整的 URL。
pathname    设置或返回当前 URL 的路径部分。
search  设置或返回从问号 (?) 开始的 URL（查询部分）。
assign()    加载新的文档。
reload()    重新加载当前文档。
replace()   用新的文档替换当前文档。
```

- Document
```
document.cookie 设置或返回与当前文档有关的所有 cookie。
document.referrer   返回载入当前文档的文档的 URL。
document.title  返回当前文档的标题。
document.links  返回文档中所有的Area和Link对象引用
document.getElementById()   返回对拥有指定 id 的第一个对象的引用。
document.querySelector()  CSS 选择器 语法跟jquery一样
```

- document.body 网页宽、高、偏移属性
```
网页可见区域宽： document.body.clientWidth  
网页可见区域高： document.body.clientHeight  
网页可见区域宽： document.body.offsetWidth  (包括边线的宽)  
网页可见区域高： document.body.offsetHeight (包括边线的高)  
网页正文全文宽： document.body.scrollWidth  (不包括边线的宽) 
网页正文全文高： document.body.scrollHeight (不包括边线的高)  
网页被卷去的高： document.body.scrollTop  
网页被卷去的左： document.body.scrollLeft
```

- 操作文档对象
```
document.createElement('div') 创建并返回一个元素
document.createTextNode('title') 创建并返回一个文本节点
document.createAttribute('title')创建并返回一个属性节点
document.createComment('comment') 创建并返回一个注释节点
document.createDocumentFragment() 创建并返回一个文档片段
document.getElementById('idName') 返回指定id的元素
document.querySelector('#id .className') 返回文档中匹配指定的css选择器的第一元素
document.querySelectorAll() 返回文档中匹配的css选择器的所有元素节点列表
document.getElementsByClassName('className') 返回指定className的NodeList集合
document.images 返回文档中所有Image对象引用
```

- element 方法
```
element.getElementsByTagName() 获取元素内的所有指定标签的子元素
element.insertBefore()     在指定的已有的子节点之前插入新节点。
element.appendChild()      向元素添加新的子节点，作为最后一个子节点。
element.getAttribute()     返回元素节点的指定属性值。
element.getAttributeNode() 返回指定的属性节点。
element.setAttribute()    设置元素节点指定属性与值
element.removeChild()     从元素中移除子节点
element.replaceChild(newnode,oldnode) 用一个新元素替换列表中的某个元素   
element.removeAttribute() 从元素中移除指定属性
element.removeAttributeNode() 移除指定属性节点，并返回被移除的节点
element.hasAttribute()     判断元素是否拥有指定属性
element.hasAttributes()   判断元素是否拥有属性
element.hasChildNodes()   判断元素是否拥有子元素
element.isEqualNode(node)   判断两个元素是否相等
element.normalize()  移除空的文本节点，并连接相邻的文本节点
element.childNodes.item(0) 返回NodeList中位于指定下标的节点
element.cloneNode(deep) 克隆节点，deep默认为false，为false克隆节点，为true克隆节点及后代
element.compareDocumentPosition() 比较两个元素的文档位置，1：没有关系，两个节点不属于同一文档。2：第一节点位于第二节点后。4：第一节点定位在第二节点前。8：第一节点位于第二节点内。16：第二节点位于第一节点内。32：没有关系，或是两个节点是同一元素的两个属性，返回值可以是值的组合，例如，返回20意味着第二节点在第一节点内部（16），并且第二节点在第一节点之后(4)
```

- element 属性
```
element.id         设置或返回元素的 id。
element.tagName     获取元素的标签名(大写)
element.className   元素所有的 class 逗号分隔。
element.classList   元素所有的 class 数组形式。
element.style       设置或返回元素的style属性
element.innerText   设置或返回元素的内容
element.innerHTML   设置或返回元素的HTML内容。
element.textContent 设置或返回节点及其后代的文本内容
element.nodeName    获取元素的名称
element.nodeValue   设置或返回元素值
element.nodeType    获取节点类型（共12中类型 1:Element,2:Attr,3:Text,8:注释,9:根节点，11:DocumentFragment）
element.attributes  返回元素属性的 NamedNodeMap。
element.parentNode  返回元素父节点
element.childNodes  获取元素直接后代的HTML元素和TextNode对象的集合
element.firstChild  获取元素首个子元素
element.lastChild   获取元素最后一个子元素
element.previousSibling 获取上一个同级节点
element.nextSibling 获取下一个同级节点
element.accessKey   设置或返回元素的快捷键
element.title       设置或返回元素的title  
element.isContentEditable  返回元素是否可编辑
element.ownerDocument 返回根元素document
element.childNodes.length 返回NodeList中节点数
element.offsetXX 节点宽、高、偏移（包括滚动条、边框）
element.offsetWidth  元素的宽度(包括padding、border、width)
element.offsetHeight 元素的高度(包括padding、border、width)
element.offsetLeft   元素的左偏移位置
element.offsetTop    元素的上偏移位置
element.offsetParent 元素的偏移容器
elment.scrollXX 节点宽、高、卷边（padding加元素内容的宽高）
element.scrollHeight 元素的完整高度(padding+内容高，不含边框)
element.scrollWidth  元素的整体宽度(padding+内容宽，不含边框)
element.scrollLeft   元素左边卷去的距离
element.scrollTop    元素上边卷去的距离
element.clientXX 节点宽、高、边框（padding加元素内容的宽高）
element.clientHeight 元素的高度(padding+内容高，不含边框)
element.clientWidth  元素的宽度(padding+内容宽，不含边框)
element.clientLeft   元素的左边框宽度
element.clientTop    元素的上边框宽度
```

- 获取网页屏幕宽高
```
网页正文部分上： window.screenTop  
网页正文部分左： window.screenLeft  
屏幕分辨率的高： window.screen.height  
屏幕分辨率的宽： window.screen.width  
屏幕可用工作区高度： window.screen.availHeight  
屏幕可用工作区宽度： window.screen.availWidth
屏幕可视区域的宽度：window.innerWidth （包括边框、边距、滚动条，不包括工具条）
屏幕可视区域的高度：window.innerHeight（包括边框、边距、滚动条，不包括工具条）
屏幕可视区域的宽度：window.outerWidth （包括边框、边距、滚动条、工具条）
屏幕可视区域的高度：window.outerHeight （包括边框、边距、滚动条、工具条）
```

- 事件
```
element.addEventListener(event,handler,useCapture)  向文档添加事件句柄,useCapture为true为捕获型事件，为false为冒泡型事件，默认为false，捕获型事件从外向内冒泡且无法停止，冒泡型事件从内向外冒泡，使用`stopPropagation()`停止冒泡
element.removeEventListener(event,handler,userCapture) 移除由addEventListener添加的事件，参数必须与添加时一致
```

- JSON
```
JSON.parse用于从一个字符串中解析出json对象
JSON.stringify()用于从一个对象解析出字符串
```

- Window
```
clearInterval() 取消由 setInterval() 设置的 timeout。
clearTimeout()  取消由 setTimeout() 方法设置的 timeout。
scroll()     
scrollTo()  把内容滚动到指定的坐标。
setInterval()   按照指定的周期（以毫秒计）来调用函数或计算表达式。
setTimeout()    在指定的毫秒数后调用函数或计算表达式。
```

- Math对象方法
```
abs(x)  返回数的绝对值。
ceil(x) 对数进行上舍入。
floor(x)    对数进行下舍入。
max(x,y)    返回 x 和 y 中的最高值。
min(x,y)    返回 x 和 y 中的最低值。
random()    返回 0 ~ 1 之间的随机数。
round(x)    把数四舍五入为最接近的整数。
```

- Number对象方法
```
toString    把数字转换为字符串，使用指定的基数。
valueOf 返回一个 Number 对象的基本数字值。
```

- Date 对象方法
```
new Date()   获取当前时间对象
Date.now()   获取当前时间戳
```

- Object 对象方法
```
Object.keys(obj)    获取对象的所有key到数组
Object.values(obj) 获取对象的所有值到数组
Object.assign(obj1,obj2,objn,....) 合并多个对象，key相同后面覆盖前面
Object.create(obj) 以obj为原型生成一个新对象
```