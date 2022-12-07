---
title: CF1759F All Possible Digits 题解
date: 2022-12-05 20:51:29
mathjax: true
tags:
- greedy
- math
- Codeforces 1800
categories:
- 题解
---

传送门：[All Possible Digits](https://codeforces.com/problemset/problem/1759/F)

给定一个数字$n(1 \leq n \leq 100)$，进制$p(2 \leq p \leq 10^9)$，并且给出这个数在$p$进制下的表示。现在有一个操作，即给这个数加上1，问要操作几次才能让$p$进制下的所有数位都出现一次？

<!-- more -->

<br/>

观察可知，这个操作次数的上限是$p$，考虑到一直往上加会出现进位的情况，我们先分类讨论：

1. 如果没出现进位，这种情况下，小于最低位的数字应当都出现过了一次
2. 反之就是必须得进位一次才能让所有数位都出现一次

观察$n$的取值范围，这个值是相当小的，我们可以从两种情况的最大值开始往下枚举第一个包含没出现过数位的数，枚举的次数不超过100次，最后再统计答案就好了

``` cpp
int n, p;

void Main(int kase){
    cin>>n>>p;
    vector<int> A(n+1);
    for(int i=1;i<=n;i++) cin>>A[i];
    int cnt=0;
    map<int, int> M;
    for(int i=1;i<n;i++) {if(A[i]<A[n]) cnt+=M[A[i]]!=1; M[A[i]]=1;}
    if(cnt==A[n]){
        // 从最大值开始往下查
        int i=p-1;
        for(;i>A[n];i--) if(!M[i]) break;
        cout<<i-A[n]<<endl;
    }else{
        int i=n-1;
        // 进位可能导致出现新的数位，先把新出现的统计上去
        for(;i>=0;i--) if(A[i]!=p-1){A[i]++; break;}
        M[A[i]]=1;

        // 从最大值开始往下查
        i=A[n]-1;
        for(;i>=1;i--) if(!M[i]) break;
        cout<<p-1-A[n]+1+i<<endl;
    }
}
```