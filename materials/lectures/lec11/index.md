---
layout: page
author: Brandon Lee, Zephyr Omaly
title: "Exceptions, Iterators, Iterables"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture available at

[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec11_inheritance4](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec11_inheritance4).

## Exceptions
Most likely you have encountered an exception in your code such as a `NullPointerException` or an `IndexOutOfBoundsException`.
Now we will learn about how we can "throw" exceptions ourselves.
Here is an example of an exception that we throw:
```java
throw new RuntimeException("For no reason.");
```

This is useful to ensure reasonable functioning of our code, even when facing
unexpected behavior.


<!-- *Note: Try/Catch is out of scope for now!*

Throwing exceptions is useful to notify your user of something wrong they have done. On the other hand, we can also "catch"
exceptions that happen in our code! Here is an example:
```java
try {
    dog.run()
} catch (Exception e) {
    System.out.println("Tried to run: " + e);
}
System.out.println("Hello World!");
```
There are a few key things to note. Firstly, the entirety of the `try` section is run until/if there is an exception thrown. If there never
is an exception, the entire catch block is skipped. If there is an exception, the code immediately jumps into the catch block with the
corresponding exception, and executes from there.  -->

## Iterators and Iterables
These two words are very closely related, but have two different meanings that are often easy to confuse.
The first thing to know is that these are both Java interfaces,
with different methods that need to be implemented.
Here is a simplified interface for Iterator:

```java
public interface Iterator<T> {
  boolean hasNext();
  T next();
}
```

Here is a simplified interface for Iterable:

```java
public interface Iterable<T> {
    Iterator<T> iterator();
}
```

Notice that in order for an object (for example an ArrayList or LinkedList) to be *iterable*,
it must include a method that
returns an *iterator*. The iterator is the object that actively steps
through an iterable object. Keep this relationship and distinction
in mind as you work with these two interfaces.

## toString

The `toString()` method returns a string representation of objects.

This is most helpful when we are debugging, as it allows us to much more easily
understand the current state of our Objects.

## == vs .equals
We have two concepts of equality in Java- "==" and the ".equals()" method.
The key difference is that when using ==, we are checking if two objects have the same address in memory (that they point to the same instance or object).
On the other hand, .equals() is a method that can be overridden by a class and can be used to
define some custom way of determining equality. This permits the class to utilize the additional
knowledge it has about itself to more accurately answer questions of equality.

For example, say we wanted to check if two stones are equal:
```java
public class Stone{
  int weight;
  public Stone(int weight){
    this.weight = weight;
  }
}
Stone s = new Stone(100);
Stone r = new Stone(100);
```
If we want to consider s and r equal because they have the same weight. If we do check equality using ==, these Stones would not be considered equal because they do not have the same memory address.

On the other hand, if you override the equals method of Stone as follows
```
public boolean equals(Object o){
  return this.weight == ((Stone) o).weight
}
```
We would have that the stones would be considered equal because they have the same weight.

## Exercises

### Factual

1. What are some examples of exceptions you've used directly before? Hint, anything in your test files?
2. What methods are required for a class that is Iterable?
3. The check-in exercises, linked
[here](https://docs.google.com/forms/d/e/1FAIpQLSeJwd0KZE8g9YzebUbO5xZtgyHaSu9vxsPYwzRwKLEenaQkiA/viewform?usp=sf_link)

### Conceptual

1. Why do we want to override the .equals method?
2. What are shortcomings of the implementation provided above for the .equals()
method for the Stone class?


### Procedural

1. Implement a .toString() method for your Project 1 Deque implementations.
2. Implement an updated version of .equals() for the Stone class which addresses
some of the weaknesses you noted above.

### Metacognative

1. In lecture, you built the ArraySet iterator with the professor. Modify the
lecture class to include an iterator that takes in a user value when initially
defined (when the constructor is called). Your iterator should only provide
items which are "greater than" the user defined value. Hint, do we have to ensure
our generic type can be compared?

2. [Spring 2018 Midterm 2 Question 7](https://tbp.berkeley.edu/exams/6137/download/#page=8)


