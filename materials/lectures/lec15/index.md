---
layout: page
author: Josh Hug and Kartik Kapur
title: "Asymptotics II Study Guide"
categories: lecture-guide
released: true
---


## Live QA
Linked [here](https://youtu.be/ClMh3FVA82Y).

## Check-in Exercise
Linked [here](https://forms.gle/7QmMihPFqCEjJyuV8).

## Overview

**Runtime Analysis.** Understanding the runtime of code involves deep thought.
It amounts to asking: "How long does it take to do stuff?", where stuff can be
any conceivable computational process whatsoever. It simply cannot be done
mechanically, at least for non-trivial problems. As an example, a pair of nested
for loops does NOT mean $\Theta(N^2)$ runtime as we saw in lecture.

**Cost Model.** As an anchor for your thinking, recall the idea of a "cost
model" from last lecture. Pick an operation and count them. You want the one
whose count has the highest order of growth as a function of the input size.

**Important Sums.** This is not a math class so we'll be a bit sloppy, but the
two key sums that you should know are that:
 - $1 + 2 + 3 + ... + N \in \Theta(N^2)$
 - $1 + 2 + 4 + 8 + ... + N \in \Theta(N)$

**Practice.** The only way to learn this is through plenty of practice. Make sure to work through the problems in lecture and below when you have some time.

## Recommended Problems

### C level
1. Prove that $O(N + \frac{N}{2} + \frac{N}{4} +.... 2 + 1)= O(N)$ (hand wavy proof is okay as long as you gain the intuition)

2. What would the runtime of `modified_fib` be. Assume that values is an array of
size n. If a value in an int array is not initialized to a number, it is automatically
set to 0.


        public void modified_fib(int n, int[] values){
          if(n <= 1){
            values[n] = n;
            return n;
          }
          else{
            int val = values[n];
            if(val == 0){
              val = modified_fib(n-1, values) + modified_fib(n-2, values);
              values[n] = val;
            }
            return val;
          }
        }  

3. Prove to yourself that $\Theta(log_2(n)) = \Theta(log_3(n)) $

### B level

1. Find the runtime of running print_fib with for arbitrary large n.


        public void print_fib(int n){
          for(int i = 0; i < n; i++i){
              System.out.println(fib(i));
          }
        }

        public int fib(int n){
          if(n <= 0){
            return 0;
          }
          elif(n == 1){
            return 1;
          }
          else{
            return fib(n-1) + fib(n-2);
          }
        }

2. Do problem 5 again, but change the body of the for loop in `print_fib` to be


        System.out.println(fib(n));


3. Find the runtime of this function

        public void melo(int N){
          for(int i = 0; i < N*N; i++){
            System.out.println("Gelo is fruit pudding");
          }
          for(int i = 0; i < N*N*N; i++){
            System.out.println("Zo Two the Warriors");
          }
        }

4. Find the runtime of this function


        public void grigobreath(int N){
            if(N==0){
              return;
            }
            for(int i  = 0; i < N; i++){
              System.out.println("Gul-great")
            }
            grigobreath(N * 1/2);
            grigobreath(N * 1/4);
            grigobreath(N * 1/4);
        }

5. [Problem 8](https://tbp.berkeley.edu/exams/6137/download/) from Spring 2018 midterm #2

6. [Problem 4](https://tbp.berkeley.edu/exams/5773/download/) from Spring 2017 midterm #2
