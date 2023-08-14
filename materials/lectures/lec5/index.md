---
layout: page
author: Wayne Li, Kartik Kapur, Zephyr Omaly
title: "Lists3 Study Guide"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture available at
[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec5_lists3](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec5_lists3).

## Historical Live QA

Linked [here](https://youtu.be/0g5R8HTJ-Gw)

## Overview

**Naked Data Structures** `IntLists` are hard to use. In order to use an
`IntList` correctly, the programmer must understand and utilize recursion even
for simple list related tasks.

**Adding Clothes** First, we will turn the `IntList` class into an `IntNode`
class. Then, we will delete any methods in the `IntNode` class. Next, we will
create a new class called `SLList`, which contains the instance variable
`first`, and this variable should be of type `IntNode`. In essence, we have
"wrapped" our `IntNode` with an `SLList`.

**Using SLList** As a user, to create a list, I call the constructor for
`SLList`, and pass in the number I wish to fill my list with. The `SLList`
constructor will then call the `IntList` constructor with that number, and set
`first` to point to the `IntList` it just created.

**Improvement** Notice that when creating a list with one value, we wrote
`SLList list = new SLList(1)`. We did not have to worry about passing in a null
value like we did with our `IntList`. Essentially, the SLList class acts as a
middleman between the list user and the naked `IntList`.

**Public vs. Private** We want users to modify our list via `SLList` methods
only, and not by directly modifying `first`. We can prevent other users from
doing so by setting our variable access to `private`. Writing `private IntNode
first;` prevents code in other classes from accessing and modifying `first`
(while the code inside the class can still do so).

**Nested Classes** We can also move classes into classes to make nested
classes! You can also declare the nested classes to be private as well; this
way, other classes can never use this nested class.

**Static Nested Classes** If the `IntNode` class never uses any variable or
method of the `SLList` class, we can turn this class static by adding the
"static" keyword.

**Recursive Helper Methods** If we want to write a recursive method in
`SLList`, how would we go about doing that? After all, the `SLList` is not a
naturally recursive data structure like the `IntNode`. A common idea is to
write an outer method that users can call. This method calls a private helper
method that takes `IntNode` as a parameter. This helper method will then
perform the recursion, and return the answer back to the outer method.

**Caching** Previously, we calculated the size of our `IntList` recursively by
returning 1 + the size of the rest of our list. This becomes really slow if our
list becomes really big, and we repeatedly call our size method. Now that we
have an `SLList`, lets simply cache the size of our list as an instance
variable! Note that we could not do this before with out `IntList`.

**Empty Lists** With an`SLList`, we can now represent an empty list. We simply
set `first` to `null` and `size` to `0`. However, we have introduced some bugs;
namely, because `first` is now `null`, any method that tries to access a
property of `first` (like `first.item`) will return a `NullPointerException`.
Of course, we can fix this bug by writing code that handles this special case.
But there may be many special cases. Is there a better solution?

**Sentinel Nodes** Lets make all `SLList` objects, even empty lists, the same.
To do this, lets give each SLList a sentinel node, a node that is always there.
Actual elements go after the sentinel node, and all of our methods should
respect the idea that sentinel is always the first element in our list.

**Invariants** An invariant is a fact about a data structure that is guaranteed
to be true (assuming there are no bugs in your code). This gives us a
convenient checklist every time we add a feature to our data structure. Users
are also guaranteed certain properties that they trust will be maintained. For
example, an `SLList` with a sentinel node has at least the following
invariants:
- The sentinel reference always points to a sentinel node.
- The front item (if it exists), is always at sentinel.next.item.
- The size variable is always the total number of items that have been added.

## Exercises

### Factual

1. Complete the exercises from the [online
textbook](https://joshhug.gitbooks.io/hug61b/content/chap2/chap22.html).

2. Complete the check-in exercises, linked
[here](https://docs.google.com/forms/d/e/1FAIpQLSewpmte-i1ekzjcYiZfx-FjbjRxvX-nt52zGEEBwUMuJKFLGQ/viewform?usp=sf_link)


### Conceptual
1. In your own words, explain what the sentinel node is, and why it's important.
What are benefits of the sentinel in terms of how you write your code?

2. If the sentinel node was a node with a value of null, would it change anything or would
the Intlist be able to function? How is this different from accidentally not having
a sentinel node at all, given your implementation is expecting a sentinel?

3. What is the downside of not having a size variable and rather just calculate
the size each time?

### Procedural

1. Starting from the copy of [SLList.java provided to you in the lecture code
repository](https://github.com/Berkeley-CS61B/lectureCode-sp23/blob/main/lec5_lists3/SLList.java),
 implement the method `deleteFirst`, which deletes the first element
in your SLList. Don't forget to maintain the three invariants discussed above.

2. Starting from the copy of SLList.java provided to you in the lecture code
repository, implement a second constructor that takes in an array of integers,
and creates an SLList with those integers. Again, remember to maintain your
invariants.

### Metacognitive

1. We want to add a method to IntList so that if 2 numbers in a row are the same, we add them together and
make one large node. For example:
1 → 1 → 2 → 3 becomes 2 → 2 → 3 which becomes 4 → 3

```java
public class IntList {
    public int first;
    public IntList rest;
    public IntList(int f, IntList r){
        ...
    }
    public void addAdjacent() {
        //TODO: your code here
    }
}
```

2. Modify the [provided SLList class](https://github.com/Berkeley-CS61B/lectureCode-sp23/blob/main/lec5_lists3/SLList.java)
to create a method `public IntList addConstant(int c)` which adds the constant value `c` to
each element in the list.
For example, if you had list 1 -> 2 -> 3 and you called `addConstant(1)` on it, the result would be
2 -> 3 -> 4.