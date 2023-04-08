---
title: GAMES106笔记
mathjax: true
date: 2023-04-07 20:43:34
tags:
---

{% raw %}<div class="post-summary">{% endraw %}

GAMES 106的笔记

[课程链接](https://zju-rendering.github.io/games106/)

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

# 课内笔记

## 0.

# 作业

## 0. 

这个作业已经给了一个写好的框架，只需要用cmake build一下就好了。

用github把原来的仓库fork一份之后，clone到本地。

为了保证cmake出来的文件不会造成太多的混淆，我在目录下新建了一个build文件夹来存放cmake构建出来的东西。

然后运行`cmake .. -G "MinGW Makefiles"`，这里的`-G "MinGW Makefiles"`是指定cmake出来的东西可以用mingw32-make编译。

cmake生成好编译文件之后用mingw32-make进行编译：`mingw32-make`

然后就很高兴地报错了：

```text
games106\base\VulkanDebug.h:23:10: fatal error: glm/glm.hpp: No such file or directory
	#include <glm/glm.hpp>
```

打开项目根目录下的Cmakelist.txt看了下：`include_directories(external/glm)`，这说明glm应该是被放在`games106/external/glm`这个目录下，但是这个目录是空的。

去GLM官网下好这个包，解压之后按照报错的头文件位置解压进去就好了。

还有一个错：

```text
games106\base\vulkanexamplebase.h:16:10: fatal error: ShellScalingAPI.h: No such file or directory
	#include <ShellScalingAPI.h>
```
这个错误是mingw-w64版本太低导致的，我从`8.1.0`升级到`12.1.0`之后就好了。

编译好之后就好了，生成的可执行程序在新建的build目录下的bin目录里面。

~~（4610帧属实有点6）~~

![](/img/article/GAMES106笔记/homework0_final.png)