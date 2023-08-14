---
layout: page
author: Josh Hug and Kartik Kapur
title: Shortest Paths Guide
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/l2EG_IFtD2A).

## Check-in Exercise
Linked [here](https://forms.gle/Nch1pj8mvmvrxbZ26).

## Overview

**Dijktra's Algorithm and Single-Source Shortest Paths.** Suppose we want to
record the shortest paths from some source to every single other vertex (so that
we can rapidly found a route from s to X, from s to Y, and so forth). We already
know how to do this if we're only counting the number of edges, we just use BFS.

But if edges have weights (representing, for example road lengths), we have to
do something else. It turns out that even considering edge weights, we can
preprocess the shortest route from the source to every vertex very efficiently.
We store the answer as a "shortest paths tree". Typically, a shortest paths tree
is stored as an array of edgeTo[] values (and optionally distTo[] values if we
want a constant time distTo() operation).

To find the SPT, we can use Dijkstra's algorithm, which is quite simple once you
understand it. Essentially, we visit each vertex in order of its distance from
the source, where each visit consists of relaxing every edge. Informally,
relaxing an edge means using it if its better than the best known distance to
the target vertex, otherwise ignoring it. Or in pseudocode:

```python
Dijkstra(G, s):
    while not every vertex has been visited:
        visit(unmarked vertex v for which distTo(v) is minimized)
```

Where visit is given by the following pseudocode:

```python
visit(v):
    mark(v)
    for each edge e of s:
        relax(e)
```

And finally, relax is given by:

```python
relax(e):
    v = e.source
    w = e.target        
    currentBestKnownWeight = distTo(w)
    possiblyBetterWeight = distTo(v) + e.weight
    if possiblyBetterWeight < currentBestKnownWeight
        Use e instead of whatever we were using before
```

Runtime is $O(V \times \log V + V \times \log V + E \times \log V)$, and since
$E \gt V$ for any graph we'd run Dijkstra's algorithm on, this can be written as
more simply O(E log V).  See slides for runtime description.

**A* Single-Target Shortest Paths.** If we need only the path to a single
target, then Dijkstra's is inefficient as it explores many many edges that we
don't care about (e.g. when routing from Denver to NYC, we'd explore everything
within more than a thousand miles in all directions before reaching NYC).

To fix this, we make a very minor change to Dijkstra's, where instead of
visiting vertices in order of distance from the source, we visit them in order
of distance from the source + h(v), where h(v) is some heuristic.

Or in pseudocode:

```python
A*(G, s):
    while not every vertex has been visited:
        visit(unmarked vertex v for which distTo(v) + h(v) is minimized)
```

It turns out (but we did not prove), that as long as h(v) is less than the true
distance from s to v, then the result of A* will always be correct.

Note: In the version in class, we did not use an explicit 'mark'. Instead, we
tossed everything in the PQ, and we effectively considered a vertex marked if it
had been removed from the PQ.

## Recommended Problems

### C level

1. Suppose we have an edgeTo[] and a distTo[] array, how would we implement a
   `public int distTo(int w)` method? How would we implement a `public
   Iterable<int> pathTo(int w)` method, where `distTo` returns the length of the
   shortest path and `pathTo` returns an Iterable of vertices where the 0th
   element is the source, the 1st element in the next item from the source
   towards w, and so forth.

3. Problem 4 from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f09.pdf).

4. True or false: Adding a constant to every edge weight does not change the solution
to the single-source shortest-paths problem.

5. True or false: Multiplying a  positive constant to every edge weight does not change the solution to the single-source shortest-paths problem.

6. Problem 1c and 1d from [my Spring 2016 final](https://tbp.berkeley.edu/exams/5662/download/).

7. Problem 9 from [my Spring 2015 final](https://tbp.berkeley.edu/exams/4911/download/).

### B level

1. (great problem) Problem 4 from [Princeton's Fall 2011 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f11.pdf). Note that when the exam says to "relax a vertex", that mean to relax all of a vertex's edges. A similar problem is given as #6 on [Princeton's Spring 2012 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s12.pdf).

2. Problem 5 from [Princeton's Fall 2012 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f12.pdf).

3. Problem 1 from [Kartik's mock final](http://www.kartikkapur.com/documents/practicefinal.pdf#page=2)

4. Adapted from Algorithms 4.4.25: Given a digraph with positive edge weights,
   and two distinguished subsets of vertices S and T, find a shortest path from
   any vertex in S to any vertex in T. Your algorithm should run in time
   proportional to E log V, in the worst case.

### A level

1. Problem 5 from [my Spring 2013 final](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-s13.pdf).

2. Problem 6 from [Kartik's Algorithm Worksheet](http://www.kartikkapur.com/documents/DataStructureDesign.pdf#page=2)

3. Describe a family of graphs with V vertices and E edges for which the
   worst-case running time of Dijkstra’s algorithm is achieved.

4. Iterative DFS: Problem 6 from [this semester's discussion worksheet](http://datastructur.es/sp16/materials/discussion/discussion11.pdf) provides a flawed implementation of DFS.

### A+ level

1. Adapted from Algorithms 4.4.34. Give an algorithm to solve the following
   problem: Given a weighted digraph, find a monotonic shortest path from s to
   every other vertex. A path is monotonic if the weight of every edge on the
   path is either strictly increasing or strictly decreasing. The path should be
   simple (no repeated vertices).

2. Adapted from Algorithms 4.4.37. Develop an algorithm for finding an edge
   whose removal causes maximal increase in the shortest-paths length from one
   given vertex to another given vertex in a given edge-weighted digraph.

### A++ level

1. Problem 12 from my [http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-f13.pdf](Fall 2013 final).
