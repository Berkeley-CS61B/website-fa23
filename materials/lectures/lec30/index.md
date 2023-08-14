---
layout: page
author: Josh Hug
title: "Sorting II (Quicksort)"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/yG2o-XNa_Ww).

## Check-in Exercise
Linked [here](https://forms.gle/cqYTL779UMKLy6mA6).

## Overview

**Insertion Sort Sweet Spots.** We concluded our discussion of insertion sort by
observing that insertion sort is very fast for arrays that are almost sorted,
i.e. that have $\Theta (N)$ inversions. It is also fastest for small $N$
(roughly $N \leq 15$).

**Partitioning.** Partioning an array on a pivot means to rearrange the array
such that all items to the left of the pivot are $\leq$ the pivot, and all items to
the right are $\geq$ the pivot. Naturally, the pivot can move during this process.

**Partitioning Strategies.** There are many particular strategies for
partitioning. You are not expected to know any particular startegy.

**Quicksort.** Partition on some pivot. Quicksort to the left of the pivot. Quicksort to the right.

**Quicksort Runtime.** Understand how to show that in the best case, Quicksort
has runtime $\Theta (N \log N)$, and in the worse case has runtime $\Theta (N^2)$.

**Pivot Selection.** Choice of partitioning strategy and pivot have profound
impacts on runtime. Two pivot selection strategies that we discussed: Use
leftmost item and pick a random pivot. Understand how using leftmost item can
lead to bad performance on real data.

**Randomization.** Accept (without proof) that Quicksort has on average
$\Theta (N \log N)$ runtime. Picking a random pivot or shuffling an array before
sorting (using an appropriate partitioning strategy) ensures that we're in the
average case.

**Quicksort properties.** For most real world situations, quicksort is the
fastest sort.

## Recommended Problems

### C level

1. Give a worst case input for Quicksort. Assume that we're always picking the
   leftmost item as our pivot.

### B level

1. (From Textbook 2.3.13) What is the recursive depth of quicksort, in the best,
   worst, and average cases? This is the size of the call stack that the system
   needs to keep track of the recursive calls.

2. Suppose we use an enhanced partitioning strategy that splits items into three
   types: items < the pivot, items = to the pivot, and items > the pivot.
   Supposing that this 3-way partitioning strategy takes Θ(N) time. Prove that
   Quicksort on an array with N items but only 7 distinct keys (e.g. [0, 1, 0,
   0, 6, 6, 5, 5, 4, 2, 2, 0, 3, 0, 1, ..., 2, 6]) runs in Θ(N) time.

### A+ level

1. Find an array of integers that causes Arrays.sort to crash.
   `Arrays.sort(int[])` uses Quicksort. See
   `http://www.cs.dartmouth.edu/~doug/mdmspe.pdf` for some ideas.
