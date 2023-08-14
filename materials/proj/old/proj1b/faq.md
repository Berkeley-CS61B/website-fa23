---
layout: page 
title: "FAQ - Project 1: Deques"
categories: proj 
released: false 
searchable: false
---

#### Deque

##### I just want to test my ArrayDeque and LinkedListDeque but haven't done the end of the project yet. How do I get my code to compile on the autograder?

See the first tip in the spec: https://sp23.datastructur.es/materials/proj/proj1/#tips

##### When I call .get(0) on my ArrayDeque, I'm returning items[0], but not getting back the item I expect. What is going on?

Keep in mind that the front item of your Deque isn't necessarily in position 0. For example, in the slides that provide
a
slides [which provide suggested approaches for project 1](https://docs.google.com/presentation/d/1XBJOht0xWz1tEvLuvOL4lOIaY0NSfArXAvqgkrx0zpc/edit#slide=id.g1094ff4355_0_450)
, I arbitrarily picked position 4 as the position where the front of the Deque starts.

##### I'm getting a "Required Type is Deque but provided is ..."

There are two possible issues. Make sure you haven't accidentally imported java.util.* (or java.util.LinkedList or
java.util.ArrayList). The other possible issue comes with an issue in your class signature.

##### I keep seeing a "Cannot invoke java.lang.Integer.intValue() because the return value of ___ is null" error on Gradescope.

This NullPointerException is likely caused by your addFirst or addLast methods. To test this for LinkedListDeque, we
have given you a test called
`bigLLDequeTest()` that does 1,000,000 addLast operations, followed by 500,000 removeFirsts and 500,000 removeLasts. To
find the cause of this bug, try duplicating the test and doing 1,000,000 addFirst operations, as well as copying the
entire test and writing an identical version that tests ArrayDeque as well.

##### How do I test printDeque()? Doesn't it return nothing?

For printDeque(), just write a test that calls the method and visually confirm that it's working. Don't worry about
adding any junit methods to this specific test!

##### I'm getting an error when trying to @Override getRecursive() in ArrayDeque.java.

Your Deque.java interface should not specify a method getRecursive() (that would be saying that every class that
implements Deque.java should also implement getRecursive(), which is misleading. Rather, Deque.java should not contain
getRecursive(), and omit the @Override tag in your implementation in LinkedListDeque.

##### I'm getting an API error asking me to remove or make my isEmpty() method private.

Currently our grader doesn't recognize an implementation of isEmpty within ArrayDeque or LinkedListDeque. Please follow
the spec and provide a default implementation within the Deque.java file.

##### Why am I getting "cannot resolve symbol LinkedListDeque" in LinkedListDequeTest.java?

For the code to compile, you must first create a new file called LinkedListDeque.java inside of deque/ . This can be
done in IntelliJ by right-clicking on the deque/ folder, then going to New->Java Class (name it LinkedListDeque).

##### Intellij is telling me "The method ... of type LinkedListDeque has the same erasure as ... of type Deque but does not override it."

You probably forgot the generic `T` in the implements line of your class signature (i.e. you wrote
`implements Deque` instead of `implements Deque<T>`). If you used something other than `T` for your generic type
parameter, use that instead.

##### Q: How should I print the items in my deque when I don't know their type?

A: It's fine to use the default String that will be printed (this string comes from an Object's implementation
of `toString()`, which we'll talk more about later this semester). For example, if you called the generic type in your
class `Jumanji`, to print `Jumanji j`, you can call `System.out.print(j)`.

##### Q: I can't get Java to create an array of generic objects!

A: Use the strange syntax, i.e. `T[] a = (T[]) new Object[1000];`. Here, `T` is a generic type, it's a placeholder for
other Object types like "String" or "Integer".

##### Q: I tried that but I'm getting a compiler warning?

A: Sorry, this is something the designers of Java messed up when they introduced generics into Java. There's no nice way
around it. Enjoy your compiler warning. We'll talk more about this in a few weeks.

##### Q: How do I make my arrows point to particular fields of a data structure?

In your diagram from lecture it looked like the arrows were able to point to the middle of an array or at specific
fields of a node.

A: Any time I drew an arrow in class that pointed at an object, the pointer was to the ENTIRE object, not a particular
field of an object. In fact it is impossible for a reference to point to the fields of an object in Java.

#### Guitar Hero

##### I'm getting a "class file contains wrong class" error.

Make sure all of your Java files have the right package declaration at the top. Also make sure that anything that is
part of the `gh2`
package is in a folder called "gh2".

##### I'm getting a message that I did not override an abstract method, but I am!

Chances are you have a typo. You should always use the @Override tag when overriding methods so that the compiler will
find any such typos.

##### When I try to run the provided tests I get "No runnable methods".

Make sure you've uncommented the tests, including the `@Test` annotation.

##### When I try to compile my code, it says type K#1 is not compatible with type K#2, or something similar.

If you're defining an inner class, make sure it does not redeclare a new generic type parameter, e.g. the first `<Z>`
given in `private class MapWizard<Z>
implements Iterator<Z>{` should not be there!

##### I'm getting a strange autograder error!

While `GuitarString` is a guitar string simulator, it should not involve playing any sounds. The playing should be done
by the `GuitarString` client.
