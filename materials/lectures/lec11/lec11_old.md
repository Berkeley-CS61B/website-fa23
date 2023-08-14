---
layout: page
author: Kartik Kapur
title: "Libraries Study Guide"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture available at

[https://github.com/Berkeley-CS61B/lectureCode-sp18/tree/master/inheritance4](https://github.com/Berkeley-CS61B/lectureCode-sp18/tree/master/inheritance4).

## Overview

**Abstract Data Types** Previously, we went over interfaces which, in a traditional sense
(disregarding default methods which will be defined a bit lower), requires
certain methods to be implemented in a class if it is said a type of that
interface. Abstract Data Types follow this philosophy, and are defined to be
some sort of Object that is defined by some set of operations rather than
the implementation of these operations.

**Interfaces** There are 2 types of inheritance that we have gone over in
previous lectures:
- Interface inheritance: What (the class can do).
- Implementation inheritance: How (the class does it).

**Default Methods** The way we have dealt with interfaces, there is no content
in them. We only define a certain set of operations that need to be
fulfilled by anything that implements the interface. However, we can create
`default` methods that take the following form:

    default void methodName(){...}

Normal interface methods have no body and only state what needs to be defined.
Default methods on the other hand provide how a method by providing a method
body.

Here are some bullet points about interfaces
- variables can exist in interfaces but they are public static final.
- classes can extend more than 1 interface.
- methods are public unless stated otherwise
- interfaces cannot be instantiated.

**Abstract Classes** Abstract classes can be thought of as a hybrid of a normal
class and an interface. Abstract classes are like interfaces in that they cannot
be instantiated. All methods in an Abstract class are like normal methods in
classes unless they have word `abstract` in front of them. If that is the
case then they are treated like normal methods in interfaces and do not need to
have a body and can instead have an implementation in whatever class extends them.
 A very important difference between abstract classes and interfaces
is that a class can only extend one abstract class but can implement more
than one interface.

**Packages** A namespace is a region that can be used to organize code. Packages
are a specific type of namespace that is used to organize classes and interfaces.
To use a class from a different package use the  following syntax:

    package_name.classname.subclassname a = new package_name.classname.subclassname();

To make your life easier while typing out code, you can simply import the
class following the syntax below:

    import package_name.classname.subclassname;

Replace the subclassname with a * if you want to important everything from
the class.


## Exercises

### C level
1. If an abstract class extends an abstract class, would it need to have function
definitions for the abstract methods in the parent class? Similarly would
an interface that implements another interface have to implement the non default
methods in the parent interface.
2. Can an abstract class be the subclass of a normal class?
3. If you don't specify the package a class is in, is it  part of a package?
If so, which package?

### B level
1. Would the following compile

        public class Tree(){
          public int bark(){...}
        }
        public interface Dog{
          default int bark(){...}
        }
        public class Mutant extends Tree implements Dog{...}

    If so, which bark method would be called? 
