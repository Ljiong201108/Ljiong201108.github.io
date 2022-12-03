---
title: Linux & VirtualBox使用手册
date: 2022-12-03 13:16:43
tags:
- Linux
- VirtualBox
---

# 在VirtualBox中挂载共享文件夹

``` bash
sudo mount -t vboxsf Share share_dir
```

![](/img/article/Linux-&-VirtualBox使用手册/image-20221203135233402.png)

在这个VirtualBox共享文件的设置下，命令应当是这个：

``` bash
sudo mount -t vboxsf shared_windows /home/liujio/shared
```

