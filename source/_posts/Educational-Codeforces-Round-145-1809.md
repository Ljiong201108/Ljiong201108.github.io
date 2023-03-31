---
title: Educational Codeforces Round 145 (1809)
mathjax: true
date: 2023-04-01 00:47:05
tags:
---

{% raw %}<div class="post-summary">{% endraw %}

Educational Codeforces Round 145 AC代码

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

# A. Garland

```cpp

#include<bits/stdc++.h>
#define pii pair<int, int>
#define pll pair<ll, ll>
#define v1(x) vector<x>
#define v2(x) vector<vector<x>>
#define v3(x) vector<vector<vector<x>>>
using namespace std;
typedef long long ll;

string input;

void Main(int kase){
	cin>>input;

	map<int, int> M;
	for(int i=0;i<4;i++){
		M[input[i]]++;
	}

	vector<int> A;
	for(auto [a, b] : M){
		A.push_back(b);
	}

	sort(A.begin(), A.end(), [](int a, int b){return a>b;});
	if(A[0]==4){
		cout<<-1<<endl;
	}else if(A[0]==3){
		cout<<6<<endl;
	}else{
		cout<<4<<endl;
	}
}

int main(){
	#ifdef DEBUG
	freopen("in.txt", "r", stdin);
	//freopen("out.txt", "w", stdout);
	#endif

	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	int T;
	cin>>T;
	for(int i=1;i<=T;i++) Main(i);

	return 0;
}
```

# B. Points on Plane

有小坑，$10^{18}$double的精度会不够，用long double就可以解决，我这里直接手写了个二分

```cpp
#include<bits/stdc++.h>
#define pii pair<int, int>
#define pll pair<ll, ll>
#define v1(x) vector<x>
#define v2(x) vector<vector<x>>
#define v3(x) vector<vector<vector<x>>>
using namespace std;
typedef long long ll;

ll n;

void Main(int kase){
	cin>>n;

	if(n<=1){
		cout<<0<<endl;
		return;
	}

	ll l=0, r=1e9, ans1=LLONG_MAX, ans2=LLONG_MAX;
	while(l<=r){
		ll m=(l+r)>>1;

		ll t=1+4*m*(m-1);
		if(t>=n){
			ans1=min(m, ans1);
			r=m-1;
		}else{
			l=m+1;
		}
	}

	l=0, r=1e9;
	while(l<=r){
		ll m=(l+r)>>1;

		ll t=4*m*m;
		if(t>=n){
			ans2=min(m, ans2);
			r=m-1;
		}else{
			l=m+1;
		}
	}

	cout<<min(2*(ans1-1), ans2*2-1)<<endl;
	// cout<<2*(ans1-1)<<" "<<ans2*2-1<<endl;
}

int main(){
	#ifdef DEBUG
	freopen("in.txt", "r", stdin);
	//freopen("out.txt", "w", stdout);
	#endif

	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	int T;
	cin>>T;
	for(int i=1;i<=T;i++) Main(i);

	return 0;
}
```

# C. Sum on Subarrays

```cpp
#include<bits/stdc++.h>
#define pii pair<int, int>
#define pll pair<ll, ll>
#define v1(x) vector<x>
#define v2(x) vector<vector<x>>
#define v3(x) vector<vector<vector<x>>>
using namespace std;
typedef long long ll;

int n, k;

void Main(int kase){
	cin>>n>>k;

	for(int i=0;i<n;i++){
		if(i*(i+1)/2<=k && k<=i*(i+1)/2+i){
			for(int j=1;j<=i;j++) cout<<2<<" ";

			int rest=k-i*(i+1)/2;

			cout<<-2*i-1+2*rest<<" ";

			for(int j=1;j<n-i;j++) cout<<-1000<<" ";

			cout<<endl;
			return;
		}
	}

	for(int i=1;i<=n;i++) cout<<1<<" ";
	cout<<endl;
}

int main(){
	#ifdef DEBUG
	freopen("in.txt", "r", stdin);
	//freopen("out.txt", "w", stdout);
	#endif

	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	int T;
	cin>>T;
	for(int i=1;i<=T;i++) Main(i);

	return 0;
}
```

# D. Binary String Sorting

交换操作一定是发生在相邻的两个位置上，其他的位置一定是通过删除来实现的。枚举可能发生交换的位置，预处理前缀$1$和后缀$0$的个数。

```cpp
#include<bits/stdc++.h>
#define pii pair<int, int>
#define pll pair<ll, ll>
#define v1(x) vector<x>
#define v2(x) vector<vector<x>>
#define v3(x) vector<vector<vector<x>>>
using namespace std;
typedef long long ll;
#ifdef DEBUG
template <typename T>
void __log(const T& t) { cout << t << endl; }
template <typename T, typename... Args>
void __log(const T& t, const Args &... rest) { cout << t << " "; __log(rest...); }
#define log(args...) __log(args)
#else
#define log(args...) 6
#endif

string input;
const ll base = 1e12;

void Main(int kase) {
	cin >> input;
	int n = input.length();
	input = '0' + input;

	v1(int) pref1(n + 5), surf0(n + 5);
	for (int i = 1;i <= n;i++) pref1[i] = pref1[i - 1] + (input[i] == '1');
	for (int i = n;i >= 1;i--) surf0[i] = surf0[i + 1] + (input[i] == '0');

	ll ans = LLONG_MAX;
	for (int i = 1;i <= n + 1;i++) {
		ll tempans = 0;
		if (1 <= i - 1 && i <= n) if (input[i - 1] == '1' && input[i] == '0') tempans += base;
		if (i - 1 > 1)tempans += pref1[i - 2] * (base + 1);
		if (i < n)tempans += surf0[i + 1] * (base + 1);
		ans = min(ans, tempans);
		log(tempans);
	}

	cout << ans << endl;
}

int main() {
#ifdef DEBUG
	freopen("in.txt", "r", stdin);
	//freopen("out.txt", "w", stdout);
#endif

	ios_base::sync_with_stdio(0);
	cin.tie(0);
	int T;
	cin >> T;
	for (int i = 1;i <= T;i++) Main(i);

	return 0;
}
```

# E. Two Tanks

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define pii pair<int, int>
#define pll pair<ll, ll>
#define v1(x) vector<x>
#define v2(x) vector<vector<x>>
#define v3(x) vector<vector<vector<x>>>
#define read_temp(x) int x; cin>>x;
// #define min(args...) min({args})
// #define max(args...) max({args})
#define endl '\n'
#ifdef DEBUG
template <typename T>
void __log(const T& t) { cout << t << endl; }
template <typename T, typename... Args>
void __log(const T& t, const Args &... rest) { cout << t << " "; __log(rest...); }
#define log(args...) __log(args)
#else
#define log(args...) 6
#endif
// #define MULTIPLE_CASES

int n, a, b;

void Main(int kase) {
	cin >> n >> a >> b;

	v1(int) V(n);
	v2(int) ans(a + 1, v1(int)(b + 1));

	for (int i = 0;i < n;i++) cin >> V[i];

	for (int cd = 0;cd <= a + b;cd++) {
		int l = max(0, cd - b), r = min(a, cd);

		int sum = 0;
		for (auto x : V) {
			sum += x;
			l = max({l, sum, sum + cd - b});
			r = min({r, sum + a, sum + cd});
		}
		if (l > r) l = r = max(0, cd - b);

		int res = l;
		for (int x : V) {
			if (x > 0) res -= min({res, x, b - (cd - res)});
			else res += min({cd - res, -x, a - res});
		}

		for (int c = 0;c <= cd;c++) {
			if (c <= a && cd - c <= b)
				ans[c][cd - c] = c < l ? res : c > r ? res + r - l : res + c - l;
		}
	}

	for (int i = 0;i <= a;i++) {
		for (int j = 0;j <= b;j++) {
			cout << ans[i][j] << " ";
		}
		cout << endl;
	}
}

int main() {
#ifdef DEBUG
	freopen("in.txt", "r", stdin);
	//freopen("out.txt", "w", stdout);
#endif

	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);

	int t = 0;
#ifdef MULTIPLE_CASES
	int T;
	cin >> T;
	while (++t <= T)
#endif
		Main(t);

	return 0;
}
```

# F. Traveling in Berland

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
#define pii pair<int, int>
#define pll pair<ll, ll>
#define v1(x) vector<x>
#define v2(x) vector<vector<x>>
#define v3(x) vector<vector<vector<x>>>
#define read_temp(x) int x; cin>>x;
#define min(args...) min({args})
#define max(args...) max({args})
#define endl '\n'
#ifdef DEBUG
template <typename T, enable_if_t<is_same_v<T, char>, bool> = true>
void __output(T t) { cout << t << (t == '\n' ? "" : " "); }
template <typename T, typename... Args, enable_if_t<not is_same_v<T, char>, bool> = true>
void __output(T t) { cout << t << " "; }
void __log() { cout << flush; }
template <typename T, typename... Args>
void __log(T t, Args... rest) { __output(t); __log(rest...); }
#define log(args...) if(LOG_OUTPUT) __log(args)
#else
#define log(args...) 6
#endif
#define LOG_OUTPUT 1
#define MULTIPLE_CASES

ll n, k;

void Main(int kase) {
	cin >> n >> k;

	ll all2 = 1;
	v1(ll) A(2 * n + 1), B(2 * n + 1), mp(2 * n + 1);
	for (ll i = 1;i <= n;i++) cin >> A[i], A[i + n] = A[i];
	for (ll i = 1;i <= n;i++) {
		cin >> B[i], B[i + n] = B[i];
		if (B[i] == 1) all2 = 0;
	}

	for (ll i = 2 * n;i >= 2;i--) A[i] = A[i - 1];
	A[1] = 0;
	for (ll i = 1;i <= 2 * n;i++) A[i] += A[i - 1];

	if (all2) {
		for (ll i = 1;i <= n;i++) {
			cout << (A[i + n] - A[i]) * 2 << " ";
		}
		cout << endl;
		return;
	}

	v1(ll) V1(1);
	for (ll i = 1;i <= 2 * n;i++) if (B[i] == 1) mp[i] = V1.size(), V1.push_back(A[i]);
	ll n1 = V1.size() - 1;

	v2(ll) bl(n1, v1(ll)(20));
	for (ll i = 1;i < n1;i++) bl[i][0] = V1[i + 1] - V1[i] <= k ? V1[i + 1] - V1[i] : k + (V1[i + 1] - V1[i] - k) * 2;
	for (ll j = 1, base = 1;j <= 19;j++, base *= 2)
		for (ll i = 1;i < n1 && i + base < n1 && bl[i][j - 1] != 0 && bl[i + base][j - 1] != 0;i++)
			bl[i][j] = bl[i][j - 1] + bl[i + base][j - 1];

	v1(ll) pre1(2 * n + 1), nxt1(2 * n + 1);
	ll pos1 = -1;
	for (ll i = 1;i <= 2 * n;i++) {
		if (B[i] == 1) pos1 = i;
		pre1[i] = pos1;
	}

	pos1 = -1;
	for (ll i = 2 * n;i >= 1;i--) {
		if (B[i] == 1) pos1 = i;
		nxt1[i] = pos1;
	}

	for (ll i = 1;i <= n;i++) {
		ll start1 = nxt1[i], end1 = pre1[i + n];
		ll ans = 0;
		ans += 2 * (A[start1] - A[i]);
		ans += A[i + n] - A[end1] <= k ? A[i + n] - A[end1] : k + (A[i + n] - A[end1] - k) * 2;
		if (end1 == start1) {
			cout << ans << " ";
			continue;
		}

		ll dis = mp[end1] - mp[start1], j = 0, cur = mp[start1], base = 1;

		while (dis) {
			if (dis % 2) {
				ans += bl[cur][j];
				cur += base;
			}
			dis /= 2;
			base *= 2;
			j++;
		}

		cout << ans << " ";
	}
	cout << endl;
}

int main() {
#ifdef DEBUG
	freopen("in.txt", "r", stdin);
	//freopen("out.txt", "w", stdout);
#endif

	ios_base::sync_with_stdio(0);
	cin.tie(0); cout.tie(0);
	int t = 0;
#ifdef MULTIPLE_CASES
	int T;
	cin >> T;
	while (++t <= T)
#endif
		Main(t);

	cout << flush;
	return 0;
}
```
