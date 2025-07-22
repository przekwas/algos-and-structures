# Notes

-   My brain went to nested array solution first thing. Remember to think if I can rephrase the question to be `target - num = goal` instead of `num1 + num1 = target` meaning it changes how I can write the code better or tackle the problem efficiently.
-   Nested loops are a good case to remember that Hash Maps are prolly a better way to do lookups on whatever I'm doing and are way more efficient.
-   I overcomplicated the problem because I have a habit of thinking of a solution before finishing reading the entire prompt. I ignored `each input has exactly one solution` which woulda made my early return way easier to code ffs.
-   It's a math trick for the optimized solution that ends up being `O(max(n, m))` since you only have to iterate over the longest array once to get this answer.
-   Then the math trick is basically "reverse addition" and by that I mean is how you add from left to right rather than what your brain thinks.
-   This is actually how computers do it a low level to keep it fast and not care how big your numbers are!
