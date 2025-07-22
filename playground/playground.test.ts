import { expect, describe, test } from 'vitest';
import addTwoNumbers from './playground';

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function arrayToList(arr: number[]): ListNode | null {
	if (arr.length === 0) return null;

	let head = new ListNode(arr[0]);
	let current = head;

	for (let i = 1; i < arr.length; i++) {
		current.next = new ListNode(arr[i]);
		current = current.next;
	}

	return head;
}

describe('addTwoNumbers()', () => {
	describe('standard cases', () => {
		test('finds the linked list added output (Example 1)', () => {
			const l1 = arrayToList([2, 4, 3]);
			const l2 = arrayToList([5, 6, 4]);
			const output = arrayToList([7, 0, 8]);
			expect(addTwoNumbers(l1, l2)).toEqual(output);
		});

		test('finds the linked list added output (Example 2)', () => {
			const l1 = arrayToList([0]);
			const l2 = arrayToList([0]);
			const output = arrayToList([0]);
			expect(addTwoNumbers(l1, l2)).toEqual(output);
		});

		test('finds the linked list added output (Example 3)', () => {
			const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
			const l2 = arrayToList([9, 9, 9, 9]);
			const output = arrayToList([8, 9, 9, 9, 0, 0, 0, 1]);
			expect(addTwoNumbers(l1, l2)).toEqual(output);
		});
	});

	describe('edge cases', () => {
		test('finds the linked list added output (larger than int can handle)', () => {
			const l1 = arrayToList([
				1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
			]);
			const l2 = arrayToList([5, 6, 4]);
			const output = arrayToList([
				6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
			]);

			expect(JSON.stringify(addTwoNumbers(l1, l2))).toEqual(JSON.stringify(output));
		});
	});
});
