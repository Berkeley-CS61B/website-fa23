---
layout: page
title: "FAQ - Lab 09: HashMap"
categories: lab
released: false
searchable: false
---

### Failing edge cases

The `Bee` class has some strange `equals` and `hashCode` implementations. If you're stuck on this test, use the debugger to see what values are expected from the reference map, which is Java's built-in HashMap. Walking through the expected behavior by hand may help as well.

Some things to think about:

The reference map has some (maybe) unexpected behaviors. _Why_ does the reference map behave the way it does (remember `equals` and `hashCode`!)?
Does your map behave the same way?
