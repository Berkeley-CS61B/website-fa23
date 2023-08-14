---
layout: page
author: Brandon Lee
title: "Red Black Trees"
categories: lecture-guide
released: true
---


## QA
Linked [here](https://youtu.be/8iPB_aXIq34).


## Check-in Exercise
Linked [here](https://forms.gle/e1p2Ynzj6bDZYmoR6).

## Overview

**Tree rotaions** We rotateLeft or rotateRight on a node, creating a different but valid BST with the same elements. Notice when we rotateLeft(G) we move the node G to be the left child of the new root.

**Left Leaning Red Black Tree** This is simply an implementation of a 2-3 Tree with the same ideas. Be able to convert between a 2-3 Tree and a LLRB tree. We use *red* links to indicate two nodes that would be in the same 2-3 Node. In a left leaning RB tree, we arbitrarily enforce that edges are always to the left (for convenience).

There are two important propertires for LLRBs:

1. No node ever has 2 red links (It wouldn't be a valid node in a 2-3 Tree if it did)
2. Every path from the root to a leaf has the same number of *black links*. This is because every leaf in a 2-3 tree has same numbers of links from root. Therefore, the tree is balanced.

**LLRB operations**
Always insert with a red link at the correct location. Then use the following three operations to "fix" or LLRB tree. See slides for visual 

1. If there is a right leaning red link, rotate that node left.
2. If there are two consecutive left leaning links, rotate right on the top node. 
3. If there is a node with two red links to children, flip all links with that node. 
