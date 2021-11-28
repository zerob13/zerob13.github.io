---
title: 做了个键盘按键测试页面
date: 2021-11-28
categories:
  - log
tags: 
  - daily
  - code
  - web
---

![](/assets/images/20211128.jpg)

>题图是新做的键盘测试页面

事情的起因是这样的，最近又开始做做键盘，算是打发一下心中的焦虑情绪。然后呢，发现网页版本的键盘测试页面要么太花里胡哨，要么就还在使用 KeyEvent 里面的 keyCode 来区分按键，这种情况下没法区分左右 Shift 等功能键了，无论按左还是右都是同一个 keyCode。

查了下MDN关于 [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) 这部分内容，其实 Chrome 、Safari 和 Firefox 之类的现代浏览器早就已经抛弃了 keyCode 这个东西。现在提供了 code 和 key 这两个属性来区分每个键，甚至可以按系统区分很多细节的按键，具体文档可以看这里：

[KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

[KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)

当然，这不可能只有我发现了这个情况，搜索了一下 [装备前线的键盘测试网页](https://www.zfrontier.com/lab/keyboardTester)  早就使用了这个技术来区分按键位置。主要这个社区这几年还在活跃，所以技术也一直在进步吧，很多其他的测试网站都好几年没更新过了。

但无论如何，自己撸一个新的也不是什么难事，刚好最近在熟悉 Vue3 和 typescript 那就搞一个呗。css用了下 [windicss](https://windicss.org/) 非常简单好用，而且按需打包，整挺好。

代码放在这里了:[https://github.com/zerob13/keyboard-tester](https://github.com/zerob13/keyboard-tester)

然后线上也有一个地址可以直接玩:[https://blog.zerob13.com/assets/kb/](https://blog.zerob13.com/assets/kb/)

