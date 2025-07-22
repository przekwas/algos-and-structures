# Notes

-   Initally my brain went for calculating the current longest substring and just tallying letter occurences, once it hit an occurence I'd reset everything. This fails if the longest substring is at the end, for example.
-   The better approach was a shifting window of the substring ran by a left and right pointer that was the window that shifted over time.
-   Char Map using the `new Set` was the way to go since it has non-iterating methods such as `.has` or `.add` to make lookups easy without increasing the Big O.
-   `right - left + 1` is a calculation of the current substring length. It's the distance between the right pointer and the left pointer which is the length, but we add the one to it because arrays/strings are a zero-based index in JavaScript/TypeScript. :)
-   Remember `Math.max` is a quick way to have it pick the max between 2 different calculated numbers, no need to make if/else logic to find that out.
