---
layout: page
title: "HW 0: A Java Crash Course"
categories: hw
released: true
toc:
  h_max: 4
---

## Introduction

In this assignment, we will go through basic Java syntax. Since roughly 98.5%
of you have used Python, everything in this homework is similar to a Python
concept. This homework does NOT require that you know Python. Even if you don't
know Python, you'll see that Python code is almost like pseudocode and should
therefore be readable.

If you've written code in C or C++, you'll see that Java is very similar.

For the 0.3% of you who have never written code in Python, C, or C++, please
feel free to contact the staff if you need extra assistance understanding basic
Java syntax.

This homework is due on **Friday, August 25**! Early lectures, labs, and
projects will rely on being able to read and understand the basic structure of
Java code.

### Goals and Outcomes

In this HW, you will complete a few Java exercises, and translate your existing
programming knowledge to Java. By the end of this HW you will:

- Understand how fundamental constructs translate to Java.
- Be able to read short Java snippets.
- Be able to implement novel programs in Java.

## Crash Course

For ease of navigation, this crash course has been split up into several parts.
Read through them:

[Part A: Java Syntax](./a)

[Part B: Data Structures](./b)

[Part C: Instance vs Static](./cookies)


## Exercises

UW has a large collection of introductory Java exercises that we will be
borrowing. For HW 0, create an account on
[Practice-It](https://practiceit.cs.washington.edu), and complete the
following:

- [Self-Check 1.26: Confusing][]
- [Exercise 2.5: `starTriangle`][]
- [Self-Check 2.25: `numberTotal`][]
- [Exercise 3.23: `printIndexed`][] or [Exercise 4.17: `stutter`][]
- [Self-Check 4.5: `ifElseMystery1`][]
- [Exercise 4.19: `quadrant`][]

Make sure to follow the directions on the exercise page, especially for
printing versus returning!

If you run into trouble with the exercises, one strategy could be solving in
Python first, then translating that to Java. If you're having trouble with
solving in Python, that's fine, and not the point of this exercise. If you'd
like to reference Python solutions, see the dropdowns below.

<details markdown="block">
<summary markdown="block">

`starTriangle`

</summary>

```python
for i in range(5):
    line = ""
    for j in range(i + 1):
        line += "*"
    print(line)
```

</details>

<details markdown="block">
<summary markdown="block">

`printIndexed`

</summary>

```python
def printIndexed(s):
    output = ""
    for i in range(len(s)):
        output += s[i]
        output += str(len(s) - 1 - i)
    print(output)
```

</details>

<details markdown="block">
<summary markdown="block">

`stutter`

</summary>

```python
def stutter(s):
    output = ""
    for i in range(len(s)):
        output += s[i]
        output += s[i]
    return output
```

</details>

<details markdown="block">
<summary markdown="block">

`quadrant`

</summary>

```python
def quadrant(x, y):
    if x == 0 or y == 0:
        return 0
    elif y > 0 and x > 0:
        return 1
    elif y > 0 and x < 0:
        return 2
    elif y < 0 and x < 0:
        return 3
    else:
        return 4
```

</details>

[Self-Check 1.26: Confusing]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter1/s26%2DConfusing
[Self-Check 2.25: `numberTotal`]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter2/s25%2DnumberTotal
[Self-Check 4.5: `ifElseMystery1`]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter4/s5%2DifElseMystery1
[Exercise 2.5: `starTriangle`]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter2/e5%2DstarTriangle
[Exercise 3.23: `printIndexed`]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter3/e23%2DprintIndexed
[Exercise 4.17: `stutter`]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter4/e17%2Dstutter
[Exercise 4.19: `quadrant`]: https://practiceit.cs.washington.edu/problem/view/bjp5/chapter4/e19%2Dquadrant

Once you've completed the 6 exercises, go to your list of
[solved problems](https://practiceit.cs.washington.edu/user/problems-solved),
take a screenshot of the table, and submit the screenshot to HW 0 on
Gradescope.

**NOTE**: If you are having trouble getting your screenshot into the PDF
format required by Gradescope, try using [this converter](https://png2pdf.com/).

Congratulations! You're prepared for the next few lectures, and have completed
HW 0.

A programming language is not too different from a spoken language -- in
particular, you will get better the more code you write. The PracticeIt site
has **many** problems available, and you should feel free to attempt more.
(Their progression doesn't exactly match ours, though -- if you see a `Scanner`
or need to generate a random number, you can skip that problem.)

We also recommend <https://codingbat.com/java/AP-1>, which has more advanced
Java problems.
