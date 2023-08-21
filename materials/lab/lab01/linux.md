---
layout: page
title: "Lab 1 Setup: Linux/Unix"
categories: lab
released: true
---

## A. Setup

Setting up Linux for 61B is super easy, all you have to do is use your package
manager (apt, yum, etc) to install the Java JDK and git.

To install and configure the Java JDK and Git on Ubuntu:

```sh
sudo apt install openjdk-17-jdk git
git config --global credential.helper store
```
