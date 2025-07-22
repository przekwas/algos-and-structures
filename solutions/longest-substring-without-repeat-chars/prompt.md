# Longest Substring Without Repeating Characters

## Problem Statement

Given a string `s`, find the length of the longest substring without repeating characters.

### Examples

#### Example 1:

-   **Input**: `s = "abcabcbb"`
-   **Output**: `3`
-   **Explanation**: The answer is `"abc"`, with length 3.

#### Example 2:

-   **Input**: `s = "bbbbb"`
-   **Output**: `1`
-   **Explanation**: The answer is `"b"`, with length 1.

#### Example 3:

-   **Input**: `s = "pwwkew"`
-   **Output**: `3`
-   **Explanation**: The answer is `"wke"`, with length 3.  
    Note that `"pwke"` is a subsequence but not a substring.

### Constraints:

-   `0 <= s.length <= 5 * 10^4`
-   `s` consists of English letters, digits, symbols, and spaces.

### Task

Implement a function that efficiently finds the length of the longest substring without repeating characters.

### Notes:

-   A substring is a contiguous sequence of characters within the string.
-   The solution should handle all valid ASCII characters.
-   Optimal solutions typically use a sliding window approach with O(n) time complexity.

### Follow-up Considerations

-   How would you modify your solution if you needed to return the actual substring instead of just its length?
-   Can your solution handle Unicode characters as well?
