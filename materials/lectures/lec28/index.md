---
layout: page
author: Josh Hug and Kartik Kapur
title: "Graphs Traversals"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/GbOHEJn-omQ).

## Overview

**Graph Traversals Overview.** Just as we had both depth-first (preorder,
inorder, and postorder) traversals and a breath-first (level order) traversal
for trees, we can generalize these concepts to graphs. Specifically, given a
source vertex, we can "visit" vertices in:
 - DFS Preorder: order in which DFS is called on each vertex.
 - DFS Postorder: order in which we return from DFS calls.
 - BFS: order of distance from the source. The lecture calls this "level order"
   before we banish that term since nobody uses it in the real world for general
   graphs.

We use the term "depth first", because we will explore "deeply" first (a la
[https://xkcd.com/761/](this xkcd)]), and use the term "breadth first" because
we go wide before we go deep.

If we use BFS on a vertex of a graph that happens to be the root of a tree, we
get exactly the same thing as level order traversal.

**Topological Sorting.** As an example of a graph problem for which DFS is more
suitable than BFS, we considered the topological sort problem: Given a directed
graph, find an ordering of the vertices that respects the direction of the
edges. We can imagine using this to plan, for example a course schedule (albeit
at some sort of really terrible university where we only take one class at a
time).

The algorithm is simple: Record the DFS postorder from every vertex with
in-degree zero (i.e. has no incoming edges). The order you're after is the
reverse of the DFS postorder. Kind of miraculous and amazing IMO (until you
think about it enough to realize its trivial, but that takes a while). Note: You
can actually perform DFS postorders from any vertex, see B level problems below.

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

<!--**Iterative DFS.** Given that we just saw an iterative implementation of BFS, we considered how an iterative DFS might be implemented. An additional motivation beyond this pedagogical one is the issue of stack depth. In Java, having more than a few thousand recursive calls in depth will result in poor performance and program crashes. -->

<!-- HOW TRAVERSALS RELATE TO TREE TRAVERSALS as per Brendon's question -->

## Recommended Problems
### C level

1. Problem 2a from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f09.pdf)

2. Suppose we run BFS from a vertex s. The edgeTo[] array we get back is
   sometimes known as a 'Breadth First Paths Tree'. What, if anything, does the
   BFS tree tell us about the shortest path from v to w, assuming that neither
   is the source?

3. Problem 1a and 1b from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s08.pdf).

4. Problem 3a from [Princeton's Fall 2010 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f10.pdf).

5. Describe what exactly a topological sort is and why it can be useful.

6. Why is it hard to write Breadth First Search recursively but easy to write Depth First Search recursively? Hint walk through an example.

### B level

1. Problem 2b from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f09.pdf).

2. Problem 1c from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s08.pdf).

3. Problem 3b from [Princeton's Fall 2010 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f10.pdf).

4. Problems 4 and 5 from [semester's discussion worksheet](http://datastructur.es/sp16/materials/discussion/discussion11.pdf).

5. Can you find if 2 nodes are connected with Depth First Search? How about Breadth First
Search? If you can do it with one but not the other explain why. If you can do it
with both describe the graphs that would minimize the runtime (actual runtime not asymptotic).

6. Determine an algorithm to see if a graph has at least one valid topological sort.

7. Describe an algorithm that will determine if a graph is two colorable. To be two colorable, no vertex can be adjacent to another vertex of the same color.

### A level

1. Adapted from Algorithms textbook 4.2.10: Given a DAG (Directed Acyclic Graph), does there exist a topological order that cannot result from applying a DFS-based algorithm, no matter in what order the vertices adjacent to each vertex are chosen? Prove
your answer.

2. Develop an algorithm that determines whether or not a directed graph contains
   an Eulerian tour, i.e. a tour that visits every vertex exactly once.

3. A Strongly Connected Component is defined to be some subset of vertices
if every vertex in the subset is reachable from every other vertex in the subset.
For example, in [this diagram](https://upload.wikimedia.org/wikipedia/commons/5/5c/Scc.png)
a,b, and e are in their own strongly connected component, f and g in their own strongly
connected component, and c, d, and f are in their own strongly connected component.
Provide an algorithm that will find all the strongly connected components in a graph.

4. Adapted from Algorithms textbook 4.2.19: Explain why the following algorithm
   does not necessarily produce a topological order: Run BFS, and label the
   vertices by increasing distance to their respective source.

5. Adapted from Algorithms textbook 4.2.27: Show that the number of different
   V-vertex digraphs with no parallel edges is 2^(V^2). Then compute an upper
   bound on the percentage of 20-vertex digraphs that could ever be examined by
   any computer, under the assumptions that every electron in the universe
   examines a digraph every nanosecond, that the universe has fewer than 1080
   electrons, and that the age of the universe will be less than 1020 years.


### Just for fun

1. Adapted from Algorithms textbook 4.2.40: Run experiments to determine
   empirically the probability that DepthFirstDirectedPaths finds a path between
   two randomly chosen vertices and to calculate the average length of the paths
   found, for various random digraph models.
