---
layout: page
author: Josh Hug and Kartik Kapur
title: "Minimum Spanning Trees, Kruskal's, Prim's"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/nLoDF76mlm4).

## Check-in Exercise
Linked [here](https://forms.gle/pgLSDePCrTxwiDso8).

## Overview

**Minimum Spanning Trees.** Given an undirected graph, a spanning tree T is a
subgraph of G, where T is connected, acyclic, includes all vertices. The minimum
spanning tree is the spanning tree whose edge weights have the smallest sum.
MSTs are similar to SPTs, but despite intuition suggesting it may be the case,
for many graphs, the MST is not the SPT for any particular vertex. See
[https://docs.google.com/presentation/d/1eZ6sCoAY8d-PAfyyTRG_EQ-BBNqxmTyJ2vS10ZzsGYg/edit#slide=id.g772f8a8e2_0_191](this
graph for an example of one for which the MST is a SPT).

**Cut Property.** If you divide the vertices up into two sets S and T
(arbitrarily), then a crossing edge is any edge which has one vertex in S and
one in T. Neat fact (the cut property): The minimum crossing edge for ANY cut is
part of the MST.

**Prim's Algorithm.** One approach for finding the MST is as follows: Starting
from any arbitrary source, repeatedly add the shortest edge that connects some
vertex in the tree to some vertex outside the tree. If the MST is unique, then
the result is independent of the source (doesn't matter where we start). One
student at office hours likened this to the game of
[http://www.wikihow.com/Play-Sharks-and-Minnows](Sharks and Minnows), where you
catch exactly one minnow during each iteration of the algorithm. Each time, the
sharks get whichever minnow is closest to a shark.

Yet another way of thinking about Prim's algorithm is that it is basically just
Dijkstra's algorithm, but where we consider vertices in order of the distance
from the entire tree, rather than from source. Or in pseudocode, we simply
change relax so that it reads:

```python
relax(e):
    v = e.source
    w = e.target        
    currentBestKnownWeight = distTo(w)
    possiblyBetterWeight = e.weight // Only difference!
    if possiblyBetterWeight > currentBestKnownWeight
        Use e instead of whatever we were using before
```

Notice the difference is very subtle! Like Dijkstra's, the runtime is O(E log
V). We can prove that Prim's works because of the cut property.

**Kruskal's Algorithm.** As an alternate algorithm and as a showcasing of
various data structures in the course, we also considered Kruskal's algorithm
for finding an MST. It performs the exact same task as Prim's, namely finding an
MST, albeit in a different manner. In pseudocode, Kruskal's algorithm is simply:

```python
Initialize the MST to be empty
Consider each edge e in INCREASING order of weight:
    If adding e to the MST does not result in a cycle, add it to e
```

That's it! The runtime for Kruskal's, assuming that we already have all of our
edges in a sorted list and use a weighted quick union with path compression to
detect cycles, is O(E log*V), or (E log E) if we have use a PQ instead. See
slides for more details. We can prove that Kruskal's works because of the cut
property.

Completely unimportant technical note: We can actually make an even tighter
bound than $O(E \log*V)$ if we use the inverse Ackermann bound for WQUPC.

## Recommended Problems

### C level

1. Problem 2 from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-s08.pdf#page=3)

2. Would Kruskal or Prim's algorithm work on a directed graph?

3. True or false: Adding a constant to every edge weight does not change the
   solution to the MST problem (assume unique edge weights).

4. True or false: Multiplying all edges weights with a constant does not change
the solution to the MST problem (assume unique edge weights).

5. True or false: It is possible that the only Shortest Path Tree is the only Minimum Spanning Tree.

6. True or false: Prim's Algorithm and Kruskal's algorithm will always return the same result.

### B level

1. Adapted from Algorithms 4.3.8. Prove the following, known as the cycle
   property: Given any cycle in an edge weighted graph (all edge weights
   distinct), the edge of maximum weight in the cycle does not belong to the MST
   of the graph.

2. Problem 3 from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-f09.pdf#page=5) (part d is pretty hard).

3. Problem 4 from [Princeton's Fall 2012 final](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-f12.pdf#page=5).

4. Adapted from Algorithms 4.3.12. Suppose that a graph has distinct edge
   weights. Does its shortest edge have to belong to the MST? Can its longest
   edge belong to the MST? Does a min-weight edge on every cycle have to belong
   to the MST? Prove your answer to each question or give a counterexample.

5. Adapted from Algorithms 4.3.20. True or false: At any point during the
   execution of Kruskal’s algorithm, each vertex is closer to some vertex in its
   subtree than to any vertex not in its subtree. Prove your answer.

6. True or False: Given any two components that are generated as Kruskal's
   algorithm is running (but before it has completed), the smallest edge
   connecting those two components is part of the MST.

7. Problem 11 from [my Fall 2014 final](http://datastructur.es/sp15/materials/exams/fin-f14.pdf#page=13).

8. Problem 13 from [my fall 2014 final](http://datastructur.es/sp15/materials/exams/fin-f14.pdf#page=15).

9. How would you find the Minimum Spanning Tree where you calculate the weight based off the product of the edges rather than the sum. You may assume that edge weights are >1.

### A level

1. Problem 3 from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-s08.pdf#page=4).

2. Problem 5 from [Kartik's Algorithm Worksheet](http://www.kartikkapur.com/documents/DataStructureDesign.pdf#page=2).

3. Rigorously prove the following: For any cut C, if the weight of any edge e is smaller than all the other edges across C, then this edge is part of the Minimum Spanning Tree.

4. Adapted from Textbook 4.3.26: An MST edge whose deletion from the graph would
   cause the MST weight to increase is called a critical edge. Show how to find
   all critical edges in a graph in time proportional to E log E . Note : This
   question assumes that edge weights are not necessarily distinct (otherwise
   all edges in the MST are critical).
