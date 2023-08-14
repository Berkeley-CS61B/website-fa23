---
layout: page
title: "FAQ - Lab 03: Timing"
categories: lab
released: false
searchable: false
---

### Completed the timing portion of the lab but still failing local tests?

The tests that verify the correctness of your timing are very subject to the
vagaries of the computer you're running on, so take them with a grain of salt.
This can cause an incorrect result, even if you've done everything correctly.
Your Gradescope score will be your final score on the lab, so don't worry if
you're failing these tests locally.

### Completed `AdventureGame` but still failing

If you completed lab02 last week, be sure to paste your `adventure` code from lab02 into `lab03/src/adventure`!

Also, the tests were rewritten to be less buggy/annoying and slightly more comprehensive, so you may fail tests that you passed last
week if there are still some bugs present in your code.

### All I see is the Fibonacci experiment

Be sure to replace the experiment you're running in `main` with whichever one you want to run!

### Having trouble running Timing Tests with a good resize strategy

Be sure to modify the `AList` class so that the resize strategy is multiplicative instead of additive and rerun `timeAListConstruction`.

### I get "AdventureGame(edu.princeton.cs.algs4.In,adventure.AdventureStage) has private access in adventure.AdventureGame"

Please do not copy the `AdventureGame.java` file from the `lab02` folder, but only the individual stages. If you have already done so, you could restore the `AdventureGame.java` via `git restore --source=skeleton/lab03 lab03/src/adventure/AdventureGame.java`.
