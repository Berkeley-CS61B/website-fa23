---
layout: page
title: "Lab 06: Project 1 Peer Code Review"
categories: lab
released: false
---

# Introduction and Logistics

In this lab, you will compare your solution to Project 1 with 1-3 other students in your lab. The goal of this lab is to get an introduction into the code reviewing process and learn how to effectively explain and communicate their solution to others.

{% capture alertContent %}
**On-time lab attendance is required this week**.
As part of this lab, TAs will go over part of the solution for Project 1. **Do not attend this lab before you have made your final Project 1A AND Project 1B submission to Gradescope, otherwise you will get marked for academic dishonesty.** If you have an extension past Friday 02/24, don't come to lab this week!
{% endcapture %}
{% include alert.html type="warning" content=alertContent%}

If you cannot attend your regular lab, you may attend any other lab instead, barring room capacity.

If you are physically unable to attend any lab at all, please fill out **[this exemption form](https://forms.gle/5gWN6K49eG938Jbg9) by Friday, February 24th (02/24)**. We will be verifying each form submission manually, and those with invalid submissions will not be checked off. **We will not be accepting any new form submissions after 02/24**, and will be automatically checking off valid form submissions through Beacon during the weekend of February 25th (02/25).

**If you have approved extensions for Project 1A or 1B that extend past the Lab 6 deadline (02/24), Do NOT fill out the form.** You will automatically receive a _5 day extension for Lab 6_, and please **come to future Lab section or Office Hours to get checked off.**

{% capture alertContent %}
Again, as part of this lab, TAs will go over part of the solution for Project 1. **Do not attend this lab before you have made your final Project 1 submission to Gradescope, otherwise you will get marked for academic dishonesty.**
{% endcapture %}
{% include alert.html type="warning" content=alertContent%}

Please find the Lab06 FAQ [here](./faq.md). **Note that this lab is due Friday, February 24th**. Good luck!

## Setup

Follow the
[assignment workflow instructions](https://sp23.datastructur.es/materials/guides/assignment-workflow/#getting-the-skeleton)
to get the assignment and open it in IntelliJ. This assignment is `lab06`.

{% capture alertContent %}
If you run into merge conflicts, please run these commands when pulling the
skeleton for the starter files:

```shell
git pull skeleton main -X ours
git commit -m "resolved lab merge conflicts"
```

{% endcapture %}
{% include alert.html type="info" content=alertContent%}

# LinkedListDeque Overview

Your TA will start the lab by giving a brief overview of the staff solution to `LinkedListDeque`.

## LinkedListDeque Peer Review

Group up with 1-3 other students and compare solutions. Don't be afraid of meeting someone new! Programmers in 61B vary widely in their level of experience and comfort with programming. Our goal here is to help each other get better. Please be nice, and don't feel bad if your solution is less elegant or even downright ugly. I've certainly written incredibly ugly, inelegant code! Why here's [a 1600 line monstrosity I wrote in 1997](knaveos.html), and a [video demo of it running](https://youtu.be/XgJUC0Le_Ew) if you're curious what it does. knaveos will not be on the midterm.

Avoid the temptation to explain exactly how your implementation works to your partner. Instead focus your discussion on more specific questions. Some suggested questions are listed below:

1. What was the most annoying bug you had and how did you fix it? Did you use the debugger? Did you fix it by adding special cases? Did you do any change-and-pray (where you make a tiny change and hope the AG approves)?
2. Did you end up cutting anything out to make your code simpler? If so, what?
3. Do you have any special cases in your code?
4. Do you have any private helper methods?
5. Does your code repeat itself anywhere? Would private helper methods have helped?
6. Were you able to call or reuse code anywhere?

After discussion, fill out `self_reflection.txt` with your own self reflection.

# ArrayDeque Overview

Your TA will go over the `ArrayDeque` solution.

## ArrayDeque Peer Review

Now, pair up again and discuss your ArrayDeque solutions as you did for
`LinkedListDeque`. Fill out your `self_reflection.txt` as you did for
`LinkedListDeque`. We recommend that you talk to different people than you did
for `LinkedListDeque`, but it's OK to stick with your group for `ArrayDeque`.

# Self Reflection and Submission

Make sure you've filled out at least 4 questions **each** in
`self_reflection.txt` for `LinkedListDeque` and `ArrayDeque`. Ask a staff member
to check your `self_reflection.txt` and give you the magic word to put in
`magic_word.txt`. Push to GitHub and submit to Gradescope.
