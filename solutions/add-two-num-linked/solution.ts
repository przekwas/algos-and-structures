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






/* First Attemp at a Solution */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let current = l1;
	let stringNum = '',
		stringNum2 = '';

	while (current !== null) {
		stringNum = current.val + stringNum;
		current = current.next;
	}

	current = l2;
	while (current !== null) {
		stringNum2 = current.val + stringNum2;
		current = current.next;
	}

	let nodeArr = (BigInt(stringNum) + BigInt(stringNum2))
		.toString()
		.split('')
		.reverse()
		.map(e => Number(e));

	return arrayToList(nodeArr);
}

export default addTwoNumbers;
