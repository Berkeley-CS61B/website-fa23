---
layout: page
author: Kartik Kapur, Zephyr Omaly
title: "Testing Study Guide"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture available at
[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec6_testing](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec6_testing).

## Historical Live QA
Linked [here](https://youtu.be/1JSPAHnRNbY)

## Overview

**Why Test Code?** In the real world, chances are you won't have an autograder.
When your code gets deployed into production, it is important that you know
that it will work for simple cases as well as strange edge cases.

**Test-Driven Development** When provided an autograder, it is very easy to go
"autograder happy". Instead of actually understanding the spec and the
requirements for a project, a student may write some base implementation, smash
their code against the autograder, fix some parts, and repeat until a test is
passed. This process tends to be a bit lengthy and really is not the best use
of time. We will introduce a new programming method, Test-Driven Development
(TDD), where the programmer writes the tests for a function BEFORE the actual
function is written. Since unit tests are written before the function is,
it becomes much easier to isolate errors in your code. Additionally, writing
unit test requires that you have a relatively solid understanding of the task
that you are undertaking. A drawback of this method is that it can be easy to
forget to test how functions interact with each other!

**JUnit Tests** JUnit is a package that is used to debug programs
in Java. An example function that comes from JUnit is
`assertEquals(expected, actual)`. This function asserts that expected and
actual have the same value. There are a bunch of other
JUnit functions such as `assertEquals`, `assertFalse`, and `assertNotNull`.

When writing JUnit tests, it is good practice to write '@Test'
above the function that is testing. This allows for all your test methods to be
run non statically.

## Exercises

### Factual
1. In general, is it good to write tests that test your entire program? How
about for specific functions?

2. The check-in exercises, linked
[here](https://docs.google.com/forms/d/e/1FAIpQLSegtgpNK5DXtFpVtqIey5xvalX8WT6MPNY1Am1cQYftPMsRUw/viewform?usp=sf_link)

### Conceptual
When we say that test methods which have been annotated with `@Test`
can be run non statically, what does that mean?

### Procedural
Write a testing method as outlined in the comments in this java file:
[https://github.com/Berkeley-CS61B/lectureCode-sp23/blob/main/lec3_testing/TestingPractice.java](https://github.com/Berkeley-CS61B/lectureCode-sp23/blob/main/lec3_testing/TestingPractice.java)

### Metacognitive
When do you want to write your tests? Is testing a one time thing? Is there
one correct way to test? How can you determine the pros and cons of
any one specific testing approach?
