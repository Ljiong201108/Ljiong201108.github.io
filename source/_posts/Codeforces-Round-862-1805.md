---
title: Codeforces Round 862 (1805)
mathjax: true
date: 2023-04-02 21:20:08
tags:
- Codeforces
- 赛后总结 & 补题
---
{% raw %}<div class="post-summary">{% endraw %}

[比赛链接](https://codeforces.com/contest/1805)

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

# A. We Need the Zero

按位考虑结果，$x$中的每一位对结果都会造成$n$次影响。

```cpp
int n;

void Main(int kase) {
	cin >> n;

	v1(int) A(n + 1);
	for (int i = 1;i <= n;i++) cin >> A[i];

	v1(int) digs(8);
	for (int j = 1;j <= n;j++) {
		for (int i = 0;i < 8;i++) {
			digs[i] += A[j] % 2;
			A[j] /= 2;
		}
	}

	v1(int) ans(8);
	for (int i = 0;i < 8;i++) {
		if (digs[i] % 2 == 0) ans[i] = 0;
		else if ((digs[i] + n) % 2 == 0) ans[i] = 1;
		else {
			cout << -1 << endl;
			return;
		}
	}

	int ret = 0, base = 1;
	for (int i = 0;i < 8;i++) {
		ret += ans[i] * base;
		base *= 2;
	}

	cout << ret << endl;
}
```

# B. The String Has a Target

考虑第二位之后有没有比第一位还要小或者等于第一位的字符，有的话就移到第一个。

```cpp
int n;
string input;

void Main(int kase){
	cin>>n>>input;

	int pos=0;
	char c=input[0];
	for(int i=1;i<input.size();i++){
		if(input[i]<=c){
			pos=i;
			c=input[i];
		}
	}

	if(pos==0){
		cout<<input<<endl;
		return;
	}

	cout<<c;
	for(int i=0;i<input.length();i++){
		if(i==pos) continue;
		cout<<input[i];
	}
	cout<<endl;
}
```

# C. Place for a Selfie

数学题。考虑对于抛物线$y=ax^2+bx+c$什么情况下会和过原点的直线$y=kx$没有交点。

考虑联立这两个式子：

$$
\begin{align}
	y&=ax^2+bx+c &	\\
	y&=kx	     &  \\
\end{align}
$$

然后对代换掉$y$

$$
ax^2+(b-k)\cdot x+c=0
$$

我们需要这两条线没有交点，即

$$
\begin{align}
\Delta 
&= (b-k)^2-4ac		\\
&= b^2-2bk+k^2-4ac	\\
&= k^2-2bk+b^2-4ac < 0	\\
\end{align}
$$

在对这个式子求$\Delta$

$$
\Delta \prime=(-2b)^2-4\cdot (b^2-4ac)=16ac
$$

考虑到$\Delta$的函数图像是一个开口向上的抛物线，想要有小于$0$的解，那$\Delta$就必须大于0。用求根公式得出$b-2\sqrt{ac} < k < b+2\sqrt{ac}$。

```cpp
int n, m;

void Main(int kase){
	cin>>n>>m;

	v1(ll) K(n+1), A(m+1), B(m+1), C(m+1);
	for(int i=1;i<=n;i++) cin>>K[i];
	for(int i=1;i<=m;i++) cin>>A[i]>>B[i]>>C[i];

	sort(K.begin()+1, K.end());

	for(int i=1;i<=m;i++){
		if(A[i]*C[i]<=0){
			cout<<"NO"<<endl;
			continue;
		}

		long double mn=B[i]-2*sqrt(A[i]*C[i]), mx=B[i]+2*sqrt(A[i]*C[i]);
		log(mn, mx, endl);
		int l=1, r=n, ans=-1;
		while(l<=r){
			int m=(l+r)>>1;
			if(mn<K[m] && K[m]<mx){
				ans=m;
				break;
			}else if(K[m]<=mn){
				l=m+1;
			}else if(K[m]>=mx){
				r=m-1;
			}
		}

		if(ans==-1){
			cout<<"NO"<<endl;
			continue;
		}else{
			cout<<"YES"<<endl;
			cout<<K[ans]<<endl;
		}
	}
	cout<<endl;
}
```

# D. A Wide, Wide Graph

根据分析样例~~（雾）~~，如果一个点到其他点的距离小于$k$，那么这个点和其他点之间就没有边了，他自己会变成一个独立的联通分量。对于一个点，只需要知道这个点到其他点的最大距离，然后对于一个固定的$k$，只要$k>$这个最大距离，就知道这个点被”孤立“了。在$O(n)$的时间内求所有点到其他点的最大距离，需要用到换根$DP$。

~~tmd好久没写换根了，比赛的时候写了依托答辩。~~后来查出问题来了，我用了set而没用multiset。。。~~

```cpp
int n;

void calc_depth(int u, int fa, v1(int)& depth_below, v2(int)& G) {
	for (auto v : G[u]) {
		if (v == fa) continue;

		calc_depth(v, u, depth_below, G);
		depth_below[u] = max(depth_below[u], depth_below[v] + 1);
	}
}

void calc_mx_dis(int u, int fa, int dis_fa, v1(int)& mx_dis, v1(int)& depth_below, v2(int)& G) {
	mx_dis[u] = max(dis_fa + 1, depth_below[u]);
	multiset<int> MX;
	for (auto v : G[u]) if (v != fa) MX.insert(depth_below[v]);

	for (auto v : G[u]) {
		if (v == fa) continue;

		MX.erase(MX.find(depth_below[v]));
		int mx=dis_fa + 1;
		if(!MX.empty()) mx=max(mx, (*MX.rbegin())+1);
		calc_mx_dis(v, u, mx, mx_dis, depth_below, G);
		MX.insert(depth_below[v]);
	}
}

void Main(int kase) {
	cin >> n;

	v2(int) G(n + 1, v1(int)());
	for (int i = 1;i < n;i++) {
		int u, v;
		cin >> u >> v;
		G[u].push_back(v);
		G[v].push_back(u);
	}

	v1(int) depth_below(n + 1), mx_dis(n + 1);
	calc_depth(1, 0, depth_below, G);
	calc_mx_dis(1, 0, -1, mx_dis, depth_below, G);

	v1(int) num_nodes(n+1);
	for (int i = 1;i <= n;i++) num_nodes[mx_dis[i]]++;

	int ans=1;
	for(int i=1;i<=n;i++){
		if(i>1) ans+=num_nodes[i-1];
		if(ans==n+1) ans=n;
		cout<<ans<<" ";
	}
	cout<<endl;
}
```
