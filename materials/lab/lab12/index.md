---
layout: page
title: "Lab 12: Tetris (Getting Started on Project 3, Phase 2)"
categories: lab
released: true
---

## Introduction

This lab will help you get started with the second phase of the project: Interactivity. You are 
not expected to be done with phase 1 at the time you're working on this lab. If you have not 
started already though, we highly recommend that you do! 

For this lab, you should consider how some ideas (or implementation!) may translate over 
to Project 3. It will also help you gain more familiarity with useful tools necessary for 
the project.

## Tetris

In preparation for making your game, we will be constructing the game Tetris! If you're not too 
familiar with Tetris, it is a puzzle video game where players "complete" lines as differently 
shaped pieces (tetrominoes) spawn and descend on the board. With these pieces, the player 
can move them around and rotate as needed to complete lines - once those lines are completed, 
it disappears and the player gains points. The game ends when the uncleared lines reach the 
top of the board.

All of your implementation will be in `Tetris.java`. We have also provided another file, 
`Tetrimino.java`, which contains the board pieces that you'll be using. You won't be writing 
anything in it directly, but this class is used in `Tetris.java`. We'll also be working with 
a library, `StdDraw`, to help implement some features, such as user input. You may find 
this library very useful for Project 3.

While we want to have a working game of `Tetris.java`, we should break it down into 
smaller steps instead of tackling it all at once. The game can be loosely broken down 
into the following steps: 

1. Create the game window.
2. Randomly spawn a piece for the player to control and keep a display of the current score. 
3. Update the movements of the piece based on the player's input. 
4. Once the piece can no longer be moved, check if any lines need to be cleared, update the score and respawn a new piece. 
5. Repeat these steps until the game is over (when the uncleared lines reach the top).

In general, good coding practice is to first build small procedures with explicit 
purposes and then compose more complex methods using the basic ones. If you take a look 
at `Tetris.java`, you'll note that it contains many helper methods to help build 
a more complex game mechanism - breaking the game logic into individual methods is highly 
recommended for Project 3. It will give you a clear path forward in development and 
also provide clear breaks for unit tests.

By the end of the lab, you'll have something that functions like the below: 

![Tetris Game Example](img/tetris.gif)

## StdDraw

As mentioned, we'll be working with the library `StdDraw`. `StdDraw` is a provided 
library that gives basic capabilities to create drawings in your program as well as 
grab user input. Please take a look at the [API](https://introcs.cs.princeton.edu/java/stdlib/javadoc/StdDraw.html)
before getting started as you will find some of the methods useful not only for this lab,
but for Project 3.

## Running the Game 

To run the game, run the main method in `Tetris.java`.
You can use this method to verify the correctness of your game logic.

## Methods Overview 

Since all of your implementation will be in `Tetris.java`, there a couple of methods you'll
have to fill out to get your game working. 

{% include alert.html type="info" content="
**INFO**: Please make sure to read through both `Tetris.java` and `Tetrimino.java`
to gain familiarity with the helper methods in this lab. While you don't necessarily need 
to understand what every helper method does (abstraction!), you might find some of them 
useful, and it's always good to know what you're working with.
" %}

### `updateBoard`

This method updates the board based on user input. The first step is to check if the user 
has typed in anything and grab the input if the user has. We recommend that you take a look at the 
`StdDraw` [API](https://introcs.cs.princeton.edu/java/stdlib/javadoc/StdDraw.html) 
as there will be some methods that will be useful for implementing user interactivity. 

The next step is to implement the actions that are taken from specific keys. 
The user is able to input 5 keys: 
- `a`: move the current piece towards the left by one tile
- `s`: move the current piece downwards by one tile
- `d`: move the current piece towards the right by one tile 
- `w`: rotate the current piece to the right 
- `q`: rotate the current piece to the left

We recommend that you look at some of the provided helper methods in `Tetris.java` to see which 
ones you can call on to move a piece or rotate a piece (**you should not have to implement 
the logic yourself, but instead, rely on understanding what the helper methods do**). 

{% include alert.html type="task" content="
**TASK**: Fill out the method according to the description above. As a reminder, make sure to read 
through `Tetris.java` and the `StdDraw` API! 
" %}

### `incrementScore`

This is a helper method to help update your score. The player's score increases based on the number of 
lines cleared, that is, it increases by the lines clear multiplied by 100 points. The minimum 
number of lines that can be cleared is 1 and the maximum is 4. 

{% include alert.html type="task" content="
**TASK**: Fill out `incrementScore` so the player's score increases as described above. 
" %}

### `clearLines`

This method clears rows on the board that are horizontally filled. Let's try to break this process down: 
- To check if a row is full, we need to iterate through the entire height (`GAME_HEIGHT`) of our board. 
  - We track if a row is full through a boolean variable. 
  - We then go through the row at the current height. If a tile is equal to Nothing, then we set our boolean variable to false.
  - If we find that the current row is full, then we need to move all the rows above it down. 
  - Once the rows are moved down, then we update the amount of lines that are cleared and continue to check if there are any more complete rows.
- At the very end, we want to update our scored based on the number of lines cleared.

{% include alert.html type="task" content="
**TASK**: Fill out `clearLines` to check for the amount of lines that are cleared and update the 
board accordingly. 
" %}

### `runGame`

This is where some of the game logic takes place. Comments have been left in the skeleton code
to help you get started. A couple of things to note:
- Ensure that the game does not exit or stop until the game is over (hint: how do you make sure this happens continuously).
- Then, check that the current "frame delta time" is greater than 16 [LOGIC CHECK]. 
- If the current tetrimino is unable to move down or can longer move from its current position, it is set to `null`. 
  - Once a piece has been placed and can no longer move, make sure to check if any lines need to be cleared and respawn another piece. 
- Make sure to update the board based on the user input and then render those changes. 
- Finally, reset the frame timer (check out the provided helper methods!).

{% include alert.html type="task" content="
**TASK**: Fill out `runGame`. 
" %}

## Submission and Grading

Similar to Lab 11, completion of this lab is based off a checkoff. This lab is worth 5 points. 

There is no Gradescope grader for this lab. Instead, please complete the [Lab 13 Review Form](https://forms.gle/cVLRp2CA8wt1Ezij7) by 4/14, 
11:59 PM. **We will automatically update your grade in Beacon after the Lab 13 deadline**. 
Please note that the form requires a screen recording, so **please prepare to spend adequate time on this.**


