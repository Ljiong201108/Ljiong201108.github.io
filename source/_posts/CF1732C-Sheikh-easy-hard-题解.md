---
title: CF1732C Sheikh (easy & hard) 题解
date: 2022-12-07 14:28:26
mathjax: true
tags:
- bitmasks
- greedy
- number theory
- Codeforces 1800
categories:
- 题解
---

传送门：[Sheikh](https://codeforces.com/problemset/problem/1732/C2)

给定一串长度为$n(1 \leq n \leq 10^5)$的数列$a_1, a_2, \ldots, a_n\left(0 \leq a_i \leq 10^9\right)$，定义$f(l, r)=\operatorname{sum}(l, r)-\operatorname{xor}(l, r)$，其中$\operatorname{sum}(l, r)=a_l+a_{l+1}+\ldots+a_r$，$\operatorname{xor}(l, r)=a_l \oplus a_{l+1} \oplus \ldots \oplus a_r$，一共有$q$次询问，每次询问会给定一个区间，询问这个区间内满足$f$最大的最短的子段。

<!-- more -->

<br/>

~~一眼顶针，~~这个$f$算的其实就是区间内的加法运算的进位之和，因为$\oplus$其实就是不进位的加法。那既然是进位的，$f$必定是非负的，那最短的字段就是掐头去尾没进位的部分就好了。考虑进位，如果某一个二进制位上有两个$1$，那这一位必定进位，但是此时我们还不能用鸽巢原理，因为数列中可能是有零存在的，我们先要去掉所有的$0$，然后在新的数列中，由鸽巢原理就可以知道，最多$30$个二进制位，则数列头尾最多$30$个数是不进位的，暴力枚举就好了。


``` cpp
ll an, q;

ll f(ll l, ll r, vector<ll> &S, vector<ll> &X){
	return (S[r]-S[l-1])-(X[r]^X[l-1]);
}

void Main(int kase){
	cin>>an>>q;
	ll bn;
	vector<ll> A(an+1), B(1), S(1), X(1);
	for(ll i=1;i<=an;i++){
		cin>>A[i];
		if(A[i]!=0) B.push_back(i), S.push_back((*prev(S.end()))+A[i]), X.push_back((*prev(X.end()))^A[i]);
	}

	for(ll i=1;i<=q;i++){
		ll l, r;
		cin>>l>>r;

        // 找出新数列中原数列中数字的位置
		ll tl=lower_bound(B.begin()+1, B.end(), l)-B.begin();
		ll tr=upper_bound(B.begin()+1, B.end(), r)-B.begin()-1;

		if(B.size()==1 || tl>tr){
			cout<<l<<" "<<l<<endl;
			continue;
		}

		ll ansl=tl, ansr=tr;
		for(ll i=tl;i<=tl+30;i++){
			for(ll j=tr-30;j<=tr;j++){
				if(!(tl<=i && i<=tr) || !(tl<=j && j<=tr)) continue;
				if(i<=j && f(i, j, S, X)==f(tl, tr, S, X) && B[j]-B[i]<B[ansr]-B[ansl]) ansl=i, ansr=j;
			}
		}

		cout<<B[ansl]<<" "<<B[ansr]<<endl;
	}
}
```