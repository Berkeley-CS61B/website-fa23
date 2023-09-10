---
layout: page
title: "FAQ - Lab 05: Timing"
categories: lab
released: true
searchable: true
---

### Completed the timing portion of the lab but still failing local tests?

The tests that verify the correctness of your timing are very subject to the
vagaries of the computer you're running on, so take them with a grain of salt.
This can cause an incorrect result, even if you've done everything correctly.
Your Gradescope score will be your final score on the lab, so don't worry if
you're failing these tests locally.

### All I see is the Fibonacci experiment

Be sure to replace the experiment you're running in `main` with whichever one you want to run!

### Having trouble running Timing Tests with a good resize strategy

Be sure to modify the `AList` class so that the resize strategy is multiplicative instead of additive and rerun `timeAListConstruction`.