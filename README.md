# vite-colorui-vue3

- 已将所有依赖升级到最新版本

ColorUI for Vue3 and Vite 将uni-app版本的ColorUI升级到最新，并搭配Vite使用，大幅提升性能，减少编译时长

### Tips: Vue3/Vite版要求 node 版本^14.18.0 || >=16.0.0


# 为什么升级 ? 

ColorUI目前仅支持Vue2 和 webpack ，Vue3 性能上得到了很大的提升，而Vite打包编译速度更快

# 升级可能会遇到的问题

### Sass 报错

- Using / for division is deprecated and will be removed in Dart Sass 2.0.0.

解决办法

```
Sass 使用的版本必须小于 1.33.0
因为ColorUI 部分CSS写法 Sass新版本不支持

```
### Sass 导入修改

```
将所有(@符号的)css的导入
    @import '@/app/scss/app';
修改为
    @import '@/app/scss/_app.scss';
```

### Uni-APP 中的 easycom 失效，无法使用全局组件

解决办法

```
把UI/components下面的组件都移植到 src/components下
```

### 将vue2挂载原型链方法修改

```
把所有挂到原型链的方法
    Vue.prototype.xxx = xxx;
修改成
    import App from './App.vue'
    import { createApp } from 'vue'
    const app = createApp(App);
    app.config.globalProperties.$xxx = xxx;
```

### 将Vue2 (solts)插槽升级到 Vue3 

- slots.xxx 修改 成 $slots.xxx

