---
title: Java学习笔记-多线程
date: 2020-08-04 23:20:39
toc: true
tags:
- Java
categories: 
- Java学习笔记
---

{% raw %}<div class="post-summary">{% endraw %}

Java多线程详解

{% raw %}</div>{% endraw %}

<!-- more -->

<style type="text/css">
.post-summary { display: none; }
</style>

**Tipp：代码中的注释一定要看**

### 基本概念：程序 进程 线程

#### 定义

* **程序（program）**是为完成特定任务、用某种语言编写 的一 组指令的集合 。即指**一段静态的代码**，静态对象。
* **进程（process）**是程序的一次执行过程，或是**正在运行的一个程序**。是一个动态的过程：有它自身的产生、存在和消亡的过程。——生命周期
* * 如运行中的QQ，运行中的MP3播放器
  * 程序是静态的，进程是动态的
  * **进程作为资源分配的单位**，系统在运行时会为每个进程分配不同的内存区域
* **线程（thread）**进程可进一步细化为线程，是一个**程序内部的执行路径**。
* * 若一个进程同一时间**并行**执行多个线程，就是支持多线程的
  * **线程作为调度和执行的单位，每一个线程拥有独立的运行栈和程序计数器（pc）**，线程切换的开销小
  * 一个进程的多个线程共享相同的内存单元/内存地址空间-->它们从同一堆中分配对象，可以访问相同的变量和对象。这就使得线程间通信更简便、高效。但多个线程操作共享的系统资源可能就会带来**安全隐患**

#### 线程与进程的关系

![进程与线程的关系](/img/article/Java学习笔记-多线程/进程与线程.png)

#### 单核CPU和多核CPU的理解

* 单核CPU，其实是一种假的多线程，因为在一个时间单元内，也只能执行一个线程的任务。但是CPU的时间单元特别短，因此感受不出来。
* 多核才能更好发挥多线程的效率。
* 一个Java的应用程序java.exe，其实至少有3个线程：main()主线程，gc()垃圾回收线程，异常处理线程。如果发生异常回影响到main()主线程。

#### 并行与并发

* 并行：多个CPU同时执行多个任务。
* 并发：一个CPU（采用时间片）同时执行多个任务。

#### 何时需要多线程

* 程序需要同时执行两个或者多个任务。
* 程序需要实现一些需要等待的任务，如用户输入、文件读写操作、网络操作、搜索等。
* 需要一些后台运行的程序。

### 线程的创建和使用（重点）

Java语言的JVM允许程序运行多个线程，它通过java.lang.Thread类来实现。

Thread类的特性：

* 每个线程都是通过某个特定Thread对象的run()方法来完成操作的，经常把urn()方法的主题称为**线程体**。
* 通过该Thread对象的start()方法来启动这个线程，而非直接调用run()。

#### 多线程的创建方式

##### 方式一：继承Thread类

1、创建一个继承Thread类的子类

2、重写Thread类的run()方法

3、创建Thread类的子类的对象

4、通过此对象调用start()



下面通过一个例子来演示方式一：

```java
package ThreadTest;

/**
 * 多线程创建方式一：继承Thread类
 * 1. 创建一个继承于Thread类的子类
 * 2. 重写run()方法 -->将此线程执行的操作声明在run()中
 * 3. 创建子类的对象
 * 4. 通过此对象调用start()
 *
 * 例子：遍历100以内所有的偶数
 */
public class ThreadCreate1 {

    public static void main(String[] args) {
        //3.创建子类的对象
        MyThread myThread1 = new MyThread();

        //4.通过此对象调用start()
        //作用
        //1.启动当前线程
        //2.JVM调用run()方法
        myThread1.start();
        
        //问题一：不能通过调用run()方法启动线程
        //myThread.run();

        //问题二：再启动一个线程，遍历100以内偶数不可以让已经start()的线程去执行。
        //myThread.start();
        //正确方式
        MyThread myThread2 = new MyThread();
        myThread2.start();

        //以下循环仍然在main线程中运行
        for (int i = 0; i <= 100; i++) {
            //if(i % 2 == 1) System.out.println("main->"+i);
            if(i % 2 == 0) System.out.println(Thread.currentThread().getName()+" : "+i);
        }
    }
}

//1. 创建一个继承于Thread类的子类
class MyThread extends Thread{
    //2. 重写run()方法
    @Override
    public void run() {
        for (int i = 0; i <= 100; i++) {
            //if(i % 2 == 0) System.out.println("myThread->"+i);
            if(i % 2 == 0) System.out.println(Thread.currentThread().getName()+" : "+i);
        }
    }
}
```

我的输出如下：

```
Thread-3 : 0
main : 0
Thread-3 : 2
Thread-4 : 0
Thread-3 : 4
main : 2
Thread-4 : 2
main : 4
Thread-3 : 6
Thread-4 : 4
Thread-3 : 8
main : 6
Thread-3 : 10
main : 8
Thread-4 : 6
Thread-3 : 12
main : 10
Thread-3 : 14
Thread-4 : 8
Thread-3 : 16
main : 12
Thread-3 : 18
Thread-4 : 10
Thread-3 : 20
main : 14
Thread-4 : 12
Thread-3 : 22
main : 16
Thread-3 : 24
Thread-4 : 14
Thread-3 : 26
Thread-3 : 28
Thread-4 : 16
Thread-3 : 30
main : 18
Thread-4 : 18
Thread-3 : 32
main : 20
Thread-3 : 34
main : 22
Thread-4 : 20
Thread-3 : 36
main : 24
Thread-4 : 22
Thread-3 : 38
main : 26
Thread-4 : 24
Thread-3 : 40
main : 28
Thread-4 : 26
main : 30
Thread-4 : 28
main : 32
Thread-3 : 42
Thread-4 : 30
main : 34
Thread-3 : 44
main : 36
Thread-4 : 32
Thread-3 : 46
Thread-4 : 34
main : 38
Thread-3 : 48
main : 40
Thread-4 : 36
Thread-3 : 50
main : 42
Thread-4 : 38
Thread-3 : 52
main : 44
Thread-4 : 40
main : 46
Thread-4 : 42
Thread-3 : 54
Thread-4 : 44
main : 48
Thread-4 : 46
main : 50
Thread-4 : 48
main : 52
Thread-3 : 56
Thread-4 : 50
main : 54
Thread-3 : 58
main : 56
Thread-4 : 52
main : 58
Thread-4 : 54
main : 60
Thread-3 : 60
main : 62
Thread-4 : 56
Thread-3 : 62
main : 64
Thread-3 : 64
main : 66
Thread-4 : 58
main : 68
Thread-3 : 66
Thread-4 : 60
Thread-3 : 68
main : 70
Thread-4 : 62
main : 72
Thread-3 : 70
main : 74
Thread-4 : 64
Thread-3 : 72
main : 76
Thread-3 : 74
Thread-4 : 66
main : 78
Thread-3 : 76
Thread-4 : 68
Thread-3 : 78
main : 80
Thread-4 : 70
main : 82
Thread-3 : 80
main : 84
Thread-4 : 72
main : 86
Thread-3 : 82
main : 88
Thread-3 : 84
main : 90
Thread-4 : 74
main : 92
Thread-4 : 76
main : 94
Thread-4 : 78
Thread-3 : 86
main : 96
Thread-3 : 88
Thread-4 : 80
Thread-3 : 90
Thread-4 : 82
Thread-3 : 92
Thread-4 : 84
Thread-3 : 94
Thread-4 : 86
main : 98
Thread-3 : 96
Thread-4 : 88
Thread-3 : 98
main : 100
Thread-3 : 100
Thread-4 : 90
Thread-4 : 92
Thread-4 : 94
Thread-4 : 96
Thread-4 : 98
Thread-4 : 100
```

可见主线程和两个线程交替执行，多线程创建成功。

**其余一些注意事项查看注释，以后不再赘述。**



##### 方式二：实现Runnable接口

1. 创建一个实现Runnable接口的类
2. 实现类去实现Runnable的抽象方法：run()
3. 创建实现类的对象
4. 将此对象作为参数传递到Thread类的构造器中，创建Thread类对象
5. 通过Thread类对象调用start()



演示代码：

```java
package ThreadTest;

public class ThreadCreate2 {

    public static void main(String[] args) {
        //3.创建实现类的对象
        MyThread5 m=new MyThread5();
        //4.将此对象作为参数传递到Thread类的构造器中，创建Thread类对象
        Thread thread = new Thread(m);
        //5.通过Thread类对象调用start()
        //作用
        //1.启动线程
        //2.调用当前线程的run()-->调用了Runnable类型的target的run()
        thread.start();
        
        Thread thread2 = new Thread(m);
        //被允许，因为新建了一个线程，只是共用了一份资源
        thread2.start();
    }
}

//1.创建一个实现Runnable接口的类
class MyThread5 implements Runnable {

    //2.实现类去实现Runnable的抽象方法：run()
    @Override
    public void run() {
        for (int i = 0; i <= 100; i++) {
            if(i % 2 == 0 ) System.out.println(i);
        }
    }
}
```



##### 两种线程创建方式的比较的结论

开发中：优先选择实现Runnable接口的方式

原因：

1. 实现方式没有类的单继承的局限性
2. 实现的方式更适合处理多个线程有共享数据的情况



联系：

1. Thread类本身也实现了Runnable接口

2. 两种方式都需要重写run()，将线程要执行的逻辑声明再run()中。



#### Thread类的常用方法

1. void start()：启动当前线程 JVM调用当前线程的run()方法

2. void run()：通常需要重写Thread类中的此方法，将创建的线程需要执行的操作声明在此方法中

3. static Thread currentThread()：静态方法 返回当前代码执行的线程对象

4. String getName()：获取当前线程名字

5. void setName()：设置当前线程名字

6. static void yield()：释放当前cpu的执行权

7. void join()：在线程a中调用线程b.join()，此时线程a进入阻塞状态，直到线程b完全执行完毕

8. static void stop()：已过时。当执行此方法时，强制结束当前线程

9. void sleep(long ms)：让当前线程阻塞ms毫秒

10. boolean isAlive()：判断当前线程是否存活



测试代码

```java
package ThreadTest;

public class ThreadMethodTest {

    public static void main(String[] args) {
        MyThread3 m1=new MyThread3("我的Thread01");
        //m1.setName("线程一");
        m1.start();

        //给主线程命名
        Thread.currentThread().setName("主线程");
        for (int i = 0; i <= 100; i++) {
            System.out.println(Thread.currentThread().getName()+" : "+i);

            if(i == 20) {
                try {
                    m1.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        System.out.println(m1.isAlive());
    }
}

class MyThread3 extends Thread {

    public MyThread3(String name) {
        super(name);
    }

    @Override
    public void run() {
        for (int i = 0; i <= 100; i++) {
            try {
                sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName()+" : "+i);

            if(i % 20 == 0) yield();
        }
    }
}
```

我的输出如下：

```
主线程 : 0
主线程 : 1
主线程 : 2
主线程 : 3
主线程 : 4
主线程 : 5
主线程 : 6
主线程 : 7
主线程 : 8
主线程 : 9
主线程 : 10
主线程 : 11
主线程 : 12
主线程 : 13
主线程 : 14
主线程 : 15
主线程 : 16
主线程 : 17
主线程 : 18
主线程 : 19
主线程 : 20
我的Thread01 : 0
我的Thread01 : 1
我的Thread01 : 2
我的Thread01 : 3
我的Thread01 : 4
我的Thread01 : 5
我的Thread01 : 6
我的Thread01 : 7
我的Thread01 : 8
我的Thread01 : 9
我的Thread01 : 10
我的Thread01 : 11
我的Thread01 : 12
我的Thread01 : 13
我的Thread01 : 14
我的Thread01 : 15
我的Thread01 : 16
我的Thread01 : 17
我的Thread01 : 18
我的Thread01 : 19
我的Thread01 : 20
我的Thread01 : 21
我的Thread01 : 22
我的Thread01 : 23
我的Thread01 : 24
我的Thread01 : 25
我的Thread01 : 26
我的Thread01 : 27
我的Thread01 : 28
我的Thread01 : 29
我的Thread01 : 30
我的Thread01 : 31
我的Thread01 : 32
我的Thread01 : 33
我的Thread01 : 34
我的Thread01 : 35
我的Thread01 : 36
我的Thread01 : 37
我的Thread01 : 38
我的Thread01 : 39
我的Thread01 : 40
我的Thread01 : 41
我的Thread01 : 42
我的Thread01 : 43
我的Thread01 : 44
我的Thread01 : 45
我的Thread01 : 46
我的Thread01 : 47
我的Thread01 : 48
我的Thread01 : 49
我的Thread01 : 50
我的Thread01 : 51
我的Thread01 : 52
我的Thread01 : 53
我的Thread01 : 54
我的Thread01 : 55
我的Thread01 : 56
我的Thread01 : 57
我的Thread01 : 58
我的Thread01 : 59
我的Thread01 : 60
我的Thread01 : 61
我的Thread01 : 62
我的Thread01 : 63
我的Thread01 : 64
我的Thread01 : 65
我的Thread01 : 66
我的Thread01 : 67
我的Thread01 : 68
我的Thread01 : 69
我的Thread01 : 70
我的Thread01 : 71
我的Thread01 : 72
我的Thread01 : 73
我的Thread01 : 74
我的Thread01 : 75
我的Thread01 : 76
我的Thread01 : 77
我的Thread01 : 78
我的Thread01 : 79
我的Thread01 : 80
我的Thread01 : 81
我的Thread01 : 82
我的Thread01 : 83
我的Thread01 : 84
我的Thread01 : 85
我的Thread01 : 86
我的Thread01 : 87
我的Thread01 : 88
我的Thread01 : 89
我的Thread01 : 90
我的Thread01 : 91
我的Thread01 : 92
我的Thread01 : 93
我的Thread01 : 94
我的Thread01 : 95
我的Thread01 : 96
我的Thread01 : 97
我的Thread01 : 98
我的Thread01 : 99
我的Thread01 : 100
主线程 : 21
主线程 : 22
主线程 : 23
主线程 : 24
主线程 : 25
主线程 : 26
主线程 : 27
主线程 : 28
主线程 : 29
主线程 : 30
主线程 : 31
主线程 : 32
主线程 : 33
主线程 : 34
主线程 : 35
主线程 : 36
主线程 : 37
主线程 : 38
主线程 : 39
主线程 : 40
主线程 : 41
主线程 : 42
主线程 : 43
主线程 : 44
主线程 : 45
主线程 : 46
主线程 : 47
主线程 : 48
主线程 : 49
主线程 : 50
主线程 : 51
主线程 : 52
主线程 : 53
主线程 : 54
主线程 : 55
主线程 : 56
主线程 : 57
主线程 : 58
主线程 : 59
主线程 : 60
主线程 : 61
主线程 : 62
主线程 : 63
主线程 : 64
主线程 : 65
主线程 : 66
主线程 : 67
主线程 : 68
主线程 : 69
主线程 : 70
主线程 : 71
主线程 : 72
主线程 : 73
主线程 : 74
主线程 : 75
主线程 : 76
主线程 : 77
主线程 : 78
主线程 : 79
主线程 : 80
主线程 : 81
主线程 : 82
主线程 : 83
主线程 : 84
主线程 : 85
主线程 : 86
主线程 : 87
主线程 : 88
主线程 : 89
主线程 : 90
主线程 : 91
主线程 : 92
主线程 : 93
主线程 : 94
主线程 : 95
主线程 : 96
主线程 : 97
主线程 : 98
主线程 : 99
主线程 : 100
false
```



#### 线程的调度

##### 调度策略

**1.时间片**

![时间片](/img/article/Java学习笔记-多线程/时间片.png)

**2.抢占式：高优先级的线程抢占CPU**

##### Java的调度方法

同优先级线程组成先进先出队列（先到先服务），使用时间片策略

对高优先级，使用优先调度的抢占式策略

##### 线程的优先级等级

MAX_PRIORITY=10

MIN_PRIORITY=1

NORM_PRIORITY=5（默认）

##### 涉及的方法

int getPriority()：返回线程优先级

void setPriority(int newPriority)：改变线程的优先级

##### 小提示

线程创建时继承父线程的优先级。

低优先级只是获得调度的概率低，并非一定是在高优先级线程之后才被调用。



#### 补充：线程的分类

Java的线程中分为两类：一种是**用户线程**，一种是**守护线程**。

* 它们在几乎每个方面都是相同的，唯一的区别是判断JVM何时离开。
* 守护线程是用来服务用户线程的，通过在start()方法调用前调用**(thread).setDaemon(true)**可以把一个用户线程变成一个守护线程。
* Java垃圾回收就是一个典型的守护线程。
* 若JVM中都是守护线程，当前JVM将退出。

*（演示代码待补充）*

https://blog.csdn.net/qq_41063141/article/details/91939540

### 线程的生命周期

JDK中用了Thread.State类定义了线程的六种状态：

* **NEW**：A Thread which has not yet started.
* **RUNNABLE**：A Thread which is running or suspended.
* **BLOCKED**：A Thread which is blocked on a monitor.
* **WAITING**：A Thread which is waiting with no timeout.
* **TIMED_WAITING**：A Thread which is waiting with a timeout.
* **TERMINATED**：A thread which is no longer alive.

这种分类是按照方法分的，不是很清晰，可以按照线程的状态分成5种状态：

* **新建**：当一个Thread类或其子类的对象被声明并创建时，新生的线程对象处于新建状态。
* **就绪**：处于**新建**状态的线程被start()后，将进入线程队列等待CPU时间片，此时它已具备了运行的条件 ，只是没分配到CPU资源。
* **运行**：当就绪的线程被调度并获得CPU资源时便进入运行状态，run()方法定义了线程的操作和功能。
* **阻塞**：在某种特殊情况下，被人为挂起或执行输入输出操作时，让出CPU并临时中止自己的执行，进入阻塞状态。
* **死亡**：线程完成了它的全部工作或线程被提前强制性地中止或出现异常导致结束。

![线程的生命周期](/img/article/Java学习笔记-多线程/线程的生命周期.png)



### 线程的同步

#### 线程的安全问题

多个线程执行的不确定性会引起执行结果的不确定性。

多个线程对数据的共享，会造成操作的不完整性，会破坏数据。

##### 原因

当多条语句在操作同一个线程共享数据时，一个线程对多条语句执行了一部分，还没有执行完，另一个线程参与进来执行，导致共享数据的错误。

##### 解决方法

对多条操作共享数据的语句，只能让一个线程都执行完，在执行的过程中，其他线程不能参与执行。



#### 使用Synchronized关键字实现线程的同步

##### 同步代码块

```java
synchronized(同步监视器){

	//需要同步的代码

}
```
说明：

1. 操作共享数据的代码就是需要被同步的代码。
2. 共享数据是多个线程共同操控的变量。
3. 同步监视器俗称“锁”。任何一个类的都可以充当“锁”。
4. 多个线程必须共用**同一把锁**，即同步监视器必须是**同一个对象**。
5. 实现Runnable接口创建的线程可以考虑使用**this**充当同步监视器，继承Thread类创建的线程慎用**this**。
6. 继承Thread类创建的线程可以考虑使用**(类名).class**充当同步监视器。



##### 同步方法

```java
//格式：
//访问修饰符 synchronized 返回值类型 方法名(){}

//例子
public synchronized void musterMethod(){
    //方法体
}
```

说明：

1. 同步方法仍然涉及到同步监视器，只不过不需要显式声明。
2. **非静态**的同步方法的同步监视器为**this**，静态的同步方法的同步监视器是**(类名).class**。



#### 同步的优点与局限

优点：解决了线程的安全问题

局限：操作同步时只能由一个线程参与，其他线程等待，相当于一个单线程的过程，效率较低。



#### 死锁问题

不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁。

出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于阻塞状态，无法继续。



##### 解决方法

* 专门的算法、原则
* 尽量减少同步资源的定义
* 尽量避免嵌套同步



##### 死锁样例

```java
package ThreadTest;

class A {
    public synchronized void foo(B b) {
        System.out.println("当前线程名: " + Thread.currentThread().getName()
                + " 进入了A实例的foo方法"); // ①
        try {
            Thread.sleep(200);
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        System.out.println("当前线程名: " + Thread.currentThread().getName()
                + " 企图调用B实例的last方法"); // ③
        b.last();
    }

    public synchronized void last() {
        System.out.println("进入了A类的last方法内部");
    }
}

class B {
    public synchronized void bar(A a) {
        System.out.println("当前线程名: " + Thread.currentThread().getName()
                + " 进入了B实例的bar方法"); // ②
        try {
            Thread.sleep(200);
        } catch (InterruptedException ex) {
            ex.printStackTrace();
        }
        System.out.println("当前线程名: " + Thread.currentThread().getName()
                + " 企图调用A实例的last方法"); // ④
        a.last();
    }

    public synchronized void last() {
        System.out.println("进入了B类的last方法内部");
    }
}

public class DeadLock implements Runnable {
    A a = new A();
    B b = new B();

    public void init() {
        Thread.currentThread().setName("主线程");
        // 调用a对象的foo方法
        a.foo(b);
        System.out.println("进入了主线程之后");
    }

    public void run() {
        Thread.currentThread().setName("副线程");
        // 调用b对象的bar方法
        b.bar(a);
        System.out.println("进入了副线程之后");
    }

    public static void main(String[] args) {
        DeadLock dl = new DeadLock();
        new Thread(dl).start();
        dl.init();
    }
}
```



我的输出

```
当前线程名: 主线程 进入了A实例的foo方法
当前线程名: 副线程 进入了B实例的bar方法
当前线程名: 主线程 企图调用B实例的last方法
当前线程名: 副线程 企图调用A实例的last方法
```

然后程序就没了动静，也没结束，这就是死锁。

主线程想要B实例这把锁，副线程想要A实例这把锁，争执不下，都进入阻塞状态。



#### 使用Lock的实现类实现线程的同步

从JDK 5.0开始Java提供了更强大的线程同步机制：通过显式定义同步锁对象来实现同步。同步锁使用Lock对象充当。

**java.util.concurrent.locks.Lock接口是控制多个线程对共享资源进行访问的工具。**锁提供了对共享资源的独占访问，每次只能有一个线程对Lock对象加锁，线程开始访问共享资源之前应先获得Lock对象。

ReentrantLock类实现了Lock，它拥有与synchronized相同的并发性和内存语义，在实现线程安全的控制中，比较常用的是ReentrantLock，可以显式加锁、释放锁。



演示代码：

```java
package Lock;
import java.util.concurrent.locks.ReentrantLock;

class myThread implements Runnable{

    //共享资源
    private int resource=10;

    //1.生成一把“锁”
    ReentrantLock lock=new ReentrantLock(false);

    @Override
    public void run() {
        try{
            while(true){
                //2.操作共享数据之前先上锁
                lock.lock();

                if(resource>0){
                    System.out.println(Thread.currentThread().getName()+" 抢到第"+(11-resource)+"份资源");
                    resource--;
                }else break;

                //3.操作完成，解锁
                lock.unlock();

                try {  //休眠，增加交互概率
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }finally{ //4.万一循环被break或者try内语句出现异常，最后给线程解锁
            lock.unlock();
        }

    }
}

public class LockTest {

    public static void main(String[] args) {
        myThread m=new myThread();
        Thread t1=new Thread(m);
        Thread t2=new Thread(m);
        Thread t3=new Thread(m);

        t1.setName("线程1");
        t2.setName("线程2");
        t3.setName("线程3");

        t1.start();
        t2.start();
        t3.start();
    }
}
```

说明：和synchronized一样，多个线程处理共享资源的时候应当**共用同一个Lock对象**。



##### Lock和synchronized的比较

1. Lock是显式锁（手动开启和关闭锁，别忘记关闭锁），synchronized是隐式锁，出了作用域自动释放。
2. Lock只有代码块锁，synchronized有代码块锁和方法锁。
3. 使用Lock锁，JVM将花费较少的时间来调度线程，性能更好。并且具有更好的扩展性（提供更多的子类）。

**优先使用顺序**：
Lock-->同步代码块（已经进入了方法体，分配了相应资源）-->同步方法（在方法体之外）



### 线程的通信

#### synchronized的通信方式

**wait()**：令当前线程挂起并放弃CPU、同步资源并等待，使别的线程可访问并修改共享资源，而当前线程排队等候其他线程调用notify()或notifyAll()方法唤醒，唤醒后等待重新获得对监视器的所有权后才能继续执行。

说明：

1. 在当前线程中调用方法：对象名.wait()。
2. 使当前线程进入等待（某对象）状态，直到另一线程对该对象发出notify()或notifyAll()为止。
3. 调用方法的必要条件：当前线程必须具有对该对象的监控权（加锁）。
4. 调用此方法后，当前线程将**释放对象监控权**，然后进入等待。
5. 在当前线程被notify()后，要重新获得监控权，然后从断点处继续代码的执行。



**notify()**：唤醒正在排队等待同步资源的线程中优先级最高者，让其结束等待。

**notifyAll()**：唤醒正在排队等待资源的所有线程，让它们结束等待。

说明：

1. 在当前线程中调用方法：对象名.notify()/notifyAll()。
2. 功能：唤醒等待该对象监控权的一个/所有线程。
3. 调用方法的必要条件：当前线程必须具有对该对象的监控权（加锁）。



##### 总结

这三个方法只有在synchronized方法或synchronized代码块中才能使用，否则会报java.lang.IllegalMonitorStateException异常。

因为这三个方法必须有锁对象调用，而任意对象都可以作为synchronized的同步锁，因此这三个方法只能在Object类中声明。



##### 演示代码

让两个线程交替输出1-10的数

```java
//实现Runnable接口创建线程
package CommunicateTest;

public class Test1 {
    public static void main(String[] args) {
        myThread m = new myThread();
        Thread myThread1 = new Thread(m);
        Thread myThread2 = new Thread(m);

        myThread1.setName("我的线程1");
        myThread2.setName("我的线程2");

        myThread1.start();
        myThread2.start();
    }
}

class myThread implements Runnable{

    private static int num=1;

    @Override
    public void run() {

        while (true) {
            synchronized (this) {
                notify();
                if (num <= 10) {
                    System.out.println(Thread.currentThread().getName() + "：输出" + num);
                    num++;

                    try {
                        wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                } else break;
            }
        }
    }
}
```

```java
//继承Thread类方法创建线程
package CommunicateTest;

public class Test2 {
    public static void main(String[] args) {
        myThread2 m1 = new myThread2();
        myThread2 m2 = new myThread2();

        m1.setName("我的线程1");
        m2.setName("我的线程2");

        m1.start();
        m2.start();

    }
}

class myThread2 extends Thread{

    private static int num=1;

    @Override
    public void run() {

        while (true) {
            synchronized (myThread2.class) {
                myThread2.class.notify();

                if (num <= 10) {
                    System.out.println(Thread.currentThread().getName() + "：输出" + num);
                    num++;

                    try {
                        myThread2.class.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                } else break;
            }
        }
    }
}
```



#### 经典例题：生产者消费者问题

```java
package ProductorCustomerTest;

public class Test {
    public static void main(String[] args) {
        Clerk clerk = new Clerk();
        Productor p1 = new Productor(clerk);
        p1.setName("生产者1");

        Customer c1 = new Customer(clerk);
        c1.setName("消费者1");

        p1.start();
        c1.start();
    }
}

class Clerk{

    private int productionNum;

    public Clerk(){
        this.productionNum=0;
    }

    public synchronized void addProduction() {
        if(productionNum<20){
            productionNum++;
            System.out.println(Thread.currentThread().getName()+"：生产第"+productionNum+"个产品");

            notify();
        }else{
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public synchronized void getProduct() {
        if(productionNum>0){
            System.out.println(Thread.currentThread().getName()+"：消费第"+productionNum+"个产品");
            productionNum--;

            notify();
        }else{
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class Productor extends Thread{

    Clerk clerk;

    public Productor(Clerk c){
        this.clerk=c;
    }

    @Override
    public void run() {
        System.out.println(getName()+"开始生产！");

        while (true) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            clerk.addProduction();
        }
    }
}

class Customer extends  Thread{

    Clerk clerk;

    public Customer(Clerk c){
        this.clerk=c;
    }

    @Override
    public void run() {
        System.out.println(getName()+"开始消费！");

        while (true) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            clerk.getProduct();
        }
    }
}
```



### JDK 5.0新增的线程创建方式

#### 实现Callable接口

与使用Runnable相比，Callable功能更加强大

* 相比run()方法，可以有返回值
* 方法可以抛出异常
* 返回值支持泛型
* 需要借助FutureTask类，比如获取返回结果



##### Future接口

可以对具体Runnable、Callable任务的执行结果进行取消、查询是否完成、获取结果等。

**FutrueTask是Future接口的唯一实现类**。

FutureTask同时实现了Runnable、Future接口。它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值。



演示代码

```java
package ThreadCallable;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/**
 * @author 11346
 */
public class Test {
    public static void main(String[] args) {
        //3.创建Callable接口实现类的对象
        NumThread numThread = new NumThread();
        //4.将此Callable实现类对象传入FutureTask的构造器中，创建FutureTask的对象
        FutureTask<Integer> futureTask = new FutureTask<Integer>(numThread);
        //5.将FutureTask的对象作为参数传入Thread类的构造器中，创建Thread类的对象，并start()
        new Thread(futureTask).start();

        try {
            //6.需要的话获取返回值
            //get()返回值即为FutureTask构造器参数Callable实现类重写的call()的返回值
            Integer integer = futureTask.get();
            System.out.println("返回值为：" + integer);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}

//1.创建一个实现Callable接口的实现类
class NumThread implements Callable<Integer>{
    //2.实现call()，将此线程需要执行的方法声明在call()中
    @Override
    public Integer call() throws Exception {
        int sum=0;
        for(int i=0;i<=100;i++){
            if((i & 1) == 0){
                System.out.println(Thread.currentThread().getName()+"："+i);

                sum+=i;
            }
        }

        return sum;
    }
}
```



#### 线程池

**背景**：经常创建和销毁、使用量特别大的资源，比如并发情况下的线程，对性能影响很大。

**思路**：提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中。可以避免频繁创建销毁、实现重复利用。类似生活中的公共交通工具。

**好处**：

* 提高响应速度（减少了创建新线程的时间）
* 降低资源消耗（重复利用线程池中线程，不需要每次都创建）
* 便于线程管理：
  1. corePoolSize：核心池的大小
  2. maximumPoolSize：最大线程数
  3. keepAliveTime：线程没有任务时最多保持多长时间后会终止
  4. ...



#### 线程池相关API

JDK5.0起提供了线程池相关API：**ExecutorService**和**Executors**



ExecutorService：真正的线程池接口。常见子类**ThreadPoolExecutor**

* **void execute(Runnable command)**：执行任务命令，没有返回值，一般用来执行Runnable。
* **<T>Future<T> submit(Callable<T> task)**：执行任务，有返回值，一般用来执行Callable。
* **void shutdown()**：关闭连接池。



Executors：工具类、线程池的工厂类，用于创建并返回不同类型的线程池。

* **Executors.newCachedThreadPool()**：创建一个可根据需要创建新线程的线程池。
* **Executors.newFixedThreadPool(int n)**：创建一个可重用固定线程数的线程池。
* **Executors.newSingleThreadExecutor()**：创建一个只有一个线程的线程池。
* **Executors.newScheduledThreadPool(int n)**：创建一个线程池，它可安排在给定延迟后运行命令或者定期地执行。



演示代码：

```java
package ThreadPool;

import java.util.concurrent.*;

public class Test {

    public static void main(String[] args) {
        //1.提供指定数量的线程池
        ExecutorService executorService = Executors.newFixedThreadPool(10);
        //设置属性得用实现类，接口里面没有设置属性的方法
        ThreadPoolExecutor executor = (ThreadPoolExecutor) executorService;
        //设置属性
        executor.setMaximumPoolSize(15);
        
        //2.执行指定的线程的操作。需要提供实现Runnable或者Callable接口的实现类的对象
        executor.execute(new EvenNumThread()); //适合使用于Runnable
        FutureTask<Integer> futureTask = (FutureTask<Integer>) executor.submit(new OddNumThread());//适合使用于Callable

        try {
            Integer integer = futureTask.get();
            System.out.println("返回值为："+integer);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        //3.关闭连接池
        executorService.shutdown();
    }
}

class EvenNumThread implements Runnable{

    @Override
    public void run() {
        for(int i=0;i<=100;i++){
            if((i & 1) == 0) System.out.println(Thread.currentThread().getName()+"："+i);
        }
    }
}

class OddNumThread implements Callable<Integer> {

    @Override
    public Integer call() throws Exception {
        int sum=0;
        for(int i=0;i<=100;i++){
            if((i & 1) != 0){
                System.out.println(Thread.currentThread().getName()+"："+i);
                sum+=i;
            }
        }

        return sum;
    }
}
```



### 更新日志

* 2020.08.17 更新**基本概念：程序 进程 线程**中的定义和线程与进程的关系。
* 2020.08.20 更新**基本概念：程序 进程 线程**中的单核CPU和多核CPU的理解、并行与并发的辨析和何时需要多线程。第一节更新完毕。
* 2020.09.05 开始更新**线程的创建和使用（重点）**
* 2020.09.06 继续更新**线程的创建和使用（重点）**，完成了方式一的代码和输出。完成**Thread类的常用方法**。
* 2020.09.07 继续更新**线程的创建和使用（重点）**，完成了**线程的调度**，线程的创建**方式二：实现Runnable接口**。
* 2020.09.09 更新**线程的创建和使用（重点）**中的**线程的分类**和**线程的生命周期**。
* 2020.09.10 开始更新**线程的同步**。
* 2020.09.11 更新**线程的同步**中的**死锁问题**和**显式锁Lock**。
* 2020.09.12 更新**线程的通信**。
* 2020.09.19 更新**JDK 5.0新增的线程创建方式**。

