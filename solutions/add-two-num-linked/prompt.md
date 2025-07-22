# Add Two Numbers Represented by Linked Lists

## Problem Statement
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Your task is to add these two numbers and return the sum as a linked list in the same reverse order format.

You may assume the numbers do not contain any leading zeros, except for the number `0` itself.

### Examples

#### Example 1:
- **Input**:  
  `l1 = [2,4,3]` (represents `342`)  
  `l2 = [5,6,4]` (represents `465`)  
- **Output**: `[7,0,8]` (represents `342 + 465 = 807`)  

#### Example 2:
- **Input**:  
  `l1 = [0]`  
  `l2 = [0]`  
- **Output**: `[0]`  

#### Example 3:
- **Input**:  
  `l1 = [9,9,9,9,9,9,9]` (represents `9,999,999`)  
  `l2 = [9,9,9,9]` (represents `9,999`)  
- **Output**: `[8,9,9,9,0,0,0,1]` (represents `10,009,998`)  

### Constraints:
- The number of nodes in each linked list is in the range `[1, 100]`.
- Each node's value (`Node.val`) is between `0` and `9`.
- The linked lists represent numbers without leading zeros, except for `0` itself.

### Visual Example
![Example Visualization](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)  
*(Image shows how the linked lists represent numbers in reverse order.)*

### Task
Implement a function (or method) that takes two linked lists as input and returns their sum as a new linked list.

### Notes:
- The digits are stored in reverse order, meaning the head of the list is the least significant digit (units place).
- Handle carry-over correctly when the sum of digits exceeds `9`.
- The solution should efficiently traverse both lists and construct the result list in one pass if possible.