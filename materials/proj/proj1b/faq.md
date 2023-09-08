---
layout: page
title: "FAQ - Project 1B: Deques"
categories: proj
released: true
searchable: false
---

### I'm sure I wrote tests for coverage, but I'm not attaining those flags on the grader!

There's a chance that when running your tests against the staff version of the code, we run into an assertion error. Make sure that all your assertion statements have the correct expected output! For instance, if you had code that called get(0) on an ArrayDeque with the elements 1, 2, 3, and asserted that the 0th element should be 2, any tests written after this incorrect test won't count in the test coverage.

### When I call .get(0) on my ArrayDeque, I'm returning items[0], but not getting back the item I expect. What is going on?

Keep in mind that the front item of your Deque isn't necessarily in position 0. For example, in the slides that provide
a
slides [which provide suggested approaches for project 1](https://docs.google.com/presentation/d/1XBJOht0xWz1tEvLuvOL4lOIaY0NSfArXAvqgkrx0zpc/edit#slide=id.g1094ff4355_0_450)
, I arbitrarily picked position 4 as the position where the front of the Deque starts.

### I'm getting a "Required Type is Deque but provided is ..."

There are two possible issues. Make sure you haven't accidentally imported java.util.\* (or java.util.LinkedList or
java.util.ArrayList). The other possible issue comes with an issue in your class signature.

### I keep seeing a "Cannot invoke java.lang.Integer.intValue() because the return value of \_\_\_ is null" error on Gradescope.

This NullPointerException is likely caused by your addFirst or addLast methods. To test this for LinkedListDeque, we
have given you a test called
`bigLLDequeTest()` that does 1,000,000 addLast operations, followed by 500,000 removeFirsts and 500,000 removeLasts. To
find the cause of this bug, try duplicating the test and doing 1,000,000 addFirst operations, as well as copying the
entire test and writing an identical version that tests ArrayDeque as well.


### I'm getting an API error asking me to remove or make my isEmpty() method private.

Currently our grader doesn't recognize an implementation of isEmpty within ArrayDeque or LinkedListDeque. Please follow
the spec and provide a default implementation within the Deque.java file.

### I can't get Java to create an array of generic objects!

Use the strange syntax, i.e. `T[] a = (T[]) new Object[1000];`. Here, `T` is a generic type, it's a placeholder for
other Object types like "String" or "Integer".

### What is the Precondition test that's being run on Gradescope? Is it the same one as Project 1A?

This precondition test is checking that the only instance variables declared in your ArrayDeque class are an array and any primitive types (ints, booleans, etc). We forgot to include this test in the skeleton `ArrayDequeTest.java` file that we gave you, but the exact test is written below. If you're failing this test on Gradescope, try copy pasting the below test into your local test file and running it.

```java
@Test
@DisplayName("ArrayDeque has no fields besides backing array and primitives")
void noNonTrivialFields() {
    List<Field> badFields = Reflection.getFields(ArrayDeque.class)
            .filter(f -> !(f.getType().isPrimitive() || f.getType().equals(Object[].class) || f.isSynthetic()))
            .toList();

    assertWithMessage("Found fields that are not array or primitives").that(badFields).isEmpty();
}
```
