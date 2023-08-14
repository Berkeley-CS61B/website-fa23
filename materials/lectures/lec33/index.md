---
layout: page
author: Josh Hug
title: "Sorting IV (Sorting Bounds)"
categories: lecture-guide
released: true
---


## Check-in Exercise
Linked [here](https://forms.gle/w8hF3cQGPfSh5y7W8).

## Overview

**Math Problem Out of Nowhere 1.** We showed that $N! \in \Omega((N/2)^(N/2))$.

**Math Problem Out of Nowhere 2.** We showed that $log(N!) \in \Omega(N log N)$,
and that $N log N \in \Omega(log(N!))$. Therefore $log(N!) \in \Theta(N log N)$.

**Seeking a Sorting Lower Bound.** We've found a number of sorts that complete
execution in Θ(N log N) time. This raises the obvious question: Could we do
better? Let TUCS (which stands for "The Ultimate Comparison Sort") be the best
possible algorithm that compares items and puts them in order. We know that
TUCS's worst case runtime is O(N log N) because we already know several algorithm
whose worst case runtime is Θ(N log N), and TUCS's worst case runtime is Ω(N)
because we have to at least look at every item. Without further discussion, this
analysis so far suggest that might be able to do better than Θ(N log N) worst
case time.

**Establishing a Sorting Lower Bound.** As a fanciful exercise, we played a game
called puppy-cat-dog, in which we have to identify which of three boxes contains
a puppy, cat, or dog. Since there are 3! = 6 permutations, we need at least
ceil(lg(6)) = 3 questions to resolve the answer. In other words, if playing a
game of 20 questions with 6 possible answers, we have to ask at least 3
questions to be sure we have the right answer. Since sorting through comparisons
is one way to solve puppy-cat-dog, then any lower bound on the number of
comparisons for puppy-cat-dog also applies to sorting. Given N items, there are
N! permutations, meaning we need lg(N!) questions to win the game of
puppy-cat-dog, and by extension, we need at least lg(N!) to sort N items with
yes/no questions. Since $log(N!) = \Theta(N log N)$, we can say that the
hypothetical best sorting algorithm that uses yes/no questions requires Ω(N log
N) yes/no questions. Thus, there is no comparison based algorithm that has a
worst case that is a better order of growth than Θ(N log N) compares.

## Recommended Problems

### C level

1. Problem 3 [from my Fall 2014 midterm](http://datastructur.es/sp16/materials/exam/CS61B_Fall2014_MT2.pdf).

### B level

1. Make sure that you understand exactly why I chose Ω, Θ, and O in "Seeking a
   Sorting Lower Bound" and "Establishing a Sorting Lower Bound" above.

2. My [Fall 2013 midterm, problem 7](http://www.cs.princeton.edu/courses/archive/fall13/cos226/exams/mid-f13.pdf), particularly part b.

3. My [Fall 2014 midterm, problem 6](http://datastructur.es/sp16/materials/exam/CS61B_Fall2014_MT2.pdf).

4. Answer the questions from the [Sounds of Sorting lecture slide](https://docs.google.com/presentation/d/1XdAjNsqYRDLqOpgUeGmPSTT0EmvnXppBSmgTNPME1Qc/pub?start=false&loop=false&delayms=3000&slide=id.g4671a419d_07).

### A level

1. Find the optimal decision tree for playing puppy, cat, dog, walrus.

2. My [Spring 2013 midterm, problem 7](http://www.cs.princeton.edu/courses/archive/spr13/cos226/exams/mid-s13.pdf).
