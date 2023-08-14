---
layout: page
author: Josh Hug, Kartik Kapur, Zephyr Omaly
title: "Intro2 Study Guide"
categories: lecture-guide
released: true
---

## Lecture Code

Code from this lecture available at
[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec2_intro2](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec2_intro2).

## Historical Live QA
Linked [here](https://youtu.be/Jr9u35IvqY8)

## Overview

**Command line compilation and execution.** `javac` is used to compile programs. `java` is used to execute programs. We must always compile before execution.

**Client Programs and Main Methods.** A Java program without a main method
cannot be run directly using the `java` command. However, its methods can still
be invoked using the `main` method of another class.

**Class Declaration.** Java classes can contain methods and/or variables.
We say that such methods and variables are "members" of the class. Members can
be *instance* members or *static* members. Static members are declared with the
`static` keyword. Instance members are any members without the `static` keyword.

**Class Instantiation.** Instantiating a class is almost always done using the
`new` keyword, e.g. `Dog d = new Dog()`. An instance of a class in Java is also
called an "Object".

**Dot Notation.** We access members of a class using dot notation, e.g.
`d.bark()`. Class members can be accessed from within the same class or from
other classes.

**Constructors.** Constructors tell Java what to do when a program tries to
 create an instance of a class, e.g. what it should do when it executes
 `Dog d = new Dog()`.

**Array Instantiation.** Arrays are also instantiated using the `new` keyword.
For example `int[] arr = new int[10]`
If we have an array of Objects, e.g. `Dog[] dogarray`, then each element of the
array must also be instantiated separately.

**Static vs. Instance methods.** The distinction between static and instance
methods is incredibly important. Instance methods are actions that can only be
 taken by an instance of the class (i.e. a specific object), whereas static
 methods are taken by the class itself. An instance method is invoked using a
 reference to a specific instance, e.g. `d.bark()`, whereas static methods
 should be invoked using the class name, e.g. `Math.sqrt()`. Know when to use
 each.

**Static variables.** Variables can also be static. Static variables should be
accessed using the class name, e.g. `Dog.binomen` as opposed to `d.binomen`.
Technically Java allows you to access using a specific instance, but we strongly
 encourage you not to do this to avoid confusion.

**void methods.** A method which does not return anything should be given a void
 return type.

**The `this` keyword.** Inside a method, we can use the `this` keyword to refer
to the current instance. This is equivalent to `self` in Python.

**public static void main(String[] args).** We now know what each of these
things means:

 - public: So far, all of our methods start with this keyword.
 - static: It is a static method, not associated with any particular instance.
 - void: It has no return type.
 - main: This is the name of the method.
 - String[] args: This is a parameter that is passed to the main method.

**Command Line Arguments.** Arguments can be provided by the operating system to
 your program as "command line arguments," and can be accessed using the `args`
 parameter in `main`. For example if we call our program from the command line
 like this `java ArgsDemo these are command line arguments`, then the `main`
 method of `ArgsDemo` will have an array containing the Strings "these",
 "are", "command", "line", and "arguments".

**Using Libraries.** There's no need in the year 2017 to build everything
yourself from scratch. In our course, you are allowed to and highly encouraged
to use Java's built-in libraries, as well as libraries that we provide, e.g.
the Princeton standard library. You should not use libraries other than those
provided or built into Java because it may render some of the assignments moot,
and also our autograder won't have access to these libraries and your code won't
work.

**Getting Help from the Internet.** You're welcome to seek help online. However,
you should always cite your sources, and you should not seek help on specific
homework problems or projects. For example, googling "how convert String Java"
 or "how read file Java" are fine, but you should not be searching "project 2
 61b java berkeley".


## Exercises

### Factual

1. Complete the exercises from the [online textbook](https://joshhug.gitbooks.io/hug61b/content/chap1/chap12.html).

    As noted in the lecture 1 study guide, we strongly encourage you to complete
    the optional HW0, which covers a bunch of basic Java syntax.

2. In the below code what would the blank variable name have to be in order for
the code to compile

        public class Human{
          int __________;
          public Human(int ________){
            eyes = ___________;
          }
         }

3. Complete the check-in exercises, linked
[here](https://docs.google.com/forms/d/e/1FAIpQLSePaUIjbiJfh1UPrs8FgpmWsjBV_PVYgSFORnpTbwg3gVVkdA/viewform?usp=sf_link)

### Conceptual

Below is the Dog class.

        public class Dog{
          public void bark(){
            System.out.println("Moo");
          }
          public static void runFast(){
            System.out.println("Ruff Run");
          }
        }


1. Which of the following lines, if any, would cause an error.

        Dog poppa = new Dog();
        poppa.bark();
        Dog.bark();
        poppa.runFast();
        Dog.runFast();

2. What modifications could we make to ensure our code compiles and executes correctly?

### Procedural

Let's imagine I wanted to be able to create a special kind of `Dog`
which displayed a unique String defined by the user when its `bark()` method
is invoked. What additions would you have to make to your `Dog` class?
What changes would you have to make? Try implementing it!

### Metacognitive

What is the purpose of static variables? When designing code, what
are cases in which the use of static variables leads to much cleaner code?