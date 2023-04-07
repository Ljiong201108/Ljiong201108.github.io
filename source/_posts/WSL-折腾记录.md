---
title: WSL 折腾记录
mathjax: true
date: 2023-04-07 19:11:23
tags:
---

{% raw %}<div class="post-summary">{% endraw %}

之前报了一个GAMES 106的网络公开课，讲渲染管线的，说是windows，mac和linux都能build，但是windows属实不太适合写代码~~（搞了半天搞出一堆bug、缺依赖库，属实难蚌）~~。但是想用linux但是在VM里面不是很好去使用GPU，正巧搜的时候看到最新的WSL2用的其实是windows的GPU，所以就小小的折腾了一下。

本次安装的linux发行版是Ubuntu 20.04.05。

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

# WSL的安装

如果想默认安装的话（直接装在C盘），直接按照[官方的安装步骤](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview)走下去就好了。但是我C盘一般是不安装软件的，只存放系统相关的文件，这样重装系统就不需要再安装软件了。所以安装步骤上有一点小小的额外步骤。

## 安装前的准备

先按照官方的安装步骤初始化WSL。可以下载（他下载之后不是直接安装的），**但是不要安装系统！！！**

## 在Microsoft Store下载Ubuntu WSL版本

直接在Microsoft Store上面搜索Ubuntu，会出来几个版本：

* Ubuntu：Ubuntu最新的发行版
* Ubuntu 20.04.05：Ubuntu 20.04.05的发行版，我们下的就是这个
* 其他：其他的Ubuntu发行版版本

![](/img/article/WSL-折腾记录/Microsoft-Store.png)

这个时候我们就可以点进去安装。

![](/img/article/WSL-折腾记录/Ubuntu-20.04.5商店安装.png)

**下好之后千万别启动！！！**

## 将下载好的Ubuntu“偷出来”

使用微软商店下载的应用安装包会默认保存在C:\Program Files\WindowsApps目录下，但是这个目录是很难通过GUI去访问的，所以我们通过命令行。

先用**管理员**cd进这个目录:

```bash
# powershell / cmd
cd "C:\Program Files\WindowsApps"
```
然后查看当前目录下的内容：

```bash
# Ubuntu一般是安装在CanonicalGroupLimited开头的文件夹里面
dir CanonicalGroupLimited*
```

![](/img/article/WSL-折腾记录/WindowsApps.png)

说明我们要找的安装包就在这四个目录下面，依次用dir命令查看里面的内容。看到一个文件叫“ubuntu2004.exe”就说明找到了。我这运气不太好，是在最后一个目录下才找到的。

![](/img/article/WSL-折腾记录/WindowsApps-Find.png)

找到之后就可以直接cp到你想要放置WSL的地方了

```bash
cp <安装包所在的文件夹名>\* <你想要安装ubuntu文件夹的路径>
```

cp出来之后其实就可以直接卸载微软商城里的Ubuntu了。~~（什么卸磨杀驴）~~

## Ubuntu 20.04.5的安装

直接双击打开“ubuntu2004.exe”就好了。

装好之后需要设置一下用户名密码。

## 升级一下软件（可选）

我是习惯进了系统之后先把软件升级一下的。

```bash
sudo apt update
sudo apt upgrade
```

然后就等待他安装完成。

## 开启ssh服务

不知道为啥，WSL默认装的sshd没法ssh连接，因此我们需要重装一下。

```bash
# 删掉原先的ssh server
sudo apt-get remove openssh-server

# 重新安装ssh server
sudo apt-get install openssh-server
```

我们还要改一下sshd_config里面的一些设置来打开密码登录和免密登录。

```bash
sudo vi /etc/ssh/sshd_config
```

* #PubkeyAuthentication yes：去掉前面的#来允许免密登录
* PasswordAuthentication no：把no改成yes来允许密码登录

```bash
# 重启一下ssh服务
sudo service ssh restart
```

### 动态IP登录

登录WSL需要一个IP，我们要用ifconfig就得先装这个包：

```bash
sudo apt install net-tools
```

然后就可以查看IP了

```bash
ifconfig
```

### 静态IP登录

这一块是引用别人的代码（源地址我忘记了，但是网上很多用的都是同一个原理）。

保存为.bat文件之后，用这个bat直接在windows打开WSL并且分配固定IP，记得用管理员运行，或者直接加入开机启动项。

```bat
@echo off
setlocal enabledelayedexpansion

REM 顺便开启ssh
wsl -d Ubuntu-20.04 -u root service ssh start

:: set wsl2 ip
wsl -d Ubuntu-20.04 -u root ip addr | findstr "172.17.156.13" > nul
if !errorlevel! equ 0 (
    echo wsl ip has set
) else (
    wsl -d Ubuntu-20.04 -u root ip addr add 172.17.156.13/28 broadcast 172.17.156.15 dev eth0 label eth0:1
    echo set wsl ip success: 172.17.156.13
)

:: set windows ip
ipconfig | findstr "172.17.156.1" > nul
if !errorlevel! equ 0 (
    echo windows ip has set
) else (
    netsh interface ip add address "vEthernet (WSL)" 172.17.156.1 255.255.255.240
    echo set windows ip success: 172.17.156.1
)

pause
```

## WSL下的图形化界面

### X11 Forwarding

这个就是和其他linux远程访问一样的设置。

### WSGL

微软不太推荐我们给WSL安装桌面环境，但是还是提供了图形化的支持：WSLG。这个是直接集成在最新的WSL里面的，所以不需要额外的安装。想要测试的话可以安装x11-apps这个库，然后启动xclock。

X11和WSLG是不能一起用的。

### 测试

```bash
sudo apt install x11-apps
xclock
```

正常情况下都会有一个小小的时钟界面出现：

![](/img/article/WSL-折腾记录/xclock.png)

~~（不用X11 Forwarding还是很舒服的）~~

## 免密登录

和普通linux是一样的，把本地的公钥传到~/.ssh/authorized_keys这个文件里就可以了。

## 安装喜欢的shell

这一步可以查看[我的这篇博客](https://ljiong201108.github.io/2022/12/03/Linux-&-VirtualBox%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C/)，步骤都是一样一样的。

## Vscode

微软很贴心地为我们提供了一个拓展包：Remote Development。这个包里面有一个Remote: WSL的拓展。

如果用WSLG作为图形界面的话需要在设置里面把Remote X11.WSL这个选项勾掉（不选中），反之X11的话就勾上。设置完记得重启一下。