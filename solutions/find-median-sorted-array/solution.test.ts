import { expect, describe, test } from 'vitest';
import findMedianSortedArrays from './solution';

describe('findMedianSortedArrays()', () => {
	describe('standard cases', () => {
		test('finds the median of sorted array (Example 1)', () => {
			const nums1 = [1, 3],
				nums2 = [2],
				output = 2.0;
			expect(findMedianSortedArrays(nums1, nums2)).toBe(output);
		});

		test('finds the median of sorted array (Example 2)', () => {
			const nums1 = [1, 2],
				nums2 = [3, 4],
				output = 2.5;
			expect(findMedianSortedArrays(nums1, nums2)).toBe(output);
		});
	});

	describe('edge cases', () => {
		test('one empty array (odd length)', () => {
			const nums1: number[] = [],
				nums2 = [5],
				output = 5;
			expect(findMedianSortedArrays(nums1, nums2)).toBe(output);
		});

		test('one empty array (even length)', () => {
			const nums1: number[] = [],
				nums2 = [4, 6],
				output = 5;
			expect(findMedianSortedArrays(nums1, nums2)).toBe(output);
		});

		test('arrays with duplicates', () => {
			const nums1 = [1, 1, 2],
				nums2 = [1, 2, 3],
				output = 1.5;
			expect(findMedianSortedArrays(nums1, nums2)).toBe(output);
		});

		test('large arrays (performance check)', () => {
			const nums1 = Array(1000).fill(1),
				nums2 = Array(1000).fill(2),
				output = 1.5;
			expect(findMedianSortedArrays(nums1, nums2)).toBe(output);
		});
	});
});
