---
layout: page
author: Josh Hug
title: "Sorting I (Basic Sorts)"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/z6oW8UrAhcs).

## Check-in Exercise
Linked [here](https://forms.gle/P4HTmdtDXv6X9Kdd8).

## Overview

**Inversions.** The number of pairs of elements in a sequence that are out of
order. An array with no inversions is ordered.

**Selection sort.** One way to sort is by selection: Repeatedly identifying the
most extreme element and moving it to the end of the unsorted section of the
array. The naive implementation of such an algorithm is in place.

**Naive Heapsort.** A variant of selection sort is to use a heap based PQ to
sort the items. To do this, insert all items into a MaxPQ and then remove them
one by one. The first such item removed is placed at the end of the array, the
next item right before the end, and so forth until that last item deleted is
placed in position 0 of the array. Each insertion and deletion takes O(log N)
time, and there are N insertions and deletions, resulting in a O(N log N)
runtime. With some more work, we can show that heapsort is θ(N log N) in the
worst case. This naive version of heapsort uses θ(N) for the PQ. Creation of the
MaxPQ requires O(N) memory. It is also possible to use a MinPQ instead.

**In place heapsort.** When sorting an array, we can avoid the θ(N) memory cost
by treating the array itself as a heap. To do this, we first heapify the array
using bottom-up heap construction (taking θ(N) time). We then repeatedly delete
the max item, swapping it with the last item in the heap. Over time, the heap
shrinks from N items to 0 items, and the sorted list from 0 items to N items.
The resulting version is also θ(N log N).

**Mergesort.** We can sort by merging, as discussed in an earlier lecture.
Mergesort is θ(N log N) and uses θ(N) memory.

**Insertion Sort.** For each item, insert into the output sequence in the
appropriate place. Naive solution involves creation of a separate data
structure. The memory efficient version of this algorithm swaps items one-by-one
towards the left until they land in the right place. The invariant for this type
of insertion sort is that every item to the left of position i is in sorted
order, and everything to the right has not yet been examined. Every swap fixes
exactly one inversion.

**Insertion Sort Runtime.** In the best case, insertion sort takes θ(N) time. In
the worst case, θ(N^2) time. More generally, runtime is no worse than the number
of inversions.

**Shell's Sort (extra slides).** Not covered on exam. Idea is to compare items
that are a distance h apart from each other, starting from large h and reducing
down to h=1. The last step where h=1 ensures that the array is sorted (since h=1
is just insertion sort). The earlier steps help speed things up by making long
distance moves, fixing many inversions at once. Theoretical analysis of Shell's
sort is highly technical and has surprising results.

## Recommended Problems

### B level

1. Give a best and worst case input for insertion sort.

2. Which sort do you expect to run more quickly on a reversed array, selection
   sort or insertion sort?

See sorting comparisons (lec30) guide for more questions that involve all of our
sorting algorithms.
