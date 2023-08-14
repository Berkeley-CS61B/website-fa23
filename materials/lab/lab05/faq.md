---
layout: page
title: "FAQ - Lab 05: Advanced Git and Debugging"
categories: lab
released: false
searchable: false
---

### I got the correct merge conflict but still don't pass `testConflictExists`.

If you are failing `testConflictExists`, it is likely due to a typo in one of
the versions of `hello.txt` from an earlier step. Feel free to manually edit
`hello.txt` in a text editor so that it matches the expected output.

### I accidentally resolved the merge conflict before submitting to Gradescope, so I can't proceeed with the lab.

Refer to [this FAQ entry](#i-dont-get-a-merge-conflict-in-step-7-what-do-i-do).

### I don't get a merge conflict in step 7. What do I do?

Chances are you skipped a step, or did something out of order. Follow the steps
again so that your local machine contains a different version of `hello.txt`
than your online repo (you don't have to replace the files with the exact
content mentioned in the spec - as long as they're different, you'll get a
conflict). Then pull from `origin main` again and you should get a merge
conflict. You can then update the file's content manually to match the expected
output.
