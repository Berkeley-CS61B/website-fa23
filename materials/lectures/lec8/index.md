---
layout: page
author: Wayne Li, Zephyr Omaly
title: "Inheritance1 Study Guide"
categories: lecture-guide
released: true
---


## Lecture Code

Code from this lecture available at

[https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec8_inheritance1](https://github.com/Berkeley-CS61B/lectureCode-sp23/tree/main/lec8_inheritance1).

## Overview

**Method Overloading** In Java, methods in a class can have the same name, but
different parameters. For example, a `Math` class can have an `add(int a, int b)`
method and an `add(float a, float b)` method as well. The Java compiler is smart
enough to choose the correct method depending on the parameters that you pass in.
Methods with the same name but different parameters are said to be overloaded.

**Making Code General** Consider a `largestNumber` method that only takes an AList
as a parameter. The drawback is that the logic for `largestNumber` is the same
regardless of if we take an `AList` or `SLList`. We just operate on a different
type of list. If we use our previous idea of method overriding, we result in a very
long Java file with many similar methods. This code is hard to maintain; if we
fix a bug in one method, we have to duplicate this fix manually to all the other
methods.

The solution to the above problem is to define a new reference
type that represents both `AList` and `SLList`. We will call it a `List`. Next,
we specify an "is-a" relationship: An `AList` is a `List`. We do the same for
`SLList`. Let's formalize this into code.

**Interfaces** We will use the keyword `interface` instead of `class` to create
our `List`. More explicitly, we write:

    public interface List<Item> { ... }

The key idea is that interfaces specify what this `List` can do, not how to do
it. Since all lists have a `get` method, we add the following method signature
to the interface class:

    public Item get(int i);

Notice we did not define this method. We simply stated that this method should
exist as long as we are working with a `List` interface.

Now, we want to specify that an `AList` is a `List`. We will change our class
declaration of `AList` to:

    public AList<Item> implements List<Item> { ... }

We can do the same for `SLList`. Now, going back to our `largestNumber` method,
instead of creating one method for each type of list, we can simply create one
method that takes in a `List`. As long as our actual object implements the `List`
interface, then this method will work properly!

**Overriding** For each method in `AList` that we also defined in `List`, we
will add an @Override right above the method signature. As an example:

    @Override
    public Item get(int i) { ... }

This is not technically necessary, but is good style and thus we will require it. Also, it
allows us to check against typos. If we mistype our method name, the compiler
will prevent our compilation if we have the @Override tag.

**Interface Inheritance** Formally, we say that subclasses inherit from the
superclass. Interfaces contain all the method signatures, and each subclass
must implement every single signature; think of it as a contract. In addition,
relationships can span multiple generations. For example, C can inherit from B,
which can inherit from A.

**Default Methods** Interfaces can have default methods. We define this via:

    default public void method() { ... }

We can actually implement these methods inside the interface. Note that there
are no instance variables to use, but we can freely use the methods that are
defined in the interface, without worrying about the implementation. Default
methods should work for any type of object that implements the interface! The
subclasses do not have to re-implement the default method anywhere; they can
simply call it for free. However, we can still override default methods, and
re-define the method in our subclass.

**Static vs. Dynamic Type** Every variable in Java has a static type. This is
the type specified when the variable is declared, and is checked at compile
time. Every variable also has a dynamic type; this type is specified when
the variable is instantiated, and is checked at runtime. As an example:

    Thing a;
    a = new Fox();

Here, `Thing` is the static type, and `Fox` is the dynamic type. This is fine
because all foxes are things.


## Exercises

### Factual
1. Describe the relationship between an interface
and a class that implements it in your own words. What are three examples from real life of this
relationship? Discuss this with a peer!

2. How many classes can a specific class implement at most? How many classes can implement
a specific class at most?

3. These check-in exercises, listed
[here](https://docs.google.com/forms/d/e/1FAIpQLSfnZdX5pN5Gg6RmF4XZ9ZLP2nJmQbbit3SLY7tw_gsorjBuVg/viewform?usp=sf_link)

### Conceptual
1. Let's imagine we create a Dog interface with implementing classes BigDog and SmallDog.
What are some examples of default methods we could utilize from the Dog class and what are
methods we would want to override?

2. Let's imagine we create a Dog interface with implementing classes BigDog and SmallDog.
We have a Dog constructor in our Dog class. Why do we still have to write a constructor in our
BigDog and SmallDog classes?

### Procedural
1. How would you implement the two constructors from Conceptual question 2 if you
were attempting to maximize code reuse? Try it out.

### Metacognitive
1. How does the idea of inheritance connect to what we already know? How can we use these ideas to
optimize our IntList code?

2. What are the shortcomings you can identify with the rules of inheritance we have learned?
Do you think they are intentional (a feature which is annoying to the writer but leads to
code that is "better" in some way) or unintentional (a side effect of a behavior we want)?
An example is that we have to ensure we use consistent, correct spelling of our method names
or we will not get the behavior we want! This is intentional because it lets our users feel
confident that they will know how to interact with our objects!
Can you convince your peer to agree with you?

