---
layout: page
author: Josh Hug
title: "Trees and Graph Traversals Guide"
categories: lecture-guide
released: true
---


## Check-in Exercise
Linked [here](https://forms.gle/jyHWEXvWBZc3fnEw6).

## Overview

**Trees.** A tree consists of a set of nodes and a set of edges connecting the nodes, where there is only one path between any two nodes. A tree is thus a graph with no cycles and all vertices connected.

**Traversals.** When we iterate over a tree, we call this a "tree traversal".

**Level Order Traversal.** A level-order traversal visits every item at level 0,
then level 1, then level 2, and so forth.

**Depth First Traversals.** We have three depth first traversals: Pre-order,
in-order and post-order. In a pre-order traversal, we visit a node, then
traverse its children. In an in-order traversal, we traverse the left child,
visit a node, then traverse the right child. In a post-order traversal, we
traverse both children before visiting. These are very natural to implement
recursively. Pre-order and post-order generalize naturally to trees with
arbtirary numbers of children. In-order only makes sense for binary trees.

**Graphs.** A graph consists of a set of nodes and a set of edges connecting the nodes. However, unlike our tree definition, we can have more than one path between nodes. Note that all trees are graphs. In CS 61B, we can assume all graphs are simple graphs (AKA no loops or parallel edges).

**Depth First Traversals.** DFS for graphs is similar to DFS for trees, but since there are potential cycles within our graph, we add the constraint that each vertex should be visited at most once. This can be accomplished by marking nodes as visited and only visiting a node if it had not been marked as visited already.

## Recommended Problems

### C level

1. [Question 1](http://inst.eecs.berkeley.edu/~cs61b/fa14/ta-materials/discussion7.pdf) from the Fall 2014 discussion worksheet.

### B level

1. [Question 4](https://d1b10bmlvqabco.cloudfront.net/attach/hx9h4t96ea8qv/h32s1vxe6mb5o0/i7vkubmrxjn0/fa14_mt2.pdf) from the Fall 2014 midterm.

### A level

1. [Question 7](http://datastructur.es/sp15/materials/guerrilla/guerrilla2.pdf) from the guerrilla section worksheet #2 from Spring 2015.
