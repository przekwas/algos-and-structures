import { describe, expect, test } from 'vitest';
import twoSum from './solution';

describe('twoSum()', () => {
	describe('standard cases', () => {
		test('finds indicies that add up to target (Example 1)', () => {
			const nums = [2, 7, 11, 15];
			const target = 9;
			expect(twoSum(nums, target)).toEqual([0, 1]);
		});

		test('finds indicides that add up to target (Example 2)', () => {
			const nums = [3, 2, 4];
			const target = 6;
			expect(twoSum(nums, target)).toEqual([1, 2]);
		});

		test('finds indicides that add up to target (Example 3)', () => {
			const nums = [3, 3];
			const target = 6;
			expect(twoSum(nums, target)).toEqual([0, 1]);
		});
	});

	describe('edge cases', () => {
		test('handles negative numbers', () => {
			expect(twoSum([-1, -2, -3], -5)).toEqual([1, 2]);
		});

		test('throws an error if no solution exists (problem does guarentee one though)', () => {
			expect(() => twoSum([1, 2, 3], 99)).toThrow();
		});
	});
});
