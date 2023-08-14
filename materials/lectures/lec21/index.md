---
layout: page
author: Josh Hug
title: "Heaps and Priority Queues Study Guide"
categories: lecture-guide
released: true
---


## Check-in Exercise
Linked [here](https://forms.gle/tAvQPF52vp143SBS7).

## Overview

**Priority Queue.** A Max Priority Queue (or PQ for short) is an ADT that
supports at least the insert and delete-max operations. A MinPQ supposert insert
and delete-min.

**Heaps.** A max (min) heap is an array representation of a binary tree such
that every node is larger (smaller) than all of its children. This definition
naturally applies recursively, i.e. a heap of height 5 is composed of two heaps
of height 4 plus a parent.

**Tree Representations.** Know that there are many ways to represent a tree, and
that we use Approach 3b (see lecture slides) for representing heaps, since we
know they are complete.

**Running times of various PQ implementations.** Know the running time of the
three primary PQ operations for an unordered array, ordered array, and heap
implementation.

## Recommended Problems

Note: The reason I've given lots of problems here is not because this is a more
important topic, but because there are just so many interesting problems.

### C level

1. Is an array that is sorted in descending order also a max-oriented heap?
2. Textbook 2.4.2 (assume we'd also like to support delete operations)
3. [Problem
   3](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f09.pdf)
   from Princeton's Fall 2009 midterm or [Problem
   4](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f08.pdf)
   from Princeton's Fall 2008 midterm.
4. Why do we leave the 0th position empty in our array representation for heaps?

### B level

1. (Textbook 2.4.7) The largest item in a heap must appear in position 1, and
   the second largest must appear in position 2 or 3. Give the list of positions
   in a heap of size 31 where the kth largest CAN appear, and where the kth
   largest CANNOT appear for k=2, 3, 4. Assume values are distinct.
2. (Textbook 2.4.10) Suppose we wish to avoid wasting one position in a
   heap-ordered array pq[], putting the largest value in pq[0], its children in
   pq[1] and pq[2], and so forth, proceeding in level order. Where are the
   parents and children of pq[k]?
3. (Textbook 2.4.21) Explain how to use a priority queue to implement the stack
   and queue data types.
4. (Adapted from Textbook 2.4.27). Add a min() method to a maximum-oriented PQ.
   Your implementation should use constant time and constant extra space.
5. (Textbook 2.4.14) What is the minimum number of items that must be exchanged
   during a remove-the-max operationin a heap of size N with no duplicate keys?
   Give a heap of size 15 for which the minimum is achieved. Answer the same
   qusetion for two and three successive remove-the-maximum operations.
6. [Problem 4](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-s08.pdf) from Princeton's Spring 2008 midterm.
7. [Problem 6](https://d1b10bmlvqabco.cloudfront.net/attach/hx9h4t96ea8qv/h32s1vxe6mb5o0/i7vkubmrxjn0/fa14_mt2.pdf) from my Fall 2014 midterm.
8. [Problem 4](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f12.pdf) from Princeton's 2012 midterm.
9. [Problem 5a and 5b](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-s13.pdf) of my Spring 2013 midterm.
10. Problem 3 from my [Fall 2014 midterm](http://berkeley-cs61b.github.io/public_html/materials/exams/fin-f14.pdf).

### A level

1. Design a data type that supports insert in O(log N) time, find-the-median in
   O(1) time, and delete-the-median in O(log N) time.
2. Design a data type that supports insert in O(log N) time, delete-the-max in
   O(log N) time, and delete-the-minimum in O(log N) time.
3. [Problem 7](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-f10.pdf) from Princeton's Fall 2010 midterm.
4. [Problem 8](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/mid-s12.pdf) from Princeton's Spring 2012 midterm.
