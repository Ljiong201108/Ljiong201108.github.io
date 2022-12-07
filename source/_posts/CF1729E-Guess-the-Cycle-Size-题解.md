---
title: CF1729E Guess the Cycle Size 题解
date: 2022-12-07 14:40:29
mathjax: true
tags:
- interactive
- probabilities
- Codeforces 1800
categories:
- 题解
---
传送门：[Guess the Cycle Size](https://codeforces.com/problemset/problem/1729/E)

给你一个无向环形图，图上有$n(3 \leq n \leq 10^{18})$个节点，一次能询问两个点之间的距离，但是返回的是两个距离中的任意一个，在只有$50$次的询问下，问环的长度是多少。

<!-- more -->

<br/>

~~水题！~~

这种概率题一般就这样了吧😅。

问两个相同的点两次，如果返回的值是不同的，直接得出结果。

若是相同的，就再问一遍。这样$50$次下来，$50$次全给出相同的值但是两条边长度不同的概率是$2^{-25}$，一般不会寄~~，除非是真的脸黑。~~

这题还要注意的一个点就是，评测机对相同的有序点对会返回相同的值，所以问完一次之后要换两个点问！

```cpp
ll ask(ll a, ll b){
	ll ret;
	std::cout<<"? "<<a<<" "<<b<<std::endl;
	std::cout.flush();
	std::cin>>ret;
	return ret;
}

void succ(ll a){
	std::cout<<"! "<<a<<std::endl;
	std::cout.flush();
}

void Main(int kase){
	for(ll i=2;i<=26;i++){
		ll ans1=ask(1, i);
		ll ans2=ask(i, 1);

		if(ans1==-1){
			succ(i-1);
			return;
		}

		if(ans1!=ans2){
			succ(ans1+ans2);
			return;
		}
	}
}
```
