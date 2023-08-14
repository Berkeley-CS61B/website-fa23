---
layout: page
author: Josh Hug, Zephyr Omaly
title: "Intro1 Study Guide"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture available at
[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec1_intro1](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec1_intro1).

## Overview

**Our First Java Program.** Printing Hello World looks like this:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}
```

**Key Syntax Features.** Our first programs reveal several important syntax features of Java:

 - Curly braces are used to denote the beginning and end of a section of code, e.g. a class or method declaration.
 - All code lives inside a class.
 ```java
public class HelloWorld {
    // everything between these two curly braces is within this class!
}
```
 - The code that is executed when a program starts is inside a function, a.k.a. method, called `main`.
 ```java
public static void main(String[] args) {
    //The body of this method is what is executed
}
```
 - Statements end with semi-colons;

```java
System.out.println("Hello world!");
```
 - Variables have declared types, also called their "static type" and variables must be declared before use.
 ```java
 String greeting = "Hello World";
 ```
 - Functions must have a return type. Return types must be specified in the method signature. If a function does not return anything, we use void to specify this.
  ```java
public static void main(String[] args) {
    //This method does not return anything, so we use void
}
```
 - The compiler ensures type consistency. If types are inconsistent, the program will not compile.

**Static Typing.** Every variable, parameter, and function has a declared type, making it easier
for a programmer to understand and reason about code. This is known as static typing.
 - Static typing is (in my opinion) one of the best features of Java. It gives us a number of important advantages over languages without static typing.
 - Types are checked before the program is even run, allowing developers to catch type errors with ease.
 - If you write a program and distribute the compiled version, it is (mostly) guaranteed to be free of any type errors. This makes your code more reliable.

There are downside of static typing, to be discussed later.

## Exercises

Today's guide only provides check-in questions, which are linked
[here](https://docs.google.com/forms/d/e/1FAIpQLSfMGzV5t9WLamElZyJzi_PO_x4VFyyGye5cINFNf0b_RKytrA/viewform?usp=sf_link)

 However, we strongly encourage you to complete the optional [HW0](../../hw/hw0/hw0), which covers a bunch of basic Java syntax.
