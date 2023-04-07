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

我用WSL创建了一个linux环境，可以看这一篇[]()。

用github把原来的仓库fork一份之后，clone到本地。

为了保证cmake出来的文件不会造成太多的混淆，我在目录下新建了一个build文件夹来存放cmake构建出来的东西。

```bash
mkdir build
cd build
```

cmake的时候会有一些包是缺失的：

```bash
# 首先就是cmake自己
# 装cmake的时候会一起把gcc也装上
sudo apt install cmake

# g++编译器
sudo apt install g++

# Could NOT find PkgConfig (missing: PKG_CONFIG_EXECUTABLE)
sudo apt install pkg-config

# Could NOT find xcb (missing: XCB_INCLUDE_DIR XCB_LIBRARY)
sudo apt-get install libxcb1-dev
```

然后cmake就能成功生成Makefile了：

```text
> cmake ..
-- Using module to find Vulkan
-- Could NOT find Vulkan (missing: Vulkan_INCLUDE_DIR) 
Using bundled Vulkan library version
-- Found PkgConfig: /usr/bin/pkg-config (found version "0.29.1") 
-- Found xcb: /usr/include  
-- /home/jiong/GAMES/games106/libs/vulkan/libvulkan.so
-- Generating project file for homework in /home/jiong/GAMES/games106/homework/homework0
-- Generating project file for homework in /home/jiong/GAMES/games106/homework/homework1
-- Configuring done
-- Generating done
-- Build files have been written to: /home/jiong/GAMES/games106/build
```

然后用Makefile编译，但是还是缺少一个依赖库：

```bash
# fatal error: glm/glm.hpp: No such file or directory
sudo apt-get install libglm-dev
```

这个时候就已经能make成功了：

~~(助教已经把下一个homework一起传上来了，他真的，我哭死 2023.04.07)~~

```text
> make
[  3%] Building CXX object base/CMakeFiles/base.dir/VulkanDebug.cpp.o
[  7%] Building CXX object base/CMakeFiles/base.dir/VulkanDevice.cpp.o
[ 11%] Building CXX object base/CMakeFiles/base.dir/VulkanRaytracingSample.cpp.o
[ 15%] Building CXX object base/CMakeFiles/base.dir/VulkanSwapChain.cpp.o
[ 19%] Building CXX object base/CMakeFiles/base.dir/VulkanTexture.cpp.o
[ 23%] Building CXX object base/CMakeFiles/base.dir/VulkanTools.cpp.o
[ 26%] Building CXX object base/CMakeFiles/base.dir/VulkanUIOverlay.cpp.o
[ 30%] Building CXX object base/CMakeFiles/base.dir/VulkanglTFModel.cpp.o
[ 34%] Building CXX object base/CMakeFiles/base.dir/vulkanexamplebase.cpp.o
[ 38%] Building C object base/CMakeFiles/base.dir/__/external/ktx/lib/texture.c.o
[ 42%] Building C object base/CMakeFiles/base.dir/__/external/ktx/lib/hashlist.c.o
[ 46%] Building C object base/CMakeFiles/base.dir/__/external/ktx/lib/checkheader.c.o
[ 50%] Building C object base/CMakeFiles/base.dir/__/external/ktx/lib/swap.c.o
[ 53%] Building C object base/CMakeFiles/base.dir/__/external/ktx/lib/memstream.c.o
[ 57%] Building C object base/CMakeFiles/base.dir/__/external/ktx/lib/filestream.c.o
[ 61%] Linking CXX static library libbase.a
[ 84%] Built target base
Scanning dependencies of target homework1
[ 88%] Building CXX object homework/CMakeFiles/homework1.dir/homework1/homework1.cpp.o
[ 92%] Linking CXX executable ../bin/homework1
[ 92%] Built target homework1
Scanning dependencies of target homework0
[ 96%] Building CXX object homework/CMakeFiles/homework0.dir/homework0/homework0.cpp.o
[100%] Linking CXX executable ../bin/homework0
[100%] Built target homework0
```

然后直接找到编译出来的可执行文件运行就好了：

```bash
./bin/homework0
```

![](/img/article/GAMES106笔记/homework0_final.png)