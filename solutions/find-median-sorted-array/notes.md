# Notes

-   Remember the optimal way to merge 2 sorted arrays together is gonna be like 3 `while` loops. The first is a comparison for each element where the if statement iterates one index and the else block interates the j index. That way you always compare each number to each other and then the next. Then the last 2 `while` loops add the remaining elements from each array to the merged array.
-   Finding middle of an array, for the median value, is to check if it's odd or even in length first. Cause it's easy if it's odd: just divide the length in half, round down, and return the element.
-   For a median of an even set, or array, you gotta' get the two middle elements and then average them. AKA add them and divide by 2 in our case.
