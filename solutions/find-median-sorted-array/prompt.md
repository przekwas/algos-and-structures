# Median of Two Sorted Arrays

## Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Examples

#### Example 1:

-   **Input**: `nums1 = [1,3]`, `nums2 = [2]`
-   **Output**: `2.00000`
-   **Explanation**: Merged array = `[1,2,3]` and median is `2`.

#### Example 2:

-   **Input**: `nums1 = [1,2]`, `nums2 = [3,4]`
-   **Output**: `2.50000`
-   **Explanation**: Merged array = `[1,2,3,4]` and median is `(2 + 3) / 2 = 2.5`.

### Constraints:

-   `nums1.length == m`
-   `nums2.length == n`
-   `0 <= m <= 1000`
-   `0 <= n <= 1000`
-   `1 <= m + n <= 2000`
-   `-10^6 <= nums1[i], nums2[i] <= 10^6`

### Task

Implement a function that efficiently finds the median of the two sorted arrays with the required time complexity.

### Notes:

-   The median is the middle value in an ordered integer list. If the size is even, the median is the average of the two middle values.
-   The solution should not merge the arrays explicitly (as this would be O(m+n) time).
-   Optimal solutions typically use a binary search approach to partition the two arrays.

### Follow-up Considerations

-   How would your solution change if the input arrays were not sorted?
-   Can your solution be extended to find the k-th smallest element in two sorted arrays?
