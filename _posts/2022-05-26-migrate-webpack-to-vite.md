---
title: 迁移 vite 的一些笔记
date: 2022-05-26 
categories:
  - log
tags: 
  - tech
  - code
---

![](/assets/images/20220526/cover.jpeg)

>题图是封闭期间隔着小区的围栏拍的外卖小哥

*注意，本文不是教程，只是自己折腾的记录，方便自己以后折腾的时候查阅*

现在 vue 生态都在建议 vue3 的项目使用 [vite](https://vitejs.dev/) 作为打包和开发的脚手架。但是我有许多历史项目都还是使用 [@vue/cli](https://github.com/vuejs/vue-cli) 创建出来的 webpack 的版本。

从 vue-cli 的 Github 上看，这个项目已经处于生命周期的末期，目前只是维护。所以迁移到 vite 是迟早的事情，为了能更好的迁移，我决定先创建两个新项目来演练一下。

我的项目配置都是  typescript + eslint + Prettier + vue router 。所以分别用两个工具各自按照需求创建好了之后的文件结构如下：

### webpack
![webpack](/assets/images/20220526/webpack.png)
### vite
![vite](/assets/images/20220526/vite.png)

可以看到，其实文件区别不是特别大。public 里面的 index.html 换到了外面，同时我们知道 vite 是通过浏览器自己的 esm 来进行模块加载的，所以 index里面的加载方式也有一些改变。如下

### webpack的index.html
```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### vite 的 index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

所以第一步就是把文件结构整理得和 vite 版本一样，并且替换 index.html

第二步就比较简单了，把 vite.confg\tsconfig\eslint 等等config复制过来，同时如果有重名的config记得先备份一下，然后按需求merge，同样地，babel 的config 就可以删除掉了，因为用不到了。vue.confg.js 同理，但是可以先保存一下，因为可能有一些特殊的配置需要迁移过去。
这里还有个特殊的 config ，就是 eslint 的，记得从旧的 config 把你特有的 rule 复制过来

第三步则是比较麻烦的，需要去修改package.json

我的操作逻辑如下

* 替换 scripts 为 vite 的命令（这里记得保留一些前置的命令，比如 cross-env  之类的)
* 删除 devDependencies 里面所有和 vue-create 生成项目相关内容 （这里可以建立一个空项目来看看）
* 删除 core-js  依赖
* 增加 devDependencies 

至此，已经可以安装依赖了，你是喜欢 `npm install` 或者 `yarn` 都可以

当然，这才是第一步，因为如果是一个老项目，你一定会遇到非常多的报错。

最常见的如：

> vite 不支持 typescript 的类型检查，所以需要明确的分别导入导出类型

```typescript
import type { T } from 'only/types'
export type { T }
```

虽然说新的项目都建议直接使用 css 来进行开发，因为现代 css已经非常强大，scss 的存在早已不是必要。但是兼容老项目，所以你还是得装一下 scss
 ```shell
 yarn add -D sass
 ```

## 一些其他的坑

### scss additionalData

``` javascript 
//vite.config.js
css: {
  preprocessorOptions: {
    //define global scss variable
    scss: {
      additionalData: `@import '@/styles/variables.scss';`,
    },
  },
}
```

### api 反代和server配置 [https://vitejs.dev/config/#server-host](https://vitejs.dev/config/#server-host)

### 变量执行顺序

vite 因为不会像 babel 那样给你整体的处理一边，所以在定义 computedRef 的时候要注意访问的顺序，不能先访问再定义，会报错

### svg inline loader

官方有个issue [Support inlining SVG assets #1204](https://github.com/vitejs/vite/issues/1204) 目前我就打算先手动管理，后续等官方这个有支持了，再考虑变成 inline 吧

搞定一切后，一定要打包一下看看打包后的 release 版本有没有问题。
