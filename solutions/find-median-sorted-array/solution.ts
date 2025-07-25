function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let i = 0,
		j = 0,
		merged = [];

	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			merged.push(nums1[i]);
			i++;
		} else {
			merged.push(nums2[j]);
			j++;
		}
	}

	while (i < nums1.length) {
		merged.push(nums1[i]);
		i++;
	}

	while (j < nums2.length) {
		merged.push(nums2[j]);
		j++;
	}

	if (merged.length % 2 === 1) {
		const middleIdx = Math.floor(merged.length / 2);
		console.log(middleIdx);
		return merged[middleIdx];
	} else {
		const middleIdx1 = merged.length / 2 - 1;
		const middleIdx2 = merged.length / 2;
		return (merged[middleIdx1] + merged[middleIdx2]) / 2;
	}
}

export default findMedianSortedArrays;
