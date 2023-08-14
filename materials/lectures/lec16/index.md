---
layout: page
author: Josh Hug and Sandy Zhang
title: "ADTs and BST Study Guide"
categories: lecture-guide
released: true
---


## Example Implementations

[BST (also supports ordered operations)](http://algs4.cs.princeton.edu/32bst/BST.java.html)

## Live QA
Linked [here](https://youtu.be/tH4TpiBLULY).

## Check-in Exercise
Linked [here](https://forms.gle/oFmjvd96XE22fNXP7).

## Overview

**Abstract Data Type.** An abstract data type (ADT) is similar to an interface in that it is defined by its operations rather than its implementation. It is a layer of abstraction not tied to a particular language. Some examples of ADT's you may have seen in class so far include Lists, Sets, and Maps. Notice that a List can be implemented in several different ways (i.e. LinkedList, ArrayList) and the idea of a List is not restricted to just Java.

**Trees.** A tree consists of a set of nodes and a set of edges that connect these nodes. As there exists only one path between any two nodes, there are no cycles in a tree. If a tree is rooted, every node except the root has exactly one parent. The root has no parents, and a node with no children is considered a leaf.

**Binary Search Trees.** A Binary Search Tree (BST) is a rooted binary tree that maintains several key conditions to help optimize search. For a node X, every key in the left subtree is less than X's key and every key in the right subtree is greater than X's key. This aids with operations such as search since when we look for the position of a key, we can move left or right within our tree starting from the root depending on how our key compares to the key of each node.

**Runtime.** BST's help optimize our search so we do not always have to look at every single element in our tree when searching for a particular key. But how much does this optimize things? For a BST that is "bushy" (short and fat), we can search in O(log N) time where N is the number of nodes. For a BST that is "spindly" (tall and skinny), our search will take O(N) time. This is because search time depends on the height of our tree, where a bushy tree has a height of log N and a spindly tree has a height of N.

## Recommended Problems

### C level

1. What is the best case BST height in terms of N? Worst case?

2. If shuffling yields $\log N$ tree height (with extremely high probability),
   why don't we simply shuffle our input data before building our BST based
   symbol table to avoid worst case behavior?

3. [Adapted from Textbook 3.2.3] Give two orderings of the keys `A X C S E R H`
   that, when inserted into an empty BST, yield the best case height. Draw the
   tree.

4. Delete the root from the tree you created for question C-3.

### B level
1. [Adapted from Textbook 3.2.4] Suppose that a certain BST has keys that are
   integers between 1 and 10, and we search for 5. Which sequence(s) of keys
   below are possible during the search for 5?

   a. 10, 9, 8, 7, 6, 5

   b. 4, 10, 8, 7, 53

   c. 1, 10, 2, 9, 3, 8, 4, 7, 6, 5

   d. 2, 7, 3, 8, 4, 5

   e. 1, 2, 10, 4, 8, 5

2. Give an example of something that you might like to store as a key in a
   symbol table for which there is no natural compare method.

3. Do there exist any objects for which it is impossible to define a total
   order? In other words, can we always write a compare method if we're willing
   to do the work, or are some data types fundamentally impossible to compare
   other than for equality?

4. When we delete from a BST, we always chose either the predecessor or
   successor as a replacement for the root. We said that these two items always
   have zero or one children. Why?

5. Is the delete operation commutative? In other words, if we delete x, then y,
   do we always get the same tree as if we delete y, then x?

6. [Problem
   1](https://d1b10bmlvqabco.cloudfront.net/attach/hx9h4t96ea8qv/h32s1vxe6mb5o0/i7vkubmrxjn0/fa14_mt2.pdf)
   from the Fall 2014 midterm.

7. [Problem 1](https://tbp.berkeley.edu/exams/6137/download/) from Spring 2018 midterm #2.
   Skip parts c and d for now.

### A+ level

1. [Problem 3](http://inst.eecs.berkeley.edu/~cs61b/fa14/samples/2009/test2.pdf)
   from the Fall 2009 midterm. This problem is magnificent in its elegance and
   difficulty.
