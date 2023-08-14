---
layout: page
title: "FAQ - HW 3: Midterm 2 Review"
categories: hw
released: false
---

## FAQ

#### Q1 - How do I choose which notation to use? Big O or Big Theta?

Remember that we want whichever bound is more descriptive. If there is no distinction between the tightest upper and the tightest lower bound, you should select Big Theta Notation.

#### Q2 - I'm not sure how to approach this problem.

First, you may find [this discussion worksheet](https://drive.google.com/file/d/1YxZpQ3tdE7A5YfHwYBAmQG_CgLHEgOv-/view) very helpful.
Next, the [disjoint sets visualizer](https://www.cs.usfca.edu/~galles/visualization/DisjointSets.html) may be useful as well, but be careful! Their tie-breaking scheme makes the smaller element the child of the larger element.

#### Q2 - Ok, I'm pretty sure I've union'ed everything correctly, but I'm still not getting the correct answer!

Remember that the value at the index of an element representing the root of a set is the negation of the size of the set. This **includes the root element itself!**

#### Q3 - I've tried all options: rotateRight(x), rotateLeft(x), and colorFlip(x), but it's not working!

You need to replace x with an actual integer value.

#### Q5 - I can't get the adjacency list for node 0 correct.

First, recognize that we're working with directed edges, not undirected edges. Next, make sure your formatting is correct and your list is not separated by a comma, but rather a single space.
