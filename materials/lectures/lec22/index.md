---
layout: page
author: Josh Hug and Kartik Kapur
title: "Tries Guide"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/43Dy4thsUT4).

## Check-in Exercise
Linked [here](https://forms.gle/NmWXYJRxStUrq8Tv5).

## Overview

**Summary.** The sort problem is to take a sequence of objects and put them into
the correct order. The search problem is to store a collection of objects such
that they can be rapidly retrieved (i.e. how do we implement a Map or Set). We
made the obersvation that BST maps are roughly analagous to comparison based
sorting, and hash maps are roughly analagous to counting based (a.k.a. integer)
sorting. We observed that we have a 3rd type of sort, which involves sorting by
digit, which raised the question: What sort of data structure is analogous to
LSD or MSD sort?

**Terminology.**

 - Length of string key usually represented by L.
 - Alphabet size usually represented by R.

**Tries.** Analogous to LSD sort. Know how to insert and search for an item in a
Trie. Know that Trie nodes typically do not contain letters, and that instead
letters are stored implicitly on edge links. Know that there are many ways of
storing these links, and that the fastest but most memory hungry way is with an
array of size R. We call such tries R-way tries.

**Advantages of Tries.**  Tries have very fast lookup
times, as we only ever look at as many characters as they are in the data we're
trying to retrieve. However, their chief advantage is the ability to efficiently
support various operations not supported by other map/set implementations
including:
 - longestPrefixOf
 - prefixMatches
 - spell checking

## Recommended Problems

Throughout, we define R as the size of the alphabet, and N as the number of
items in a trie.

### C level

1. Problem 5 from [Princeton's Spring 2008 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s08.pdf).

2. Problem 8 from [Princeton's Spring 2011 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f11.pdf).

3. Problem 8 from [Princeton's Spring 2012 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f12.pdf).

4. Draw the R-way trie that result after inserting the strings: sam,
   sad, sap, same, a, awls.

### B level

1. When looking for a single character string in a Trie, what is the worst case
   time to find that string in terms of R and N?

2. Problem 5 from [Princeton's Fall 2009 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-f09.pdf).

3. Problem 9 from [Princeton's Fall 2012 final](http://www.cs.princeton.edu/courses/archive/spring15/cos226/exams/fin-s12.pdf).

4. Problem 1 from [my Fall 2013 final](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/fin-f13.pdf).

5. True or false: The number of character compares required to construct an
   R-way trie is always less than or equal to the number required to construct
   an LLRB.

6. True or false: The number of character compares required to construct an
   R-way trie is always less than or equal to the number of character accesses
   needed to construct a hash table.

### A level

1. There are many different data structures that we can use to store the
   children of an R-way trie node. The simplest but most memory hungry choice is
   to create an array of length R, with one link per character in the trie. A
   second choice is to have each node contain a TreeMap that maps a given
   character to the appropriate node. A third choice is to use HashMaps instead
   of TreeMaps. is to have each node contain a TreeMaps, some of you used R-way
   trie nodes that contained HashMaps. For the
   "average" node, which of these three choices is likely to use the most
   memory? Why does this mean that this type of node takes longer to construct?

2. Suppose we use an R-way trie to implement a set. For each of the three
   implementations of an R-way trie node described in problem 2, what are the
   best and worst case key lookup times in terms of R an N?

3. Problem 9 from [my Fall 2014 midterm
   2](http://datastructur.es/sp16/materials/exam/CS61B_Fall2014_MT2.pdf).
