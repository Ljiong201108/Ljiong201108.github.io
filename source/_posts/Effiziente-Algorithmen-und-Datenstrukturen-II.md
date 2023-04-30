---
title: Effiziente Algorithmen und Datenstrukturen II
mathjax: true
date: 2023-04-22 19:30:47
tags:
---

{% raw %}<div class="post-summary">{% endraw %}

EA2的笔记

~~（感谢fy的课后辅导）~~

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

# Introduction to Linear Programming (LP)

给定$m$个对于$n$个自变量的约束条件, 要求在满足这些约束条件的前提下, 最大化收益.

标准的LP形式: 

$$
\begin{aligned}
& \max \left( \sum_{j=1}^n c_j x_j \right) \\
& \text { s.t. } \sum_{j=1}^n a_{i j} x_j=b_i \quad 1 \leq i \leq m \\
& x_j \geq 0 \quad 1 \leq j \leq n \\
&
\end{aligned}
$$

以数组的形式: 

$$
\begin{aligned}
\max & \left(c^T x\right) \\
\text { s.t. } & A x=b \\
& x \geq 0
\end{aligned}
$$

其中$Ax=b$指出了自变量$x$需要满足的条件, 而$c^Tx$就是收益计算方式, 他给每一个自变量$x_j$一个权值$c_j$.

当然, LP也有除了等号的标准形式: 

* 求最小值: $\begin{array}{rr} & \min \left( c^T x \right) \\ & \text { s.t. } A x=b \\ & x \geq 0\end{array}$
* 最大化约束: $\begin{array}{rr} & \max \left( c^T x \right) \\ & \text { s.t. } A x \leq b \\ & x \geq 0\end{array}$
* 最小化约束: $\begin{array}{rr} & \max \left( c^T x \right) \\ & \text { s.t. } A x \geq b \\ & x \geq 0\end{array}$

我们可以很容易地从一个形式转换成另一个形式: 

* 小于等于变等于: $a-3 b+5 c \leq 12 \Rightarrow \begin{aligned} a-3 b+5 c+s & =12 \\ s & \geq 0\end{aligned}$
* 大于等于变等于: $a-3 b+5 c \geq 12 \Rightarrow \begin{aligned} a-3 b+5 c-s & =12 \\ s & \geq 0\end{aligned}$
* 最小值转最大值: $\min \left( a-3 b+5 c \right) \Rightarrow \max \left( -a+3 b-5 c \right)$
* 等于转小于等于: $a-3 b+5 c=12 \Rightarrow \begin{gathered}a-3 b+5 c \leq 12 \\ -a+3 b-5 c \leq-12\end{gathered}$
* 等于转大于等于: $a-3 b+5 c=12 \Rightarrow \begin{gathered}a-3 b+5 c \geq 12 \\ -a+3 b-5 c \geq-12\end{gathered}$
* 未限制转非负: $x$ unrestricted $\Rightarrow x=x^{+}-x^{-}, x^{+} \geq 0, x^{-} \geq 0$

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
只要是新加的变量都有非负的限制条件, 这是因为自变量$x_j$必须是非负的
{% raw %}</div></article>{% endraw %}

## Definition 1 (Linear Programming Problem (LP))

已知 $A \in \mathbb{Q}^{m \times n}, b \in \mathbb{Q}^m, c \in \mathbb{Q}^n, \alpha \in \mathbb{Q}$, 问是否存在 $x \in \mathbb{Q}^n$ s.t. $A x=b, x \geq 0$, 使得 $ c^T x \geq \alpha$ ?

### LP $\in$ NP / co-NP / P ?

* LP是NP问题吗？
* LP是co-NP问题吗？
* LP是P问题吗？

### 输入

$n$是自变量的数量, $m$是约束条件的数量, $L$是编码输入需要的bit.

### LP的几何意义

![](img/article/Effiziente-Algorithmen-und-Datenstrukturen-II/Screenshot_20230423_103344.png)

![](img/article/Effiziente-Algorithmen-und-Datenstrukturen-II/Screenshot_20230423_103454.png)

### 一些额外的定义

对于一个满足条件的自变量的集合 $P=\{x \mid A x=b, x \geq 0\}$: 

* $P$ 被称作可行域(feasible region)
* $P$ 中的一个点$x \in P$被称作可行解(feasible point)
* 如果 $P \neq \varnothing$ , 那这个LP就被称作可解的(feasible), 否则就是无解的(infeasible)
* LP是有界的(bounded)如果它是有解的并且
* * 所有可行解 $x \in P$ , $c^T x<\infty$ 
* * 所有可行解 $x \in P$ , $c^T x>-\infty$ 

## Definition 2

给定向量或者点 $x_1, \ldots, x_k \in \mathbb{R}^n$ , $\sum \lambda_i x_i$:

* 线性组合(linear combination), 如果 $\lambda_i \in \mathbb{R}$
* 仿射组合(affine combination), 如果 $\lambda_i \in \mathbb{R}$ 并且 $\sum_i \lambda_i=1$
* 凸组合(convex combination), 如果 $\lambda_i \in \mathbb{R}$, $\sum_i \lambda_i=1$ 并且 $\lambda_i \geq 0$
* 锥组合(conic combination), 如果 $\lambda_i \in \mathbb{R}$ 并且 $\lambda_i \geq 0$

{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
组合中的向量或者点的个数必须是有限的!!!
{% raw %}</div></article>{% endraw %}

## Definition 3 & 4

集合$X \subseteq \mathbb{R}^n$是: 
* $span(X)$ : 线性子空间(linear subspace), 如果它在线性组合下是个闭集(closed set)
* $aff(X)$ : 仿射子空间(affine subspace), 如果它在仿射组合下是个闭集
* $conv(X)$ : 凸包(convex), 如果它在凸组合下是个闭集
* $cone(X)$ : $凸锥(convex cone), 如果它在锥组合下是个闭集

{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
仿射子空间可能不是一个向量空间, 因为它有可能不过原点!!!
{% raw %}</div></article>{% endraw %}

{% fold 人话 %}
线性子空间和凸包是已经熟知的概念, 这里提一下对于仿射子空间和凸锥的通俗理解: 

### 仿射子空间

对于一个二维平面, 两个点的仿射子空间就是过这两个点的直线, 此时它是一个一维的概念. 但是如果加入了第三个不共线的点, 此时这三个点的仿射子空间就是整个二维平面了. 

由此我推断一个集合的仿射子空间是一个能过所有点的最低维度空间. 

### 凸锥

可以理解成从原点发射的所有能打中凸包的射线组成的集合体, 确实是一个锥的样子, 很形象

{% endfold %}

## Definition 5

函数 $f: \mathbb{R}^n \rightarrow \mathbb{R}$ 是(向下)凸(convex)的, 如果对于所有的 $x, y \in \mathbb{R}^n$ 和 $\lambda \in[0,1]$ , 满足如下:

$$
f(\lambda x+(1-\lambda) y) \leq \lambda f(x)+(1-\lambda) f(y)
$$

## Lemma 6

如果 $P \subseteq \mathbb{R}^n$ , $f: \mathbb{R}^n \rightarrow \mathbb{R}$ 是凸的, 那么 $Q=\{x \in P \mid f(x) \leq t\}$ 也是凸的

{% raw %}<article class="message is-danger"><div class="message-body">{% endraw %}
?
{% raw %}</div></article>{% endraw %}

## Definition 7

仿射子空间 $A \subseteq \mathbb{R}^n$ 的维数 $dim(A)$ , 是在 $A$ 中任取一点 $a \in A$ 后, 向量空间 $\{x-a \mid x \in A\}$ 的维数.

{% fold 人话 %}
把仿射子空间平移到原点之后的空间的维数.
{% endfold %}

## Definition 8

对于集合 $X \subseteq \mathbb{R}^n$ , $dim(X)$ 的维数和 $aff(X)$ 的维数相同.

## Definition 9

集合 $H \subseteq \mathbb{R}^n$ 是一个超平面(hyperplane), 如果存在向量 $a \neq 0$ , $H=\{x \mid a^T x=b\}$.

{% fold 人话 %}
$a$ 是比当前空间低一维的维度的法向量的方向. 例如: 当前空间是二维平面, 那么 $a$ 就是直线的法向量 ; 当前空间是三维空间, 那么 $a$ 就是平面的法向量. $b$ 是比当前空间低一维的维度的截距, 这是一个有向距离.
{% endfold %}

## Definiation 10

集合 $H^{\prime} \subseteq \mathbb{R}^n$ 是一个(闭)半空间, 如果存在向量 $a \neq 0$ , $H=\{x \mid a^T x \leq b\}$

{% fold 人话 %}
$a$ 的反方向, 以超平面为界的维度空间
{% endfold %}

## Definition 11

polytop是一个集合 $P \subseteq \mathbb{R}^n$ , 满足 $P=\operatorname{conv}(X)$ , $|X|=c$.

## Definition 12

polyhedron是一个集合 $P \subseteq \mathbb{R}^n$ , 这个集合可以被表示成若干个半空间的交集 $\{H\left(a_1, b_1\right), \ldots, H\left(a_m, b_m\right)\}$, $H\left(a_i, b_i\right)=\{x \in \mathbb{R}^n \mid a_i x \leq b_i\}$

## Definition 13

polyhedron $P$ 是有界的(bounded), 如果所有 $x \in P$ , 存在 $B$ , 使得 $\|x\|_2 \leq B$

## Theorem 14

$P$ 是一个有界的polyhedron $\iff$ $P$ 是一个polytop

## Definition 15

给定 $P \subseteq \mathbb{R}^n, a \in \mathbb{R}^n$ 和 $b \in \mathbb{R}$. 超平面 $H(a, b)=\{x \in \mathbb{R}^n \mid a^T x=b\}$ 是一个 支撑超平面(supporting hyperplane), 如果 $\max \{a^T x \mid x \in P\}=b$

{% fold 人话 %}
那些贴在凸包上的超平面
{% endfold %}

## Definition 16

给定 $P \subseteq \mathbb{R}^n$. $F$ 是一个 $P$ 的face, 如果 $F=P$ 或者对于一些支撑超平面 $H$ , $F=P \cap H$ .

## Definition 17

给定 $P$ :

* $v$ 是 $P$ 的一个端点(vertex), 如果 $\{ v \}$ 是 $P$ 的face
* $e$ 是 $P$ 的一条边(edge), 如果 $e$ 是 $P$ 的face, 并且 $dim(e)=1$
* $F$ 是 $P$ 的一个面(facet), 如果 $F$ 是 $P$ 的face, 并且 $dim(F)=dim(P)-1$

## Definition 18

另一种vertex的判断方法:

给定一个polyhedron $P$. 一个点 $x \in P$ 是一个端点(vertex), 如果对于所有的 $y \in P, y \neq x$, $\exists c \in \mathbb{R}^n$ 满足 $c^T y<c^T x$

## Definition 19

给定一个polyhedron $P$. 一个点 $x \in P$ 是一个极值点(extreme point), 如果 $\nexists a, b \neq x, a, b \in P$, 满足 $\lambda a+(1-\lambda) b=x$ for $\lambda \in[0,1]$.

{% fold 人话 %}
不存在与 $x$ 共线并且在 $x$ 两侧的点 $a$ 和 $b$
{% endfold %}

## Definition 20

端点是极值点

## Observation

LP的可行域是一个ployhedron

## Theorem 21

如果标准形式的LP存在最优解, 那么一定存在一个是极值点的最优解

{% fold 证明 %}
如果 $x$ 是一个非极值点的最优解

假设有一个向量 $d \neq 0$ , $x \pm d \in P$

$\Rightarrow A \cdot (x \pm d)=b \Rightarrow A \cdot d=0$

在 $d$ 和 $-d$ 中取一个使 $c^T \cdot d' > 0 \quad (d' = d \text{ or } -d)$ 的, 作为正方向 $d$. 这是一定可以取到的, 因为 $d \neq 0$ , 若 $c^T \cdot d < 0$, 那么 就一定有 $c^T \cdot d > 0$

现在考虑从 $x$ 出发, 在射线 $x$ 到 $x+d$ 上的点 : $x+\lambda d, \lambda>0$

### Case 1: $\exists j$ s.t. $d_j<0$

{% raw %}<article class="message is-danger"><div class="message-body">{% endraw %}
?
{% raw %}</div></article>{% endraw %}

{% endfold %}

## Notation

$B \subseteq\{1 \ldots n\}$ 是列索引的集合, $A_B$是 $A$ 中索引在 $B$ 里的列的集合

## Theorem 22

给定集合 $P=\{x \mid A x=b, x \geq 0\}$. 对于一个 $x \in P$, 定义 $B=\{j \mid x_j>0\}$. 那么 $x$ 是极值点当且仅当 $A_B$ 有线性无关的列.

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
对于向量 $v_1, v_2, ... , v_n$ , 若是存在 $a_1, a_2, ... , a_n$ , 使得 $\sum_{i=1}^n a_i \cdot v_i = 0$ , 则称向量 $v_1, v_2, ... , v_n$ 线性相关, 否则向量 $v_1, v_2, ... , v_n$ 线性无关
{% raw %}</div></article>{% endraw %}

{% fold 证明 %}
### $\Leftarrow$

假设 $x$ 不是极值点

那就存在一个向量 $d \neq 0$ , 使得 $x \pm d \in P$

$\Rightarrow A \cdot (x \pm d)=b \Rightarrow A \cdot d=0 \Rightarrow A\text{ 中的列是线性相关的}$

定义 $B^{\prime}=\{j \mid d_j \neq 0\}$

根据矩阵乘法, $A \cdot d = \sum_i \text{A的第} i \text{列} \cdot d_i$ , 而如果 $d$ 的第 $i$ 个元素是 $0$, 那么他就不会对结果产生贡献.

所以 $A \cdot d$ 的结果其实就是 $A_{B'}$ 中的列依次去乘 $d$ 中的非零元素 (这两者的数量应该是相等的), 乘出来的结果也是 $0$

所以 $A_{B'}$ 的列也是线性相关的

如果对于某个索引 $j$ , $x_j=0 \Rightarrow d_j=0$ , 这是因为有 $x_j \geq 0$ 这个条件. 

因此 $B^{\prime} \subseteq B$ , 所以 $A_B$ 的列也必然是线性相关的

### $\Rightarrow$

假设 $x$ 是极值点的时候, $A_B$ 是线性相关的

那么就必定存在 $d \neq 0$ , 使得 $A_B \cdot d=0$

将 $d$ 扩展到 $\mathbb{R}^n$ (原本 $d$ 中是只含有 $B$ 中的位置的值的, 现在给其他位置填充 $0$ )

那么 $A \cdot d = 0$

所以对于足够小的 $\lambda$ 有 $x \pm \lambda d \in P$ , 因此 $x$ 不是一个极值点, 与假设矛盾

{% endfold %}

## Theorem 23

给定 $P=\{x \mid A x=b, x \geq 0\}$ , 对任意 $x \in P$ , 我们定义 $B=\left\{j \mid x_j>0\right\}$ . 如果 $A_B$ 的列是线性无关的, 则 $x$ 是 $P$ 的一个端点(vertex).

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
结合**Theorem 22**, 说明端点和极值点其实是等价的
{% raw %}</div></article>{% endraw %}

{% fold 证明 %}

定义 $c_j= \begin{cases}0 & j \in B \\ -1 & j \notin B\end{cases}$ 

则 $c^T \cdot x=0$ , 对于其他点 $y \in P$ , $c^T \cdot y \le 0$ (因为 $c$ 是非正的)

根据端点的定义(**Definition 18**), 如果 $x$ 是端点, 我们必须证明: $\forall y, c^T \cdot y = 0 \Rightarrow x=y$

我们假设 $c^T y=0$ , 则如果 $j \notin B$ , $y_j=0$ 必须满足, 否则结果里面就会出现 $-1$

因为 $y \in P$ , 所以有 $Ay=b$ , 对于 $y$ 中不属于 $B$ 的索引对应的元素, 不会对结果产生贡献, 因为他们是 $0$ , 所以有 $Ay=b=A_B \cdot y_B$ . 对于 $x$ 中不属于 $B$ 的索引对应的元素同理. 所以有 $Ay=b=A_B \cdot y_B = Ax=A_B \cdot x_B$

移项之后能得出: $A_B\left(x_B-y_B\right)=0$

因为 $A$ 的列是线性无关的, 所以 $x_B - y_B$ 一定得是 $0$ (线性无关的定义)

于是就证出了 $\forall y, c^T \cdot y = 0 \Rightarrow x=y$

所以在 $A_B$ 的列是线性无关的条件下, 对于我们构建的 $c$ , $\nexists y \neq x , c^T \cdot y \ge c^T \cdot x$ , 所以 $x$ 必定是端点.

{% endfold %}

## Observation

对于一个LP问题, 我们能够假设矩阵 $A$ 是行满秩的, 即 $\operatorname{rank}(A)=m$

{% fold 说明 %}

假设 $\operatorname{rank}(A)<m$

不失一般性, 我们假设第一行 $A_1$ 能够表示成其他列 $A_2, \ldots, A_m$ 的线性组合: 

$$
A_1=\sum_{i=2}^m \lambda_i \cdot A_i
$$

### Case 1

如果 $b_1=\sum_{i=2}^m \lambda_i \cdot b_i$ , 则第一行就没意义了, 如果除了第一行的其他行能够成立, 那么第一行必定成立

### Case 2

如果 $b_1 \neq \sum_{i=2}^m \lambda_i \cdot b_i$ , 那么LP就是无解的, 因为: 

$$
A_1 x=\sum_{i=2}^m \lambda_i \cdot A_i x=\sum_{i=2}^m \lambda_i \cdot b_i \neq b_1
$$

即如果第一行成立, 则其他行不成立; 如果其他行成立, 则第一行必不成立

{% endfold %}

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
从现在开始, 我们假设标准形式的LP问题的条件矩阵 $A$ 都是行满秩的
{% raw %}</div></article>{% endraw %}

## Theorem 24

给定 $P=\{x \mid A x=b, x \geq 0\}$ , $x$ 是极值点当且仅当存在 $B \subseteq\{1, \ldots, n\}$ , 满足 $|B|=m$ 并且: 

* $A_B$ 是非奇异的
* $x_B=A_B^{-1} b \geq 0$
* $x_N=0$

定义 $N=\{1, \ldots, n\} \backslash B$

{% fold 证明 %}

### $\Rightarrow$

根据**Theorem 22**, 如果 $x$ 是极值点, 则存在 $B=\{j \mid x_j>0\}$ , 使得 $A_B$ 的列是线性无关的. 

$max\left(|B|\right)=m$ , 因为 $A$ 是行满秩的, 即 $rank(A)=m$ , 并且行秩等于列秩, 所以列秩最大就是 $m$ , 即最多有 $m$ 个线性无关的列.

如果 $|B|<m$ , 我们就往里面加入线性无关的列即可.

易得, 这样构造出的 $B$ 和 $A_B$ 是满足条件的

### $\Leftarrow$

上述过程都是充要的, 反过来写就好了

{% endfold %}