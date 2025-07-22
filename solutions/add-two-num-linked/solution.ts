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

/* Google + LLM Learned Optimized Solution */

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

/* First Attemp at a Solution */

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
// 	let current = l1;
// 	let stringNum = '',
// 		stringNum2 = '';

// 	while (current !== null) {
// 		stringNum = current.val + stringNum;
// 		current = current.next;
// 	}

// 	current = l2;
// 	while (current !== null) {
// 		stringNum2 = current.val + stringNum2;
// 		current = current.next;
// 	}

// 	let nodeArr = (BigInt(stringNum) + BigInt(stringNum2))
// 		.toString()
// 		.split('')
// 		.reverse()
// 		.map(e => Number(e));

// 	return arrayToList(nodeArr);
// }

export default addTwoNumbers;
