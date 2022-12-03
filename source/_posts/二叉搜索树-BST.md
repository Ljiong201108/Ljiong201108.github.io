---
title: 二叉搜索树 BST
date: 2020-07-05 12:20:32
mathjax: true
tags:
- 二叉树
categories:
- 算法
---

BST（Binary Search Tree）具有以下性质：

1. 若左子树不空，则左子树上所有结点的值均小于它的根结点的值。
2. 若右子树不空，则右子树上所有结点的值均大于它的根结点的值。
3. 左、右子树也分别为二叉排序树。
4. 没有权值相等的结点。

<!--more-->

### 节点

BST中的每一个节点包含以下信息：

1. 当前节点的权值，也就是序列里的数。
2. 左右子树的下标，如果没有则为0。
3. 该节点权值出现的次数。
4. 该节点子树和自己的节点数量之和。

```cpp
struct tree{
	int left, right, val, size, cnt;
}T[10010];
```



### 插入

从根节点开始，比较节点的权值和想要插入的值，如果节点的权值等于想要插入的值，节点权值出现次数加一，如果想要插入的值比节点的权值小，就说明应该往节点的左边搜索，反之亦然。如果没有对应的子节点，则该子节点就是正确的位置。

```cpp
void add(int x, int v){
	T[x].size++;
	
	if(T[x].val==v){
		T[x].cnt++;
		return;
	}
	if(v<T[x].val){
		if(T[x].left!=0)
			add(T[x].left, v);
		else{
			T[x].left=++sum;
			T[sum].cnt=1;
			T[sum].size=1;
			T[sum].val=v;
		}
	}else{
		if(T[x].right!=0)
			add(T[x].right, v);
		else{
			T[x].right=++sum;
			T[sum].cnt=1;
			T[sum].size=1;
			T[sum].val=v;
		}
	}
} 
```

**tip：根节点必须手动初始化**



### 前驱&后继

<p>某个数$x$的前驱定义为小于$x$，且最大的数。某个数$x$的后继定义为大于$x$，且最小的数。
</p>


#### 前驱

从根节点开始

比较节点权值和要找前驱的数。

如果节点权值比要找前驱的数大，说明这个节点和它的右子树都没有要找的前驱，只能往它的左子树查。如果没有左子树，就返回已经找到的值，因为已经无法再搜索下去了。

如果节点权值比要找前驱的数小，说明这个节点的权值可能是要找的前驱，但是无法确定它的右子树里面还有比它更大的数，所以要继续搜索右子树。如果这个节点权值数量不为0，就更新答案。如果已经没有右子树了，说明已经没有更合适的答案了，直接返回当前节点的权值。

```cpp
int querypre(int x, int val, int ans){
	if(T[x].val>=val){
		if(T[x].left==0) 
			return ans;
		else 
			querypre(T[x].left, val, ans);
	}else{
		if(T[x].right==0) 
			return T[x].val<val ? T[x].val : ans; //可以直接返回T[x].val
			
		if(T[x].cnt==0)
			return querypre(T[x].right, val, ans);
		else
			return querypre(T[x].right, val, T[x].val);
	}
}
```



#### 后继

和找前驱完全相反，这里就不多赘述。

```cpp
int querynext(int x, int val, int ans){
	if(T[x].val<=val){
		if(T[x].right==0)
			return ans;
		else
			querynext(T[x].right, val, ans);
	}else{
		if(T[x].left==0)
			return T[x].val>val ? T[x].val : ans;//可以直接返回T[x].val
		
		if(T[x].cnt==0)
			return querynext(T[x].left, val, ans);
		else 
			return querynext(T[x].left, val, T[x].val);
	}
}
```



### 按值找排名

```cpp
int queryRankFromVal(int x, int val){
	if(x==0) return 0;
	
	if(T[x].val==val) return T[T[x].left].size+1;
	else if(T[x].val>val) return queryrankfromval(T[x].left, val);
	else return queryrankfromval(T[x].right, val)+T[x].cnt+T[T[x].left].size;
}
```



### 按排名找值

```cpp
int queryValFromRank(int x, int rank){
	if(T[T[x].left].size>=rank)
		return queryvalfromrank(T[x].left, rank);
	else if(T[T[x].left].size+T[x].cnt>=rank)
		return T[x].val;
	else 
		return queryvalfromrank(T[x].right, rank-T[T[x].left].size-T[x].cnt);
}
```



### 参考和模板题

#### 参考

<https://www.cnblogs.com/do-while-true/p/12382796.html>



#### 模板题

[P5076 【深基16.例7】普通二叉树（简化版）](https://www.luogu.com.cn/problem/P5076)