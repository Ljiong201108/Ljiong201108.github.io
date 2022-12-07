---
title: CF1728D Letter Picking 题解
date: 2022-12-07 14:52:40
mathjax: true
tags:
- games
- dp
- Codeforces 1800
categories:
- 题解
---
传送门：[Letter Picking](https://codeforces.com/problemset/problem/1728/D)

给定一个长度是$n(n \leq 2000 \text{并且} n \text{是偶数})$的字符串$S$，Alice和Bob轮流从这个字符串的头或者尾取一个字符加在自己的字符串的头部，Alice先手，最后谁的字符串字典序小，谁就获胜。

那么谁能获胜呢？

<!-- more -->

<br/>

这题其实是有结论可以推的，但是需要推蛮久的，我看大牛都是选择使用$dp$硬刚的~~，其实我也蛮喜欢硬刚的，可以少掉点头发~~

结论在[洛谷题解的第一篇](https://www.luogu.com.cn/blog/593300/solution-cf1728d)

下面是$dp$的解法

设$dp(l,r)$是区间$l$到$r$的结果。$-1$表示Alice输，$0$表示平局，$1$表示Alice胜。

假设Alice现在取的是$S_l$，那么Bob可以选择取$S_{l+1}$或者$S_r$，对应的前置结果就是$dp(l+2, r)$和$dp(l+1, r-1)$。

假设Alice现在取的是$S_r$，那么Bob可以选择取$S_{l}$或者$S_{r-1}$，对应的前置结果就是$dp(l+1, r+1)$和$dp(l, r-2)$。

分别考虑两种情况，如果两种前置结果都是Alice赢，那Alice必赢。若是出现平局，Bob肯定会选择平局而不是让Alice赢，这种情况下，就要比较当前区间内Alice和Bob各自选择的字母了。如果不是这两种情况，那Alice就输了。

``` cpp
string s;
int n;

int normalize(int x){
	return x>0 ? 1 : x==0 ? 0 : -1;
}

int f(int l, int r, v2(int) &dp){
	if(l>r) return 0;
	if(dp[l][r]!=INT_MAX) return dp[l][r];

	int ans1=f(l, r-2, dp);
	int ans2=f(l+1, r-1, dp);
	int ans3=f(l+2, r, dp);
	int ans=INT_MIN;

	if(ans2==1 && ans3==1) ans=max(ans, 1);
	if(ans2==0 && ans3==1) ans=max(ans, normalize(s[r]-s[l]));
	if(ans2==1 && ans3==0) ans=max(ans, normalize(s[l+1]-s[l]));
	if(ans2==0 && ans3==0){
		int tmpans;
		if(normalize(s[r]-s[l])==1 && normalize(s[l+1]-s[l])==1) tmpans=1;
		else if(normalize(s[r]-s[l])==0 && normalize(s[l+1]-s[l])==1) tmpans=0;
		else if(normalize(s[r]-s[l])==1 && normalize(s[l+1]-s[l])==0) tmpans=0;
		else if(normalize(s[r]-s[l])==0 && normalize(s[l+1]-s[l])==0) tmpans=0;
		else tmpans=-1;
		ans=max(ans, tmpans);
	}
	if(ans2==-1 || ans3==-1) ans=max(ans, -1);

	if(ans1==1 && ans2==1) ans=max(ans, 1);
	if(ans1==0 && ans2==1) ans=max(ans, normalize(s[r-1]-s[r]));
	if(ans1==1 && ans2==0) ans=max(ans, normalize(s[l]-s[r]));
	if(ans1==0 && ans2==0){
		int tmpans;
		if(normalize(s[r-1]-s[r])==1 && normalize(s[l]-s[r])==1) tmpans=1;
		else if(normalize(s[r-1]-s[r])==0 && normalize(s[l]-s[r])==1) tmpans=0;
		else if(normalize(s[r-1]-s[r])==1 && normalize(s[l]-s[r])==0) tmpans=0;
		else if(normalize(s[r-1]-s[r])==0 && normalize(s[l]-s[r])==0) tmpans=0;
		else tmpans=-1;
		ans=max(ans, tmpans);
	}
	if(ans1==-1 || ans2==-1) ans=max(ans, -1);

	return dp[l][r]=ans;
}

void Main(int kase){
	cin>>s;
	n=s.size();
	v2(int) dp(n+1, v1(int)(n+1, INT_MAX));
	cout<<(f(0, n-1, dp)==1 ? "Alice" : f(0, n-1, dp)==0 ? "Draw" : "Bob")<<endl;
}
```