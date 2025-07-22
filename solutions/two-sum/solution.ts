/**
 * Finds two numbers in an array that add up to the target.
 * @param nums Array of integers
 * @param target Target sum
 * @returns Indices of the two numbers
 */
function twoSum(nums: number[], target: number): number[] {
	const numMap = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (numMap.has(complement)) {
			return [numMap.get(complement)!, i];
		}

		numMap.set(nums[i], i);
	}

	throw new Error('No solution found');
}

export default twoSum;
