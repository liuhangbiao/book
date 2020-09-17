## Vue代码片段精选

### 插槽 slot

```
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

<!-- 使用： -->
<alert-box>Something bad happened.</alert-box>
//Error!Something bad happended.
```

### 自定义事件 event

```
# 在组件内部自定义事件event

<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    methods: {
      handleClick (event) {
        this.$emit('on-click', event);
      }
    }
  }
</script>

//通过 $emit，就可以触发自定义的事件 on-click ，在父级通过 @on-click 来监听：
<i-button @on-click="handleClick"></i-button>

# 用事件修饰符 .native直接在父级声明 所以上面的示例也可以这样写：
<i-button @click.native="handleClick"></i-button>

复制代码如果不写 .native 修饰符，那上面的 @click 就是自定义事件 click，而非原生事件 click，但我们在组件内只触发了 on-click 事件，而不是 click，所以直接写 @click 会监听不到。

```

### 组件的通信

```
//ref和parent和children
Vue.js 内置的通信手段一般有两种：
    ref：给元素或组件注册引用信息；
    parent /children：访问父 / 子实例。

# 用 ref 来访问组件（部分代码省略）：
// component-a
export default {
  data () {
    return {
      title: 'Vue.js'
    }
  },
  methods: {
    sayHello () {
      window.alert('Hello');
    }
  }
}


<template>
  <component-a ref="comA"></component-a>
</template>
<script>
  export default {
    mounted () {
      const comA = this.$refs.comA;
      console.log(comA.title);  // Vue.js
      comA.sayHello();  // 弹窗
    }
  }
</script>
```