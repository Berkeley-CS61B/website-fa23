---
layout: page
title: "FAQ - Lab 06: Disjoint Sets"
categories: lab
released: released
searchable: true
---

### I'm getting an error that says merging 2 vertices causes error!

If you're receiving this output on Gradescope, it's originating from the last test
which checks for correctness of **all** your methods after a `union` is performed. 
Specifically, after unioning the two vertices, the output of one of your methods 
`find`, `sizeOf`, `connected`, or `parent` is returning the incorrect output. You should 
write a local test that checks that all your methods return the expected values 
each time that you connect two vertices together. In some cases, double check that you're 
handling invalid inputs correctly in your methods. 

### I'm running into `StackOverFlowError` in one of the tests. 

If you're receiving a `StackOverFlowError`, it might imply that there is an infinite
recursion happening somewhere in your implementation. Double check that you're accounting 
for different cases **correctly** - for example, what should happen if you try to `union`
two vertices within the same set?

