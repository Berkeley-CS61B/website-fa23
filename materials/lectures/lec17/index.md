---
layout: page
author: Brandon Lee
title: "B-Trees Study Guide"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/KH49oWy-WjI).

## Check-in Exercise
Linked [here](https://forms.gle/W2TXgv2RDrF72Tf68).

## BSTs

**Depth** We define the depth of a *node* as how far it is from the root. For consistency, we say the root has a depth of 0.

**Height** We define the height of a tree as the depth of the deepest node. 

Notice that depending on how we insert into our BST, our height could vary drastically. We say a tree is "spindly"
if it has height close to N and a tree is "bushy" if its height is closer to logN. For operations such as getting a node,
we want to have the height to be as small as possible, thus favoring "bushy" BSTs

## B-Trees

Two specific B-Trees in this course are 2-3 Trees (A B-Tree where each node has 2 or 3 children),
and 2-3-4/2-4 Trees (A B-Tree where each node has 2, 3, or 4 children). The key idea of a B-Tree
is to over stuff the nodes at the bottom to prevent increaseing the height of the tree. This allows
us to ensure a max height of logN. 

Make sure you know how to insert into a B-Tree. Refer back to lecture slides for examples.

With our restriction on height, we get that the runtime for contains and add are both THETA(LogN)

### B-Tree invariants
Because of how we add to our tree, we get two nice invariants for B-Trees:

1. All leaves must be the same distance from the source
2. A non-leaf node with k items mut has exactly k+1 children. 

## Practice Problems

1. Draw the 2-3 tree that results when you insert the keys A B C D E F G in
   order.
2. How many compares does it take in the worst case to decide whether to go
   left, middle, or right from a 3 node?
3. [Problem
   5](https://d1b10bmlvqabco.cloudfront.net/attach/hx9h4t96ea8qv/h32s1vxe6mb5o0/i7vkubmrxjn0/fa14_mt2.pdf)
   of the Fall 2014 midterm.
4. [Problem 1c, e](https://tbp.berkeley.edu/exams/6137/download/) of the Spring 2018 Midterm 2 
5. [Problem 8b](https://tbp.berkeley.edu/exams/5286/download/) of the Spring 2016 Midterm 2

