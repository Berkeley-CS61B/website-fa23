---
layout: page
author: Josh Hug
title: "Sorting III"
categories: lecture-guide
released: true
---


## Check-in Exercise
Linked [here](https://forms.gle/Hn9xcBoNMxsaxgeV7).

## Overview

**Hoare Partitioning.** One very fast in-place technique for partitioning is to
use a pair of pointers that start at the left and right edges of the array and
move towards each other. The left pointer loves small items, and hates equal or
large items, where a "small" item is an item that is smaller than the pivot (and
likewise for large). The right pointers loves large items, and hates equal or
small items. The pointers walk until they see something they don't like, and
once both have stopped, they swap items. After swapping, they continue moving
towards each other, and the process completes once they have crossed. In this
way, everything left of the left pointer is $\leq$ to the pivot, and everything
to the right is $\geq$ to the pivot. Finally, we swap the pivot into the
appropriate location, and the partitioning is completed. Unlike our prior
strategies, this partitioning strategy results in a sort which is measurably
faster than mergesort.

**Selection.** A simpler problem than sorting, in selection, we try to find the
Kth largest item in an array. One way to solve this problem is with sorting, but
we can do better. A linear time approach was developed in 1972 called PICK, but
we did not cover this approach in class, because it is not as fast as the Quick
Select technique.

**Quick Select.** Using partitioning, we can solve the selection problem in
expected linear time. The algorithm is to simply partition the array, and then
quick select on the side of the array containing the median. Best case time is
$\Theta (N)$, expected time is $\Theta (N)$, and worst case time is
$\Theta (N^2)$. You should know how to show the best and worst case times. This
algorithm is the fastest known algorithm for finding the median.

**Stability.** A sort is stable if the order of equal items is preserved. This
is desirable, for example, if we want to sort on two different properties of our
objects. Know how to show the stability or instability of an algorithm.

**Optimizing Sorts.** We can play a few tricks to speed up a sort. One is to
switch to insertion sort for small problems ($\lt$ 15 items). Another is to exploit
existing order in the array. A sort that exploits existing order is sometimes
called "adaptive". Python and Java utilize a sort called Timsort that has a
number of improvements, resulting in, for example $\Theta (N)$ performance on almost
sorted arrays. A third trick, for worst case N^2 sorts only, is to make them
switch to a worst case $N \log N$ sort if they detect that they have exceeded a
reasonable number of operations.

**Shuffling.** To shuffle an array, we can assign a random floating point number
to every object, and sort based on those numbers. For information on generation
of random numbers, see [Fall 2014
61B](https://www.google.com/url?q=https://docs.google.com/presentation/d/1uXMsukvTUI0m5_6QfaYDmPDPXBXGRix7juEd7ekBjG0/pub?start%3Dfalse%26loop%3Dfalse%26delayms%3D3000%26slide%3Did.g46b429e30_0110&sa=D&ust=1461443429774000&usg=AFQjCNEiWI0CUmG1lyK8ZDIU6dY272cbdQ).

## Recommended Problems

### C level

1. Problem 3 [from my Fall 2014 midterm](http://datastructur.es/sp16/materials/exam/CS61B_Fall2014_MT2.pdf).

2. Why does Java's built-in `Array.sort` method use Quicksort for `int`, `long`,
   `char`, or other primitive arrays, but Mergesort for all Object arrays?

### B level

1. My [Fall 2013 midterm, problem 7](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/mid-f13.pdf), particularly part b.

2. My [Fall 2014 midterm, problem 6](http://berkeley-cs61b.github.io/public_html/materials/exams/mid2-f14.pdf).

### A level

1. My [Spring 2013 midterm, problem 7](http://www.cs.princeton.edu/courses/archive/spr13/cos226/exams/mid-s13.pdf).

2. Given that Quick sort runs fastest if we can always somehow pick the median
   item as the pivot, why don't we use Quick select to find the median to
   optimize our pivot selection (as opposed to using the leftmost item).

3. We can make Mergesort adaptive by providing an optimization for the case
   where the left subarray is all smaller than the right subarray. Describe how
   you'd implement this optimization, and give the runtime of a merge operation
   for this special case.
