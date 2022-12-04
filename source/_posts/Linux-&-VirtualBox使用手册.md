---
title: Linux & VirtualBox使用手册
date: 2022-12-03 13:16:43
tags:
- Linux
- VirtualBox
---

{% raw %}<div class="post-summary">{% endraw %}

Linux和VirtualBox中的常用但是容易忘记的命令和操作

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

# 在VirtualBox中挂载共享文件夹

```bash
sudo mount -t vboxsf Share share_dir
```

![](/img/article/Linux-&-VirtualBox使用手册/image-20221203135233402.png)

在这个VirtualBox共享文件的设置下，命令应当是这个：

```bash
sudo mount -t vboxsf shared_windows /home/liujio/shared
```

# Ubuntu中安装zsh和oh-my-zsh

## 检查当前机器下的shcat /etc/shells

如果有zsh，就不需要额外安装了

## 安装zsh

```bash
apt install zsh #安装zsh

chsh -s /bin/zsh #将zsh设置成默认shell（不设置的话启动zsh只有直接zsh命令即可）
# 或者sudo修改/etc/passwd
```

## 安装oh-my-zsh

```bash
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh 
```

## 安装插件

```bash
#zsh-autosuggestions 命令行命令键入时的历史命令建议
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
#zsh-syntax-highlighting 命令行语法高亮插件
git clone https://gitee.com/Annihilater/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 配置文件~/.zshrc

```
# 启动错误命令自动更正
ENABLE_CORRECTION="true"

# 在命令执行的过程中，使用小红点进行提示
COMPLETION_WAITING_DOTS="true"

# 配置要使用的插件
plugins=(
        git
        extract
        zsh-autosuggestions
        zsh-syntax-highlighting
)
source $ZSH/oh-my-zsh.sh
source $ZSH_CUSTOM/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```

## 安装powerlevel10k主题

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

在 `zshrc`中设置`ZSH_THEME="powerlevel10k/powerlevel10k"`
