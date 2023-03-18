# vite-colorui-vue3

ColorUI for Vue3 and Vite 将uni-app版本的ColorUI升级到最新，并搭配Vite使用，大幅提升性能，减少编译时长

# 为什么升级 ? 

ColorUI目前仅支持Vue2 和 webpack ，Vue3 性能上得到了很大的提升，而Vite打包编译速度更快

# Tips

Vue3/Vite版要求 node 版本^14.18.0 || >=16.0.0


# 升级遇到的问题

### Sass 报错

- Using / for division is deprecated and will be removed in Dart Sass 2.0.0.

解决办法

```
Sass 使用的版本必须小于 1.33.0
因为ColorUI 部分CSS写法 Sass新版本不支持
```

### Uni-APP 中的 easycom 失效，无法使用全局组件

解决办法

```
把UI/components下面的组件都移植到 src/components下
```
