---
title: CF1622D Shuffle 题解
date: 2022-01-07 18:54:34
mathjax: true
categories: 
- 题解
---

传送门：[Shuffle](https://codeforces.com/problemset/problem/1622/D)



给定一个二进制字符串，你可以对这个字符串进行最多一次如下的操作：

从$s$中选择一个正好有$k$个1字符的子串，然后你可以随意的打乱它。

计算可以从$s$经过这样一次操作之后能得到的不同的字符串的数量之和

<!--more-->

<br/>

从这道题的数据来看，$O(n^2)$的复杂度是能过的，一开始想过遍历所有的符合要求的字串，排列组合之后统计答案，但是这样的话重复的数量不是很好去除。

我们可以发现，经过一次操作之后，原字符串仅会被改变一个连续的部分，这个部分应该是一个合法的字串的一部分（因为可以只改变这个子串的一部分）。

我们就可以枚举这个连续的部分的两端，我们规定这两个端点是必须在一次操作之后被改变的，不然的话会有好几个：以010100举例，中间的1010是被选出来改过的，原来的字符串就必须是10xx10，这样就能够更简单的计算了。

```cpp
#include<bits/stdc++.h>
#define pii pair<int, int>
#define pll pair<ll, ll>
using namespace std;
typedef long long ll;

ll fastPower(ll base, ll power, ll mod) {
    ll result = 1;
    while (power > 0) {
        if (power & 1) {
            result = result * base % mod;
        }
        power >>= 1;
        base = (base * base) % mod;
    }
    return result;
}

const ll MOD=998244353;

//阶乘逆元
ll fac[200010];        //阶乘
ll inv[200010];        //逆元 
void getfac()
{
    fac[0] = inv[0] = 1;
    for (int i = 1 ; i <= 200000 ; i++)
    {
        fac[i] = fac[i-1] * i % MOD;
        inv[i] = fastPower(fac[i], MOD-2, MOD);        
        //表示i的阶乘的逆元 
    }
}
//组合数
inline ll getC(ll n,ll m)//C(n,m) = n!/((n-m)!*m!) % MOD
{
    return fac[n] * inv[n-m] % MOD * inv[m] % MOD;
}
//当 n，m 过大时，可以用Lucas定理降数据
inline ll Lucas(ll n,ll m)
{
    if(n < MOD && m < MOD) return getC(n, m);
    return Lucas(n/MOD, m/MOD) * getC(n%MOD, m%MOD)%MOD;
}

//排列数
inline ll getA(ll n,ll m) //A(n,m) = n!/(n-m)! % MOD
{
	return n * inv[n-m] % MOD;
}

ll n, k, ans=1;

void Main(int kase){
    cin>>n>>k;

    char c;

    vector<ll> A(n+1), S(n+1);
    for(ll i=1;i<=n;i++){
        cin>>c;
        A[i]=c-'0';
        S[i]=S[i-1]+A[i]; // 前缀和
    }

    if(S[n]<k) { //若是所有的1加起来都不够k的话,直接返回
        cout<<1<<endl;
        return;
    }

    for(int i=1;i<=n;i++){
        for(int j=i+1;j<=n;j++){
            int cnt=j-i+1;
            int cnt1=S[j]-S[i-1];

            if(cnt1>k) continue; //i与j之间的1的数量小于等于k个,确保i到j是一个合法的子串的一部分

            if(A[i]==0) cnt1--;
            if(A[j]==0) cnt1--;

            cnt-=2;

            if(cnt1>=0 && cnt>=0 && cnt1<=cnt)
                ans=(ans+getC(cnt, cnt1))%MOD;
        }
    }

    cout<<ans<<endl;
}

int main(){
    #ifdef DEBUG
    freopen("in.txt", "r", stdin);
    #endif
    
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    getfac();
    Main(1);
    
    return 0;
}
```