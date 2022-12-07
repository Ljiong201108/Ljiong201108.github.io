---
title: CF1574D The Strongest Build 题解
date: 2021-09-28 01:04:54
mathjax: true
categories: 
- 题解
---

传送门：[The Strongest Build](https://codeforces.com/problemset/problem/1574/D)



你有$n$个物品槽，每个物品槽可以存放一个物品。现在对于每个物品槽，有若干个物品可以选择，但是有$m$个物品组合是被禁用的。每个物品有一个价值，求没被禁用的物品组合的最大价值之和是哪个物品组合。



物品组合：当这$n$个物品槽都选定一个物品后，这$n$个物品构成一个物品组合。

<!--more-->

<br/>

通过观察可以知道，如果所有物品槽都选择那个最大价值的物品，则这个物品组合的价值之和最大，但是这个物品组合可能会被禁用掉，所以我们要从最大的组合推次大的组合、次次大的组合等等



这个推理的过程其实也不难想到：对于最大的组合来说，某一个物品槽取第二大的物品，一共$n$种可能，其中必定存在次大的组合。哪怎么求次次大的组合呢？对于次大的组合来说，某一个物品槽取再小一点的物品， 一共$n$种可能的情况，再加上选次大的时候剩下的$n-1$种可能情况，次次大的组合一定在这$2n-1$种情况中，以此类推。



实现方式我选择优先队列来排序可能的情况，set来查找某个组合的禁用情况和是否被查过了。（STL yyds~）



### AC代码

```cpp
#include<bits/stdc++.h>
#define pll pair<ll, ll>
using namespace std;
typedef long long ll;

int n, m;
vector<vector<int>> A;

struct build{
    int value;
    vector<int> content;

    build(vector<int> vec): content(vec){
        value=0;
        for(int i=0;i<content.size();i++){
            value+=A[i+1][content[i]];
        }
    }

    void inc(int x){
        value-=A[x+1][content[x]];
        content[x]++;
        value+=A[x+1][content[x]];
    }

    void dec(int x){
        value-=A[x+1][content[x]];
        content[x]--;
        value+=A[x+1][content[x]];
    }

    void printans(){
        for(int i=0;i<content.size();i++){
            cout<<content[i]<<" ";
        }
    }

    bool operator<(const build &other) const{
        if(value!=other.value) return value<other.value;
        else{
            for(int i=0;i<content.size();i++){
                if(content[i]!=other.content[i]) return content[i]<other.content[i];
            }
            return 0;
        }
    }
};

void Main(int kase){
    cin>>n;

    A.resize(n+1);
    vector<int> vec;

    for(int i=1, sz;i<=n;i++){
        cin>>sz;
        vec.push_back(sz);
        A[i].resize(sz+1);

        for(int j=1;j<=sz;j++){
            cin>>A[i][j];
        }
    }

    priority_queue<build> Q;
    set<build> vis;

    build first(vec);
    Q.push(first);
    vis.insert(first);

    cin>>m;
    set<build> bans;
    for(int i=1;i<=m;i++){
        for(int j=0;j<n;j++){
            cin>>vec[j];
        }

        build ban(vec);
        bans.insert(ban);
    }

    while(!Q.empty()){
        build cur=Q.top();
        Q.pop();

        build next(cur.content);

        if(bans.find(cur)==bans.end()){
            cur.printans();
            return;
        }

        for(int i=0;i<cur.content.size();i++){
            if(cur.content[i]==1) continue;

            next.dec(i);

            if(vis.find(next)==vis.end()){
                Q.push(next);
                vis.insert(next);
            }

            next.inc(i);
        }
    }
}

int main(){
    #ifdef DEBUG
    freopen("in.txt", "r", stdin);
    #endif
    
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    Main(1);
    
    return 0;
}
```

