---
layout: page
author: Kartik Kapur
title: "Multi-Dimensional Data Study Guide"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/NAz4u_DdSqI).

## Check-in Exercise
Linked [here](https://forms.gle/HgtAGmNKscfecc2v7).

## Overview

**Additional Set Operations** There are many other operations we might be interested
in supporting on a set. For example, we might have a `select(int i)` method that
returns the ith smallest item in the set. Or we might have a `subSet(T from, T to)` operation that returns all items in the set between `from` and `to`. Or if we have some notion of distance, we
might have a `nearest(T x)` method that finds the closest item in the set to x.

On 1D data, it is relatively straightforward to support such operations efficiently. If we use only one of the coordinates (e.g. X or Y coordinate), the structure of our data will fail to reflect the full ordering of the data.

**QuadTrees** 

 A natural approach is to make a new type of Tree-- the QuadTree. The QuadTree has 4 neighbors,
 Northwest,Northeast, Southwest, and Southeast. As you move your way down the tree to support queries, it is possible to prune branches that do not contain a useful result.

**K-D Trees** One final data structure that we have for dealing with 2 dimensional
data is the K-d Tree. Essentially the idea of a K-D tree is that it's a
normal Binary Search Tree, except we alternate what value we're looking at when
 we traverse through the tree. For example at the root everything to the left
has an X value less than the root and everything to the right has a X value greater
than the root. Then on the next level, every item to the left of some node has a
Y value less than that item and everything to the right has a Y value greater than it. Somewhat surprisingly, KdTrees are quite efficient.




<!--Effectively, then, you know how to insert into an LLRB, but just in case you want to insert into LLRBs directly without interconverting, you can instead add the new node with a red link, and then apply the three cases below recursively.

Case 3: A parent node has a black left child and a red right child, so rotate the parent left. The former right child is now the boss. Reminder: null links are considered black for the purposes of deciding cases.

Case 2: A grandparent node has a red left child whose left child is also red. Rotate this grandparent right (so that one in the middle is now the boss).

Case 1: A parent node has two red children. Flip colors.
Conveniently, we can always apply case 3, case 2, then case 1 to every node in a tree, and we can guarantee that the entire tree will be an LLRB. -->
