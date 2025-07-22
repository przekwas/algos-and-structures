// Practicing writing NodeList to memorize its simplest version

class NodeList {
	val: number;
	next: NodeList | null;

	constructor(val?: number, next?: NodeList | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}