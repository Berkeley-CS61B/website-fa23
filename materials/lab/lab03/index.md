---
layout: page
title: "Lab 03: Advanced Git and Debugging"
categories: lab
released: false
---

## FAQ

The FAQ for Lab 03 is [here](faq.md).

## `Adventure`

### Running the Game and Tests

The very first thing you should do is run the `main` method in `AdventureGame`
to run through the game. This will give you a sense of what the program you are
debugging is actually supposed to do. Then, after you’ve run the game, run the
tests in `tests/adventure/AdventureGameTests`. They should fail on
`BeeCountingStage` which will lead you into debugging the first error below.

### Reading Stack Traces

When a _runtime error_ occurs in Java, a stack trace is printed to the console
to provide information on where the error occurred and what steps the program
took to get there. When running `Adventure` for the first time, your stack
trace will look something like this:

![stack trace](img/adventure_stack_trace.png){: style="max-height: 325;" }

The first thing to note is what kind of error occurred; this is shown at the
first line of the stack trace. In this case, our code threw a
`NullPointerException`.

For some exceptions, including `NullPointerException`s, Java will give you an
explanation. Here, `this.input` is `null`, so we can't invoke (call) a method on
it.

The lines beneath it represent the sequence of methods the program took to
arrive at the error: the first line in the list is where the error occurred
and the line beneath it represents the line of code that called the method
which threw the error, and so on.

You can click on **`blue text`**{: .blue} to navigate to that file and line.

---

{% include alert.html type="warning" content="
For each of the following stages, **only change what is necessary**! You should
not be rewriting entire blocks of code unless otherwise specified. We've
included how many lines we changed as a guideline.
" %}

{% include alert.html type="info" content="
**Note**: You can run through the adventure game each time if you'd like to
validate correctness, but you don't need to - feel free to debug through the
tests directly. This can be done by setting a breakpoint in `playStage` for the
appropriate stage file you'd like to debug, then debugging `AdventureGameTests`.
" %}

### Debug `BeeCountingStage`

{% include alert.html type="task" content="
**Task**: Fix the `NullPointerException` that occurs in `BeeCountingStage` by
analyzing the stack trace. You can ignore the lines with `<XX internal calls>`;
these are from test framework or library code and usually won't help you find
errors.
" %}

Expected lines modified: 1

---

It turns out that this isn’t the only error in `BeeCountingStage`!

{% include alert.html type="task" content="
**Task**: Fix the `IndexOutOfBoundsError` that occurs in `BeeCountingStage`.
" %}

**Note**: Ignore the grey links to `Objects.java` and `ArrayList.java` at the
top of the stack trace. The error may have _occurred_ in code that was not
yours, but the root cause was probably something _your code_ tried to do.

Expected lines modified: 1

---

<details markdown="block">
<summary markdown="block">

**Hint 1**

</summary>

Just because the error occurs on a certain line doesn't necessarily mean that
piece of code is incorrect - something not shown in the stack trace may
be the elusive culprit!

</details>

<details markdown="block">
<summary markdown="block">

**Hint 2**

</summary>

Take a close look at the constructor.

</details>

## Optional for This Week Only

{% include alert.html type="warning" content="
**Note**: Due to the Project 0 deadline and the length of this lab, the
following tasks are optional *for this week only*. We still recommend you
complete them for more practice debugging before finishing Project 0, but they
will each be worth 0 points for Lab 02. They will be required and worth points
for Lab 03.
" %}

### Debug `SpeciesListStage`

{% include alert.html type="task" content="
**Task**: Fix the error(s) in `SpeciesListStage`. If you don't see what the
issue is inside the method where the exception occurred (the top line of the
stack trace), it's often a good idea to look at the second line to see where the
method is being called from, and with what arguments.
" %}

Expected lines modified: 3-4

---

<details markdown="block">
<summary markdown="block">

**Hint**

</summary>

Consider the possibilities for lists. Does the code account for all of
them? Are there any edge cases the code fails to handle?

</details>

### Debug `PalindromeStage`

{% include alert.html type="task" content="
**Task**: Sometimes, IntelliJ will tell you something that it thinks is wrong.
Hover over the yellow / orange highlights in the method with the bug. Does that
give you any useful information? <br/><br/> Use this feature to address the
error(s) in `PalindromeStage`.
" %}

**Note:** If the debugger feels unresponsive, it is usually due to an infinite
loop somewhere in your code. If you set a breakpoint and it is never reached,
then you know an infinite loop occurs before the breakpoint! Use this in
combination with stepping to isolate the problem.

Expected lines modified: 3

### Debug `MachineStage`

The `sumOfElementwiseMax` method in `MachineStage` is supposed to take two
arrays, compute the element-wise max of those two arrays, and then sum the
resulting maxes. For example, for two arrays `{2, 0, 10, 14}` and
`{-5, 5, 20, 30}`, the element-wise max is `{2, 5, 20, 30}`. In the second
position, the larger of `0` and `5` is `5`. The sum of this element-wise max is
$2 + 5 + 20 + 30 = 57$.

There are two different bugs that make the method return an incorrect result.
You can assume the input parsing code in `playStage` works correctly.

To find the bugs, you should not step into the `mysteryMax` or `mysteryAdd`
functions, or even try to understand what they are doing. That is, you should
use ![step over](img/step-over.png){: .inline } to _only see the result_. These
are **_mysterious_** functions that are deliberately obfuscated. If you find
yourself having accidentally stepped into one of these two functions, use the
![step out](img/step-out.png){: .inline } button to escape.

Even without stepping INTO these functions, you should be able to tell whether
they have a bug or not. That’s the glory of abstraction! Even if I don’t know
how a fish works at a molecular level, there are some cases where I can clearly
tell that a fish is dead.

{% include alert.html type="task" content="
**Task**: Fix the two bugs so that `sumOfElementwiseMax` returns a correct
result.

---

If you find a bug in `mysteryMax` or `mysteryAdd`, rewrite the method entirely
instead of trying to fix it. Don't rewrite code unnecessarily, though -- be
sure that it's broken first!
" %}

Expected lines modified: 2-5

---

<details markdown="block">
<summary markdown="block">

**Hints**

</summary>

- Understand what the `sumOfElementwiseMax` function is supposed to do. When
  you give inputs to the game, try computing the answer by hand or with a
  calculator. Verify your computation against the output, and you'll see that
  the output is incorrect.
- Set a breakpoint on the line that calls `sumOfElementwiseMax`. When you run
  the debugger, step into `sumOfElementwiseMax`, then use
  ![step over](img/step-over.png){: .inline } to see the result of the call
  to `arrayMax`. Is the output of `arrayMax` what you expect it to be?
- You should step into `arrayMax` if you think that there's a bug there. Don't
  step into `mysteryMax`, though -- if and only if you think it has a bug,
  rewrite it completely.
- Repeat for `arraySum` and `mysteryAdd`.

</details>

### Still Broken...?

At this point, the test for correct inputs should pass. That test is testing a
**correct** input to the adventure game. The second test checks an **incorrect**
input (meaning one that gets something wrong at some point during the game). You
should have gotten an error this time which tells you that the output the game
gave did not match the output we expected. Click on `<Click to see difference>`,
and IntelliJ will tell you where and how the long `String` outputs differed.
Specifically, in this case, `SpeciesListStage` has a bug.

{% include alert.html type="task" content="
**Task**: Go back to `SpeciesListStage` to find and fix the bug (if you didn't
find it before). You may find what you learned in `PalindromeStage` helpful.
" %}

Expected lines changed: 0-1

---

After completing this task, all of the tests should pass.

---

<details markdown="block">
<summary markdown="block">

**Hint**

</summary>

You can force Java to use decimal division by multiplying the numerator by
`1.0`.

</details>

## Setup

Follow the
[assignment workflow instructions](https://sp23.datastructur.es/materials/guides/assignment-workflow/#getting-the-skeleton)
to get the assignment and open it in IntelliJ. This assignment is `lab05`.

## Introduction

In this lab, you will take a deeper dive into git and also learn some advanced
debugging techniques with another exercise. By the end of this lab, you should
feel much stronger about the git workflow, and your debugging skills should be
more refined!

A playlist with some videos that may be helpful for this lab is available **[here](https://www.youtube.com/watch?v=6YhV4L7NNv8&list=PLnp31xXvnfRqw9s4bCo8BFq9U_sLedPVn&index=1)**.

## Git Background

In this part, you may watch a series of videos that explain the major concepts
of git, and then get some hands-on practice using git. We've already practiced
git before in lab01 (and we have an awesome **[git guide](../../guides/git)**), so **feel free to watch these as you are
doing the lab, or skip them if you feel comfortable**.

- [Git Review (updated for sp23)](https://www.youtube.com/watch?v=zl5aaPsv4qk&list=PLnp31xXvnfRqw9s4bCo8BFq9U_sLedPVn&index=2)

{% include alert.html type="warning" content="
We no longer use `checkout` in 61B (instead replacing it with `restore` and
`switch`), so the following videos are a bit out-of-date. However, they are still
useful for learning the basics of how git works!
" %}

These videos talk more about how git works, and are optional for this lab.

- [Git Intro - Part 1](https://www.youtube.com/watch?v=yWBzCAY_5UI)
- [Git Intro - Part 2](https://www.youtube.com/watch?v=CnMpARAOhFg)
- [Git Intro - Part 3](https://www.youtube.com/watch?v=t0tzTcZESWk)
- [Git Intro - Part 4](https://www.youtube.com/watch?v=ca1oCEMQGRQ)
- [Git Intro - Part 5](https://www.youtube.com/watch?v=dZbj9gjjYv8)
- [Git Intro - Part 6](https://www.youtube.com/watch?v=r0oHi0vXhLE)

In particular, you should understand the following concepts:

- Local git workflow: `git add` and `git commit`
- Updating files with `git restore`
- Remote repositories, e.g. those hosted on [GitHub](https://github.com)
- Local git integration with remote repositories: `origin` and `skeleton`
- How to resolve merge conflicts

If you have any questions about the above concepts, you can reference our [git guide](../../guides/git) and the [Git WTFS](https://sp19.datastructur.es/materials/guides/git-wtfs) (Git Weird
Technical Failure Scenarios -- get your mind out of the gutter!), or you can
always feel free to ask your TA to clarify concepts.

We will warn you here: _be wary of git information that you find online_, since
not all of it comes from trusted sources. Also, be sure to **NEVER copy commands
you find online or get from friends with git when you are stuck, unless you
_really, really_ know what you're doing - always ask your TA when you are in
doubt**.

**And remember, we also have our [git guide](../../guides/git) and
[guide on merging](../../guides/git/skeleton-merge-guide.md) as resources!**

## Git Exercise

{% include alert.html type="warning" content="This exercise has a lot of steps,
and it's important you follow each one carefully. If you run into trouble at any
moment, ask on Ed or come into lab/OH for help." %}

{% include alert.html type="info" content="
If you prefer a video format, a walkthrough for most of this exercise is
available [here](https://www.youtube.com/watch?v=OKbl6U2oqI0).
" %}

1. Pull the skeleton code as described in the [assignment workflow
   instructions](https://sp23.datastructur.es/materials/guides/assignment-workflow/#getting-the-skeleton),
   if you haven't already.

2. After pulling the skeleton code, run `git push origin main` (yes, even before
   doing any work on the lab). Make sure to commit your code before you push!

3. Navigate to your GitHub repo online
   (https://github.com/Berkeley-CS61B-Student/sp23-s\*\*\*\*) and go to the
   `lab05` folder (if you can't find it, be sure you've completed step 2). Then,
   click on the `src` and `conflict` folders, and then click on `hello.txt`. You
   should see the following:

   ![hello.txt](img/hello-txt-initial.png)

{:start="4"} 4. Click the pencil icon on the right-hand side to edit the file.
Change the contents of the file to be
`text
    Hello, I am NOT a 61A student!
    `
and then scroll to the bottom of the page. Change the commit message from
"Update hello.txt" to "Change hello.txt to NOT 61A" and click the green
"Commit changes" button.

    ![hello-changed.txt](img/commit-changes.png)

5. Now, open up `hello.txt` locally (in your terminal editor, IntelliJ, or
   something else). You should still see the original contents (`Hello, I am a
61A student!`). This time, change the file to read
   ```text
   Hello, I am a 61B student!
   ```
6. Add and commit this change **locally** (i.e., not on GitHub!) with the
   message "Change hello.txt to 61B".

7. Now, try to `git push` your code from the terminal, as you usually would to
   submit your work. You should see an error like the following (you may have
   seen something like this before):
   ```sh
    ! [rejected]        main -> main (fetch first)
   error: failed to push some refs to 'https://github.com/Berkeley-CS61B-Student/sp23-s****.git'
   hint: Updates were rejected because the remote contains work that you do
   hint: not have locally. This is usually caused by another repository pushing
   hint: to the same ref. You may want to first integrate the remote changes
   hint: (e.g., 'git pull ...') before pushing again.
   hint: See the 'Note about fast-forwards' in 'git push --help' for details.
   ```
   This occurs because git is extremely hesitant about overwriting changes. You
   don't yet have the latest version of the file that the remote has ("NOT
   61A"), so if you pushed your local commits, the "NOT 61A" version of the file
   would be lost!

{% include alert.html type="warning" content="The following step will introduce
a merge conflict. If you have experience with this sort of thing, you may be
tempted to resolve it right away. **Don't do that yet!**" %}

{:start="8"} 8. To resolve this, run `git pull origin main` to integrate the remote's changes
with your local changes. Oh no, git is saying something about a conflict! You
should have gotten a message like the following:

    ```sh
    Auto-merging lab05/src/conflict/hello.txt
    CONFLICT (content): Merge conflict in lab05/src/conflict/hello.txt
    Automatic merge failed; fix conflicts and then commit the result.
    ```

    If you now inspect the contents of `hello.txt`, you should see something like

    ```text
    <<<<<<< HEAD
    Hello, I am a 61B student!
    =======
    Hello, I am NOT a 61A student!
    >>>>>>> 538409c19b3d2dafccd3e8b0c16449662e78de04
    ```

    Don't panic! This is a common occurrence, especially
    when working with others. Git does its best to integrate your changes
    ("61B") with the remote's changes ("NOT 61A"), but it isn't always smart
    enough to figure out how to do so automatically. In this case, git has
    identified a conflict in `hello.txt`, and doesn't know which version to keep.
    We'll learn how to resolve this in a bit, but **don't edit anything yet**!

    The text between `<<<<<<< HEAD` and `=======` is the version of the file in
    your "HEAD" commit, git's shorthand for your most recent local commit. The
    text between `=======` and `>>>>>>> 538409c...` is the version of the file
    in the remote's commit `538409c...`. These two versions are incompatible, so
    git edits our file with these strange conflict markers to let us know that
    we need to resolve the conflict manually.

    In this case, the conflict involves the entire file, but in practice,
    conflicts will only involve a small portion of the conflicted file. Git is
    smart enough to only mark the lines that are in conflict and leave the rest
    of the file alone.

    At this point, the output of `git status` should look similar to this:

    ```sh
    $ git status
    On branch main
    Your branch and 'origin/main' have diverged,
    and have 1 and 1 different commits each, respectively.
        (use "git pull" to merge the remote branch into yours)

    You have unmerged paths.
        (fix conflicts and run "git commit")
        (use "git merge --abort" to abort the merge)

    Unmerged paths:
        (use "git add <file>..." to mark resolution)
            both modified:   src/conflict/hello.txt
    ```

9. If you run `tests/conflict/ConflictTest`, you should now pass
   `testConflictExists`. You will still be failing `testConflictResolved`, but
   that's okay - we'll come back to it later.

   (If you are failing `testConflictExists` but are sure you've done everything
   correctly, refer to the [FAQ](faq.md).)

10. Usually, you would resolve the merge conflict first, and then commit the
    result. However, for this lab, we want to make sure you actually got a merge
    conflict! Run the following commands in the terminal, from the `lab05/` directory:

    ```sh
    $ git add src/conflict/hello.txt
    $ git commit -m "Merge conflict still present"
    ```

11. You should now `git push` as usual and submit your code to Gradescope. If
    everything goes smoothly, your submission should tell you some hidden
    directions on exactly how to resolve the merge conflict and proceed with the
    assignment.

12. Resolve the conflict using the directions stated by the autograder. You
    should now be passing all tests in `ConflictTest`.

{% include alert.html type="task" content="
**Task**: Carefully follow the steps above to introduce and resolve a merge conflict.
" %}

Congratulations, you've successfully resolved a merge conflict! In real-world
code, the merge conflicts you encounter may be much more complex, but the
general idea is the same - your changes are incompatible with the remote's
changes, and you need to reconcile them manually.

## Another Debugging Puzzle?!

In Lab 02, we learned how to use the IntelliJ debugger. In this lab, we'll learn
some more handy features of the debugger, and use it to solve a puzzle!

{% include alert.html type="danger" content="Do not modify `Puzzle.java`!" %}

{% include alert.html type="warning" content="These exercises will involve working
with code that may seem quite cryptic and unfamiliar. Enforce the abstraction
barriers and try to find the answers without having to understand exactly what
is going on!" %}

### Exception Breakpoints

When debugging, you may sometimes run into an unexpected error, making it
difficult to figure out what is wrong with your code. To help with this,
IntelliJ allows you to set breakpoints on exceptions. These ensure that when
your code throws an exception, the debugger will pause execution and allow you
to inspect the state of your program.

Go ahead and run the `Puzzle` class. You should see the following output:

![Puzzle output](img/puzzle-runtime-exception.png)

For many common exceptions, IntelliJ will indicate a "Create breakpoint" button
in the console output (just to the right of `java.lang.RuntimeException` in the
above screenshot), which will allow you to access the advanced breakpoint
window. To access it without this button, create a breakpoint on any line (in
the following screenshot, we've created a breakpoint on line 23), right-click
it, and select "More".

![More breakpoint popup](img/more-breakpoint-popup.png)

The advanced breakpoint window should look something like this:

![Advanced breakpoint window](img/advanced-breakpoint-window.png)

There's a lot going on here, but you don't need to understand most of it. Click
the plus symbol in the top-left corner, and you should see a popup like this:

![Exception breakpoint popup](img/add-exception-breakpoint-popup.png)

Select "Java Exception Breakpoints", and another window will appear where you
can specify the type of exception for which we want to pause execution. The
console told us that we were getting a `java.lang.RuntimeException`, so go ahead
and select that.

![Runtime Exception Breakpoint](img/runtime-exception-breakpoint.png)

You should now see the original advanced breakpoint window, with a newly created
exception breakpoint aptly named 'java.lang.RuntimeException' (if you used the
console's "Create breakpoint" button to access the window, you may see two
copies of this, and that's okay).

You will have the option to break on caught or uncaught exceptions, or both.
This can be useful because a lot of library code intentionally throws and
catches a lot of exceptions, so this allows us to focus on the unhandled ones if
necessary. For now, go ahead and leave both options checked.

If you debug the program at this point, your code should pause on line 53, with
a little lightning bolt symbol in place of the usual red circle. This indicates
that the breakpoint was triggered by an exception, rather than a normal
breakpoint.

![Line 53 Exception breakpoint](img/line-53-exception-breakpoint.png)

From this, we can see that IntelliJ is hinting that the problem may be in
`src/puzzle/answer.txt`. By inspecting that file, poking around `Puzzle.java`,
and using other debugging techniques you learned in Lab 02, can you figure out what's
going on?

{% include alert.html type="task" content="
**Task**: Fix `answer.txt` so that `Puzzle` no longer throws a `RuntimeException`.

Feel free to look at the hint if you're stuck!
" %}

<details markdown="block">
<summary markdown="block">

**Hint**

</summary>

The issue is that `Puzzle.java` parses `answer.txt` for an integer guess, and
doesn't find any, so it throws an exception. To fix this, replace the TODO line
of `answer.txt` with any integer.

</details>

After fixing the bug, run `Puzzle` again. You should now see the following
output:

![Puzzle out-of-bounds exception](img/puzzle-oob-exception.png)

Read the error message and see if you can find the answer! If you've got it
correct, `Puzzle.java` will no longer error and you should pass `testPuzzle`
inside of `tests/puzzle/PuzzleTest`.

{% include alert.html type="task" content="
**Task**: Replace the value in `answer.txt` so that `Puzzle` no longer errors.
" %}

### Expressions and Watches

When debugging, you may not always have the value that you want to inspect
stored in a variable. Luckily, IntelliJ has a solution for us! Once paused on a
certain line, you can use the "Evaluate Expression" tool (shaped like a
calculator). You can click on the calculator icon to open up a whole new window,
but you can also just type the expression into the debugger directly:

![Evaluate Expression Blank](img/eval-expr-add-watches.png)

You can use variables and method calls with this tool too! Even though we've
only used `Math` library methods in the following example, you can call anything
you want. Here, we are using the tool in `Puzzle.java` with an initial `answer`
guess of `973`:

![Evaluate Expression 973](img/evaluate-expression-973.png)

After you resume the program, `result` will be lost. If you don't want to lose
it, you can use Ctrl+Shift+Enter (Windows) or Cmd+Shift+Enter (Mac) to add it as
a _watch_. This will keep it around even after you continue execution. Moreover,
watches will change value accordingly with the program, just like normal
variables would!

Watches will persist even after you stop and rerun your program, so they can be
very useful for debugging over multiple executions. As an example, I've changed
my guess from before to be `1717` and reran the program entirely, but didn't
have to re-evaluate the expression for the debugger to tell me what it was!

![Evaluate Expression 1717](img/evaluate-expression-1717.png)

### A Secret Challenge

At this point, you should have one more failing test, `testSecret` (there is no
associated Java file for this test). We're being intentionally vague and not
telling you what `testSecret` does. In the real world, you often need to figure
out what poorly documented code is doing, and the debugging skills you've
learned over the past three labs will prove immensely helpful!

While you're debugging, you may find the exception breakpoint from the last
exercise to be quite annoying. Feel free to open up the advanced breakpoints
window again to disable or delete it.

{% include alert.html type="warning" content="
**Note**: As a reminder, you don't necessarily need to know what's going on with
the code - embrace the beauty of abstraction and let the tools work their magic!
" %}

{% include alert.html type="task" content="
**Task**: Debug `testSecret` directly (in `PuzzleTest`) and figure out what to put in `secret.txt` such that you pass the test.

**Hint**: Watches and the expression evaluator will likely be helpful here!
" %}

---

Once you're done with that, congratulations, you have finished Lab 05!

## Deliverables and Scoring

The lab is out of 256 points. There are no hidden tests on Gradescope. If you
pass all the local tests, you will receive full credit on the lab (unless you
modified things you weren't supposed to modify).

- Create a merge conflict in `conflict/hello.txt` (64 pts)
- Resolve the merge conflict appropriately in `conflict/hello.txt` (64 pts)
- Find a correct value for `puzzle/answer.txt` (64 pts)
- Find a correct value for `puzzle/secret.txt` (64 pts)

## Submission

Just as you did for the previous assignments, add, commit, then push your Lab 05
code to GitHub. Then, submit to Gradescope to test your code. If you need a
refresher, check out the instructions in the
[Lab 1 spec](/materials/lab/lab01/index.md#saving-your-work-using-git-and-github)
and the
[Assignment Workflow Guide](/materials/guides/assignment-workflow/index.md#submitting-to-gradescope).
