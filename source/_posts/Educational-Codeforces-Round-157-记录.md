---
title: Educational Codeforces Round 157 记录
mathjax: true
date: 2023-11-04 21:45:46
tags:
---
* [X] A
* [X] B
* [X] C
* [X] D
* [X] E
* [ ] F
* [ ] G

<!-- more -->

# A. Treasure Chest

## 题意

你在一个OX正半轴的原点, 有一个宝箱在x, 钥匙在y, 你可以做如下操作:

* 向左或者向右走一格(耗时1s)
* 捡起钥匙或者宝箱(不耗时)
* 放下宝箱(不耗时)
* 打开宝箱(如果有钥匙)

此外还有一个限制: 你最多捡起箱子k秒, 体力就会耗尽

问打开宝箱的最小耗时.

## 思路

如果去宝箱的路上就能经过钥匙, 那么直接走过去开为最优解.

如果宝箱离的比钥匙近, 那么扛着宝箱往钥匙走, 直到不能走为止(体力耗尽或者已经走到钥匙处), 此时去捡钥匙回来开宝箱.

## 代码

```cpp
int x, y, k;

void Main(int kase){
    cin>>x>>y>>k;

    if(y<=x){
        cout<<x<<endl;
    }else{
        int r=min(y, x+k);
        cout<<r+2*(y-r)<<endl;
    }
}
```

## 吐槽

赛时忘记取min, wa了一发...

# B. Points and Minimum Distance

## 题意

给你2n个整数, 将这2n个整数分入n个对, 每一个整数对是2D平面上的一个坐标, 你可以从任意一个点开始, 再从任意一个点结束, 但是要求是经过所有的点.

问路程最小的配对方案.

ps. 路程的计算采用绝对距离($|x_1-x_2|+|y_1-y_2|$)

## 思路

赛时的时候其实我是观察样例, 发现总是最大的和最小的配, 如此循环.

可以证明这是路程最小的方案.

## 代码

```cpp
int n;

void Main(int kase){
    cin>>n;
    vector<int> A(2*n+5);
    for(int i=1;i<=2*n;i++) cin>>A[i];
    sort(A.begin()+1, A.begin()+1+2*n);

    int ans=0;
    for(int i=2;i<=n;i++){
        ans+=abs(A[i]-A[i-1]);
        ans+=abs(A[2*n-i+1]-A[2*n-i+2]);
    }

    cout<<ans<<endl;
    for(int i=1;i<=n;i++){
        cout<<A[i]<<" "<<A[2*n-i+1]<<endl;
    }
}
```

# C. Torn Lucky Ticket

## 题意

一张票的代码是0~9组成的非空字符串.

一张幸运票是:

* 长度为偶数
* 前一半的数位和与后一半相同

给你n张票的碎片, 问有多少对碎片可以组成一张幸运票.

## 思路

赛时没过.

后来看题解觉得问题是在统计的时候有重复的, 比标答大的输出也证明了这一点.

规定: 只有长的票才能和短的票配对.

因为碎片的长度最大是5, 所以可以暴力写出所有的可能:

长度为1: 配长度为1

长度为2: 配长度为2

长度为3: 配长度为3或1

长度为4: 配长度为4或2

长度为5: 配长度为5或3或1

顺序的问题需要注意一下.

## 代码

```cpp
int n;

pair<int, int> process(int x){
    int cnt=0, sum=0;
    while(x){
        cnt++;
        sum+=x%10;
        x/=10;
    }

    return make_pair(cnt, sum);
}

int get_digit(int x, int index){
    for(int i=1;i<index;i++) x/=10;
    return x%10;
}

void Main(ll kase){
    cin>>n;
    vector<int> A(n+5);
    for(int i=1;i<=n;i++) cin>>A[i];
    sort(A.begin()+1, A.begin()+n+1);
    vector<map<int, int>> rec(10);

    ll ans=0;
    for(int i=1;i<=n;i++){
        auto [digits, sums]=process(A[i]);
        switch(digits){
        case 1:
            ans+=rec[1][sums]*2;
            break;
        case 2:
            ans+=rec[2][sums]*2;
            break;
        case 3:
            ans+=rec[3][sums]*2;
            ans+=rec[1][sums-get_digit(A[i], 1)*2];
            ans+=rec[1][sums-get_digit(A[i], 3)*2];
            break;
        case 4:
            ans+=rec[4][sums]*2;
            ans+=rec[2][sums-get_digit(A[i], 1)*2];
            ans+=rec[2][sums-get_digit(A[i], 4)*2];
            break;
        case 5:
            ans+=rec[5][sums]*2;
            ans+=rec[3][sums-get_digit(A[i], 1)*2];
            ans+=rec[3][sums-get_digit(A[i], 5)*2];
            ans+=rec[1][sums-get_digit(A[i], 1)*2-get_digit(A[i], 2)*2];
            ans+=rec[1][sums-get_digit(A[i], 4)*2-get_digit(A[i], 5)*2];
            break;
        }
        rec[digits][sums]++;
        ans++;
    }

    cout<<ans<<endl;
}
```

# D. XOR Construction

## 题意

给你$n-1$个数: $a_1, a_2, ... , a_{n-1}$

构造$b_1, b_2, ... , b_{n-1}$满足：

* b是一个从0到n-1的排列
* $b_i \oplus b_{i+1} = a_i $

## 思路

可以推出：$b_i = b_1 \oplus a_1 \oplus ... \oplus a_{i-1}$ （这个我赛时推得是反的~~流汗~~）

所以所有的$b_i$都和$b_1$有关。我们只需要确定$b_1$的取值就行了。

我们可以先处理$c_i = \oplus_{j=1}^{i-1} a_j$

然后式子就成了：$b_i = b_1 \oplus c_i$

此题无解的条件是：$c_i$存在相同项，然而此题保证有解，所以我们只需要保证最大值小于n即可。

建一个trie存$c_i$，然后对每个$b_1$的取值，查最大的异或值。

## 代码

~~~cpp
vector<array<int, 2>> trie(2);

void insert(int x){
    int cur=1;
    for(int i=30;i>=0;i--){
        if(!trie[cur][(x>>i)&1]) trie[cur][(x>>i)&1]=trie.size(), trie.emplace_back();
        cur=trie[cur][(x>>i)&1];
    }
}

int query(int x){
    int cur=1, ret=0;
    for(int i=30;i>=0;i--){
        int k=(x>>i)&1;
        if(trie[cur][k^1]) cur=trie[cur][k^1], ret+=(1<<i);
        else cur=trie[cur][k];
    }
    return ret;
}

int n, ans;

void Main(int kase){
    cin>>n;
    vector<int> A(n+5), C(n+5);
    for(int i=1;i<=n;i++) cin>>A[i], C[i]=C[i-1]^A[i], insert(C[i]);
    for(int i=0;i<n;i++) if(query(i)<n) {
        ans=i;
        break;
    }

    cout<<ans<<" ";
    for(int i=1;i<n;i++){
        cout<<(ans^C[i])<<" ";
    }
    cout<<endl;
}
~~~

# E. Infinite Card Game

## 题意

有点像炉石，一张卡有一个攻击力，一个血条。A和B有n和m张卡牌。

A先出牌，随后B必须出一张能够秒杀A出的这张卡的卡牌，随后A也必须出一张能够秒杀场上这张卡的一张卡牌，以此类推。一张卡牌被秒了之后，直接回到出牌者的手牌里。

如果某一个时刻有人没卡能出的，那么对手获胜。

问A第一张能出的所有牌里面，A赢，A输或者打平的牌数。

## 思路

这题乍一看没啥思路。

其实对于一张卡，对手的手牌里总有一张最优解牌：攻击力大于这张牌并且血最厚的那张。这是一个谈心，在所有能秒杀这张牌的手牌中，血越厚对手能选的牌就越少。

我们可以预处理所有牌的最优解牌。

然后其实这就构成了一个有向图，每条边从一张牌连向他的最优解牌。我们就可以做拓扑排序了。

随后就是一个反向更新的过程，所有拓扑排序没有扫过的牌都是在一个环上的，如果到了一个环上就必定平局。

如果最后A出不了牌，B获胜，反之A获胜。

## 代码

~~~cpp
using card=pair<int, int>;
using graph=vector<vector<int>>;

// A 已经出了一张牌i
// B 需要一张牌j解
void calcDefence(int sza, vector<card> &A, int szb, vector<card> &B, vector<int> &ret){
    vector<int> sufmax(szb+5);

    int curmax=0, curi;
    for(int i=szb;i>=1;i--){
        if(B[i].second>curmax){
            curmax=B[i].second;
            curi=i;
        }
        sufmax[i]=curi;
    }

    for(int i=1;i<=sza;i++){
        int l=1, r=szb, c=INT_MAX;
        while(l<=r){
            int m=(l+r)/2;

            if(B[m].first>A[i].second){
                c=min(c, m);
                r=m-1;
            }else l=m+1;
        }

        if(c==INT_MAX) ret[i]=0;
        else ret[i]=sufmax[c];
    }
}

int n, m;

void Main(int kase){
    cin>>n;
    vector<card> A(n+5);
    for(int i=1;i<=n;i++) cin>>A[i].first;
    for(int i=1;i<=n;i++) cin>>A[i].second;

    cin>>m;
    vector<card> B(m+5);
    for(int i=1;i<=m;i++) cin>>B[i].first;
    for(int i=1;i<=m;i++) cin>>B[i].second;

    sort(A.begin()+1, A.begin()+n+1, [](card a, card b){
        return a.first<b.first;
    });

    sort(B.begin()+1, B.begin()+m+1, [](card a, card b){
        return a.first<b.first;
    });

    vector<int> retA(n+5), retB(m+5);
    calcDefence(n, A, m, B, retA);
    calcDefence(m, B, n, A, retB);

    graph G(n+m+5);
    vector<int> ind(n+m+5);

    for(int i=1;i<=n;i++) if(retA[i]) G[i].push_back(n+retA[i]), ind[n+retA[i]]++;
    for(int i=1;i<=m;i++) if(retB[i]) G[n+i].push_back(retB[i]), ind[retB[i]]++;

    queue<int> Q;
    for(int i=1;i<=n+m;i++) if(ind[i]==0) Q.push(i);

    vector<int> topo;
    while(!Q.empty()){
        auto u=Q.front();
        Q.pop();
        topo.push_back(u);

        for(auto v : G[u]){
            if(!--ind[v]) Q.push(v);
        }
    }

    vector<int> f(n+m+5);

    for(int i=topo.size()-1;i>=0;i--){
        int u=topo[i];

        if(G[u].size()==0) {
            if(u>n) f[u]=2;
            else f[u]=1;
        }else{
            for(auto v : G[u]){
                f[u]=f[v];
            }
        }
    }

    int ans1=0, ans2=0, ans3=0;
    for(int i=1;i<=n;i++){
        if(f[i]==1) ans1++;
        if(f[i]==2) ans3++;
        if(f[i]==0) ans2++;
    }

    cout<<ans1<<" "<<ans2<<" "<<ans3<<endl;
}
~~~