---
layout: page
author: Kartik Kapur, Wayne Li, Zephyr Omaly
title: "Lists3 Study Guide"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture is available at

[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec5_lists3](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec5_lists3).

## Historical Live QA
Linked [here](https://youtu.be/gkwDPYRSkxs)

## Overview

**SLList Drawbacks** `addLast()` is slow! We can't add to the middle of our
list. In addition, if our list is really large, we have to start at the front,
and loop all the way to the back of our list before adding our element.

**A Naive Solution** Recall that we cached the size of our list as an instance
variable of `SLList`. What if we cached the `last` element in our list as well?
All of a sudden, `addLast()` is fast again; we access the last element
immediately, then add our element in. But `removeLast()` is still slow. In
`removeLast()`, we have to know what our second-to-last element is, so we can
point our cached `last` variable to it. We could then cache a `second-to-last`
variable, but now if I ever want to remove the second-to-last element, I need
to know where our third-to-last element is. How to solve this problem?

**DLList** The solution is to give each `IntNode` a `prev` pointer, pointing to
the previous item. This creates a doubly-linked list, or `DLList`. With this
modification, adding and removing from the front and back of our list becomes
fast (although adding/removing from the middle remains slow).

**Incorporating the Sentinel** Recall that we added a sentinel node to our
`SLList`. For `DLList`, we can either have two sentinels (one for the front,
and one for the back), or we can use a circular sentinel. A `DLList` using a
circular sentinel has one sentinel. The sentinel points to the first element of
the list with `next` and the last element of the list with `prev`. In addition,
the last element of the list's `next` points to the sentinel and the first
element of the list's `prev` points to the sentinel. For an empty list, the
sentinel points to itself in both directions.

**Generic DLList** How can we modify our `DLList` so that it can be a list of
whatever objects we choose? Recall that our class definition looks like
this:

    public class DLList { ... }

We will change this to

    public class DLList<T> { ... }

where `T` is a placeholder object type. Notice the angle bracket syntax. Also
note that we don't have to use `T`; any variable name is fine. In our `DLList`,
our item is now of type `T`, and our methods now take `T` instances as
parameters. We can also rename our `IntNode` class to `TNode` for accuracy.

**Using Generic DLList** Recall that to create a `DLList`, we typed:

    DLList list = new DLList(10);

If we now want to create a `DLList` holding `String` objects, then we must
say:

    DLList<String> list = new DLList<>("bone");

On list creation, the compiler replaces all instances of `T` with `String`! We
will cover generic typing in more detail in later lectures.

**Arrays** Recall that variables are just boxes of bits. For example, `int x;`
gives us a memory box of 32 bits. Arrays are a special object which consists of
a numbered sequence of memory boxes! To get the ith item of array `A`, use
`A[i]`. The length of an array cannot change, and all the elements of the array
must be of the same type (this is different from a Python list). The boxes are
zero-indexed, meaning that for a list with N elements, the first element is at
`A[0]` and the last element is at `A[N - 1]`. Unlike regular classes, **arrays
do not have methods!** Arrays do have a `length` variable though.

**Instantiating Arrays** There are three valid notations for creating arrays.
The first way specifies the size of the array, and fills the array with default
values:

    int[] y = new int[3];

The second and third ways fill up the array with specific values.

    int[] x = new int[]{1, 2, 3, 4, 5};
    int[] w = {1, 2, 3, 4, 5};

We can set a value in an array by using array indexing. For example, we can say
`A[3] = 4;`. This will access the **fourth** element of array `A` and sets the
value at that box to 4.

**Arraycopy** In order to make a copy of an array, we can use
`System.arraycopy`. It takes 5 parameters; the syntax is hard to memorize, so
we suggest using various references online such as
[this](https://www.tutorialspoint.com/java/lang/system_arraycopy.htm).

**2D Arrays** We can declare multidimensional arrays. For 2D integer arrays, we
use the syntax:

    int[][] array = new int[4][];

This creates an array that holds integer arrays. Note that we have to manually
create the inner arrays like follows:

    array[0] = new int[]{0, 1, 2, 3};

Java can also create multidemensional arrays with the inner arrays created
automatically. To do this, use the syntax:

    int[][] array = new int[4][4];

We can also use the notation:

{% raw %}
    int[][] array = new int[][]{{1}, {1, 2}, {1, 2, 3}}
{% endraw %}

to get arrays with specific values.

**Arrays vs. Classes**
- Both are used to organize a bunch of memory.
- Both have a fixed number of "boxes".
- Arrays are accessed via square bracket notation. Classes are accessed via dot
notation.
- Elements in the array must be all be the same type. Elements in a class may
be of different types.
- Array indices are computed at runtime. We cannot compute class member
variable names.

## Exercises

### Factual

1. Complete the exercises from the online textbook
[here](https://joshhug.gitbooks.io/hug61b/content/chap2/chap23.html) and
[here](https://joshhug.gitbooks.io/hug61b/content/chap2/chap24.html).

2. Complete the check-in exercises, linked
[here](https://docs.google.com/forms/d/e/1FAIpQLSc8NSovwCF2Oh-MuPBWrMEsGF0gllRkcezf1YFIQqwYcBIYqA/viewform?usp=sf_link)

### Conceptual
Can you create a 2 dimensional array with different types? For example,
one sub array would be composed of all Strings and another sub array would be
made of only ints.


### Procedural

1. At each step follow the instructions

        public class Deck{
            public static int[] cards;
            Deck(){
                cards = {1, 3, 4, 10};
            }
        }


    Write down the contents of dingie's array cards.

          Deck dingie = new Deck();
          dingie.cards[3] = 3;


    Write the contents of pilates's array and dingie's array.

          Deck pilates = new Deck();
          pilates.cards[1] = 2;

    Write the contents of pilates's array and dingie's array.

          int[] newArrWhoDis = {2, 2, 4, 1, 3};
          dingie.cards = pilates.cards;
          pilates.cards = newArrWhoDis;
          newArrWhoDis = null;

2. Say we have a 2 dimensional DList. We want this 2-D DList to be as even
as possible. To do this we will try to fill up rows as uniformly as possible-
meaning that not row will have a greater size than any other row by more
than 1 element. Write a method that will take in a sub DList and add the
given element if it fulfills the constraints. If the constraints are not
fulfilled, the item will be attempted to be put in the DList below the one you
attempted to insert in originally and so forth until the bottom most DList
is reached in which case move to the top DList.


### Metacognitive

1. Complete problem 10 from practice midterm 1 in Kartik's [textbook](http://www.kartikkapur.com/documents/mt1.pdf#page=10)

2. Complete problem 7 from midterm 1 from Spring 2015 [here](https://tbp.berkeley.edu/exams/4695/download/#page=9)
