import { expect, describe, test } from 'vitest';
import lengthOfLongestSubstring from './solution';

describe('lengthOfLongestSubstring()', () => {
	describe('standard cases', () => {
		test('finds longest substring no repeats (Example 1)', () => {
			const input = 'abcabcbb';
			const output = 3;
			expect(lengthOfLongestSubstring(input)).toEqual(output);
		});

		test('finds longest substring no repeats (Example 2)', () => {
			const input = 'bbbbb';
			const output = 1;
			expect(lengthOfLongestSubstring(input)).toEqual(output);
		});

		test('finds longest substring no repeats (Example 3)', () => {
			const input = 'pwwkew';
			const output = 3;
			expect(lengthOfLongestSubstring(input)).toEqual(output);
		});
	});

	describe('edge cases', () => {
		test('should handle empty string', () => {
			const input = '';
			const output = 0;
			expect(lengthOfLongestSubstring(input)).toEqual(output);
		});

		test('should handle all unique characters', () => {
			const input = 'abcdefg';
			const output = 7;
			expect(lengthOfLongestSubstring(input)).toEqual(output);
		});

		test('should handle long strings efficiently', () => {
			const input = 'a'.repeat(1000) + 'b' + 'a'.repeat(1000);
			const output = 2;
			expect(lengthOfLongestSubstring(input)).toEqual(output);
		});
	});
});
