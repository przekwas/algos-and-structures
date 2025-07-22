class NodeList {
	val: number;
	next: NodeList | null;
	constructor(val?: number, next?: NodeList | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function arrayToList(arr: number[]): NodeList | null {
	if (arr.length === 0) return null;

	let head = new NodeList(arr[0]);
	let current = head;

	for (let i = 1; i < arr.length; i++) {
		current.next = new NodeList(arr[i]);
		current = current.next;
	}

	return head;
}

const test1 = arrayToList([2, 4, 3]);
const test2 = arrayToList([5, 6, 4]);

// const test1 = arrayToList([
// 	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
// ]);
// const test2 = arrayToList([5, 6, 4]);

function addTwoNumbers(l1: NodeList | null, l2: NodeList | null): NodeList | null {
	let dummy_head = new NodeList(0),
		current = dummy_head,
		carry = 0;

	while (l1 !== null || l2 !== null || carry !== 0) {
		let val1 = l1 ? l1.val : 0;
		let val2 = l2 ? l2.val : 0;
		
		let total = val1 + val2 + carry;
		carry = Math.floor(total / 10);
		let digit = total % 10;

		current.next = new NodeList(digit);
		current = current.next;

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}

	return dummy_head.next;
}

addTwoNumbers(test1, test2);

export default addTwoNumbers;
