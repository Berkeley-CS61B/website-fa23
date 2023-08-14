---
layout: page
title: "FAQ - Project 3: BYOW"
categories: proj
released: false
searchable: false
---

# Topics

- [Common Problems and Errors](#common-problems-and-errors)
- [Autograder Errors](#autograder-errors)
- [Custom World Features](#custom-world-features)

## Common Problems and Errors

### Two instances of my class are saying they are not equal when they should be. Also, I set the instance of my class to be the key in a HashMap, but I can't find it when I try to access that key.

Make sure that if you create any classes, override the `.equals()` method AND the `.hashcode()` method. This will guarantee that two instances that are equal will have the same hashcode

### I'm using the `InputSource` used in `byow/InputDemo`, but I can't get the HUD to display what tile the mouse is hovering over.

The point of `byow/InputDemo` is just that: a demo. If you use this, you'll
need to modify `KeyboardSource` since the `getNextKey` method "blocks" when you call it. Block here means that it will not return until the user inputs a key: thus, if the user isn't moving, this method will just loop doing nothing. However, if the user is moving the mouse, then you can't possibly check what tile they're hovering over since the code is stuck in this loop. So, if you choose to use this approach, you should modify this loop to also check the tile you're hovering over.

### I'm not passing the test where the input is "lwsd".

We provided a valid input with a seed prior to calling lwsd. Likely, you're not handling persistence properly. Make sure to input the exact sequence of calls to replicate this functionality (edit configurations to call interactWithInputString with a valid parameter, then call it again with "lwsd").

### I'm getting an `AccessControlException` - what do I do?

Be sure you're only creating / writing to _files_ (not _directories_). This means that you should only be writing to `CWD` in a file ending with `.txt`, for example — not any other folders or subfolders.

### I'm trying to implement `interactWithInputString` but my world is not rendering when I'm running `Main.java`!

Make sure to temporarily call ter.renderFrame() (with your appropriate 2-D TETile array input) in interactWithInputString - you must comment this method call out before submitting to the autograder. If you're using a separate class to generate random worlds, you can debug by creating a main method within that class and calling ter.renderFrame().

### How do I close my world after the input `:q`?

Call System.exit(0); You are allowed to System.exit(0), but you cannot use it in your interactWithInputString method.

### What do I do if the input to `interactWithInputString()` has extra characters after `:q`?

You do not need to worry about replay strings that contain multiple saves or characters after the save, i.e. "N5SDD:QD" is not considered a valid replay string.

### What am I supposed to do with the `"-p"` option in `Main.java`?

Don't worry about it. Your program has no expected functionality with this flag.

## Autograder Errors

### Why is the phase 1 autograder saying "Could not initialize class edu.princeton.cs.algs4.StdDraw"?

Somewhere in your code, your `interactWithInputString` method tries to use the `StdDraw` class which is not allowed. For example if you call `TERenderer.initialize()`, you are using `StdDraw`. No `StdDraw` window should open when you call `interactWithInputString`. We've seen some students whose code only opens a `StdDraw` window for some seeds, so look very carefully.

### The autograder is getting a `NumberFormatException` caused by `Integer.parseInt`.

The `Random` class takes `long` as input, so the seeds we provide are too big to fit into an `int`. You need to use the `Long` class instead to parse the seed.

### The autograder is telling me my worlds are not distinct, even though I run the seeds locally, and the worlds appear visually different.

Check to see that every tile you use is represented by a distinct character. This is especially important if you create any new tiles.

### I am getting weird autograder messages that don't make sense with the internals of my code.

Make sure you are not changing TETile.java's `character` field or `character()` method.

### I'm getting "unreported exception `IOException` (or some other exception) must be caught or declared to be thrown" on the autograder, but my code works fine locally.

The autograder probably won't compile if you throw exceptions in your method signatures. Instead, use a try-catch block with the part of your code that throws the exception, then remove `throws` from your method signatures.

### The autograder seems to be exiting early, even when I don't have a bug in my code?

Make sure you are not calling `System.exit()`.

## Custom World Features

### I want to make a world where we can explore the outdoors or caves or something like that, not a bunch of rooms. What should I do?

That’s fine, you can just use the seed to create a starter house (with rooms and hallways) for your avatar that they can freely exit.

### Can I make a world, that supports scrolling or multiple levels (i.e. stairs)?

Sure. In this case, `interactWithInputString` should return only the part of the world that is visible on the screen at the time that the last character in the replay string is entered.

### Can I add the ability for users to customize their character before creating a world?

Yes, but you'll need to create a fourth main menu option. Your project must support exactly the API described in this spec. That is, "N23123S" must always create a new world with the seed 23123, and must not ask for any additional input from the user.
