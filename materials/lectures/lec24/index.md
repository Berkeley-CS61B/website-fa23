---
layout: page
author: Josh Hug
title: "Graphs Traversals and Implementation Guide"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/-OuYtTGTsN8).

## Check-in Exercise
Linked [here](https://forms.gle/hL5aztEoMbbXsKgR9).

## Overview

**Graph Traversals Overview.** Just as we had both depth-first (preorder,
inorder, and postorder) traversals and a breath-first (level order) traversal
for trees, we can generalize these concepts to graphs. Specifically, given a
source vertex, we can "visit" vertices in:
 - DFS Preorder: order in which DFS is called on each vertex.
 - DFS Postorder: order in which we return from DFS calls.
 - BFS: order of distance from the source. The lecture originally called this "level order"
   before we banish that term since nobody uses it in the real world for general
   graphs.

We use the term "depth first", because we will explore "deeply" first (a la
[https://xkcd.com/761/](this xkcd)]), and use the term "breadth first" because
we go wide before we go deep.

If we use BFS on a vertex of a graph that happens to be the root of a tree, we
get exactly the same thing as level order traversal.

**Breadth First Search.** Unlike DFS, BFS lends itself more naturally to an
iterative solution than a recursive one. When we perform BFS, we visit a source
vertex s, then visit every vertex that is one link away from s, then visite very
vertex that is two links away from s, and so forth.

To achieve this, we use a simple idea: Create a so-called "fringe" of vertices
that we think of as the next vertices to be explored. In the case of BFS, this
fringe is a Queue, since we want to visit vertices in the order that we observe
them. The pseudocode is as follows:

```python
bfs(s):
    fringe.enqueue(s)
    mark(s)
    while fringe is not empty:
        dequeue(s)
        visit(s)
        for each unmarked neighbor of s:
            mark(s)
            enqueue(s)
```

In class, we discussed how we could use BFS to solve the shortest paths problem:
Given a source vertex, find the shortest path from that source to every other
vertex. When solving shortest paths, we add additional logic to our BFS
traversal, where we also set the edgeTo for every vertex at the same time that
it is marked and enqueued.

**Graph API.** In lecture, we used the Graph API from the Princeton algorithms book. Choice of API determines how clients need to think to write codes, since certain API's can make certain tasks easier or harder. This can also affect runtime and memory.

**Graph Implementations.** Several graph API implementations we explored included an adjacency matrix, list of edges, and adjacency lists. With an adjacency matrix, we essentially have a 2D array with a boolean indicating whether two vertices are adjacent. A list of edges is simply that -- a collection of all edges, such as HashSet<Edge>. The most common approach, adjacency lists, maintains an array of lists indexed by vertex number which stores the vertex numbers of all vertices adjacent to the given vertex.

## Recommended Problems
### C level

1. Problem 2a from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f09.pdf)

2. Suppose we run BFS from a vertex s. The edgeTo[] array we get back is
   sometimes known as a 'Breadth First Paths Tree'. What, if anything, does the
   BFS tree tell us about the shortest path from v to w, assuming that neither
   is the source?

3. Problem 1a and 1b from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s08.pdf).

4. Problem 3a from [Princeton's Fall 2010 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f10.pdf).

5. [Problem 1a and 1b](https://tbp.berkeley.edu/exams/5662/download/) of the Spring 2018 final.

5. [Problem 1a](https://tbp.berkeley.edu/exams/5773/download/) of the Spring 2017 midterm 2.

### B level

1. Problem 2b from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f09.pdf).

2. Problem 1c from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s08.pdf).

3. Problem 3b from [Princeton's Fall 2010 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f10.pdf).

4. Problems 4 and 5 from [Spring 2016's discussion worksheet](http://datastructur.es/sp16/materials/discussion/discussion11.pdf).

5. Problem 4c from [my Spring 2015 Midterm 2](https://tbp.berkeley.edu/exams/5239/download/).

### A level

1. Develop an algorithm that determines whether or not a directed graph contains
   an Eulerian tour, i.e. a tour that visits every vertex exactly once.

2. Adapted from Algorithms textbook 4.2.27: Show that the number of different
   V-vertex directed graphs is 2^(V^2) (reminder, in our course, we do not allow "parallel edges", i.e. you cannot have two or more edges from a vertex v to another vertex w).

   Then compute an upper bound on the percentage of 20-vertex digraphs that could ever be examined by
   any computer, under the assumptions that every electron in the universe
   examines a digraph every nanosecond, that the universe has fewer than 10^80
   electrons, and that the age of the universe will be less than 10^20 years.

### Just for fun

1. Adapted from Algorithms textbook 4.2.40: Run experiments to determine
   empirically the probability that DepthFirstDirectedPaths finds a path between
   two randomly chosen vertices and to calculate the average length of the paths
   found, for various random digraph models.
