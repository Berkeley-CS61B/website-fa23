---
layout: page
author: Josh Hug
title: "Radix Sorts Guide"
categories: lecture-guide
released: true
---


## Check-in Exercise
Linked [here](https://forms.gle/LiLYfmaGMFKrF7x49).

## Overview

**Terminology.**

 - Radix - just another word for 'base' as in the base of a number system. For
   example, the radix for words written in lowercase English letters is 26. For
   number written in Arabic numerals it is 10.
 - Radix sort - a sort that works with one character at a time (by grouping
   objects that have the same digit in the same position).
 - Note: I will use 'character' and 'digit' interchangably in this study guide.

**Counting Sort.**  Allows you to sort N keys that are integers between 0 and
R-1 in θ(N + R) time. Beats linearithmic lower bound by avoiding any binary
compares. This is a completely different philosophy for how things should be
sorted. This is the most important concept for this lecture.

**LSD.** In the LSD algorithm, we sort by each digit, working from right to
left. Requires examination of θ(WN) digits, where W is the length of the longest
key. Runtime is θ(WN + WR), though we usually think of R as a constant and just
say θ(WN). The θ(WR) part of the runtime is due to the creation fo length R
arrows for counting sort. We usually do LSD sort using counting sort as a
subroutine, but it's worth thinking about whether other sorts might work as
well.

**LSD vs Comparison Sorting.**  Our comparison sorts, despite requiring θ(N log
N) time, can still be faster than LSD sort, which is linear in the length of our
input θ(WN). For extremely large N, LSD sort will naturally win, but log N is
typically pretty small. Know which algorithm is best in the two extreme cases of
very long dissimilar strings and very long, nearly equal strings.

**MSD.** In MSD sorting, we work from left to right, and solve each resulting
subproblem independently. Thus, for each problem, we may have as many as R
subproblem. Worst case runtime is exactly the same as LSD sort, θ(WN + WR),
though can be much better. In the very best case, where we only have to look at
the top character (only possible for R > N), we have a runtime of θ(N + R).

## Recommended Problems

### C level

1. For a fixed alphabet and key size, what are the best case and worst case inputs for LSD? For MSD?

2. Question #6 from Princeton's [Spring 2012 Final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s12.pdf)

### B level

1. Adapted from Algorithms 5.1.8: Give the number of characters examined by MSD
   string sort for a file of N keys a, aa, aaa, aaaa, aaaaa, ...

2. For very long random strings, would a comparison based sort or a radix sort
   be faster? For very long, highly similar string, which would be faster?

3. For very long sequences of Java ints, would radix sort or a comparison sort
   be faster?
