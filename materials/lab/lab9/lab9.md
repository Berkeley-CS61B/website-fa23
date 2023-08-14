---
layout: page
title: "Lab 9: Tries"
categories: lab
released: false
---


In this lab, you'll create **TrieSet**, a Trie-based implementation of the TrieSet61B interface, which represents a basic Trie. 

1: TrieSet
=======

Create a class **MyTrieSet** that implements the **TrieSet61B** interface using a Trie as its core data structure. You must do this in a file named `MyTrieSet.java`. Your implementation is required to implement all of the methods given in **TrieSet61B** *except* for `longestPrefixOf` and `add`. For `longestPrefixOf` you should throw an `UnsupportedOperationException`. For `add` please copy and paste the following code if you choose not to implement it yourself:

<pre><code style="color:white">
    @Override
    public void add(String key) {
        if (key == null || key.length() < 1) {
            return;
        }
        Node curr = root;
        for (int i = 0, n = key.length(); i < n; i++) {
            char c = key.charAt(i);
            if (!curr.map.containsKey(c)) {
                curr.map.put(c, new Node(c, false));
            }
            curr = curr.map.get(c);
        }
        curr.isKey = true;
    }
</code></pre>


The following resources might prove useful:

* Trie code from [our optional textbook](https://algs4.cs.princeton.edu/52trie/TrieST.java.html).
* Lecture 21 [slides](https://docs.google.com/presentation/d/1yK88MIaVgAf3Pj-CMr_a4J_6KXCIQd-Fv4LvHDAghng/edit?usp=sharing).
* Tries from pages 173 to 180 of [Data Structures Into Java](http://www-inst.eecs.berkeley.edu/~cs61b/fa14/book2/data-structures.pdf), from our course references page.

You can test your implementation using the `TestMyTrieSet` class. If you fail tests, we recommend creating a very short main method and using the visualizer, e.g.

```java
public static void main(String[] args) {
        MyTrieSet t = new MyTrieSet();
        t.add("hello");
        t.add("hi");
        t.add("help");
        t.add("zebra");
}
```

2: TA Overview
====

At the end of lab, your TA will go over our solutions for `MyTrieSet`.
