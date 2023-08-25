---
layout: page
title: "Lab 6: Peer Design Review for Project 2"
categories: lab
released: false
---


This is a totally new way of doing things for project 2. Please bear with us if
parts of it seem lame, since you are the first to try it out! Please report any
errors or feedback directly to Josh: hug@cs.berkeley.edu

Pre-lab
-------------------------------

- Have your design document ready. It will not be turned in, but you will use it
  to discuss your design with another ICT in lab.

- Consider looking over the [example design doc](example_design_doc.txt), which
  gives an example of a not-so-great design written out in significant detail.

- `git pull skeleton master` (though this time it's just an empty lab6 folder)

Introduction
--------------------------------

In this lab, your ICT will discuss your design with an ICT that is not part of
your design group. You will also see an example of a design document for a
flawed design, and will submit your own design document for your project, though
it will not be graded.

You'll start this lab by finding an ICT that is not part of your design group.
You'll then compare designs for the next ~40 minutes, before getting back
together with your design group (if everyone was able to attend). If you don't
have a design yet, you're behind on the project, but you should still
participate in a discussion.

Throughout the lab, the TAs will be walking around, and our goal is to have a
brief discussion with every ICT for a few minutes. This may mean interrupting
your peer discussion with another ICT.

Part IA: Peer Discussion [10 to 20 minutes]
--------------------------------

Designate one ICT as the "questioners", and the other as the "answerers". The
goal of these discussions are to:
 - Try to uncover potential flaws or oversights in your design.
 - Provide each team with an exposure to a totally different approach to the
   problem, which can help if you run into trouble later.

The goal is NOT to figure whose design is best, or for you to entirely rework
your original design.

First: Using a whiteboard (or a piece of paper, if a whiteboard is unavailable),
the answerers should draw a box and pointer diagram showing the state of all of
your instance variables after creating the one row table shown below. 

| X int | Y int | Z int |
| ----- | ----- | ----- |
| 1     | 2     | 3     |

Afterwards, the questioners should ask about the answerers ICT's design. Some
recommended questions are listed below:
 - Did you write prototype code to test your ideas?
 - Have you written any JUnit tests? Do you plan to do so?
 - What abstract data types (maps, sets, lists) do you primarily rely on?
 - Do you have nested generic declarations, e.g. `Map<Integer, List<Integer>>`?
   Instructor note: This is an indication you should make a new class, see
   [lecture slide link](https://docs.google.com/presentation/d/1x_tuXuGsUwIyna9Z7Hi8YjNku1VBC0hYrfr_PMrWVXQ/edit#slide=id.g7b0a42b6a_0249).
 - Have you considered all operations from the spec? Which have you not yet
   considered?
 - What are some earlier design ideas that were rejected? WHY?
 - What helper methods have you thought about defining?
 - How do you handle having three different types, two of each are primitive
   (int and float) and one of which is a reference type (String)? Do you use
   generics? Something else?
 - Do you have any Maps whose keys are mutable? For example,
   `Map<List, String>`. Instructor note: This is not a good idea. Maps assume
   that keys are
   immutable.

Part IB: Peer Discussion in Reverse [10 - 20 minutes]
--------------------------------

Swap roles between the questioners and the answerers.

If you run out of things to discuss before the TA announces that it's time to
move to part II, start looking over the [example design
doc](example_design_doc.txt).

Optional Part II
--------------------------------
Look over the example design doc, and try to identify flaws with this design.
Some questions you might consider:
 - Does the choice of storage lend itself to a simple join method? Why or why not?
 - Are abstraction barriers strong between the classes?
 - Is the use of generics a good one?
 - Is the use of subtype polymorphism appropriate?
 - What are two improvements?

Part III - Design Document
--------------------------------

Get back together with your design group if they were able to also attend the
same lab. Share what you learned and discuss potential changes to your design
based on your discussions.

Submit a design document, either as an ICT, or as entire design group. It
doesn't matter who submits to gradescope, but make sure to mark all members on
gradescope. Your design document should be called either design\_document.txt or
design\_document.pdf. These documents will not be graded or read by your TA, but
they may be used after the semester to help revise this project.

Even if you are unable to complete your design document by 5 PM on Friday,
submit what you are able to complete at that time.

If possible, make sure to talk to your TA before leaving! Make sure to show them
your whiteboard or paper drawing of your instance variables while describing
your design.
