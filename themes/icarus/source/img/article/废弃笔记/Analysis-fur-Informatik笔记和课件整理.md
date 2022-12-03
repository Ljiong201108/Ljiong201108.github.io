---
title: Analysis für Informatik笔记和课件整理
date: 2020-11-03 21:11:08
mathjax: true
tags:
- TUM
categories:
- 课堂笔记
---

Dozent: Noam Berger

Kontakt: noam.berger@tum.de

Übungsleiter: Stefan Possaner

<!--more-->

&nbsp;

**03.11.2020**

Vorlesung 1

Thema: Mengenterminologie, reele Zahlen und Vektor

&nbsp;

## Mengenterminologie

Eine Menge ist die Zusammenfassung von einzelnen Elementen. 

<font color=#FF0000>Wir schreiben $x \in A$, falls $x$ in der Menge $A$ ist und $x \notin A$ sonst. </font>

&nbsp;

##### Schreibweise für Mengen 

Es gibt mehrere Schreibweisen für Menge. Wir beschreiben hier drei davon:

* $A=\{1,2,3,4\}$

* $A=\{\text{Alle ganzen Zahlen zwischen 1 und 4}\}$

* $A=\{n \in \mathbb{Z}\ :\ 1\leqslant n \leqslant 4\}$

<font color=#0000CD>德语里里面分隔符不同于中国，用的是冒号“ : ”</font>

&nbsp;

##### wichtige Mengen

$\emptyset=\{\}\ :\ \forall_n\ x\notin \emptyset$

$\mathbb{Z}=\{\text{alle ganzen Zahlen}\}$

$\mathbb{R}=\{\text{alle reellen Zahlen}\}$

$\mathbb{Q}=\{\text{alle rationalen Zahlen}\}$

$\mathbb{N}=\{x\in\mathbb{Z}\ :\ x\geqslant 0\}$

<font color=#FF0000>Manchmal schreiben wir $\mathbb{N}_0$, $\mathbb{N}_{>0}=\{1,2,3,...\}=\{x\in\mathbb{Z}\ |\ x> 0\}$</font>

&nbsp;

**<font color=#FF0000>Definition 1.1: </font>**

$B$ heißt Teilmenge von $A$, $B \subseteq A$, falls $\forall_x\ x\in B\ \Rightarrow\ x \in A$

**Beispiel**: $\emptyset \subseteq \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$

<font color=#0000CD>对于子集的定义</font>

&nbsp;

##### Mengenoperationen

(1) Vereinigung: $A \cup B=\{n\ |\ n \in A\ \text{or}\ n \in B\}$

(2) Schnitt: $A\cap B=\{n\ |\ x \in A\ \text{und}\ x \in B\}$

(3) Differenz: $A\ \backslash\ B=\{x\ |\ x \in A\ \text{und}\ x \in B\}$

(4) kartesische Produkt: $A \times B=\{(x,y)\ |\ x\in A,y \in B\}$

(5) Protenzmenge: $P(A)=\{B\ |\ B\subseteq A\}$

Beispiel: $P(\{0,1\})=\{\emptyset,\{0\},\{1\},\{0,1\}\}$

&nbsp;

##### Abblidung（映射）

<font color=#FF0000>Eine **Abbildung** (oder **Funktion**) ist eine Beziehung zwieschen 2 Mengen, die jedem Element der einen Menge genau ein Element der anderen Menge zuordnet.</font>

Wir schreiben $f:A \rightarrow B$ für eine Funktion $f$ von $A$ in $B$.

&nbsp;

**<font color=#FF0000>Definition 1.2: </font>**

Eine Funktion $f:A \rightarrow B$ heißt

* injektiv(单射), falls $\forall_{x \neq y \in A}\ f(x) \neq f(y)$

* surjektiv(满射), falls $\forall_{y \in B}\ \exists_{x\in A}\ f(x)=y$

* bijektiv(双射), falls sie sowohl injektiv als auch surjektiv ist

<font color=#0000CD>对于单设，满射和双射的定义。</font>

<font color=#0000CD>如果$f:A \rightarrow B$是单射，那$A$中任意两个不同的元素在$B$中的映射也不同。即不存在$A$中的两个元素对应$B$中的一个元素。</font>

<font color=#0000CD>如果$f:A \rightarrow B$是满射，那对于$B$中任意一个元素$y$都存在一个$A$中的元素$x$使得$f(x)=y$，即B中的所有元素都能在A中找到对应的映射。</font>

<font color=#0000CD>如果$f:A \rightarrow B$是既是单射也是满射，也叫双射(一一映射)。</font>

<font color=#0000CD>图解：</font><font color=#green>（待补充）</font>

&nbsp;

##### Kardinalitäten(容量)

Wir sagen, dass die Mengen $A$ und $B$ **<font color=#FF0000>die selbe Kardinalität(auch Mächtigkeit)</font>** haben, falls **<font color=#ff0000>eine Bijektion zwischen $A$ und $B$ existiert</font>**.

Wir schreiben das $\vert A\vert = \vert B \vert$.

&nbsp;

Wir sagen, dass die Kardinalitäte von $A$ **<font color=#FF0000>größer gleich</font>** ist die Kardinalität von $B$, falls **<font color=#FF0000>eine Surjektion von $A$ in $B$ existert</font>**.

wir schreiben das $\vert A \vert \geq \vert B \vert$.

&nbsp;

**<font color=#FF0000>Axiom 1.3 (das Auswahl-Axiom):</font>**

Eine Surjektion von $A$ in $B$ existiert genau dann, wenn eine Injektion von $B$ in $A$ existiert.

$\Rightarrow \vert A \vert \geq \vert B \vert$ genau dann, wenn es eine Injektion von $B$ in $A$ gibt.

<font color=#0000CD>单射和满射存在的条件</font>

&nbsp;

**<font color=#FF0000>Satz 1.4: </font>**

Fur jede $A$ und $B$ entweder $\vert A \vert \leq \vert B \vert$ oder $\vert A \vert \geq \vert B \vert$.

&nbsp;

**<font color=#ff0000>Satz 1.5 (Cantor-Berstein):</font>**

Falls $\vert A \vert \leq \vert B \vert$ und $\vert B \vert \leq \vert A \vert$, dann $\vert A \vert = \vert B$.

&nbsp;

**<font color=#ff0000>Definition 1.6: </font>**

Menge $A$ heißt abzählbar (countable), falls $\vert A \vert = \vert \mathbb{N} \vert$. In diesem Fall schreibt man $\vert A \vert = \aleph_0$.

<font color=#0000CD>Wikipedia里面还有一段对于可数集的定义：</font>

<font color=#0000CD>In der Mengenlehre wird eine Menge $A$ als **abzählbar unendlich** bezeichnet, wenn sie die gleiche Mächtigkeit hat wie die Menge der natürlichen Zahlen $\mathbb{N}$. Dies bedeutet, dass es eine **Bijektion** zwischen $A$ und der Menge der natürlichen Zahlen gibt, die Elemente der Menge $A$ also „durchnummeriert“ werden können.</font>

Beispiele: $\vert \mathbb{N} \vert = \vert \mathbb{Z} \vert =\vert \mathbb{Z}^2 \vert =\vert \mathbb{Q} \vert = \aleph_0$ aber $\vert \mathbb{R} \vert > \aleph_0$

Beweis das $\vert \mathbb{R} \vert > \aleph_0$ (cantor's diagonal):

Nehme an, dass $\mathbb{R}$ abzählbar wäre, dann gäbe es eine Surjektion $f:\mathbb{N} \rightarrow [0,1)$.

Sei $d_1$ die erste Ziffer in der Dezimalentwicklung von $f(1)$, $d_2$ die zweite Ziffer in der Dezimalentwicklung von $f(2)$, ... , $d_n$ die n-te Ziffer in der Dezimalentwicklung von $f(n)$.

Für jeder n, sei
$$
c_n=
\begin{cases}
2\ falls\ d_n \neq 2\\
5\ falls\ d_n = 2
\end{cases}
$$
deshalb ist $c_n$ immer anders als $d_n$.

$0.c_1\ c_2\ c_3... =: y$

Für jeden $n$, die n-te Ziffer in der dezimalentwicklung von $y$ ist $c_n \neq d_n$, die n-te Ziffer in der Dezimalentwicklung von $f(n)$ .

$\Rightarrow\forall_n y \neq f(n)$

$\Rightarrow f$ ist nicht wurjektiv. Widerspruch

$\Rightarrow$ Surjeketion $\mathbb{N} \rightarrow \mathbb{R}$ existiert nicht

$\Rightarrow$ $\vert \mathbb{N} \vert < \vert \mathbb{R} \vert$

q.e.d

<font color=#0000CD>对角论证法，目的是为了证明$\mathbb{N}$到$[0,1)$的满射不成立。</font>

&nbsp;

## Reelle Zahlen und Vektoren

**<font color=#ff0000>Definition 2.1: </font>**

Ein Körper (F, +, ·) ist eine Menge F mit zweo Operationen +,· , sodass,

(1) $\forall_{x,y,z \in F}\ (x+y)+z=x+(y+z)$

(2) $\forall_{x,y}\ x+y=y+x$

(3) $\exists_0 \forall_x\ x+0=0+x=x$

(4) $\forall_x \exists_y\ x+y=y+x=0$

(5) $\forall_{x,y,z}\ (x·y)·z=x·(y·z)$

(6) $\forall_{x,y}\ x·y=y·x$

(7) $\exists_{1 \in F} \forall_{x \neq 0}\ x·1=1·x=x$

(8) $\forall_{x \neq 0} \exists_y\ x·y=y·x=1$

(9) $\forall_{x,y,z}\ x·(y+z)=x·y+x·z$

&nbsp;

Ein Körper heißt **angeordnet**, falls es eine relation < gibt, sodass:

(1) für jeden $x$ gilt genau eins der folgenden: $x>0$ oder $x<0$ oder $x=0$

(2) $\forall_{x,y \in F}\ x,y>0 \Rightarrow x+y>0;\ x·y>0$

(3) $\forall_{x,y \in F}\ x>y\ \Leftrightarrow\ x-y>0$

**Beispiele:** $\mathbb{N}$ und $\mathbb{Z}$ sind keine Körper, $\mathbb{Q}, \mathbb{R}\text{ und } \mathbb{C}$ sind Körper. $\mathbb{Q}$ und $\mathbb{R}$ sind angeordnet.

&nbsp;

Man schreibt:

$[a,b]=\{x\ |\ a\leq x \leq b\}$ (geschlossenes Intervall)

$(a,b)=\{x\ |\ a<x<b\}$ (offenes Intervall)

analog bei halboffenen Intervallen ( $[a, b); (a, b]$ )

&nbsp;

**<font color=#ff0000>Definition 2.2: (obere Schranke) </font>**

Eine Zahl $x$ heißt **obere Schranke** einer Teilmenge $A$ von $\mathbb{R}$, falls $\forall_{y \in A}\ x \geq y$.

$A$  heißt **nach oben beschränkt**, falls $A$ eine obere Schranke hat.

Analog definiert man untere Schranke.

&nbsp;

**<font color=#ff0000>Definition 2.3: </font>**

Eine Zahl $x$ heißt Maximum einer Teilmenge $A$ von $\mathbb{R}$, falls $x \in A$ und ist eine obere Schranke von $A$. 

Anolog definiert man das Minimum einer Teilmenge. 

**<font color=#ff0000>Eine Menge kann nach oben beschränkt sein, aber kein Maximum haben. </font>**

Z.B.:
$M = (a, b) \text{ mit }a, b \in R, a < b$

&nbsp;

**<font color=#ff0000>Definition 2.4:(Supremum)  </font>**

Eine reelle Zahl $x$ heißt Supremum(上确界) einer Teilmenge $A$ von $\mathbb{R}$, falls $x=min\{\text{obere Schranken von A}\}$.

Wir schreiben $sup(A)$.

Konventionen:

$sup(\emptyset)=-\infty$

$sup(A)=\infty$, falls $A$ nicht nach oben beschränkt ist.

&nbsp;

**<font color=#ff0000>Definition 2.5:  </font>**

Ein angeordneter Körper heißt **vollständig**, falls jede nicht leere nach oben beschränkte Teilmenge ein Supremum besitzt.

Beispiel: $\mathbb{Q}$ ist nicht vollständig. (Übung)(搞定)

&nbsp;

**<font color=#ff0000>Axiom 2.6 (Vollständigkeit):  </font>**

$\mathbb{R}$ ist vollständig.

&nbsp;

**Analog zu oberer Schranke, Maximum und Supremum definieren wir untere Schranke, Minimum und Infimum.** 

Man schreibt: $inf(M)$

Konvention:

$inf(\emptyset) = \infty$

$inf(M) = −\infty$, falls $M$ nach unten unbeschränkt ist.

&nbsp;

**05.11.2000**

Vorlesung 2

Thema: Mengen in $\mathbb{R}$, Vektorräme über $\mathbb{R}$ und ein paar wichtige Ungleichungen

&nbsp;

**<font color=#ff0000>Satz 2.7: (Eigenschaften des Supremums)</font>**

Seien A und B beschränkte nicht leere Teilmengen von $\mathbb{R}$,

* $sup(A + B) = sup(A) + sup(B)$ für $  A + B = \{a + b : a \in A, b \in B\}$
* Falls $\lambda \geq0$, dann $sup(\lambda \cdot A)=\lambda sup(A)$, wenn $\lambda \cdot A=\{\lambda \cdot x\ :\ x \in A\}$
* Falls $A,B \subseteq [0,\infty)$, dann $sup(A\cdot B)=sup(A) \cdot sup(B)$, wenn $A \cdot B=\{a \cdot b\ :\ a \in A, b \in B\}$
* Falls $A \subseteq B$, $sup(A) \leq sup(B)$

&nbsp;

Wir definieren

$inf(A):=-sup(-A)$, wenn $A=\{x\ :\ x \in A\}$

die selben Regeln gelten auch für das Infimum außer dass:

Falls $A \subseteq B$, $inf(A) \geq inf(B)$

&nbsp;

### Offene und abgeschlossene Mengen in $\mathbb{R}$:

**<font color=#ff0000>Definition 2.8:</font>**

Sei $x \in \mathbb{R}$, dann ein offenes Interval $(a,b)$ heißt **Umgebung** von $x$, falls $x \in(a,b)$.

&nbsp;

**<font color=#ff0000>Definition 2.9:</font>**

$A \in \mathbb{R}$ heißt **offen**, falls $\forall_{x \in A}\ \exists_{I_x\ \text{(Umgebung von x)}}\ I_x \in A$.

&nbsp;

**<font color=#ff0000>Definition 2.10:</font>**

Eine Menge $A$ heisst **abgeschlossen**, falls $\mathbb{R}\ \backslash\ A$ offen ist.

Beispiele:

(1) $\mathbb{R}$ ist offen, dabei ist $\emptyset$ abgeschlossen.

(2) $\emptyset$ ist offen, dabei ist $\mathbb{R}$ abgeschlossen.

(3) Jedes offene Interval ist offen.

(4) Eine Vereinigung offenen Mengen ist offen.

(5) Jedes abgeschlossene Interval ist abgeschlossen.

(6) Jede endliche Menge ist abgeschlossen.

(7) Für $a <b$, $\ [a,b)=\{x\ :\ a\leq x<b\}$ ist weder offen noch abgeschlossen.

(8) $\mathbb{Q}$ ist weder offen noch abgeschlossen.

Übung:

(a) beweise diese Aussagen

(b) beweise, dass $\mathbb{R}$ und $\emptyset$ die einzigen Mengen die gleichzeitig offen und abgeschlossen sind.

&nbsp;

**<font color=#ff0000>Der Vektorraum $\mathbb{R}^n$: </font>**

$\mathbb{R}^n:=\{(n_1,...,n_n)\ :\ n_1,...,n_n \in \mathbb{R}\}$

mit den Operationen:

$(x_1,...,x_n)+(y_1,...,y_n)=(x_1+y_1,...,x_n+y_n)$

für $\gamma \in \mathbb{R}$

$\gamma \cdot (x_1,...,x_n)=(\gamma x_1,...,\gamma x_n)$

und das Skalarprodukt

$(x_1,...,x_n) \cdot (y_1,...,y_n):=\sum^n_{k=1}\ x_k \cdot y_k \in \mathbb{R}$

das Skalarprodukt wird auch $\langle x,y \rangle$ geschrieben.

&nbsp;

Wir definieren **<font color=#ff0000>dasEuclidische Norm</font>**:

$\Vert (x_1,...,x_n)\Vert :=\sqrt{(x_1,...,x_n) \cdot (x_1,...,x_n)}=\sqrt{ \sum^n_{k=1}\ x^2_k}$

&nbsp;

**<font color=#ff0000>Eigenschaften des Skalarproduktes:</font>**

(1) $\forall_{\overline{x}, \overline{y} \in \mathbb{R}^n}\ \overline{x} \cdot \overline{y}=\overline{y} \cdot \overline{x}$

(2) $(\alpha \overline{x} )\cdot \overline{y}=\overline{x}\cdot (\alpha \overline{y})=\alpha (\overline{x}\cdot \overline{y})$ für jede $\alpha \in \mathbb{R}$ und $\overline{x}, \overline{y} \in \mathbb{R}^n$

(3) $\forall_{\overline{x}, \overline{y}, \overline{z}\in \mathbb{R}^n}\ (\overline{x}+\overline{y})\cdot \overline{z}=\overline{x} \cdot \overline{z} + \overline{y} \cdot \overline{z}$

(4) $\forall_{\overline{x} \in \mathbb{R}^n}\ \overline{x} \cdot \overline{x} \geq 0$ und ist positiv, falls $\overline{x} \neq \overline{0}$

Übung: Beweise diese Aussage

&nbsp;

### Ungleichungen:

Hier beweisen wir einige wichtige Ungleichungen.

&nbsp;

**<font color=#ff0000>Lemma 2.12: (Cauchy-Schwarz-Ungleichung)(柯西不等式)</font>**

$\vert \langle \overline{x}, \overline{y}\rangle\vert =\vert \overline{x} \cdot \overline{y} \vert \leq \Vert \overline{x} \Vert \cdot \Vert \overline{y} \Vert$

Gleichheit gilt, genau dann wenn es $\alpha \in \mathbb{R}$ existiert, so dass $x=\alpha y$ oder $y=\alpha x$.

<font color=#0000cd>当且仅当, x和y平行的时候, 即存在$\alpha \in \mathbb{R}$, 满足$x=\alpha y$或者$y=\alpha x$</font>

&nbsp;

Beweis:

Nehmen an, dass beide $x$ und $y$ nicht null sind. Dann definieren wir 
$$
\overline{z}=\overline{x} \frac{\overline{x} \cdot \overline{y}}{\overline{x} \cdot \overline{x}} \text{ und } \overline{w}=\overline{y}-\overline{z} \text{.}
$$
Dann $\overline{x} \cdot \overline{w} = \overline{x} \cdot \overline{y} - \overline{x} \cdot \overline{z}=\overline{x} \cdot \overline{y}-\overline{x} \cdot \overline{x} \frac{\overline{x} \cdot \overline{y}}{\overline{x} \cdot \overline{x}}=0$, und $\overline{z} \cdot \overline{w}=\frac{\overline{x} \cdot \overline{y}}{\overline{x} \cdot \overline{x}} \cdot \overline{x} \cdot \overline{w}=0$.

Jetzt $\overline{x} \cdot \overline{z} =\overline{x} \cdot \overline{x} \frac{\overline{x} \cdot \overline{y}}{\overline{x} \cdot \overline{x}}=\overline{x} \cdot \overline{y}$ also $(\overline{x} \cdot \overline{y})^2=(\overline{x} \cdot \overline{z})^2$ und $\overline{y} \cdot \overline{y}=(\overline{z} + \overline{w}) \cdot (\overline{z} + \overline{w})=\overline{z} \cdot \overline{z}+\overline{w} \cdot \overline{w}+2\overline{z} \cdot \overline{w}=\overline{z} \cdot \overline{z}+\overline{w} \cdot \overline{w}$.

und wir rechnen $(\overline{x} \cdot \overline{x})(\overline{y} \cdot \overline{y})=(\overline{x} \cdot \overline{x})(\overline{z} \cdot \overline{z}+\overline{w} \cdot \overline{w})=(\frac{\overline{x} \cdot \overline{y}}{\overline{x} \cdot \overline{x}})^2(\overline{x} \cdot \overline{x})^2+(\overline{x} \cdot \overline{x})(\overline{w} \cdot \overline{w})$.

Weil $\overline{x} \cdot \overline{x} \geq 0$ und $\overline{w} \cdot \overline{w} \geq 0$ sind, ist $(\overline{x} \cdot \overline{x})(\overline{w} \cdot \overline{w}) \geq 0$.

Deshalb gilt $\Vert x \Vert^2 \Vert y \Vert ^2=(\overline{x} \cdot \overline{x})(\overline{y} \cdot \overline{y}) \geq (\frac{\overline{x} \cdot \overline{y}}{\overline{x} \cdot \overline{x}})^2(\overline{x} \cdot \overline{x})^2=(\overline{x} \cdot \overline{y})^2$.

Also $\vert \langle \overline{x},\overline{y} \rangle \vert \leq \Vert \overline{x} \Vert \cdot \Vert \overline{y} \Vert$, und Gleichheit gilt genau dann, wenn $\overline{w} = 0$, dass $\overline{y}=\text{(etwas)} \cdot \overline{x}$ ist.

q.e.d

&nbsp;

**<font color=#ff0000>Lemma 2.13: (Dreiecksungleichung)</font>**

$\forall_{\overline{x}, \overline{y} \in \mathbb{R}}, \Vert \overline{x}+ \overline{y} \Vert \leq \Vert \overline{x} \Vert + \Vert \overline{y} \Vert$.

(图解)

Beweis:

$\Vert \overline{x}+ \overline{y} \Vert = (\overline{x}+ \overline{y}) \cdot (\overline{x} + \overline{y})=\overline{x} \cdot \overline{x} + \overline{y} \cdot \overline{y} + 2\overline{x} \cdot \overline{y} \leq \overline{x} \cdot \overline{x} + \overline{y} \cdot \overline{y} +2\Vert\overline{x} \Vert \Vert \overline{y}\Vert = \Vert \overline{x} \Vert^2 + \Vert \overline{y} \Vert^2+2\Vert\overline{x} \Vert \Vert\overline{y} \Vert $

$= [\Vert\overline{x} \Vert + \Vert\overline{y} \Vert]^2 \Rightarrow \Vert\overline{x} + \overline{y}\Vert \leq \Vert\overline{x} \Vert + \Vert\overline{y} \Vert$.

q.e.d

Gleichheit gilt wenn $xy \geq 0$.

Wenn $n=1$, bedeutet die Dreiecksgleichung, dass $\vert x+y \vert \leq \vert x \vert + \vert y \vert$ für jede $x,y \in \mathbb{R}$.

**Übung**: Umgekehrte Dreiecksungleichung: $|x − y| \geq \vert| x|−|y| \rvert $

&nbsp;

**<font color=#ff0000>Lemma 2.14: (Ungleichung zwischen geometrischen und arithmetischem Mittel) (几何平均数小于等于算术平均数&&基本不等式)</font>**

Seien $x, y \geq 0 \in \mathbb{R}$, dann $\sqrt{x \cdot y} \leq \frac{x+y}{2}$.

Beweis:

Seien $\overline{z},\overline{w} \in \mathbb{R}$ so $\overline{z}=(\sqrt{x}, \sqrt{y}), w=(\sqrt{y}, \sqrt{x})$.

$2\sqrt{x}\sqrt{y}=\overline{z} \cdot \overline{w} \leq \Vert \overline{z} \Vert \cdot \Vert \overline{w} \Vert = x+y \Rightarrow \sqrt{x \cdot y} \leq \frac{x+y}{2}$

&nbsp;

## Komplexe Zahlen

Eine Komplexe Zahl $z$ kann definiert werden mit einem Paar $z=(x,y)\ \  x,y \in \mathbb{R},z=x+iy, \mathbb{C}=\{z=x+iy\ :\ x,y \in \mathbb{R}\}, x=Re(z), y=Im(z)$.

Dabei gilt: $i^2=-1$

<font color=#0000cd>虚数的定义</font>

&nbsp;

Addition: 

$(x_1+iy_1)+(x_2+iy_2)=(x_1+x_2)+i(y_1+y_2)$.

&nbsp;

Multiplication:

$(x_1+iy_1) \cdot (x_2+iy_2)=(x_1 \cdot x_2-y_1\cdot y_2)+i(x_1 \cdot y_2 + x_2 \cdot y_1)$

&nbsp;

$\mathbb{C}$ ist wie $\mathbb{R}$ ein Körper, aber nicht angeordnet. (Übung)

&nbsp;

Für $z \in \mathbb{C}$ definieren wir den Betrag $\vert z \vert = \sqrt{x^2+y^2}$.

&nbsp;

## Folgen

**Definition 3.1:**

Sei $M$ eine Menge (z.B. $M=\mathbb{R}$ oder $\mathbb{R}^n$). Eine Folge mit Werten in $M$ ist eine Abbildung $\mathbb{N}^{+} \rightarrow M$ (oder $\mathbb{N} \rightarrow M$). Wir schreiben $x_{1}, x_{2}, x_{3} \ldots$ oder $x_{0}, x_{1}, x_{2} \ldots$.

Eine Folge kann explizit gegeben sein, z.B.: $x_{n}=2^{n}$ oder rekursiv z.B.: $x_{n+1}=2 x_{n}, x_{0}=1$.



**Definition 3.2:**

Eine Folge heißt monoton wachsend, falls $\forall n x_{n} \leq x_{n+1}$.

Eine Folge heißt streng monoton wachsend, falls $\forall n x_{n}<x_{n+1}$.

Analog definiert man monoton fallende byw. streng monoton fallende Folgen.



**Definition 3.3 (Grenzwert einer Folge):**

Sei $\left(x_{n}\right)_{n \in \mathbb{N}}$ eine reelle Folge. Eine Zahl $x \in \mathbb{R}$ heißt **Grenzwert (oder Limes)** von $\left(x_{n}\right)_{n \in \mathbb{N}}$, falls er zu jedem $\varepsilon>0$ ein $\mathbb{N}$ gibt, so dass $\left|x_{n}-x\right|<\varepsilon$ für alle $n \geq \mathbb{N}$.

Man sagt: $\left(x_{n}\right)$ konvengiert gegen $x$.

Man schreibt:
$$
x_{n} \underset{n \rightarrow \infty}{\rightarrow} x
$$
oder $x=\lim _{n \rightarrow \infty} x_{n}$

**Bsp.:** Die Folge $x_{n}=\frac{1}{n}$ konvergiert gegen $x=0$. Wähle zu $\varepsilon>0$ ein $N$, so dass $N>\frac{1}{\varepsilon}$, dann gilt für $n \geq N:\left|x_{n}-0\right|=x_{n}=\frac{1}{n} \leq \frac{1}{N} \leq \varepsilon$ und $(3.3)$ erfüllt.

**Bsp.:** Die Folge $x_{n}=(-1)^{n}$hat keinen Grenywert. Gibt man $\varepsilon \leq 1$ so gilt für jedes $x \in \mathbb{R}$ entweder $|1-x| \geq \varepsilon$ oder $|(-1)-x| \geq \varepsilon$, d.h. $(3.3)$ kann nicht erfüllt werden.



**Satz 3.4:** 

Jede reelle Folge $(x_n)$ hat höchstens einen Grenzwert.

**Beweis:** Falls $x_{n} \rightarrow_{n \rightarrow \infty} x$ und $x_{n} \rightarrow_{n \rightarrow \infty} y$, so gibt es zu jedem $\varepsilon>0$ ein $\mathbb{N}$ mit $|x-y| \leq\left|x-x_{n}\right|+\left|x_{n}-y\right| \leq 2 \varepsilon\ , \forall n \geq N \Rightarrow x=y$.

**Bsp.:** Sei $x \in[0,1]$ mit Dezimaldarstellung $x=0 . d_{1} d_{2} d_{3 \cdots}$ und $x_{n}=0 . d_{1} d_{2} \ldots d_{n}, n=1,2,3 \dots$

Dann gilt $x_n \rightarrow_{n \rightarrow \infty} x$, da $\left|x_{n}-x\right| \leq 10^{-N}$ für $n \geq N$.



**Lemma 3.5:**

$(x_n)$ und $(y_n)$ seien Folgen mit $x_n \rightarrow x$ und $y_n \rightarrow y$. Falls $x_n \leq y_n \forall n$, so gilt $x \leq y$

Beweis. Übung

Bsp.: $x_{n}=\frac{1}{n^{2}}, y_{n}=\frac{1}{n}, n=1,2, \ldots$. Dann gilt $x=y=0$.



**Bemerkung:**

Die Folge, ob eine vorgegebene rekursiv definierte Folge $(x_n)$ konvergiert, kann schwierig sein.

**Berühmtes Beispiel(Collatz-Problem): (Lothar Collatz 1937)**

Definiere $(x_n)$ durch:
$$
x_{n+1}=\left\{\begin{array}{l}
\frac{x_{n}}{2}, \text { falls gerade } \\
3 x_{n}+1, \text { falls ungerade und } x_{n} \neq 1 \\
1, \text { falls } x_{n}=1
\end{array}\right.
$$
z.B. mit $\mathrm{x}=100: x_{2}=50, x_{3}=25, x_{4}=76, x_{5}=38, x_{6}=19, x_{7}=58, x_{8}= 29, x_{9}=88, x_{10}=44, x_{11}=22, x_{12}=11, $

$x_{13}=34, x 14=17, x_{15}=52, x_{16}= 26, x_{17}=13, x_{18}=40 x_{19}=20, x_{20}=10, x_{21}=5, x_{22}=16, x_{23}=8, x_{24}=4,$

$ x_{25}= 2, x_{26}=1$

Collatz-Vermutung:

Für jedes $x_{1} \in \mathbb{N}$ konvergiert $(x_n)$ gegen 1.



**Satz 3.6 (Einschliessung):**

Seien $(x_n)$ und $(y_n)$, Folgen mit $x_{n} \rightarrow x$ und $y_{n} \rightarrow x$ und $x_{n} \leq y_{n} \forall n$,

Ist $(w_n)$ eine weitere Folge mit $x_{n} \leq w_{n} \leq y_{n} \forall n$ so gilt auch $w_n \rightarrow x$.

Beweis. Übung

Bsp.:

$w_{n}=\frac{1}{n+n \log (n)+\frac{7}{13} n^{17}}$. Wissen $n \log n+\frac{7}{13} n^{17} \geq 0 \forall n$

$0 \leq w_{n} \leq x_{n}=\frac{1}{n} \Rightarrow w_{n} n \stackrel{\rightarrow}{\rightarrow} \infty 0$



**Definition 3.7:**

Wir sagen, $(x_n)$ geht gegen $+ \infty$ falls es zu jedem $c > 0$ ein $N \in \mathbb{N}$ mit $x_{n} \geq C \forall n \geq N(3.6)$

$(x_n)$ geht gegen $- \infty$, falls $(-x_n)$ gegen $+ \infty$ geht.

Bsp.: Die Folge $x_{n}=2^{n}, n \in \mathbb{N}$, geht gegen $+ \infty$

Eine Folge heißt **beschränkt**, falls es $K>0$ gibt, so dass $\left|x_{n}\right| \leq K \forall n$.



**Satz 3.8:**

Jede konvergierte Folge ist beschränkt. (Konvergierte Folge soll heißen: $x_{n} \rightarrow x$ für ein $x \in \mathbb{R}$, siehe Def 3.1)



**Satz 3.9 (Rechnenreglen für Grenzwerte):**

Seien $\left(x_{n}\right),\left(y_{n}\right)$ Folgen mit $x_{n} \rightarrow a$ und $y_{n} \rightarrow b$, so gilt $x_{n}+y_{n} \rightarrow a+b, x_{n}-y_{n} \rightarrow a-b, x_{n} \cdot y_{n} \rightarrow a \cdot b$ und $\frac{x_{n}}{y_{n}} \rightarrow \frac{a}{b}$, falls $b\neq 0$

Beweis:

(1) +: Sei $\epsilon>0$ und sei $N$ so groß, dass für jeden $n>N$, $\left|x_{n}-x\right|<\epsilon / 2$ und $\left|y_{n}-y\right|<\epsilon / 2$. Dann, für jeden $n>N$, $\left|\left(x_{n}+y_{n}\right)-\right|(x_n-y_n) \mid<\epsilon$.

(2) ·: Sei $\epsilon>0$, und nehme an, dass $\epsilon<1 / 3$. Sei $N$ so groß, dass für jeden $n>N$, folgendes gilt:

​		(a) $\left|x_{n}-x\right|,\left|y_{n}-y\right|<\epsilon$

​		(b) $\left|x_{n}-x\right|<\frac{\epsilon}{2(|y|+\epsilon)}$ und $\left|y_{n}-y\right|<\frac{\epsilon}{2(|x|+\epsilon)}$

​		Dann, für $n>N$
$$
\left|x_{n} \cdot y_{n}-x \cdot y\right|=\left|x_{n} \cdot y_{n}-x \cdot y_{n}+x \cdot y_{n}-x \cdot y\right|=\left|\left(x_{n}-x\right) \cdot y_{n}+x \cdot\left(y_{n}-y\right)\right|
$$

$$
\leq\left|y_{n}\right| \cdot \frac{\epsilon}{2(|y|+\epsilon)}+|x| \cdot \frac{\epsilon}{2(|x|+\epsilon)} \leq \epsilon
$$

(3) -:Ünung

(4) /: Übung

Bsp.:
$$
x_{n}=\frac{n^{2}-\log n}{n^{2}+2 n+1}
$$

$$
x_{n}=\frac{1-\frac{\log n}{n^{2}}}{1+\frac{2}{n}+\frac{1}{n^{2}}} n \stackrel{\rightarrow}{\rightarrow} 1
$$

da $$1-\frac{\log n}{n^{2}} n \rightarrow \infty 1,1+\frac{2}{n}+\frac{1}{n^{2}} n \stackrel{\rightarrow}{\rightarrow} \infty 1$$



**Satz 3.10:**

Jede monoton wachsende und beschränkte Folge ist konvergiert und es gilt $\lim _{n \rightarrow \infty} x_{n}=\sup _{n} x_{n}$ wobei $\sup _{n} x_{n}:=\sup (M)$ wobei $M=\left\{x_{n}: n \in \mathbb{N}\right\}$

Beweis: Für jedes $\varepsilon>0$ gibt es $N \in \mathbb{N}$ so dass $s-\varepsilon<x_{N}$, andernfalls wäre $s-\varepsilon$ eine obere Schranke von $M$ und $s$ wäre die kleinste obere Schranke. Für $n \geq N$ gilt $s-\varepsilon<x_{N} \leq x_{n} \leq s$, da die Folge monoton wachsend ist und $s$ eine obere Schranke ist. Damit gilt $x_{n} \rightarrow s$.

<font color=#0000cd>这里的$s$指的是$sup(x_n)$</font>

Analog gilt, dass jede beschränkte monoton fallende Folge gegen ihre Infinmum konvergiert.

Bsp.: $x_{1}>0, x_{n+1}=\sqrt{x_{n}}$ Falls $x \geq 1$ so ist $(x_n)$ monoton fallend, falls $x_{1}<1$, so ist $(x_n)$ monoton wachsend. In beiden Fällen gilt $x_{n} \stackrel{n \rightarrow \infty}{\rightarrow} 1$



**Beschränkte Folgen, Limes superior und Limes inferior**

Sei $(x_n)$ eine **beschränkte** Folge reeller Zahlen.

Betrachte $\overline{x_{n}}=\sup _{k \geq n} x_{k}, \underline{x_{n}}=\inf _{k \geq n} x_{k}$

Dann ist $\left(\overline{x_{n}}\right)$ monoton fallend und $\left(x_{n}\right)$ monoton wachsend. Also existieren nach Satz 3.10 die beiden Grenzwerte. $\limsup _{n \rightarrow \infty} x_{n}:=\lim _{n \rightarrow \infty} \overline{x_{n}}$ und $\liminf _{n \rightarrow \infty} \underline{x_{n}}$ die wir als limes superior bzw. limes inferior von $(x_n)$ bezeichnen.

Aus $\underline{x}_{n} \leq \bar{x}_{n}$ folgt:
$$
\liminf _{n \rightarrow \infty} x_{n} \leq \limsup _{n \rightarrow \infty} x_{n}
$$

**Definition 3.11 (Häufungspunkt)**:

Ist $\left(x_{n}\right)$ reellwertige Folge und $n_{1}<n_{2}<n_{3}<$$n_{4} \ldots, n_{k} \in \mathbb{N}, \forall k$ so heißt $x_{n_k}$ Teilfolge von $(x_n)$. $x$ heißt Häufungspunkt von $(x_n)$, falls es eine Teilfolge $(x_{n_k})$ gibt mit $\lim _{k \rightarrow \infty} x_{n_{k}}=x$.

Beispiel:
$$
x_{n}=(-1)^{n}, n \in \mathbb{N}
$$
Die Häufungspunkte von $(x_n)$ sind $+1$ und $-1$.



**Satz 3.12 (Bolzano-Weierstrass):**

Gegeben sei eine beschränkte reellewertige Folge $(x_n)$. **Dann sind Limes superior und Limes inferior maximaler bzw. minimaler Häufungspunkt der Folge.**

Weiter gilt:
$$
x_{n} \stackrel{n \rightarrow \infty}{\longrightarrow} x \Leftrightarrow \liminf _{n \rightarrow \infty} x_{n}=\limsup _{n \rightarrow \infty} x_{n}=x\ \ \ \ \ \ (3.1)
$$
<font color=#0000cd>下面那个是推广, 上面那个也很重要.</font>



**Beweis:** 

Müssen drei Dinge zeigen:

(1) Limes superior und Limes inferior sind Häufungspunkte.

(2) Jeder Häufungspunkt $x$ liegt in $\left[\liminf _{n \rightarrow \infty} x_{n}, \limsup _{n \rightarrow \infty} x_{n}\right]$

(3) $(3.1)$ gilt



**Zu (1):** 

Definiere für $k=1,2,3 \ldots$ rekursiv $n_{1}=1<n_{2}<n_{3}<\ldots$ so dass
$$
\overline{x_{n_{k}+1}}=\sup _{n>n_{k}} x_{n}-\frac{1}{k} \leq x_{n_{k+1}} \leq \sup _{n>n_{k}} x_{n}=\overline{x_{n_{k}+1}}
$$

$$
\bar{x}_{n_{k}+1}-\frac{1}{k}=\sup _{n>n_{k}} x_{n}-\frac{1}{k} \leq x_{n_{k+1}} \leq \sup _{n>n_{k}} x_{n}=\bar{x}_{n_{k}+1}
$$

<font color=#0000cd>下面的是另外一个Skript里面的, 我觉得这个其实才是对的</font>

Lassen wir $k \rightarrow \infty$ gehen. so erhalten wir(durch Einschließung):
$$
\lim _{k \rightarrow \infty} x_{n_{k}}=\lim _{k \rightarrow \infty} \overline{x_{n_{k}+1}}=\limsup _{n \rightarrow \infty} x_{n}
$$
d.h. die so konstruierte Teilfolge $(x_{n_k})$ konvergiert gegen den Limes superior von $(x_n)$. Dieser ist daher Häufungspunkt von $(x_n)$.

Der Beweis, dass Limes inferior ein Häufungspunkt von $(x_n)$ ist, geht analog.



**Zu (2):**

Für jede Teilfolge $x_{n_k}$ gilt
$$
\inf _{n \geq n_{k}} x_{n} \leq x_{n_{k}} \leq \sup _{n \geq n_{k}} x_{n}
$$
Falls $x_{n_{k}} \rightarrow_{k \rightarrow \infty} x$, d.h. falls die Teilfolge gegen den Häufungspunkt $x$ konvergiert, so bekommt man mit $k \rightarrow \infty$
$$
\liminf _{n \rightarrow \infty} x_{n} \leq x \leq \limsup _{n \rightarrow \infty} x_{n}
$$


**Zu (3):**

"$\Rightarrow$" in $(3.1)$ gilt, weil **jede** Teilfolge einer konvergierten Folge $(x_n)$ mit $x_{n} \rightarrow x$ gegen denselben Grenzwert $x$ konvergiert.

Für "$\Leftarrow$" führen wir einen Widerspruchsbeweis:

Wir nehmen an, dass 
$$
\limsup _{n \rightarrow \infty} x_{n}=\liminf _{n \rightarrow \infty} x_{n}=x
$$
aber dass $(x_n)$ **nicht** gegen $x$ konvergiert.

Dann gibt es für jedes $\varepsilon_{0}>0$ eine Teilfolge $(x_{n_k})$, sodass $\left|x-x_{n_{k}}\right|>\varepsilon_{0} \quad \forall k \in \mathbb{N}$.

Die Teilfolge $(x_{n_k})$ ist wie $(x_n)$ beschränkt und hat daher selber einen Häufungspunkt $\tilde{x}$. Dieser erfüllt nach Konstruktion $|\widetilde{x}-x|>\varepsilon_{0}>0$, also $\widetilde{x} \neq x$.

Also ist $\tilde{x}$ auch ein Häufungspunkt der ursprünglichen Folge $(x_n)$ und nach $(2)$ müsste
$$
x=\liminf _{n \rightarrow \infty} x_{n} \leq \widetilde{x} \leq \limsup _{n \rightarrow \infty} x_{n}=x
$$
 gelten.

so gilt Widerspruch.



Bsp.:

Betrachten die Folge $\left(x_{n}\right)=\left(0, \frac{1}{2}, 1,0, \frac{1}{4}, \frac{1}{2}, \frac{3}{4}, 1,0, \frac{1}{8}, \frac{1}{4}, \frac{3}{8}, \frac{1}{2}, \frac{5}{8}, \frac{3}{4}, \frac{7}{8}, 1,0, \frac{1}{16}, \ldots\right)$

Die Menge der Häufungspunkte isr $[0,1]$.

Es gilt: $\liminf _{n \rightarrow \infty} x_{n}=0, \limsup _{n \rightarrow \infty} x_{n}=1$



**Folgerung:**

Jeder beschränkte reellwertige Folge hat eine konvergente Teilfolge und damit auch einen Häufungspunkt.



**Satz 3.13 (Cauchys Kriterium für Konvergenz):**

Sei $(x_n)_n$ Folge. Dann konvergiert $(x_n)_n$ genau dann, wenn für jedes $\epsilon>0$ ein $N$ existiert, so dass
$$
\left|x_{n}-x_{m}\right|<\epsilon \quad \text { für alle } m, n>N
$$
Beweis:

$\Rightarrow$ : Sei $\epsilon>0$. $(x_n)_n$ konvergiert gegen einen Grenzwert $x$, also existieren ein $N$, so dass $\left|x_{n}-x\right|<\epsilon / 2$ für alle $n>N$ gilt. Dann gilt für alle $m, n>N$, dass $\left|x_{n}-x_{m}\right| \leq\left|x_{n}-x\right|+\left|x-x_{m}\right|<\epsilon$.

$\Leftarrow$ : Erst zeigen wir, dass  $(x_n)_n$ beschränkt ist. Sei $N$ so, dass $\left|x_{n}-x_{m}\right|<1$ für alle $m, n>N$. Dann ist $\max \left\{x_{1}, \ldots, x_{N}, x_{N+1}+1\right\}$$\max \left\{x_{1}, \ldots, x_{N}, x_{N+1}+1\right\}$ eine obere Schranke. Analog findet man eine untere Schranke. Da die Folge $(x_n)_n$ beschränkt ist, besitzt sie nach Satz 3.12 einen Häufungspunkt $x$. Sei nun $\epsilon>0$ beliebig und $N$ so groß, dass $\left|x_{n}-x_{m}\right|<\epsilon / 2$ für alle $m, n>N$. Wähle num $m>N$ so, dass $\left|x_{m}-x\right|<\epsilon / 2$ gilt(ein solches $m$ existiert, weil $x$ Häufungspunkt von $\left(x_{n}\right)_{n}$ ist). Dann gilt für jedes $n>N$,
$$
$\left|x_{n}-x\right| \leq\left|x_{n}-x_{m}\right|+\left|x_{m}-x\right|<\epsilon$
$$
Weil $\epsilon$ beliebig ist, konvergiert also $(x_n)_n$ konvergiert gegen $x$.

q.e.d



**Übung**

$(x_n)_n$ ist konvergiert $\Leftrightarrow\left(x_{n}\right)_{n}$ hat genau einen Häufungspunkt $\Leftrightarrow \limsup _{n \rightarrow \infty} x_{n}=\liminf _{n \rightarrow \infty} x_{n}$



## Reihen

**Definition 4.1**:

Einer Folge $(a_n)$ komplexer Zahlen ordnen wir die Folge $s_{n}=a_{0}+\ldots+a_{n}=\sum_{k=0}^{n} a_{k}$ zu und bezeichnen sie als **unendliche Reihe**, kurze **Reihe** mit den **Gliedern $a_n$** und die **Partialsummen** $s_n$.

Falls die Partialsummen $s_n$ konvergieren, d.h. $s_{n} \stackrel{n\rightarrow \infty}{\rightarrow}  s$, soheißt die Reihe konvergent und der Grenzwert $s$ heißt **Summe** oder **Wert** der Reihe. Wir schreiben $s=\lim _{n \rightarrow \infty} s_{n}:=\sum_{k=0}^{\infty} a_{k}$. Sind die Glieder reell und geht die Floge$(s_n)$ gegen $+\infty$(bzw. $-\infty$) os schreiben wir auch $\sum_{k=0}^{\infty} a_{k}=+\infty\left(b z w . \sum_{k=0}^{\infty} a_{k}=-\infty\right)$

**Beispiele**:

(1) Die **geometrische Reihe**. 

Für $z \in \mathbb{C}$ betrachten wir $s_{n}=\sum_{k=0}^{n} z^{k}$ (Konvention: $z^0=1$)

Es gilt $s_{n}=\frac{1-z^{n+1}}{1-z}$(等比数列求和公式)

Für $|z|<1$ gilt $\left|z^{n+1}\right| \stackrel{n\rightarrow \infty}{\rightarrow}  0$(da $\left|z^{n+1}\right|=|z|^{n+1}$) und damit $s_{n} \rightarrow s=\frac{1}{1-z}$

Also: $\sum_{k=0}^{\infty} z^{k}=\frac{1}{1-z}$ falls $|z|<1$

Für $z \in \mathbb{R},|z| \geq 1$ gilt $\sum_{k=0}^{\infty} z^{k}=\infty$(denn$s_{n} \geq n+1$)

**Bemerkung**: Für die Frage , **ob** eine Reihe konvergiert, spielen die ersten $n_0$ Glieder keine Rolle: Für $m \geq n_{0}$, $m$ beliebig, gilt, dass $\sum_{k=n_{0}}^{n} a_{k}$ konvergiert gdw. $\sum_{k=m}^{n} a_{k}$ konvergiert.

(2) Die **harmonische Reihe**

Sei $s_{n}=\sum_{k=1}^{n} \frac{1}{k}$.

Behauptung: $\sum_{k=1}^{\infty} \frac{1}{n}=\infty$

**Beweis**: Für $N=2^{j}$ gilt $s_{N}=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\frac{1}{5}+\ldots+\frac{1}{8}+\ldots+\frac{1}{2^{j-1}+1}+\ldots+\frac{1}{2^{j}}$

$\frac{1}{3}+\frac{1}{4} \geq \frac{1}{2}$

$\frac{1}{5}+\ldots+\frac{1}{8} \geq \frac{1}{2}$

$\frac{1}{2^{j-1}+1}+\ldots+\frac{1}{2^{j}} \geq \frac{1}{2}$

also $s_{n} \geq 1+\frac{j}{2}$ für $N=2^{j}$

Damit geht $(s_n)$ gegen $+\infty$



Falls $\sum_{k=0}^{\infty} a_{k}=a$ und $\sum_{k=0}^{\infty} b_{k}=b$ so gilt $\sum_{k=0}^{\infty}\left(a_{k}+b_{k}\right)=a+b\ (3.11)$

und $\sum_{k=0}^{\infty} c a_{k}=c \sum_{k=0}^{\infty} a_k=c \cdot a \forall c \in \mathbb{R}\ (3.12)$

(3.11) und (3.12) ergeben sich aus den entsprechenden Aussagen für Grenzwerte von Folgen.



Falls eine Reihe konvergent ist, d.h. $s_{n} \rightarrow s$ für ein $s \in \mathbb{C}$ so gilt für die Glieder $a_{n}=s_{n}-s_{n-1}=\left(s_{n}-s\right)+\left(s-s_{n-1}\right) \Rightarrow a_{n} \rightarrow 0$



**Satz 4.2(Notwendige Bedingung für die Konvergenz)**:

Ist eine Reihe konvergent, so muss gelten:
$$
\lim _{n \rightarrow \infty} a_{n}=0
$$
**Beweis. Übung. Hinweis: Satz 3.13**



**Satz 4.3**:

Ist $s_{n}=\sum_{k=0}^{n} a_{k}$ eine Reelle Reihe mit $a_{k} \geq 0 \forall k \in \mathbb{N}_{0}$, so ist $(s_n)$ konvergent gdw. $(s_n)$ beschränkt ist.

Beweis. $(s_n)$ ist monoton wachsend.



### Vergleichskriterien für Konvergenz

**Definition 4.4(Majorante)**:

Sei $s_{n}=\sum_{k=0}^{n} a_{k}$ eine Reihe mit Werten in $\mathbb{C}$. Eine Reihe $\sum_{k=0}^{n} b_{k}$(mit $b_{k} \in \mathbb{R}, \forall k$) mit $\left|a_{k}\right| \leq b_{k}$$\left|a_{k}\right| \leq b_{k}$ heißt **Majorante** von $\sum_{k=0}^{n} a_{k}$



**Satz 4.5(Majorantenkriterium)**:

Sei $s_{n}=\sum_{k=0}^{n} a_{k}$ eine Reihe mit Werten in $\mathbb{C}$, welche eine konvergente Majorante $\sum_{k=0}^{n} b_{k}$ besitzt. Dann ist $(s_n)$ konvergent und es gilt:
$$
\left|\sum_{k=0}^{\infty} a_{k}\right| \leq \sum_{k=0}^{\infty}\left|a_{k}\right| \leq \sum_{k=0}^{\infty} b_{k}
$$
**Beweis**:

Sei $\epsilon>0$ und $N$ so groß, dass
$$
\sum_{n=N}^{\infty} b_{k}<\epsilon
$$
Dann gilt für $m>n>N$
$$
\left|s_{n}-s_{m}\right|=\left|\sum_{k=n+1}^{m} a_{k}\right| \leq \sum_{k=n+1}^{m}\left|a_{k}\right| \leq \sum_{k=n+1}^{m} b_{k} \leq \sum_{k=N}^{\infty} b_{k}<\epsilon
$$
und mit Satz 3.13 ist die Aussage bewiesen.



**Definition 4.6**:

Eine Reihe die **nicht** konvergiert heißt divigent.

**Beispiele**:

(1) $\sum_{k=1}^{\infty} \frac{1}{k^{2}} \leq 2$, denn
$$
\begin{aligned}
\sum_{k=1}^{\infty} \frac{1}{k^{2}} &=1+\frac{1}{2^{2}}+\frac{1}{3^{2}}+\frac{1}{4^{2}} \ldots \\
& \leq 1+\frac{1}{1\cdot 2}+\frac{1}{2 \cdot3}+\frac{1}{3\cdot4}+\ldots \\
&=1+\sum_{k=1}^{\infty} \frac{1}{k(k+1)} \\
&=2
\end{aligned}
$$
mit Satz 4.3



(2) $\sum_{k=1}^{\infty} \frac{1}{\sqrt{k(k+1)}}=\infty$, denn
$$
\frac{1}{\sqrt{k(k+1)}}>\frac{1}{2 k} \forall k \in \mathbb{N}
$$

$$
\text{und wir wissen dass} \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ 
$$

$$
\sum_{k=1}^{\infty} \frac{1}{k}=\infty
$$

Das Argument des letzten Beispiels ist allgemein:

**Folgerung Divergente Minorante**:

Seien $\sum_{k=0}^{\infty} a_{k}, \sum_{k=0}^{\infty} b_{k}$ Reihen mit $0 \leq a_{k} \leq b_{k} \forall k$. Falls $\sum_{k=0}^{\infty} a_{k}$ divergent ist, so ist auch $\sum_{k=0}^{\infty} b_{k}$ divergent. Die Reihe $\sum_{k=0}^{\infty} a_{k}$ heißt in diesem Fall **divergente Minorante** von $\sum_{k=1}^{\infty} b_{k}$



Aus dem Vergleich mit der geometrischen Reihen erhalten wir das **Quotientenkriterium**.

**Satz 4.7 (Quotientenkriterium):**

Sei $\sum_{k=0}^{\infty} a_{k}$ eine Reihe mit Werten in $\mathbb{C}$. Die Reihe konvergiert falls es ein $q \in \mathbb{R}$ gibt mit $q<1$ und $n_{0} \geq 0$ gibt, sodass$\forall_{k} \geq n_{0} \frac{\left|a_{k+1}\right|}{\left|a_{k}\right|} \leq q$.

**Beweis**:

Das folgt aus dem Majorantenkriterium, da $\left|a_{k}\right| \leq\left|a_{n_{0}}\right| q^{k-n_{0}}$ für $k \geq n_{0}$.

Die Reihe $\sum_{k=n_{0}}^{\infty}\left|a_{n_{0}}\right| q^{k-n_{0}}$ ist also eine konvergente Majorante von $\sum_{k=n_{0}}^{n} a_{k}$.

**Beachte, dass es nicht genügt, dass $\frac{\left|a_{k+1}\right|}{\left|a_{k}\right|}<1$ gilt.**

**Beispiel**: Für die harmonische Reihe mit $a_{k}=\frac{1}{k}$ gilt:
$$
\frac{\left|a_{k+1}\right|}{\left|a_{k}\right|}=\frac{\frac{1}{k+1}}{\frac{1}{k}}=\frac{k}{k+1}<1
$$
aber wir wissen, dass sie divergent ist.



**Beispiel: Exponentialreihe**

Sei $z \in \mathbb{C}$ und $a_{k}=\frac{z^{k}}{k !}$. Wegen
$$
\frac{\left|a_{k+1}\right|}{\left|a_{k}\right|}=\frac{|z|^{k+1}}{(k+1) !} \frac{k !}{|z|^{k}}=\frac{|z|}{k+1} \text { gilt } \frac{\left|a_{k+1}\right|}{\left|a_{k}\right|} \leq \frac{1}{2} \forall k \geq 2|z|-1
$$
also ist die Reihe konvergent, $\forall z \in \mathbb{C}$. Sie definiert die **Exponentialfunktion**:
$$
\exp (z)=\sum_{k=0}^{\infty} \frac{z^{k}}{k !}\ (3.19)
$$
und $\exp : \mathbb{C} \rightarrow \mathbb{C}$

Falls $z \in \mathbb{R}$ gilt $\exp (z) \in \mathbb{R}$, wir können also exp auf $\mathbb{R}$ einschränken. Aus (3.19) folgt $\exp (0)=1$. Für $z=1$ bekommt man die Eulersche Zahl:

**Behauptung**: $e=\exp (1)$

Beweis: Zu zeigen ist:
$$
\lim _{n \rightarrow \infty}\left(1+\frac{1}{n}\right)^{n}=\sum_{k=0}^{\infty} \frac{1}{k !}(\text { sh. Übungen })
$$
Wir werden sehen, dass $\exp (x)=e^{x} \forall x \in \mathbb{R}$.



### Alternierende Reihen

Eine Reihen $\sum_{k=0}^{n} a_{k}$ heißt **alternierend**, wenn die Glieder abwechselnd positives und negatives Vorzeichen haben. Wir schreiben $a_{0}-a_{1}+a_{2}-a_{3}+a_{4} \ldots$ und nehmen an $a_{0} \geq 0$



**Satz 4.8 (Leibnitzkriterium)**:

Sei $\left(a_{n}\right)_{n \geq 0}$ eine monoton fallende Folge in $\mathbb{R}$ mit $a_{n} \stackrel{n\rightarrow \infty}{\rightarrow} 0$. Dann konvergiert die Reihe $\sum_{k=0}^{n}(-1)^{k} a_{k}$ und es gilt für alle $n \in \mathbb{N}$:
$$
\left|\sum_{k=0}^{\infty}(-1)^{k} a_{k}-s_{n}\right|=\left|\sum_{k=0}^{\infty}(-1)^{k} a_{k}-\sum_{k=0}^{\infty}(-1)^{k} a_{k}\right| \leq a_{n+1}
$$
**Beweis**:

Für $k \geq 1$ ist $a_{2 k}-a_{2 k-1} \leq 0$ und $a_{2 k}-a_{2 k+1} \geq 0$, also
$$
s_{2 k}=s_{2 k-2}-a_{2 k-1}+a_{2 k} \leq a_{2 k} \leq s_{2 k-2}
$$

$$
s_{2 k+1}=s_{2 k-1}+a_{2 k}-a_{2 k+1} \geq s_{2 k-1}
$$

also ist $\left(s_{2 k}\right)_{k \in \mathbb{N}}$ monoton fallend und $\left(s_{2 k-1}\right)_{k \in \mathbb{N}}$ monoton wachsend. Es gilt für all $k$:
$$
s_{1} \leq s_{2 k-1}=s_{2 k}-a_{2 k} \leq s_{2 k} \leq s_{0}
$$
und für $m \geq k$
$$
s_{1} \leq s_{2 k-1} \leq s_{2 m-1} \leq s_{2 m} \leq s_{2 k} \leq s_{0}(3.24)
$$
Also sind beide Teilfolge $\left(s_{2 k}\right)$ und $\left(s_{2 k-1}\right)$ beschränkt und damit konvergent, und für alle $k \in \mathbb{N}$ gilt:
$$
\begin{array}{l}
s_{2 k-1} \leq \lim _{m \rightarrow \infty} s_{2 m-1} \leq s_{2 k} \\
s_{2 k-1} \leq \lim _{m \rightarrow \infty} s_{2 m} \leq s_{2 k}
\end{array}
$$
Aus (3.24) folgt
$$
0 \leq\left|\lim _{m \rightarrow \infty} s_{2 m}-\lim _{m \rightarrow \infty} s_{2 m-1}\right| \leq a_{2k} \forall k
$$
also
$$
\lim _{m \rightarrow \infty} s_{2 m}=\lim _{m \rightarrow \infty} s_{2 m-1}
$$
da $a_{2 k} \rightarrow 0$

Sei $b:=\lim _{m \rightarrow \infty} s_{2 m-1}$ . Das für alle $n \in \mathbb{N}$ entweder $s_{n} \leq b \leq s_{n+1}$ oder $s_{n} \geq b \geq s_{n+1}$ folgt $0 \leq\left|b-s_{n}\right| \leq\left|s_{n}-s_{n+1}\right|=a_{n+1} \stackrel{n \rightarrow \infty}{\rightarrow}  0$, also $s_{n} \stackrel{n \rightarrow \infty}{\rightarrow}  b$.

**Beispiel**:

Die alternierende harmonische Reihe.

$\sum_{k=1}^{\infty}(-1)^{k} \frac{1}{k}$ ist nach dem Leibniz-Kriterium konvergiert: $\sum_{k=1}^{\infty}(-1)^{k} \frac{1}{k} \neq \infty$

Die Reihe $\sum_{k=1}^{\infty} \frac{1}{2 k}$ ist divergent, die Reihe $\sum_{k=1}^{\infty} \frac{1}{2 k-1}$ ebenfalls ($\sum_{k=1}^{\infty} \frac{1}{2 k}$ ist divergente Minorante).

Geben wir eine beliebige Zahl $a \in \mathbb{R}$ vor, so können wir durch Umordnen erreichen, dass die ungeordnete Reihe gegen $a$ konvvergiert.

z.B. für $a=1$:
$$
1-\frac{1}{2}+\frac{1}{3}+\frac{1}{5}-\frac{1}{4}+\frac{1}{7} \ldots
$$
wobei wir negativen Glieder summieren bis die Partialsumme $\leq 1$ ist, dann positive Glieder bis die Partialsumme $\geq 1$ ist.



**Definition 4.9(Absolute Konvergenz):**

Eine Reihe $\sum_{k=0}^{n} a_{k}$ mit $a_{k} \in \mathbb{C}$ heißt **absolut konvergent**, falls $\sum_{k=0}^{n}\left|a_{k}\right|$ konvergent ist.



Eine bijektive Abbildung $\sigma: \mathbb{N} \rightarrow \mathbb{N}$ heißt **Permutation** von $\mathbb{N}$.

**Satz 4.10(Umordnungssatz)**:

Eine Reihe $\sum_{k=1}^{n} a_{k}$ konvergiert genau dann absolut, wenn für jede Permutation $\sigma$ von  $\mathbb{N}$ die umgeordnete Reihe gegen denselben Wert konvergiert:
$$
\sum_{k=1}^{\infty} a_{\sigma(k)}=\sum_{k=1}^{\infty} a_{k}
$$


**Satz 4.11 (Doppelreihensatz)**:

Falls $\sum_{k=1}^{\infty} \sum_{j=1}^{\infty}\left|a_{k, j}\right|<\infty$(absolut konvergiert), so gilt:
$$
\sum_{k=1}^{\infty} \sum_{j=1}^{\infty} a_{k, j}=\sum_{j=1}^{\infty} \sum_{k=1}^{\infty} a_{k, j}
$$
Können wir das Produkt zweier konvergenter Reihen $\sum_{k=0}^{\infty} a_{k}, \sum_{k=0}^{\infty} b_{k}$ wieder als Reihen schrreiben?

Wollen also $(c_m)$ finden, so dass
$$
\sum_{k=0}^{\infty} a_{k} \cdot \sum_{j=0}^{\infty} b_{j}=\sum_{m=0}^{\infty} c_{m}
$$
wir rechenen:
$$
\begin{aligned}
\sum_{k=0}^{\infty} a_{k} \sum_{j=0}^{\infty} b_{j} & \\
&=\sum_{k=0}^{\infty} \sum_{j=0}^{\infty} a_{k} b_{j} \\
&=\sum_{m=0}^{\infty} \sum_{k, j, k+j=m}^{\infty} \\
&=\sum_{m=0}^{\infty} c_{m}
\end{aligned}
$$

$$
\text{mit dem Cauchy-Produkt: } c_{m}=\sum_{k=0}^{m} a_{k} b_{m-k}
$$

Dies gilt nur unter Vorraussetzungen...



**Beispiel 4.12**
$$
\exp (z)=\sum_{k=0}^{\infty} \frac{z^{k}}{k !}
$$
ist für jedes $z \in \mathbb{C}$ nach dem Quotientenkriteriumabsolut konvergent, denn $\frac{\frac{z^{k+1}}{(k+1) !}}{\left|\frac{z^{k}}{k !}\right|}=\frac{|z|}{k+1}  \stackrel{k\rightarrow\infty}{\rightarrow}  0$. Also dürfen wir das Cauchy-Produkt bilden und erhalten für alle $z, w \in \mathbb{C}$
$$
\begin{aligned}
\exp (z) \exp (w) &=\sum_{k=0}^{\infty} \sum_{j=0}^{k} \frac{z^{j} w^{k-j}}{j !(k-j) !)} \\
=& \sum_{k=0}^{\infty} \frac{1}{k !} \sum_{j=0}^{\infty}\left(\begin{array}{c}
k \\
j
\end{array}\right) z^{j} w^{k-j} \\
&=\exp (z+w)(4.1)
\end{aligned}
$$
Die Exponentialfunktion hat folgende Eigenschaften:

**Satz 4.13**:

(1) $\exp (-z)=\frac{1}{\exp (z)} \forall z \in \mathbb{C}$

(2) $\exp (z) \neq 0 \forall z \in \mathbb{C}(0$ steht für (0,0)$\in \mathbb{C}$

(3) $\exp (x)>0 \forall x \in \mathbb{R}\left(\exp (x)=e^{x} \forall x \in \mathbb{R}\right)$

(4) $\exp (n)=e^{n} \forall n \in \mathbb{N}$

(5) $\overline{\exp (z)}=\exp \bar{z} \forall z \in \mathbb{C}$

(6) Die reelle Exponentialfunktion $\exp : \mathbb{R} \rightarrow \mathbb{R}$ ist monoton wachsend, und für die komplexe Funktion gilt $|\exp (z)| \leq \exp (|z|) \forall z \in \mathbb{C}$

**Beweis**:

Aus $1=\exp (0)=\exp (z-z) \stackrel{(4.1)}{=} \exp (z) \exp (-z)$ folgen (1) und (2).

Aus der Definition der Exponentialfunktion folgt $\exp (x) \geq 1>0, \forall x \in \mathbb{R}, x \geq 0$.

Also folgt auch $\exp (-x)>0 \forall x<0$ wegen (1).

Eigenschaft (4) folgt wegen
$$
\exp (n)=\exp \left(\sum_{k=1}^{\infty} 1\right) \stackrel{(4.1)}{=} \prod_{k=1}^{n} \exp (1)
$$
Eigenschaft (5) folgt aus
$$
\exp (\bar{z})=\lim _{n \rightarrow \infty} \sum_{k=0}^{n} \frac{(\bar{z})^{k}}{k !}=\lim _{n \rightarrow n} \sum_{k=0}^{n} \frac{z^{k}}{k !}=\exp (z)
$$
(denn es gilt: $\lim _{n \rightarrow \infty} z_{n}$ falls $\left(z_{n}\right)$ konvergiert.)

Um Eigenschaft (6) zu zeigen, stellen wir fest, dass für $0 \leq x \leq y \in \mathbb{R}$ gilt: Ist $x \leq y \leq 0$ so ist $0 \leq-y \leq-x$ und wir haben
$$
\frac{1}{\exp (y)}=\exp (-y) \leq \exp (-x)=\frac{1}{\exp (x)}
$$
also $\exp (x) \leq \exp (y)$. Schließlich gilt
$$
|\exp (z)|=\left|\sum_{k=0}^{\infty} \frac{z^{k}}{k !}\right| \leq \sum_{k=0}^{\infty} \frac{|z|^{k}}{k !}=\exp (z)
$$



## Grenzwert von Funktionen und stetigkeit

**Definition 5.1 (Isolierter Punkt)**:

Sei $D \subseteq \mathbb{R}$. Sei $x_{0} \in D$. $x_0$ heißt **isoliert** in $D$, falls es keine Folge $(a_n)$ gibt, so dass $\lim a_{n}=x_{0}$ ind für jeden $n$, $a_{n} \in D \backslash\left\{x_{0}\right\}$.



**Definition 5.2(Grenzwert einer Funktion)**:

Sei $f$ reellwertige Funktion $f$ mit Definitionsbereich $D \subseteq \mathbb{R}$ (kurz: $f: D \rightarrow \mathbb{R}$). Sei $x_{0} \in D$. $a$ heißt der Grenzwert von $f$ in $x_0$. Schreibweise $a=\lim _{x \rightarrow x_{0}} f(x)$, falls $x_0$ nicht isoliert, und jede gegen $x_0$ konvergierende Folge $(a_n)$ in $D \backslash\left\{x_{0}\right\}$ erfült $\lim _{n \rightarrow \infty} f\left(a_{n}\right)=x_{0}$.



**Definition 5.3 (Stetige Funktionen)**:

Eine Reellwertige Funktion $f: D \rightarrow \mathbb{R}$ heißt **stetig** in einem Punkt $x_{0} \in D$, falls $\lim _{x \rightarrow x_{0}} f(x)=f\left(x_{0}\right)$, oder  $x_0$ ist isoliert. $f$ heißt stetig in $D$, falls $f$ stetig ist in $x$, $\forall x \in D$.



**Lemma 5.4 (Alternative Grenzwert definition)**:

Sei $D \subseteq \mathbb{R}$, sei $f: D \rightarrow \mathbb{R}$ und sei $x_{0} \in D$ nicht isoliert. $\lim _{x \rightarrow x_0} f(x)=a$ genau dann, wenn für jeden $\epsilon>0$ existiert $\delta>0$, so dass für jeden $x \in\left(x_{0}-\delta, x_{0}+\delta\right) \cap\left(D \backslash\left\{x_{0}\right\}\right)$, wir haben $|f(x)-a|<\epsilon$.



**Beweis**:

$\Rightarrow:$ Falls es einen $\epsilon$ gibt, so dass für jeden $\delta>0$ existiert $x_{\delta} \in\left(x_{0}-\delta, x_{0}+\right.\delta) \cap\left(D \backslash\left\{x_{0}\right\}\right)$ so dass $\left|f\left(x_{\delta}\right)-a\right| \geq \epsilon$, dann ist die Folge $\left(x_{1 / n}\right)$ ein Zeuge, dass $a$ nicht der Grenzwert ist.

$\Leftarrow :$ Sei $(a_n)$ gegen $x_0$ konvergierende Folge, und sei $\epsilon>0$. Sei $\delta>0$ so dass für jeden $x \in\left(x_{0}-\delta, x_{0}+\delta\right) \cap\left(D \backslash\left\{x_{0}\right\}\right)$, wir haben $|f(x)-a|<\epsilon$. Sei $N$ so groß, dass für jeden $n>N,\left|a_{n}-x_{0}\right|<\delta$. Dann für jeden $n>N$ haben wir $\left|f\left(a_{n}\right)-a\right|<\epsilon$ und deshalb $\lim _{n \rightarrow \infty} f\left(a_{n}\right)=a$.



**Beispiel**:
$$
f(x)=\left\{\begin{array}{l}
x, x \leq 0 \\
x+1, x>0
\end{array}\right.
$$
$f$ ist stetig in $x$, falls $x \neq 0$

$f$ ist nicht stetig in $x=0$

Wählt man $D=(-\infty, 0]$, so ist $f$ stetig in $D$

Wählt man $D=[0, \infty)$, so ist $f$ nach wir vor unstetig in $x=0$


$$
f(x)=\frac{1}{x}, x>0
$$
$f$ ist stetig in $(0,\infty)$, kann jedoch incht zu einer stetigen Funktion auf $[0, \infty)$ fortgesetzt werden.  (Da $f(x_n)$ gegen $\infty$ geht, falls $x_{n} \rightarrow 0$)



**Satz 5.5**:

Seien $f, g$ reellertige Funktionen mit Definitionsbereich $D$. Sind $f$ und $g$ stetig in $x$, für ein $x \in D$ so sind auch $f+g, f-g, f \cdot g$ stetig in $x$ und $\frac{f}{g}$ ist stetig in $x$ falls $g(x) \neq 0$.

**Beweis**:

后续补充



**Satz 5.6 (Die Exponentialfunktion ist stetig auf $\mathbb{C}$)**:

Das heißt, für jede Folge $\left(z_{n}\right)$ mit Werten in $\mathbb{C}$ und $\left|z_{n}-z\right| \stackrel{n \rightarrow \infty}{\rightarrow} 0$ so gilt:
$$
\left|\exp z_{n}-\exp z\right| \stackrel{n\rightarrow \infty}{\rightarrow} 0
$$
**Beweis**:

后续补充 Skript上有



**Satz 5.7(Komposition stetiger Funktionen)**:

Seien $f: D_{f} \rightarrow R$ und $g: D_{g} \rightarrow \mathbb{R}$ mit $f\left(D_{f}\right) \subseteq D_{g}(f(A)=\{f(x): x \in A\})$. Ist $f$ stetig in $x$ und $g$ stetig in $f(x)$, so ist $g \circ f: D_{f} \rightarrow \mathbb{R}$ stetig in $x$. Wir schreiben $g \circ f$ für die Funktion $(g \circ f)(x)=g(f(x))$.

**Beweis**: Übung



**Definition 5.8**:

Sei $f: D \rightarrow \mathbb{R}$. $f$ hat im Punkt $a \in D$ den linksseitigen Grenzwert $c$, d.h. $\lim _{x \rightarrow a^{-}} f(x)=c$

Falls $f\left(x_{n}\right) \rightarrow c$ für jede Folge $\left(x_{n}\right) \subseteq D$ mit $x_{n} \rightarrow a$ und $x_{n}<a, \forall n \in \mathbb{N}$

$f$ heißt linksseitig stetig in $a$, falls $\lim _{x \rightarrow a^{-}} f(x)=c$ falls $f\left(x_{n}\right) \rightarrow c$ für jede Folge $\left(x_{n}\right) \subseteq D$ mit $x_{n} \rightarrow a$ und $x_{n}<a, \forall n \in \mathbb{N}$

$f$ heißt linksseitig in $a$, falls $\lim _{x \rightarrow a^{-}} f(x)=f(a)$

Analog wird der rechsseitige Grenzwert definiert: $\lim _{x \rightarrow a^{+}} f(x)$

Für die Funktion
$$
f(x)=\left\{\begin{array}{ll}
x, & x \leq 0 \\
x+1, & x>0
\end{array}\right.
$$
gilt:
$$
\begin{aligned}
\lim _{x \rightarrow 0^{-}} & f(x)=0 \\
\lim _{x \rightarrow 0^{+}} & f(x) =1
\end{aligned}
$$
Da $f(0)=0$ ist $f$ int 0 linksseitig stetig, aber nicht rechsseitig.



**Fixpunktiteration**

Wir wollen, für ein gegebenes $f$, $x=f(x)$ lösen.

Eine Lösung von $x=f(x)$ heißt **Fixpunkt** von $f$. Wir setzen die Iteration $x_{n+1}=f\left(x_{n}\right)$, $x_0$ gegeben an und hoffen, dass (x_n) gegen eine Lösung von $x=f(x)$ konvergiert.

**Beispel**:

后续补充



## Komplexe Zahlen und Trigonometrische Funktionen

Wir betrachten den Einheits $\{z:|z|=1\}$ in $\mathbb{C}$ und identifizieren ihn it der Menge der Winkel $\{x: 0 \leq x<2 \pi\}$. Dabei messen wir den Winkel im **Bogenmaß**.

rechter Winkel: $\frac{\pi}{2}$

Hablbreis: $\pi$

Vollkreis: $2\pi$



**Definition 6.1**
$$
\begin{array}{l}
\sin x:=\frac{\exp (i x)-\exp (-i x)}{2 i}=\sum_{n=0}^{\infty} \frac{(-1)^{n} x^{2 n+1}}{(2 n+1) !} \\
\cos x:=\frac{\exp (i x)+\exp (-i x)}{2}=\sum_{n=0}^{\infty} \frac{(-1)^{n} x^{2 n}}{(2 n) !}
\end{array}
$$
Dann gilt $\sin 0=0, \cos 0=1$



**Satz 6.2 (Beweis kommt später im Semester)**

sin und cos sind periodisch, d.h. es existiert eine reelle Zahl $\pi$ so dass für $z \in \mathbb{C}$ gilt $\sin z+2 \pi=\sin z$, $\cos z+2 \pi=\cos z$

Im Satz 6.2 haben wir die Zahl $\pi$ definiert. $\pi$ ist irrational, und ist ungefähr 3.14.

Außerdem gilt:
$$
\begin{aligned}
\sin -x =-\sin x \\
\cos -x =\cos x \\
\sin x+\frac{\pi}{2} =\cos x \\
\cos x+\frac{\pi}{2} =-\sin x
\end{aligned}
$$
Aus dem Satz von Pzthagoras folgt:
$$
\sin ^{2} x+\cos ^{2} x=1
$$
