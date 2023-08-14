---
layout: page
title: "FAQ - Project 0: Awakening of Azathoth"
categories: proj
released: false
searchable: true
---

See the [Project 0 slides](https://docs.google.com/presentation/d/1Dfr9nZ_zY50XqRDdjcONeJVk-kLqf2Kx6tF7Ui3SX9A/edit#slide=id.g1eba8075269_0_71) for additional tips.

### I'm getting the error "Java: duplicate class: aoa.utils.FileUtils" when I try running a test!

A: This is likely because you marked proj0 as sources root. On the left hand side, right click
![image](https://user-images.githubusercontent.com/53989029/213907795-8f005634-92ff-4523-85f4-84f54c482d02.png)
Scroll down to the third from the bottom option (Mark directory as) and select "Unmark as sources root". Make sure that the src folder is marked as sources root (using the same procedure, only this time you'll select "Mark as sources root", and that the tests folder is marked as "Test Sources Root"
