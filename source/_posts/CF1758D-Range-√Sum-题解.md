---
title: CF1758D Range = √Sum 题解
date: 2022-12-05 21:33:21
mathjax: true
tags:
- brute force
- math
- constructive algorithms
- Codeforces 1800
categories:
- 题解
---

传送门：[Range = √Sum](https://codeforces.com/problemset/problem/1758/D)

给定一个正整数$n(1 \leq n \leq 3 \cdot 10^5)$，找出一串$n$个不同的数的数列$a_1, a_2, ... , a_n(1 \leq a_i \leq 10^9)$，满足以下式子：

$$
\max \left(a_1, a_2, \ldots, a_n\right)-\min \left(a_1, a_2, \ldots, a_n\right)=\sqrt{a_1+a_2+\cdots+a_n}
$$

<!-- more -->

<br/>

如果$n$是偶数，我们可以直接构造：$n-\frac{n}{2}, n-\frac{n}{2}+1, ..., n-1, n+1, ..., n+\frac{n}{2}-1, n+\frac{n}{2}$，这样$\max \left(a_1, a_2, \ldots, a_n\right)-\min \left(a_1, a_2, \ldots, a_n\right)$就是$n+\frac{n}{2}-(n-\frac{n}{2})=n$，$\sqrt{a_1+a_2+\cdots+a_n}=\sqrt{n^2}=n$，满足题意

如果$n$是奇数，我们就不能这么构造了，我的做法是微调$n-1$情况下的那些数字，再加上$n$本身，正好就是$n$个数字，让右边根号下能是一个完全平方数，这个数是$(n+1)^2$。

$(n+1)^2 - n^2 = 2n+1$，也就是说我们要往这些数字里面加上$2n-1$。

首先，先给最后一个数加上$2$，这一步之后$\max \left(a_1, a_2, \ldots, a_n\right)-\min \left(a_1, a_2, \ldots, a_n\right)$就变成$n+1$了，并且后面的操作不会再改变这个值了。

再让每个数加上一。此时还剩$n-1$，我让除了首尾的$n-2$个数都加上一，还剩最后一个，加在倒数第二个数上面就好了。

用一个例子来说明：$n=5$的情况下：

$(3,4,5,6,7) \rightarrow (3,4,5,6,9) \rightarrow (4,5,6,7,10) \rightarrow (4,6,7,8,10) \rightarrow (4,6,7,9,10)$

``` cpp
int n;

void Main(int kase){
    cin>>n;

    if(n%2==0){
        for(int i=n-n/2;i<n;i++) cout<<i<<" ";
        for(int i=n+1;i<=n+n/2;i++) cout<<i<<" ";
        cout<<endl;
    }else{
        cout<<n-n/2+1<<" ";
        int i=n-n/2+3;
        for(int cnt=1;cnt<=n-3;i++, cnt++) cout<<i<<" ";
        cout<<i+1<<" ";
        cout<<n+n/2+3<<endl;
    }
}
```